"use client";

import { useState } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/ui/components/sidebar";
import Link from "next/link";

export default function MenuButtonWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile: ícone que abre a sidebar */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir Menu"
        className="block md:hidden"
      >
        <Bars3BottomLeftIcon className="w-8 text-blue-300 cursor-pointer hover:text-blue-500 transition duration-300" />
      </button>

      {/* Desktop: mostrar links diretamente */}
      <div className="hidden md:flex gap-6 text-blue-100/70 text-sm font-normal">
        <Link href="#inicio" className="hover:text-blue-300 transition">Início</Link>
        <Link href="#servicos" className="hover:text-blue-300 transition">Serviços</Link>
        <Link href="#projetos" className="hover:text-blue-300 transition">Projetos</Link>
        <Link href="#contato" className="hover:text-blue-300 transition">Contato</Link>
        <Link href="/dashboard" className="hover:text-blue-300 transition">Dashboard</Link>
      </div>

      {/* Sidebar para mobile */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
