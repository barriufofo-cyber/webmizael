import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-11 w-11 sm:h-12 sm:w-12', variant = 'header' }) => {
  // Priority:
  // 1. User uploaded PNG placed in public: /logo-mizael.png
  // 2. Alternate PNG: /logo.png
  // 3. Exact metallic vector SVG matching the uploaded brand mark: /logo-mizael.svg
  const [srcIndex, setSrcIndex] = useState(0);

  const sources = [
    '/logo-mizael.png',
    '/logo.png',
    '/logo-mizael.svg'
  ];

  const handleImageError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(prev => prev + 1);
    }
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={sources[srcIndex]}
        alt="Logomarca Oficial Mizael"
        onError={handleImageError}
        className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-[1.06]"
        style={{ imageRendering: 'crisp-edges' }}
        loading="eager"
      />
    </div>
  );
};
