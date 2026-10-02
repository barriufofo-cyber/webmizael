import React from "react";

export interface BrandList {
  image: string;
  lightimg?: string;
  name: string;
  category?: string;
}

interface BrandSliderProps {
  brandList?: BrandList[];
}

export default function BrandSlider({ brandList = [] }: BrandSliderProps) {
  const defaultBrands: BrandList[] = [
    {
      name: "BELLA DERMA",
      category: "Estética Avançada",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "O SORRISO PRIME",
      category: "Odontologia & Implantes",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "INSTITUTO VALENTE",
      category: "Harmonização Orofacial",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "HARMONIQUE CLINIC",
      category: "Medicina Estética",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "LUMINA DERMATOLOGIA",
      category: "Laser & Rejuvenescimento",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "ATELIER DENTAL",
      category: "Reabilitação & Lentes",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=120&q=80",
    },
  ];

  const brands = brandList.length > 0 ? brandList : defaultBrands;
  // Duplicamos a lista para criar o loop contínuo e sem emendas
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 border-t border-b border-white/10 bg-[#090b0e]/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold mb-8">
          Especialistas e Clínicas que Confiam em Nosso Padrão Visual
        </p>
      </div>

      {/* Container com máscara de fade nas bordas laterais */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee-ltr gap-5 sm:gap-6 py-2">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="group w-[210px] sm:w-[250px] shrink-0 p-4 sm:p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-cyan-400/30 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-sm hover:scale-[1.03] cursor-default"
            >
              <span className="font-heading font-black text-xs sm:text-sm tracking-wider text-slate-200 group-hover:text-white transition-colors">
                {brand.name}
              </span>
              {brand.category && (
                <span className="text-[10px] uppercase tracking-wider text-cyan-400/90 mt-1.5 font-mono font-medium">
                  {brand.category}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
