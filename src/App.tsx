import React, { useState, useEffect } from 'react';
import AgencyHeroSection from '@/components/ui/hero-01';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Faq } from './components/Faq.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<string>('Botão Principal');
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  const handleOpenContact = (source?: string) => {
    setModalSource(source || 'Solicitação Geral');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-slate-100 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900 relative">
      {/* Global Interactive Spotlight following cursor throughout the entire viewport */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden sm:block"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.18), rgba(234, 88, 12, 0.08) 35%, rgba(217, 119, 6, 0.02) 65%, transparent 85%)`,
        }}
        aria-hidden="true"
      />

      {/* 1. Modern Agency Hero Section (Header + Hero + Brand Slider) */}
      <AgencyHeroSection onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Real Cases & Interactive Live Showcase Portfolio Section */}
        <Portfolio onOpenContact={handleOpenContact} />

        {/* 3. Sobre Nós - Arquitetura de Alto Padrão */}
        <About onOpenContact={handleOpenContact} />

        {/* 4. Nossos Serviços Especializados para Clínicas */}
        <Services onOpenContact={handleOpenContact} />

        {/* 5. Doctor & Dentist Testimonials */}
        <Testimonials />

        {/* 8. Strategic FAQ */}
        <Faq />

        {/* 9. Final CTA & Official Lead Capture Contact Section */}
        <ContactSection />
      </main>

      {/* Corporate Luxury Footer */}
      <Footer />

      {/* Primary Floating Action WhatsApp Button with Subtle Attention-Grabbing Pulse */}
      <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <div className="relative">
          {/* Subtle radar beacon wave expanding outward */}
          <span
            aria-hidden="true"
            className="absolute -inset-1 rounded-full bg-emerald-500/25 blur-sm animate-whatsapp-ring pointer-events-none"
          />

          <a
            href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20um%20diagn%C3%B3stico%20para%20o%20site%20da%20minha%20cl%C3%ADnica."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-4 sm:px-5 py-3.5 bg-[#10131a]/95 hover:bg-[#151922] border border-white/20 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 ring-1 ring-black/50 animate-whatsapp-float cursor-pointer"
            aria-label="Falar com Mizael no WhatsApp"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shadow-inner">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#10131a] animate-ping opacity-75" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#10131a]" />
            </div>
            
            <div className="flex flex-col text-left pr-1">
              <span className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                Falar no WhatsApp
              </span>
              <span className="text-[10px] text-emerald-400 font-medium">
                Atendimento Online
              </span>
            </div>
          </a>
        </div>
      </aside>

      {/* Lead Capture Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceContext={modalSource}
      />
    </div>
  );
}
