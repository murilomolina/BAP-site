import Image from "next/image";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import UserButton from "@/app/ui/auth/user-button";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-blue-900 shadow-lg bg-white/70 dark:bg-blue-900/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 md:px-10">

        <div className="flex flex-none items-center">
          <Bars3BottomLeftIcon className="w-8 text-blue-700 dark:text-blue-300 cursor-pointer hover:text-blue-500 transition duration-300" />
        </div>
        
        <div className="flex flex-1 items-center justify-center space-x-4">
          <Image
            priority
            src="/assets/images/BAP.jpg"
            height={100}
            width={100}
            alt="Logo"
            quality={100}
            className="h-12 w-auto rounded-sm shadow-sm"
          />
          <p className="hidden sm:block text-xl font-bold text-blue-900 dark:text-white tracking-wide drop-shadow-sm">
            Barone Assessoria e Projetos
          </p>
        </div>
        
        <div className="flex flex-none items-center">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
