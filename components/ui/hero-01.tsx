import React from "react";
import HeroSection from "@/components/ui/hero-01-utils/hero";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";
import Header from "@/components/ui/hero-01-utils/header";
import BrandSlider, {
  BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";

interface AgencyHeroSectionProps {
  onOpenContact?: (source?: string) => void;
}

export default function AgencyHeroSection({ onOpenContact }: AgencyHeroSectionProps) {
  const avatarList: AvatarList[] = [
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

  const navigationData: NavigationSection[] = [
    {
      title: "Início",
      href: "#inicio",
      isActive: true,
    },
    {
      title: "Portfólio",
      href: "#portfolio",
    },
    {
      title: "Sobre",
      href: "#sobre",
    },
    {
      title: "Serviços",
      href: "#servicos",
    },
    {
      title: "Depoimentos",
      href: "#depoimentos",
    },
    {
      title: "Contato",
      href: "#contato",
    },
  ];

  const brandList: BrandList[] = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=120&q=80",
      name: "BELLA DERMA",
      category: "Estética Avançada",
    },
    {
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=120&q=80",
      name: "O SORRISO PRIME",
      category: "Odontologia & Implantes",
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=120&q=80",
      name: "INSTITUTO VALENTE",
      category: "Harmonização Orofacial",
    },
    {
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=120&q=80",
      name: "HARMONIQUE CLINIC",
      category: "Medicina Estética",
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=120&q=80",
      name: "LUMINA DERMATOLOGIA",
      category: "Laser & Rejuvenescimento",
    },
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=120&q=80",
      name: "ATELIER DENTAL",
      category: "Reabilitação & Lentes",
    },
  ];

  return (
    <div className="relative">
      <Header navigationData={navigationData} onOpenContact={onOpenContact} />
      <div>
        <HeroSection avatarList={avatarList} onOpenContact={onOpenContact} />
        <BrandSlider brandList={brandList} />
      </div>
    </div>
  );
}
