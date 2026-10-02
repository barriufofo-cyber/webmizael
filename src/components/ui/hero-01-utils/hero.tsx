export interface AvatarList {
  image: string;
  name?: string;
}

interface HeroSectionProps {
  avatarList?: AvatarList[];
  onOpenContact?: (source?: string) => void;
}

export default function HeroSection({}: HeroSectionProps = {}) {
  return (
    <section id="inicio" className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-b from-slate-400/10 via-slate-600/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Impact Headline - Opção 1: Staggered Reveal com Shimmer Líquido */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.2] [text-wrap:balance] max-w-5xl mx-auto">
          <span className="block font-heading">
            <span className="luxury-word-reveal luxury-word-1">
              Autoridade,
            </span>{" "}
            <span className="luxury-word-reveal luxury-word-2">
              Sofisticação
            </span>{" "}
            <span className="luxury-word-reveal luxury-word-3">
              e Conversão
            </span>
          </span>
          <span className="block text-slate-200 font-heading text-xl sm:text-3xl md:text-4xl font-light mt-4 sm:mt-5 tracking-wide luxury-subhead-reveal">
            em uma experiência digital exclusiva para sua Clínica.
          </span>
        </h1>
      </div>
    </section>
  );
}
