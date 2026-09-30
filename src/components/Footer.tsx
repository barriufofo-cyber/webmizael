import React from 'react';
import { Logo } from './Logo.tsx';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07080a] border-t border-white/10 py-12 sm:py-16 text-center relative overflow-hidden">
      {/* Decorative top metallic hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-6">
        
        {/* Logomarca oficial em destaque maior */}
        <a 
          href="#inicio"
          className="group inline-flex items-center justify-center p-2 rounded-2xl hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          aria-label="Voltar ao início - Mizael"
        >
          <Logo className="h-16 w-16 sm:h-20 sm:w-20" variant="footer" />
        </a>

        {/* Informações sobre os direitos reservados */}
        <div className="text-xs text-slate-400 font-light tracking-wide max-w-md">
          <p>
            © {currentYear} <span className="text-white font-medium">Mizael Silva</span>. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
