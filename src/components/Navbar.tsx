import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  onOpenContact: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0d]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Official Mizael Pure Monogram Logo */}
          <a
            href="#inicio"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded transition-transform hover:scale-105"
            aria-label="Mizael - Página Inicial"
          >
            <Logo className="h-11 w-11 sm:h-12 sm:w-12" variant="header" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-slate-300 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-slate-200 after:to-slate-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Conversion CTA - Falar no WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20um%20diagn%C3%B3stico%20e%20or%C3%A7amento%20para%20o%20site%20da%20minha%20cl%C3%ADnica."
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button px-5 py-2.5 text-xs font-bold tracking-wide rounded-lg flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20cl%C3%ADnica."
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button sm:hidden px-3 py-1.5 text-[11px] font-bold rounded-lg flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/5 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Slide-down Sheet) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e12]/98 backdrop-blur-xl border-b border-white/15 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20um%20diagn%C3%B3stico%20para%20o%20site%20da%20minha%20cl%C3%ADnica."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full metallic-button py-3 text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar no WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Mobile Menu');
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-300 border border-white/10 hover:bg-white/5 rounded-xl flex items-center justify-center gap-2"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
