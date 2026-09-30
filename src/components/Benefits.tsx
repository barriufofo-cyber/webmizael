import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  XCircle, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Smartphone,
  ChevronRight
} from 'lucide-react';

interface BenefitsProps {
  onOpenContact: (source?: string) => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'aesthetic' | 'dental'>('both');

  // The 4 Core Glassmorphism Cards requested by the user
  const mainCards = [
    {
      id: 'design',
      tag: '01. ESTÉTICA VISUAL',
      title: 'Design Exclusivo e Sofisticado',
      subtitle: 'Alinhado à estética e ao luxo da sua clínica',
      description:
        'Não utilizamos templates pré-fabricados de WordPress. Criamos uma identidade digital sob medida com tons nobres, tipografia editorial e acabamento impecável que reflete a mesma sofisticação do seu consultório físico.',
      icon: Sparkles,
      badge: 'Sensação de Alto Padrão',
      stat: '94%',
      statLabel: 'dos pacientes julgam a credibilidade pelo design',
      aestheticFocus: 'Ideal para harmonização facial, bioestimuladores e lasers de última geração.',
      dentalFocus: 'Ideal para lentes de porcelana, reabilitação oral e implantes guiados.',
    },
    {
      id: 'conversao',
      tag: '02. AGENDAMENTOS',
      title: 'Foco em Conversão e Agendamentos',
      subtitle: 'Pacientes convertidos direto pelo WhatsApp',
      description:
        'Arquitetura focada em conduzir o paciente sem atritos até a conversa com sua secretária. Mensagens pré-formatadas com o procedimento de interesse garantem leads conscientes e prontos para fechar a consulta.',
      icon: MessageSquare,
      badge: 'Zero Fricção',
      stat: '+180%',
      statLabel: 'mais contatos qualificados na recepção',
      aestheticFocus: 'Filtra curiosos e atrai quem busca procedimentos de alta rentabilidade.',
      dentalFocus: 'Gera consultas particulares de pacientes que valorizam saúde e estética dental.',
    },
    {
      id: 'velocidade',
      tag: '03. PERFORMANCE',
      title: 'Velocidade e Responsividade Perfeita',
      subtitle: 'Carregamento instantâneo no celular',
      description:
        'Mais de 85% dos pacientes acessam sua clínica pelo celular através do Instagram ou Google Ads. Nossas páginas abrem em menos de 0.8s, sem travas e com toque ergonômico feito para o polegar.',
      icon: Zap,
      badge: '< 0.8s de abertura',
      stat: '99/100',
      statLabel: 'Score de performance técnica no Google PageSpeed',
      aestheticFocus: 'Retenção total de quem clica nos anúncios do feed e stories.',
      dentalFocus: 'Navegação fluida mesmo em conexões móveis 4G/5G oscilantes.',
    },
    {
      id: 'autoridade',
      tag: '04. PERCEPÇÃO DE VALOR',
      title: 'Posicionamento de Autoridade',
      subtitle: 'Sua clínica vista da forma que merece',
      description:
        'Um paciente não investe R$ 15.000 ou R$ 30.000 em uma clínica que se apresenta como popular. Estruturamos sua autoridade médica e odontológica para você justificar honorários de alto ticket sem pedidos de desconto.',
      icon: ShieldCheck,
      badge: 'Alto Ticket',
      stat: '3.4x',
      statLabel: 'maior facilidade no fechamento de planos particulares',
      aestheticFocus: 'Destaque para CRM, RQE, títulos e tecnologia aplicada.',
      dentalFocus: 'Valorização do CRO, especializações e tratamentos premium.',
    },
  ];

  // Why generic websites fail vs. The Mizael Method
  const failureReasons = [
    {
      problemTitle: 'Visual amador e genérico',
      problemText: 'Templates baratos que fazem procedimentos nobres de R$ 20.000 parecerem promoções populares de franquia.',
      solutionTitle: 'Design exclusivo de alto luxo',
      solutionText: 'Identidade visual cinematográfica em prata e grafite que gera fascínio e desejo instantâneo no paciente.',
    },
    {
      problemTitle: 'Carregamento lento e pesado',
      problemText: 'O paciente clica no anúncio do Instagram, a tela fica branca por 4 segundos e ele volta para o concorrente.',
      solutionTitle: 'Velocidade cirúrgica instantânea',
      solutionText: 'Código otimizado que carrega num piscar de olhos, garantindo 100% de aproveitamento do tráfego.',
    },
    {
      problemTitle: 'Secretária sufocada de curiosos',
      problemText: 'Mensagens sem contexto de pessoas perguntando apenas "quanto custa?" e sumindo em seguida.',
      solutionTitle: 'Pré-qualificação estratégica',
      solutionText: 'Textos persuasivos que esclarecem o valor antes do preço, entregando pacientes decididos à recepção.',
    },
    {
      problemTitle: 'Insegurança regulatória (CFM/CFO)',
      problemText: 'Páginas que desrespeitam regras éticas de propaganda de saúde, colocando em risco o registro profissional.',
      solutionTitle: 'Conformidade ética rigorosa',
      solutionText: 'Estruturação 100% em harmonia com as resoluções vigentes de publicidade médica e odontológica.',
    },
  ];

