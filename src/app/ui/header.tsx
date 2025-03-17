import Image from "next/image";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import UserButton from "@/app/ui/auth/user-button";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-gray-300 dark:border-gray-800 shadow-md bg-gradient-to-r from-white to-gray-100 dark:from-gray-600 dark:to-gray-900">
      <div className="flex h-16 items-center justify-between px-6 md:px-10">
        <Bars3BottomLeftIcon className="w-7 text-gray-700 dark:text-gray-300 cursor-pointer" /> {/*hamburguer */}
        <div className="flex items-center space-x-3">
          <Image
            priority
            src="/assets/images/next.svg"
            height={40}
            width={40}
            alt="Template Logo"
            className="h-20 w-20"
          />
          <p className="text-xl font-semibold text-gray-800 dark:text-white">
            Template App
          </p>
        </div>
        <UserButton /> 
      </div>
    </header>
  );
}
