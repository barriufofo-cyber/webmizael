import React from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Smartphone, 
  Layers, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Search,
  MessageCircle
} from 'lucide-react';

interface ServicesProps {
  onOpenContact: (source?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const servicesList = [
    {
      step: '01',
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
      tag: 'Mais Solicitado'
    },
    {
      step: '02',
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
      tag: 'Alto Impacto'
    },
    {
      step: '03',
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
      tag: 'Alta Rentabilidade'
    },
    {
      step: '04',
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
      tag: 'Visibilidade'
    }
  ];

  return (
    <section id="servicos" className="py-24 sm:py-32 relative bg-[#090b0e] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-slate-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span className="uppercase tracking-widest text-[11px] font-mono">Nossos Serviços</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Soluções Reais para sua Clínica
          </h2>
        </div>

        {/* Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="p-8 sm:p-10 rounded-2xl bg-[#0d0f14] border border-white/10 hover:border-slate-400/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden"
            >
              {/* Subtle top corner gradient shine */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-metallic select-none">
                    {service.step}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-slate-100 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-5">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenContact(`Serviço: ${service.title}`)}
                  className="text-xs font-bold text-slate-200 hover:text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Solicitar Proposta para Este Serviço</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global CTA Box inside Services */}
        <div className="mt-12 sm:mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#12151d] via-[#161a24] to-[#12151d] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Precisa de uma estrutura sob medida para sua clínica?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Analisamos o momento da sua clínica, seus procedimentos mais lucrativos e desenhamos a estratégia ideal de posicionamento.
            </p>
          </div>

          <a
            href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os%20de%20cria%C3%A7%C3%A3o%20de%20site%20para%20minha%20cl%C3%ADnica."
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-button px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap shadow-lg cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Falar com Especialista</span>
          </a>
        </div>

      </div>
    </section>
  );
};
