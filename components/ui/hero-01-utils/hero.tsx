import React from "react";
import {
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Award,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface AvatarList {
  image: string;
  name?: string;
}

interface HeroSectionProps {
  avatarList?: AvatarList[];
  onOpenContact?: (source?: string) => void;
}

export default function HeroSection({
  avatarList = [],
  onOpenContact,
}: HeroSectionProps) {
  const defaultAvatars: AvatarList[] = [
    {
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80",
      name: "Dra. Juliana Mendes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80",
      name: "Dr. Rafael Albuquerque",
    },
    {
      image:
        "https://images.unsplash.com/photo-1594824813587-4d92d477e699?auto=format&fit=crop&w=120&q=80",
      name: "Dra. Camila Nogueira",
    },
    {
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&q=80",
      name: "Dr. Lucas Silveira",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
      name: "Dra. Beatriz Fontana",
    },
  ];

  const avatarsToRender = avatarList.length > 0 ? avatarList : defaultAvatars;

  return (
    <section id="inicio" className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-b from-slate-400/10 via-slate-600/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Top Metallic Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-medium tracking-wide mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-slate-300" />
          <span className="uppercase tracking-widest text-[11px] font-mono">
            Arquitetura Web de Alto Padrão
          </span>
        </div>

        {/* Main Impact Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance] max-w-5xl mx-auto">
          <span className="block text-metallic uppercase font-heading">
            SUA EMPRESA SENDO VISTA
          </span>
          <span className="block text-white font-heading mt-1 sm:mt-2">
            DA FORMA QUE MERECE.
          </span>
        </h1>

        {/* Action Buttons */}
        <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Primary Action: WhatsApp Direct Link */}
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
          {onOpenContact ? (
            <Button
              onClick={() => onOpenContact("Hero CTA Principal")}
              variant="outline"
              className="w-full sm:w-auto px-7 py-3.5 h-auto rounded-xl text-sm font-semibold text-slate-200 hover:text-white border-slate-700 hover:border-slate-500 bg-white/[0.03] hover:bg-white/[0.08] transition-all flex items-center justify-center gap-2"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Button>
          ) : (
            <a
              href="#contato"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 bg-white/[0.03] hover:bg-white/[0.08] transition-all flex items-center justify-center gap-2"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          )}
        </div>

        {/* Satisfied Clients Social Proof Group */}
        <div className="mt-10 inline-flex flex-col sm:flex-row items-center justify-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 shadow-lg backdrop-blur-sm">
          {/* Stacked Avatars */}
          <div className="flex items-center -space-x-2.5 overflow-hidden">
            {avatarsToRender.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar.image}
                alt={avatar.name || `Cliente satisfeito ${idx + 1}`}
                title={avatar.name}
                className="inline-block w-9 h-9 rounded-full ring-2 ring-[#0c0e12] object-cover filter contrast-105"
                loading="lazy"
              />
            ))}
          </div>

          {/* Stars & Text */}
          <div className="flex flex-col sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="ml-1 text-xs font-bold text-white">5.0</span>
            </div>
            <span className="text-[11px] text-slate-300 font-medium mt-0.5">
              +45 clínicas posicionadas como{" "}
              <span className="text-white font-semibold">
                referência de alto padrão
              </span>
            </span>
          </div>
        </div>

        {/* Trust Badges */}
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
    </section>
  );
}
