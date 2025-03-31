import Image from "next/image";
import UserButton from "@/app/ui/auth/user-button";
import MenuButtonWrapper from "@/ui/components/menubutton-wrapper";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-blue-900 shadow-lg bg-blue-900/90 backdrop-blur-md">
      <div className="relative flex h-16 items-center px-6 md:px-10">

        {/* Botão da sidebar */}
        <div className="w-8 text-blue-300 cursor-pointer hover:text-blue-500 transition duration-300">
          <MenuButtonWrapper />
        </div>

        {/* Logo centralizado */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <Image
            priority
            src="/assets/images/BAP.jpg"
            height={100}
            width={100}
            alt="Logo"
            quality={100}
            className="h-12 w-auto rounded-sm shadow-sm"
          />
          <p className="hidden sm:block text-xl font-bold text-white tracking-wide drop-shadow-sm">
            Barone Assessoria e Projetos
          </p>
        </div>

        {/* Botão usuário alinhado à direita */}
        <div className="flex flex-none items-center ml-auto">
          <UserButton />
        </div>

      </div>
    </header>
  );
}
