import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <>
      <div className="flex max-h-screen items-center justify-center transition-all">
        <div className="rounded-2xl bg-gray-800 shadow-2xl p-8 sm:p-10 w-full max-w-lg lg:max-w-2xl animate-fade-in">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">
              Olá, <span className="font-bold text-blue-400">{session?.user.name}</span>!
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              Escolha um aplicativo para continuar.
            </p>
          </div>

          {/* Grid container for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 */}
            <Link
              href="/dashboard/apps/calculo-inclinacao"
              className="group flex flex-col items-center justify-between bg-gradient-to-tl from-blue-400 to-blue-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all p-6 space-y-4 backdrop-blur-md"
            >
              <div className="w-full flex justify-center">
                <Image className="object-contain h-20 sm:h-24 lg:h-28" src='/assets/images/BAP.jpg' alt="BAP" width={100} height={100} />
              </div>
              <h2 className="text-lg font-semibold tracking-wide text-white">Cálculo de Inclinação</h2>
            </Link>

            {/* Card 2 */}
            <Link
              href="/dashboard/apps/procuracao"
              className="group flex flex-col items-center justify-between bg-gradient-to-tl from-indigo-400 to-indigo-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all p-6 space-y-4 backdrop-blur-md"
            >
              <div className="w-full flex justify-center">
                <Image className="object-contain h-20 sm:h-24 lg:h-28" src='/assets/images/BAP.jpg' alt="BAP" width={100} height={100} />
              </div>
              <h2 className="text-lg font-semibold tracking-wide text-white">Procuração</h2>
            </Link>
            {/* Card 3 */}
            <Link
              href="/dashboard/apps/bf"
              className="group flex flex-col items-center justify-between bg-gradient-to-tl from-blue-600 to-green-800 text-white rounded-xl shadow-lg hover:scale-105 transition-all p-6 space-y-4 backdrop-blur-md"
            >
              <div className="w-full flex justify-center">
                <Image className="object-contain h-20 sm:h-24 lg:h-28" src='/assets/images/BAP.jpg' alt="BAP" width={100} height={100} />
              </div>
              <h2 className="text-lg font-semibold tracking-wide text-white">Beneficio Financeiro</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
