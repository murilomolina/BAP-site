'use client'
import { Download, Info } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function  CalculoBF() {
  const [areaTerreno, setAreaTerreno] = useState<string>("");
  const [areaComputavel, setAreaComputavel] = useState<string>("");
  const [valorReferencia, setValorReferencia] = useState<string>("");
  const [zona, setZona] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showTooltip, setShowTooltip] = useState(false);

  const calculate = () => {
    try {
      const areaTerrenoValue = parseFloat(areaTerreno.replace(",", "."));
      const areaComputavelValue = parseFloat(areaComputavel.replace(",", "."));
      const valorReferenciaValue = parseFloat(valorReferencia.replace(",", "."));
      const zonaValue = parseInt(zona);

      if (isNaN(areaTerrenoValue) || isNaN(areaComputavelValue) || isNaN(valorReferenciaValue) || isNaN(zonaValue)) {
        throw new Error("Por favor, insira valores válidos nos campos.");
      }

      const cp = areaComputavelValue / areaTerrenoValue;
      const fatorReducao = 0.8;
      const fmp = 5.0578;

      let ic, coeficienteBasico = 2.5, coeficienteProjeto = 3.0, cpc, bf;

      if (zonaValue === 1) {
        ic = 0.4;
        coeficienteBasico = 2.5;
        cpc = round(cp - coeficienteBasico, 2);
        bf = (areaTerrenoValue * valorReferenciaValue * cpc * ic * fatorReducao) * fmp;
      } else if (zonaValue === 2) {
        ic = 0.33;
        coeficienteProjeto = 3.0;
        cpc = round(cp - coeficienteProjeto, 2);
        bf = (areaTerrenoValue * valorReferenciaValue * cpc * ic * fatorReducao) * fmp;
      } else {
        setResultado("");
        setError("Zona inválida!");
        return;
      }

      if (cp > coeficienteBasico || cp > coeficienteProjeto) {
        setResultado(`RESULTADO OBTIDO: R$ ${bf.toFixed(2)}\nCPC = ${cp.toFixed(2)}`);
        setError("");
      } else {
        setResultado(`Resultado do CP menor que 2.5\nNão é necessário pagar a ODC!\nCPC = ${cp.toFixed(2)}`);
        setError("");
      }
    } catch (err) {
      setResultado("");
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    }
  };

  const clearFields = () => {
    setAreaTerreno("");
    setAreaComputavel("");
    setValorReferencia("");
    setZona("");
    setResultado("");
    setError("");
  };

  const round = (value: number, decimals: number) => {
    return Number(Math.round(Number(value + "e" + decimals)) + "e-" + decimals);
  };

  return (
    <div className="flex flex-col items-center space-y-6 ">
      <div className="w-full max-w-lg p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">Cálculo de BF</h2>

        <div className="mb-4">
          <label className="block font-semibold">Área do Terreno (m²):</label>
          <input
            type="text"
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600"
            value={areaTerreno}
            onChange={(e) => setAreaTerreno(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Área Computável (m²):</label>
          <input
            type="text"
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600"
            value={areaComputavel}
            onChange={(e) => setAreaComputavel(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Valor Referência:</label>
          <input
            type="text"
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600"
            value={valorReferencia}
            onChange={(e) => setValorReferencia(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Zona (1 ou 2):</label>
          <input
            type="text"
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600"
            value={zona}
            onChange={(e) => setZona(e.target.value)}
          />
        </div>

        <div className="flex justify-between mb-6">
          <button
            onClick={calculate}
            className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
          >
            Calcular
          </button>
          <button
            onClick={clearFields}
            className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded transition"
          >
            Limpar Campos
          </button>
        </div>

        {error && <div className="text-red-400 text-center">{error}</div>}

        {resultado && (
          <div className="mt-6 p-4 bg-blue-700 text-white rounded-lg shadow-md text-center">
            <p className="font-semibold text-lg">{resultado}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center space-y-6 p-6">
        <div className="flex items-center space-x-4 mt-6 relative">
          {/* Botão de Download - Visível somente em telas grandes (desktop) */}
          <Link
          href="https://oihictxzwf0pwyra.public.blob.vercel-storage.com/bap-apps/bfOFC-v2.0.exe"
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
                <p className="mt-2 text-gray-300">📦 Tamanho: ~3,4k</p>
                <p className="text-gray-300">📅 Última atualização: 29/01/2024</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
