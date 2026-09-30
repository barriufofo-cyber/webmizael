import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Lock, 
  RotateCw, 
  ArrowLeft, 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  CheckCircle2, 
  ArrowUpRight,
  MousePointerClick,
  Maximize2,
  Compass,
  ShieldCheck
} from 'lucide-react';

interface PortfolioProps {
  onOpenContact: (source?: string) => void;
}

interface ProjectData {
  id: string;
  name: string;
  category: 'estetica' | 'odonto';
  categoryLabel: string;
  url: string;
  displayUrl: string;
  headline: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'belladerma' | 'sorrisoprime'>('belladerma');
  const [viewMode, setViewMode] = useState<'single' | 'compare'>('single');
  const [deviceWidth, setDeviceWidth] = useState<'desktop' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState<number>(0);

  const projects: Record<string, ProjectData> = {
    belladerma: {
      id: 'belladerma',
      name: 'Bella Derma',
      category: 'estetica',
      categoryLabel: 'Clínica Estética & Dermatologia',
      url: 'https://belladerma.vercel.app/',
      displayUrl: 'belladerma.vercel.app',
      headline: 'Posicionamento visual de alto padrão para procedimentos faciais e corporais',
      description:
        'Desenvolvido para transmitir sofisticação instantânea, valorizando tratamentos de alto ticket como toxina botulínica, bioestimuladores de colágeno, preenchimentos e tecnologias a laser com foco em agendamentos qualificados no WhatsApp.',
      tags: ['Harmonização Facial', 'Bioestimuladores', 'Laser & Rejuvenescimento', 'Funil WhatsApp'],
      metrics: [
        { label: 'Conversão WhatsApp', value: '4.8x maior' },
        { label: 'Tempo de Carregamento', value: '0.6s' },
        { label: 'Padrão Estético', value: 'Classe AAA' }
      ],
      accentColor: 'from-amber-200/20 to-slate-200/10'
    },
    sorrisoprime: {
      id: 'sorrisoprime',
      name: 'O Sorriso Prime',
      category: 'odonto',
      categoryLabel: 'Clínica Odontológica & Reabilitação Oral',
      url: 'https://osorrisoprime.vercel.app/',
      displayUrl: 'osorrisoprime.vercel.app',
      headline: 'Autoridade e credibilidade clínica para reabilitações orais e lentes dentais',
      description:
        'Criado para dentistas e clínicas odontológicas que desejam atrair pacientes particulares para tratamentos de alto valor: implantes guiados, lentes de porcelana e invisalign, com apresentação clínica humanizada e de máxima confiança.',
      tags: ['Lentes de Resina & Porcelana', 'Implantes Guiados', 'Invisalign', 'Conformidade CFO'],
      metrics: [
        { label: 'Pacientes Particulares', value: '+240%' },
        { label: 'Mobile First', value: '100% Otimizado' },
        { label: 'Autoridade Médica', value: 'Referência' }
      ],
      accentColor: 'from-cyan-200/20 to-slate-200/10'
    }
  };

  const currentProject = projects[activeTab];

