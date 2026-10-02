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
          
          {/* Main Impact Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] [text-wrap:balance]">
            <span className="block text-metallic font-heading">
              Autoridade, Sofisticação e Conversão
            </span>
            <span className="block text-white font-heading text-2xl sm:text-4xl md:text-5xl font-light mt-2 sm:mt-3">
              em uma experiência digital exclusiva para sua Clínica.
            </span>
          </h1>



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
