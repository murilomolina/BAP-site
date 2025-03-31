"use client";

import { useState } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/ui/components/sidebar";

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setMenuOpen(true)} aria-label="Abrir Menu">
        <Bars3BottomLeftIcon className="w-8 text-blue-300 cursor-pointer hover:text-blue-500 transition duration-300" />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