  const handleRefresh = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative bg-[#090b0e] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-slate-400/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span className="uppercase tracking-widest text-[11px] font-mono">Vitrine Viva & Interativa</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight uppercase">
            CONHEÇA NOSSOS CASES DE SUCESSO
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
            <MousePointerClick className="w-4 h-4 text-slate-300 animate-pulse" />
            <span>Role a página diretamente dentro da janela de navegação abaixo para interagir</span>
          </div>
        </div>

        {/* Project Switcher Tabs & View Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Main Project Selection Tabs */}
          <div className="flex items-center p-1.5 bg-[#12151b] border border-white/10 rounded-2xl shadow-xl w-full sm:w-auto">
            <button
              onClick={() => { setActiveTab('belladerma'); setViewMode('single'); }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'belladerma' && viewMode === 'single'
                  ? 'bg-slate-200 text-slate-900 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Bella Derma</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-slate-500 font-normal hidden md:inline">
                Estética
              </span>
            </button>

            <button
              onClick={() => { setActiveTab('sorrisoprime'); setViewMode('single'); }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'sorrisoprime' && viewMode === 'single'
                  ? 'bg-slate-200 text-slate-900 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>O Sorriso Prime</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-slate-500 font-normal hidden md:inline">
                Odontologia
              </span>
            </button>

            {/* Side by side comparison toggle for desktop */}
            <button
              onClick={() => setViewMode('compare')}
              className={`hidden lg:flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'compare'
                  ? 'bg-slate-200 text-slate-900 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Ver Ambos Lado a Lado</span>
            </button>
          </div>

          {/* Quick Info & Responsive Width Selector */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {viewMode === 'single' && (
              <div className="flex items-center p-1 bg-[#12151b] border border-white/10 rounded-xl">
                <button
                  onClick={() => setDeviceWidth('desktop')}
                  title="Simular visualização Desktop"
                  className={`p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                    deviceWidth === 'desktop'
                      ? 'bg-white/15 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceWidth('mobile')}
                  title="Simular visualização Mobile"
                  className={`p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                    deviceWidth === 'mobile'
                      ? 'bg-white/15 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={handleRefresh}
              title="Recarregar demonstração interativa"
              className="p-2.5 rounded-xl bg-[#12151b] border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Mode: SINGLE PROJECT FOCUSED */}
        {viewMode === 'single' && (
          <div className="space-y-6">
            {/* BROWSER MOCKUP CONTAINER */}
            <div className={`transition-all duration-300 mx-auto ${
              deviceWidth === 'mobile' ? 'max-w-md' : 'w-full'
            }`}>
              <div className="bg-[#141720] rounded-2xl border border-white/15 shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Browser Top Navigation Chrome Bar */}
                <div className="bg-[#1a1e27] px-4 py-3 flex items-center justify-between border-b border-white/10 select-none">
                  {/* Left: Window Dots */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                    
                    <div className="hidden sm:flex items-center gap-2 ml-4 text-slate-500">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <ArrowRight className="w-3.5 h-3.5" />
                      <RotateCw 
                        onClick={handleRefresh} 
                        className="w-3.5 h-3.5 hover:text-slate-300 cursor-pointer transition-colors" 
                      />
                    </div>
                  </div>

                  {/* Center: Address Bar with SSL Lock */}
                  <div className="flex-1 max-w-xl mx-3 sm:mx-6">
                    <div className="bg-[#0e1015] border border-white/10 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs text-slate-300">
                      <div className="flex items-center gap-2 truncate">
                        <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="text-slate-500 hidden sm:inline">https://</span>
                        <span className="text-white font-mono text-[11px] truncate">
                          {currentProject.displayUrl}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-medium px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20 shrink-0 hidden sm:inline">
                        SSL Seguro
                      </span>
                    </div>
                  </div>

                  {/* Right: Quick External Action */}
                  <div className="flex items-center gap-2">
                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir em nova aba"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Interactive iFrame Area with Native Internal Scroll */}
                <div className="relative bg-white w-full">
                  {/* Subtle top indicator for user experience */}
                  <div className="absolute top-2 right-4 z-10 pointer-events-none bg-black/75 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[11px] text-slate-200 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Role aqui dentro para navegar</span>
                  </div>

                  <iframe
                    key={`${activeTab}-${iframeKey}-${deviceWidth}`}
                    src={currentProject.url}
                    title={`${currentProject.name} - Site Real`}
                    className="w-full h-[580px] sm:h-[650px] border-0"
                    style={{
                      overflowY: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Bottom Bar below iframe */}
                <div className="p-4 sm:p-5 bg-[#12151b] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 mr-2">Especialidades em destaque:</span>
                    {currentProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors group cursor-pointer"
                  >
                    <span>Abrir site em tela cheia</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Metrics and Conversion Highlights below the Mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {currentProject.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#12151b] border border-white/10 text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode: COMPARE BOTH SIDE BY SIDE (Desktop) */}
        {viewMode === 'compare' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {/* Card 1: Bella Derma */}
            <div className="bg-[#12151b] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              {/* Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                    Clínica Estética
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">Bella Derma</h3>
                </div>
                <a
                  href="https://belladerma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  title="Abrir em tela cheia"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Browser Mockup */}
              <div className="bg-[#1a1e27] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 ml-2 bg-[#0e1015] rounded px-2.5 py-1 text-[11px] font-mono text-slate-400 truncate flex items-center gap-1.5">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span>belladerma.vercel.app</span>
                </div>
              </div>

              {/* Scrollable Iframe */}
              <div className="relative bg-white flex-1">
                <iframe
                  src="https://belladerma.vercel.app/"
                  title="Bella Derma - Site Real"
                  className="w-full h-[540px] border-0"
                  style={{ overflowY: 'auto' }}
                  loading="lazy"
                />
              </div>

              {/* Bottom Action */}
              <div className="p-4 bg-[#141720] border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://belladerma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-slate-300 transition-colors cursor-pointer"
                >
                  <span>Abrir site em tela cheia</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => onOpenContact('Interesse em site como Bella Derma')}
                  className="metallic-button px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Quero Meu Site
                </button>
              </div>
            </div>

            {/* Card 2: O Sorriso Prime */}
            <div className="bg-[#12151b] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              {/* Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    Clínica Odontológica
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">O Sorriso Prime</h3>
                </div>
                <a
                  href="https://osorrisoprime.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  title="Abrir em tela cheia"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Browser Mockup */}
              <div className="bg-[#1a1e27] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 ml-2 bg-[#0e1015] rounded px-2.5 py-1 text-[11px] font-mono text-slate-400 truncate flex items-center gap-1.5">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span>osorrisoprime.vercel.app</span>
                </div>
              </div>

              {/* Scrollable Iframe */}
              <div className="relative bg-white flex-1">
                <iframe
                  src="https://osorrisoprime.vercel.app/"
                  title="O Sorriso Prime - Site Real"
                  className="w-full h-[540px] border-0"
                  style={{ overflowY: 'auto' }}
                  loading="lazy"
                />
              </div>

              {/* Bottom Action */}
              <div className="p-4 bg-[#141720] border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://osorrisoprime.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-slate-300 transition-colors cursor-pointer"
                >
                  <span>Abrir site em tela cheia</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => onOpenContact('Interesse em site como O Sorriso Prime')}
                  className="metallic-button px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Quero Meu Site
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Guarantee and Authority Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-[#101217] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-slate-200" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-heading">
                Todos os sites são entregues 100% responsivos e com funil de conversão ativo
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Desenvolvimento sob medida com carregamento ultra-rápido, otimização para tráfego pago e total conformidade com o CFM e CFO.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenContact('Portfólio - CTA Inferior')}
            className="metallic-button px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shrink-0 cursor-pointer shadow-lg"
          >
            Quero Meu Site Neste Padrão
          </button>
        </div>

      </div>
    </section>
  );
};
