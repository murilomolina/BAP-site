'use client';
import React from 'react';
import { Download, Info } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ReadmePage() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-8 px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl bg-gray-800 text-white rounded-xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">Documentação do App</h2>

        <section className="space-y-6 text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-semibold text-white">Script Criado em Python e Interface com TKINTER</h3>
          <p className="text-gray-300 leading-relaxed">
            Programa feito para a empresa Barone Assessoria e Projetos (BAP), afim de calcular e gerar um documento de Memorial de Cálculos Básicos para OODC e EIV/RIT-TIPO I-Lei 9.924/16 Prefeitura de Santo André.
          </p>

          <h4 className="text-lg font-semibold text-white">Esclarecimento para Aplicação e Utilização do App - “doc_BF_EIV”</h4>
          <p className="text-gray-300 leading-relaxed">
            Em Santo André com a criação da lei nº 8.696/2004 (plano Diretor) em seu artigo 122 passou a criar a condição para a construção além do Coeficiente de Aproveitamento Básico para as Zonas de Qualificação Urbana; Zona de Recuperação Urbana e Zona de Reestruturação Urbana, chamada de Contrapartida financeira, correspondente a Outorga Onerosa do Direito de Construir, em 2.016 com a nova legislação através da Lei Ordinária nº 9.924/2016 – Lei de Uso, Ocupação e Parcelamento do Solo no Município de Santo André, altera e referencia o cálculo para o Benefício Financeiro estipulado para a tipologia de construção multifamiliar Vertical e também para os casos de construção verticais não residenciais.
          </p>

          <h4 className="text-lg font-semibold text-white">Fórmula Básica para o Cálculo:</h4>
          <p className="font-mono text-gray-200 bg-gray-700 p-3 rounded-md text-xs sm:text-sm">
            BF = At x Vr x Cp x Ic x Fr
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 text-xs sm:text-sm">
            <li><strong>BF</strong> = Benefício Financeiro</li>
            <li><strong>At</strong> = Área do terreno</li>
            <li><strong>Vr</strong> = Valor de referência do metro quadrado do terreno para a aplicação da Outorga Onerosa do Direito de Construir</li>
            <li><strong>Cp</strong> = Diferença entre o Coeficiente de Aproveitamento Pretendido e o Coeficiente de Aproveitamento Básico</li>
            <li><strong>Ic</strong> = Índice de Conversão de 0,4 para as Zonas de Qualificação e Recuperação Urbana e 0,33 para a Zona Reestruturação Urbana</li>
            <li><strong>Fr</strong> = Fator de Redução de 0,8</li>
          </ul>
        </section>

        <section className="space-y-6 text-sm sm:text-base">
          <h4 className="text-lg sm:text-xl font-semibold text-white mt-6">Lei nº 9.924/2016 - EIV Tipo I</h4>
          <p className="text-gray-300 leading-relaxed">
            A Lei determina o que é EIV (Estudo de Impacto de Vizinhança) e quais as aplicações para as tipologias de construção. O EIV Tipo I é um estudo simplificado que pode ser feito através de um formulário disponibilizado pela Prefeitura de Santo André.
          </p>

          <h5 className="text-lg sm:text-xl font-semibold text-white">Entrada de Dados:</h5>
          <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
            <li><strong>Nome do projeto</strong> – nome adotado para vincular o projeto ao cálculo.</li>
            <li><strong>Área do terreno</strong> – área em m² do terreno do empreendimento.</li>
            <li><strong>Área Computável</strong> – área do empreendimento desconsiderando áreas comuns, subsolos utilizados como garagem, etc.</li>
            <li><strong>Valor do FMP</strong> – valor fornecido pela Prefeitura de Santo André, reajustado anualmente.</li>
            <li><strong>Valor de referência</strong> – valor expresso no Anexo 1.2 – MAPA 2.</li>
            <li><strong>Zona (1 ou 2)</strong> – tipo de zona em que o imóvel se encontra (1 para Qualificação ou Recuperação Urbana, 2 para Reestruturação Urbana).</li>
            <li><strong>Área a Construir</strong> – área total do empreendimento.</li>
          </ul>

          <h5 className="text-lg sm:text-xl font-semibold text-white">Resultado Obtido:</h5>
          <p className=" text-gray-300 leading-relaxed">
            Após a entrada de dados, o programa gera um arquivo .docx com o Memorial de Cálculos, contendo o valor do Benefício Financeiro e o Valor do EIV para o projeto pretendido.
          </p>
        </section>
      </div>

      <div className="flex flex-col items-center space-y-6 p-6 mt-10">
        <div className="flex items-center space-x-4 mt-6 relative">
          {/* Botão de Download */}
          <Link
            href="https://oihictxzwf0pwyra.public.blob.vercel-storage.com/bap-apps/doc_BF_EIV_v2.6.exe"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-shadow transform hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span>Baixar .exe para Windows</span>
          </Link>

          {/* Botão de Informação com Tooltip */}
          <div className="relative flex">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-shadow transform hover:scale-110 shadow-lg"
            >
              <Info className="w-5 h-5" />
            </button>

            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 bg-gray-800 text-white p-4 rounded-lg shadow-xl text-sm w-64 text-center">
                <p>Pode ser que o Google indique como não seguro, porém por ser de desenvolvimento próprio é de total confiança!</p>
                <p className="mt-2 text-gray-300">📦 Tamanho: ~15M</p>
                <p className="text-gray-300">📅 Última atualização: 12/02/2024</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
