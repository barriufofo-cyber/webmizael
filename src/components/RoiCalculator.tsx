import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingUp, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: (source?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact }) => {
  const [ticketMedio, setTicketMedio] = useState<number>(3500);
  const [novosPacientes, setNovosPacientes] = useState<number>(4);

  // Calculations
  const faturamentoMensalExtra = ticketMedio * novosPacientes;
  const faturamentoAnualExtra = faturamentoMensalExtra * 12;

  // Formatter for Brazilian Real currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculadora" className="py-24 sm:py-32 relative bg-[#090a0d] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 uppercase font-mono mb-2">
            <Calculator className="w-3.5 h-3.5 text-slate-300" />
            <span>Simulador de Retorno (ROI)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            O Site da Sua Clínica Não é Custo. É Lucro.
          </h2>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#12141a] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Slider 1: Ticket Médio */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="ticket-slider" className="text-xs sm:text-sm font-semibold text-slate-200">
                    Ticket Médio do Seu Tratamento / Protocolo
                  </label>
                  <span className="text-sm font-bold text-white font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {formatCurrency(ticketMedio)}
                  </span>
                </div>
                <input
                  id="ticket-slider"
                  type="range"
                  min={1000}
                  max={25000}
                  step={500}
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>R$ 1.000 (Toxina/Preenchimento)</span>
                  <span>R$ 25.000 (Lentes/Cirurgias)</span>
                </div>
              </div>

              {/* Slider 2: Novos Pacientes Particulares */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="pacientes-slider" className="text-xs sm:text-sm font-semibold text-slate-200">
                    Novos Pacientes Particulares por Mês (Estimativa Conservadora)
                  </label>
                  <span className="text-sm font-bold text-white font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {novosPacientes} {novosPacientes === 1 ? 'paciente' : 'pacientes'}
                  </span>
                </div>
                <input
                  id="pacientes-slider"
                  type="range"
                  min={1}
                  max={15}
                  step={1}
                  value={novosPacientes}
                  onChange={(e) => setNovosPacientes(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 paciente/mês</span>
                  <span>15 pacientes/mês</span>
                </div>
              </div>

              <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Por que essa estimativa é realista?</span>
                </div>
                <p className="leading-relaxed">
                  Com o posicionamento correto, basta que 1 a 2 visitantes por semana agendem pelo site para gerar esse retorno. O site costuma se pagar nos primeiros 15 a 30 dias de operação.
                </p>
              </div>

            </div>

            {/* Results Display */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#161a22] to-[#0d0f14] rounded-2xl p-6 sm:p-8 border border-white/15 text-center space-y-6">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Faturamento Adicional Estimado
                </span>
                <div className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-metallic font-heading tabular-nums">
                  {formatCurrency(faturamentoMensalExtra)}
                  <span className="text-xs sm:text-sm font-normal text-slate-400 block mt-1">por mês</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider">
                  Impacto Financeiro em 1 Ano
                </span>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono mt-1 text-emerald-400 tabular-nums">
                  + {formatCurrency(faturamentoAnualExtra)}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenContact(`Simulação ROI: ${formatCurrency(faturamentoMensalExtra)}/mês`)}
                  className="w-full metallic-button py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Quero Esse Retorno para Minha Clínica</span>
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </button>
              </div>

              <div className="text-[11px] text-slate-500">
                Diagnóstico estratégico e proposta comercial sem compromisso.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
