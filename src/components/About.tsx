import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Shield, 
  Cpu, 
  Palette, 
  Target,
  MessageCircle
} from 'lucide-react';

interface AboutProps {
  onOpenContact: (source?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      icon: Palette,
      title: 'Design Autoral & Exclusivo',
      description:
        'Sem templates prontos ou estruturas genéricas. Cada linha de código e layout é desenhada exclusivamente para refletir o requinte e a excelência do seu consultório físico.'
    },
    {
      icon: Target,
      title: 'Foco no Paciente Particular',
      description:
        'Construímos arquiteturas de persuasão visual que filtram pacientes de convênio e curiosos, atraindo quem realmente reconhece e paga pelo valor dos seus procedimentos de alto ticket.'
    },
    {
      icon: Cpu,
      title: 'Engenharia de Performance',
      description:
        'Desenvolvido com as tecnologias mais modernas do Vale do Silício. Carregamento instantâneo no 4G/5G, fluidez perfeita no iPhone e indexação imediata no Google.'
    },
    {
      icon: Shield,
      title: 'Conformidade Ética Total',
      description:
        'Adequação rigorosa às resoluções dos conselhos de classe (CFM, CFO, CRBM e CFF), garantindo autoridade médica sem riscos de infrações éticas.'
    }
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 relative bg-[#07080a] border-t border-white/5 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span className="uppercase tracking-widest text-[11px] font-mono">Sobre a Mizael Web</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Elevamos a presença digital da sua Clinica.
          </h2>
        </div>

        {/* Core Values Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block text-2xl font-black text-white font-heading">+45</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Projetos Ativos</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block text-2xl font-black text-white font-heading">0.6s</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Média de Abertura</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block text-2xl font-black text-white font-heading">4.8x</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Mais Conversão</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block text-2xl font-black text-white font-heading">100%</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Ética CFM & CFO</span>
          </div>
        </div>

        {/* The 4 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1117] border border-white/10 hover:border-slate-400/40 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:bg-slate-200 group-hover:text-slate-900 transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
