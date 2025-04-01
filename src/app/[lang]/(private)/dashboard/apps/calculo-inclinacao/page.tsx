'use client'
import { Download, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function InclinationCalculator() {
  const [comprimento, setComprimento] = useState<string>("");
  const [inclinacao, setInclinacao] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const [dadosComplementares, setDadosComplementares] = useState<string>("");
  const [showTooltip, setShowTooltip] = useState(false);

  const calcular = () => {
    try {
      const c = comprimento ? parseFloat(comprimento.replace(",", ".")) : NaN;
      const i = inclinacao ? parseFloat(inclinacao.replace(",", ".")) : NaN;
      const h = altura ? parseFloat(altura.replace(",", ".")) : NaN;

      if (isNaN(c) && !isNaN(i) && !isNaN(h)) {
        const novoComprimento = (h * 100) / i;
        setResultado(`Comprimento (c): ${novoComprimento.toFixed(6)} metros`);
        setDadosComplementares(`Altura (h): ${h.toFixed(6)} metros\nInclinação (i): ${i.toFixed(6)} %`);
      } else if (isNaN(i) && !isNaN(c) && !isNaN(h)) {
        const novaInclinacao = (h * 100) / c;
        setResultado(`Inclinação (i): ${novaInclinacao.toFixed(6)}%`);
        setDadosComplementares(`Altura (h): ${h.toFixed(6)} metros\nComprimento (c): ${c.toFixed(6)} metros`);
      } else if (isNaN(h) && !isNaN(c) && !isNaN(i)) {
        const novaAltura = (i * c) / 100;
        setResultado(`Altura (h): ${novaAltura.toFixed(6)} metros`);
        setDadosComplementares(`Inclinação (i): ${i.toFixed(6)}%\nComprimento (c): ${c.toFixed(6)} metros`);
      } else {
        throw new Error("Forneça dois valores para calcular o terceiro.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Ocorreu um erro inesperado.");
      }
    }
  };

  const limparCampos = () => {
    setComprimento("");
    setInclinacao("");
    setAltura("");
    setResultado("");
    setDadosComplementares("");
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 overflow-y-hidden">
      <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Cálculo de Inclinação</h2>
        <p className="text-sm mb-6 text-gray-300 text-center">Preencha dois campos para calcular automaticamente o terceiro.</p>

        <label className="block mb-2 font-semibold">Comprimento (c):</label>
        <input type="text" className="w-full p-2 border border-gray-600 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />

        <label className="block mt-4 mb-2 font-semibold">Inclinação (i):</label>
        <input type="text" className="w-full p-2 border border-gray-600 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={inclinacao} onChange={(e) => setInclinacao(e.target.value)} />

        <label className="block mt-4 mb-2 font-semibold">Altura (h):</label>
        <input type="text" className="w-full p-2 border border-gray-600 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={altura} onChange={(e) => setAltura(e.target.value)} />

        <div className="flex justify-between mt-6">
          <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition" onClick={calcular}>Calcular</button>
          <button className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded transition" onClick={limparCampos}>Limpar</button>
        </div>

        {resultado && (
          <div className="mt-6 p-4 bg-blue-700 text-white rounded shadow-md text-center">
            <p className="font-semibold text-lg">{resultado}</p>
            <p className="text-sm mt-2 whitespace-pre-line text-gray-200">{dadosComplementares}</p>
          </div>
        )}

      </div>
      <div className="flex flex-col items-center space-y-6 p-6">
        <div className="flex items-center space-x-4 mt-6 relative">
          {/* Botão de Download - Visível somente em telas grandes (desktop) */}
          <Link
          href="https://drive.google.com/uc?export=download&id=1NslUMUUlNVk-rhyDcIoRO4GGDXtyu5JB"
          target="_blank"  // Abre o link em uma nova aba
          rel="noopener noreferrer"  // Segurança extra para links externos
          download
          className="hidden lg:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
        >
          <Download className="w-5 h-5" />
          <span>Baixar .exe para Windows</span>
        </Link>

          {/* Botão de Informação com Tooltip */}
          <div className="relative hidden lg:flex">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition shadow-lg"
            >
              <Info className="w-5 h-5" />
            </button>

            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-12 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm w-64 text-center">
                <p>Pode ser que o Google indique como não seguro, porém por ser de desenvolvimento próprio é de total confiança!</p>
                <p className="mt-2 text-gray-300">📦 Tamanho: ~3.5MB</p>
                <p className="text-gray-300">📅 Última atualização: 31/01/2024</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
