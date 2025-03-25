import NextAuth from "next-auth";
// import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import GoogleProvider from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";
import { locales, getPathnameLocale, getHeaderLocale } from "./locale";


// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

// const providers: Provider[] = [
//   MicrosoftEntraID({
//     clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
//     clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
//     issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
//   }),
// ];

const providers: Provider[] = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
  })
  
];

const allowedEmails = process.env.ALLOWEDEMAILS?.split(",") || [];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        // Verify e-mail
        if (!user.email || !allowedEmails.includes(user.email)) {
          console.log(`Acesso negado para: ${user.email ?? "Usuário sem e-mail"}`);
          return false;
        }
      }

      return true; // login allowed
    },
    authorized({ auth, request: { nextUrl, headers } }) {
     
      let locale = ""
      const { pathname } = nextUrl;

      const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
      );
      if (pathnameHasLocale) {
        console.log(`auth.ts pathnameHasLocale: ${pathnameHasLocale}`);
        locale = getPathnameLocale(pathname)
      } else {
        // Redirect if there is no locale
        locale = getHeaderLocale(headers);
        // nextUrl.pathname = `/${locale}${pathname}`;
        // return NextResponse.redirect(nextUrl);
      }

      console.log(`auth: ${JSON.stringify(auth)}`)
      const isLoggedIn = !!auth?.user;
      console.log(`isLoggedIn: ${JSON.stringify(isLoggedIn)}`)

      const isOnDashboard = nextUrl.pathname.startsWith(`/${locale}/dashboard`);
      console.log(`isOnDashboard: ${JSON.stringify(isOnDashboard)}`)

      if (isOnDashboard) {
        console.log(`Enter dashboard with isLoggedIn: ${isLoggedIn}`)
        if (isLoggedIn) {
          return true; // Enter in Dashboard
        } else {
          return false; // Redirect unauthenticated users to login page // ok
        }
      } else if (isLoggedIn) {
        console.log(`Not in dashboard with isLoggedIn: ${isLoggedIn}`)
        return true;
      }
      console.log(`Not in dashboard no login verify`)

      return true;
    },
  },

  providers,
  pages: {
    signIn: `/login`,
    error: `/error`
  },
});
