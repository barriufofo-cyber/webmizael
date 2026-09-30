import React from 'react';
import { 
  ArrowUpRight, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Award, 
  Star, 
  Sparkles,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

interface HeroProps {
  onOpenContact: (source?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  // Satisfied clinic owners & doctor avatars
  const satisfiedClients = [
    {
      name: 'Dra. Juliana Mendes',
      role: 'Dermatologia & Laser',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80'
    },
    {
      name: 'Dr. Rafael Albuquerque',
      role: 'Harmonização Facial',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80'
    },
    {
      name: 'Dra. Camila Nogueira',
      role: 'Odontologia Estética & Lentes',
      img: 'https://images.unsplash.com/photo-1594824813587-4d92d477e699?auto=format&fit=crop&w=120&q=80'
    },
    {
      name: 'Dr. Lucas Silveira',
      role: 'Reabilitação Oral & Implantes',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&q=80'
    },
    {
      name: 'Dra. Beatriz Fontana',
      role: 'Biomedicina Estética',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
    }
  ];

  // Prestigious partner brands and clinics in health & aesthetic
  const partnerLogos = [
    { name: 'BELLA DERMA', category: 'Estética Avançada' },
    { name: 'O SORRISO PRIME', category: 'Odontologia & Implantes' },
    { name: 'INSTITUTO VALENTE', category: 'Harmonização Orofacial' },
    { name: 'HARMONIQUE CLINIC', category: 'Medicina Estética' },
    { name: 'LUMINA DERMATOLOGIA', category: 'Laser & Rejuvenescimento' },
    { name: 'ATELIER DENTAL', category: 'Reabilitação & Lentes' }
  ];

  return (
    <section id="inicio" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting - Metallic & charcoal atmosphere */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-b from-slate-400/10 via-slate-600/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header Box */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Subtle Top Metallic Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-medium tracking-wide mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span className="uppercase tracking-widest text-[11px] font-mono">
              Arquitetura Web de Alto Padrão
            </span>
          </div>

          {/* Main Impact Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
            <span className="block text-metallic uppercase font-heading">
              SUA EMPRESA SENDO VISTA
            </span>
            <span className="block text-white font-heading mt-1 sm:mt-2">
              DA FORMA QUE MERECE.
            </span>
          </h1>

          {/* Action Buttons */}
          <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            {/* Primary Action: WhatsApp Button */}
            <a
              href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Vi%20o%20seu%20trabalho%20e%20gostaria%20de%20um%20diagn%C3%B3stico%20para%20o%20site%20da%20minha%20cl%C3%ADnica.%20Podemos%20conversar?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto metallic-button px-7 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2.5 shadow-xl transition-transform hover:scale-[1.03] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar no WhatsApp</span>
            </a>

            {/* Secondary Action: Solicit Quote */}
            <button
              onClick={() => onOpenContact('Hero CTA Principal')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Satisfied Clients Social Proof Badge */}
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center justify-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 shadow-lg backdrop-blur-sm">
            {/* Stacked Avatars */}
            <div className="flex items-center -space-x-2.5 overflow-hidden">
              {satisfiedClients.map((client, idx) => (
                <img
                  key={idx}
                  src={client.img}
                  alt={client.name}
                  title={`${client.name} (${client.role})`}
                  className="inline-block w-9 h-9 rounded-full ring-2 ring-[#0c0e12] object-cover filter contrast-105"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Stars & Stat Copy */}
            <div className="flex flex-col sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-xs font-bold text-white">5.0</span>
              </div>
              <span className="text-[11px] text-slate-300 font-medium mt-0.5">
                +45 clínicas posicionadas como <span className="text-white font-semibold">referência de alto padrão</span>
              </span>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-300" />
              <span>Design 100% Autoral</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-slate-300" />
              <span>Abertura em &lt; 0.8s</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-slate-300" />
              <span>Conforme Normas CFM & CFO</span>
            </div>
          </div>

        </div>

        {/* Partner Logos Strip (Barra de Marcas Parceiras / Clínicas de Referência) */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold mb-6">
            Especialistas e Clínicas que Confiam em Nosso Padrão Visual
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="group p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <span className="font-heading font-black text-xs sm:text-sm tracking-wider text-slate-300 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 mt-1 font-mono">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