  return (
    <section id="beneficios" className="py-24 sm:py-32 relative bg-[#090b0e] border-t border-white/5 overflow-hidden">
      {/* Subtle Metallic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-slate-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-slate-200/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-slate-300 uppercase font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse" />
            Diferenciais & Resultados Concretos
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            Por que um site comum <span className="text-metallic">não vende</span> e como a Mizael faz a diferença
          </h2>
        </div>

        {/* Niche Selector Filter (Estética / Odonto / Ambos) */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-[#12151c] border border-white/10 text-xs font-medium">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'both' 
                  ? 'bg-slate-200 text-slate-950 font-bold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Visão Geral
            </button>
            <button
              onClick={() => setActiveTab('aesthetic')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'aesthetic' 
                  ? 'bg-slate-200 text-slate-950 font-bold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Clínicas Estéticas
            </button>
            <button
              onClick={() => setActiveTab('dental')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'dental' 
                  ? 'bg-slate-200 text-slate-950 font-bold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Clínicas Odontológicas
            </button>
          </div>
        </div>

        {/* THE 4 FROSTED GLASS CARDS (GLASSMORPHISM & METALLIC ACCENTS) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {mainCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="glass-card rounded-2xl p-7 sm:p-9 relative group transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Metallic Ambient Light on Top Corner */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-white/15 transition-all" />

                <div>
                  {/* Top Bar with Tag and Minimalist Silver Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-slate-400 font-semibold uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      {card.tag}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-white/15 to-white/5 border border-white/20 flex items-center justify-center text-slate-100 shadow-inner group-hover:scale-110 group-hover:border-white/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-slate-100" />
                    </div>
                  </div>

                  {/* Card Main Title and Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight mb-2 group-hover:text-slate-100 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mb-4">
                    {card.subtitle}
                  </p>

                  {/* Card Core Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {/* Segmented Context (Estética vs Odonto) */}
                  {(activeTab === 'aesthetic' || activeTab === 'both') && (
                    <div className="mt-4 pt-3 border-t border-white/5 text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                      <span>{card.aestheticFocus}</span>
                    </div>
                  )}
                  {(activeTab === 'dental' || activeTab === 'both') && (
                    <div className="mt-2 text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{card.dentalFocus}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Micro Stat & Metric Badge */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-heading font-black text-xl text-white tracking-tight">
                      {card.stat}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-tight max-w-[200px]">
                      {card.statLabel}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap">
                    {card.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPARISON BREAKDOWN: POR QUE UM SITE COMUM NÃO VENDE VS. PADRÃO MIZAEL */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading">
              A Anatomia de um Site que Vende vs. Um que Apenas Existe
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Veja lado a lado a diferença entre um projeto de agência genérica e uma engenharia focada no mercado de saúde e estética.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Box: Site Comum */}
            <div className="glass-card bg-[#101217]/80 border-rose-500/20 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-rose-500/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-heading">O Que Acontece em um Site Comum</h4>
                    <p className="text-xs text-rose-400/90 font-medium">Templates de WordPress e criadores amadores</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Baixa Conversão
                </span>
              </div>

              <div className="space-y-4">
                {failureReasons.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-rose-500/[0.03] border border-rose-500/10 text-left">
                    <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs sm:text-sm mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      {item.problemTitle}
                    </div>
                    <p className="text-xs text-slate-400 pl-3.5 leading-relaxed">
                      {item.problemText}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-rose-300/80 font-mono">
                Resultado: Investimento em anúncios desperdiçado e pacientes fechando com a concorrência.
              </div>
            </div>

            {/* Box: Padrão Mizael */}
            <div className="glass-card bg-[#141720]/90 border-white/20 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center text-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-slate-100" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-heading">Com a Engenharia Web Mizael</h4>
                    <p className="text-xs text-slate-300 font-medium">Arquitetura de alta conversão para clínicas</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Alto Retorno
                </span>
              </div>

              <div className="space-y-4">
                {failureReasons.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-left hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-100 font-semibold text-xs sm:text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      {item.solutionTitle}
                    </div>
                    <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                      {item.solutionText}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-slate-300 font-mono">
                Resultado: Pacientes valorizam seu trabalho antes mesmo de pisar na sua clínica.
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Callout Banner */}
        <div className="mt-16 glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-white font-heading">
              Quer ver como o site da sua clínica ficaria no Padrão Mizael?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Analisamos gratuitamente a sua presença digital atual e desenhamos uma proposta de alta conversão para seu consultório.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContact('Seção Benefícios - Diagnóstico')}
              className="metallic-button px-6 py-3 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 cursor-pointer shadow-lg w-full sm:w-auto justify-center"
            >
              <span>Solicitar Diagnóstico Gratuito</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20conversar%20sobre%20os%20diferenciais%20para%20o%20site%20da%20minha%20cl%C3%ADnica."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 inline-flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
            >
              <span>Tirar Dúvidas</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
