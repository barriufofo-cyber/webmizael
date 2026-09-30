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

  return (
    <section className="py-12 border-t border-b border-white/10 bg-[#090b0e]/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold mb-8">
          Especialistas e Clínicas que Confiam em Nosso Padrão Visual
        </p>

        {/* Responsive Grid / Slider */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-sm hover:scale-[1.02]"
            >
              <span className="font-heading font-black text-xs sm:text-sm tracking-wider text-slate-300 group-hover:text-white transition-colors">
                {brand.name}
              </span>
              {brand.category && (
                <span className="text-[9px] uppercase tracking-wider text-slate-400 mt-1 font-mono">
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
