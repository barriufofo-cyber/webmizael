import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";


export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData?: NavigationSection[];
  onOpenContact?: (source?: string) => void;
}

export default function Header({ navigationData, onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultNavigation: NavigationSection[] = [
    { title: "Início", href: "#inicio", isActive: true },
    { title: "Portfólio", href: "#portfolio" },
    { title: "Sobre", href: "#sobre" },
    { title: "Serviços", href: "#servicos" },
    { title: "Depoimentos", href: "#depoimentos" },
    { title: "Contato", href: "#contato" },
  ];

  const navLinks = navigationData && navigationData.length > 0 ? navigationData : defaultNavigation;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#090a0d]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3"
        : "bg-gradient-to-b from-[#090a0d]/90 via-[#090a0d]/60 to-transparent backdrop-blur-sm py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo oficial Mizael preservada */}
          <a
            href="#inicio"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded transition-transform hover:scale-105"
            aria-label="Mizael - Página Inicial"
          >
            <Logo className="h-11 w-11 sm:h-12 sm:w-12" variant="header" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gradient-to-r after:from-slate-200 after:to-slate-400 hover:after:w-full after:transition-all after:duration-300 ${link.isActive
                  ? "text-white font-semibold after:w-full"
                  : "text-slate-300 hover:text-white after:w-0"
                  }`}
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA - Falar no WhatsApp */}
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

          {/* Mobile Sheet Trigger */}
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

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                  aria-label="Abrir menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0c0e12]/98 border-white/10 text-white w-[300px] sm:w-[360px] p-6 backdrop-blur-xl"
              >
                <SheetHeader className="text-left pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Logo className="h-9 w-9" variant="header" />
                    <div>
                      <SheetTitle className="text-white text-base font-bold font-heading">
                        Mizael Web
                      </SheetTitle>
                      <p className="text-[11px] text-slate-400">
                        Arquitetura de Alto Padrão
                      </p>
                    </div>
                  </div>
                </SheetHeader>

                <div className="py-6 flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5 flex items-center justify-between transition-colors"
                    >
                      <span>{link.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </a>
                  ))}
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20um%20diagn%C3%B3stico%20para%20o%20site%20da%20minha%20cl%C3%ADnica."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="w-full metallic-button py-3 text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Falar no WhatsApp</span>
                  </a>
                  {onOpenContact && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setOpen(false);
                        onOpenContact("Mobile Sheet Menu");
                      }}
                      className="w-full border-white/10 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl"
                    >
                      Solicitar Orçamento
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
