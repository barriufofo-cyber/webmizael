import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  MessageCircle,
  Layout,
  Palette,
  Target,
  Search,
  CheckCircle2
} from 'lucide-react';

interface ServicesProps {
  onOpenContact: (source?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  // Moves the cards container horizontally from 0% to -75% as user scrolls down
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  const servicesList = [
    {
      step: '01',
      icon: Layout,
      title: 'Sites & Landing Pages de Alta Conversão',
      subtitle: 'Estruturados para agendar consultas particulares no WhatsApp',
      description:
        'Desenvolvimento front-end ultra-rápido com código limpo e design responsivo. Cada detalhe da página — das fotos dos procedimentos aos depoimentos — é posicionado estrategicamente para levar o paciente a clicar no botão de agendamento.',
      features: [
        'Arquitetura Mobile-First ergonômica',
        'Botões estratégicos de WhatsApp integrados',
        'Carregamento instantâneo em menos de 0.8s',
        'Painel dinâmico e seguro sem travas'
      ],
      tag: 'Mais Solicitado',
      accent: 'from-blue-500/20 via-slate-500/10 to-transparent'
    },
    {
      step: '02',
      icon: Palette,
      title: 'Reposicionamento Visual & Redesign de Elite',
      subtitle: 'Transforme a percepção do paciente antes mesmo dele entrar no consultório',
      description:
        'Se o seu site atual parece antigo ou foi feito em plataformas limitadas, remodelamos 100% da sua presença online. Criamos uma identidade visual metálica, minimalista e luxuosa compatível com o alto padrão dos seus tratamentos.',
      features: [
        'Design autoral exclusivo (sem templates)',
        'Harmonização de paleta de cores e tipografia nobre',
        'Apresentação humanizada do corpo clínico',
        'Refinamento de imagens e tratamentos'
      ],
      tag: 'Alto Impacto',
      accent: 'from-purple-500/20 via-slate-500/10 to-transparent'
    },
    {
      step: '03',
      icon: Target,
      title: 'Funis de Captação para Tratamentos de Alto Ticket',
      subtitle: 'Páginas dedicadas para procedimentos de alta rentabilidade',
      description:
        'Landing pages específicas para tratamentos premium: lentes de porcelana, implantes guiados, toxina botulínica, bioestimuladores de colágeno e tecnologias a laser. O paciente recebe todas as respostas e chega decidido à conversa.',
      features: [
        'Comunicação focada em valor, não em preço',
        'Filtragem de pacientes curiosos',
        'Mensagens pré-preenchidas por procedimento',
        'Aumento comprovado no comparecimento'
      ],
      tag: 'Alta Rentabilidade',
      accent: 'from-amber-500/20 via-slate-500/10 to-transparent'
    },
    {
      step: '04',
      icon: Search,
      title: 'SEO Local & Otimização para o Google',
      subtitle: 'Seja a clínica #1 quando o paciente buscar na sua cidade',
      description:
        'Estruturação semântica, metatags avançadas e velocidade extrema que colocam seu site nas primeiras posições das buscas orgânicas da sua região no Google e nos mapas locais.',
      features: [
        'Código semântico com dados estruturados (Schema)',
        'Integração com Google Maps e Perfil da Empresa',
        'Indexação rápida nos motores de busca',
        'Conexão com campanhas do Google Ads'
      ],
      tag: 'Visibilidade',
      accent: 'from-emerald-500/20 via-slate-500/10 to-transparent'
    }
  ];

  return (
    <section 
      ref={targetRef} 
      id="servicos" 
      className="relative bg-[#090b0e] h-[220vh] sm:h-[260vh]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-8 sm:py-12 overflow-hidden">
        
        {/* Section Header with Live Progress */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-slate-300" />
                <span className="uppercase tracking-widest text-[11px] font-mono">Nossos Serviços</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
                Soluções Reais para sua Clínica
              </h2>
            </div>

            {/* Scroll Indicator Guide */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-mono tracking-wider uppercase hidden sm:inline-block">
                Role para explorar
              </span>
              <div className="w-28 sm:w-36 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-slate-200 via-white to-slate-400 rounded-full will-change-transform"
                  style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Cards Track */}
        <div className="relative w-full flex items-center overflow-visible my-auto">
          <motion.div 
            style={{ x }} 
            className="flex gap-5 sm:gap-8 px-4 sm:px-8 md:px-16 will-change-transform transform-gpu"
          >
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="w-[84vw] sm:w-[500px] md:w-[580px] shrink-0 p-7 sm:p-9 rounded-3xl bg-[#0d0f14] border border-white/10 hover:border-slate-400/40 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between shadow-xl relative overflow-hidden group transform-gpu"
                >
                  {/* Card top-right accent glow */}
                  <div className={`absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl ${service.accent} pointer-events-none rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition-opacity`} />
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-white/[0.05] to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:border-white/30 transition-colors">
                          <Icon className="w-6 h-6 text-slate-300" />
                        </div>
                        <span className="font-heading font-black text-2xl sm:text-3xl text-metallic select-none">
                          {service.step}
                        </span>
                      </div>

                      <span className="text-[10px] sm:text-xs uppercase font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading leading-snug group-hover:text-slate-100 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2">
                      {service.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 mt-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between relative z-10">
                    <button
                      onClick={() => onOpenContact(`Serviço: ${service.title}`)}
                      className="text-xs sm:text-sm font-bold text-slate-200 hover:text-white flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Solicitar Proposta para Este Serviço</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </button>

                    <span className="text-xs font-mono text-slate-500">
                      0{index + 1} / 04
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Global CTA Banner beneath carousel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#12151d] via-[#161a24] to-[#12151d] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-heading">
                  Precisa de uma estrutura sob medida para sua clínica?
                </h4>
                <p className="text-xs text-slate-400">
                  Desenhamos a estratégia ideal de posicionamento para o seu público.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os%20de%20cria%C3%A7%C3%A3o%20de%20site%20para%20minha%20cl%C3%ADnica."
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Falar com Especialista</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
