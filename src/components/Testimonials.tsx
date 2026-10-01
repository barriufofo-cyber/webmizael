import React from 'react';
import { Star, Quote, CheckCircle2, Sparkles, Building2, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Eu gastava muito tempo e dinheiro com anúncios no Instagram e quase 90% das mensagens eram pessoas pedindo tabela de preços. Quando o Mizael refez o site da clínica com o filtro de triagem e design premium, a recepção passou a receber pacientes que já chegam prontos para fechar nossos protocolos de R$ 6.000.',
      doctor: 'Dra. Camila Figueiredo',
      role: 'Médica Dermatologista · CRM/SP 179.330',
      clinic: 'Clínica Figueiredo Dermatologia',
      location: 'São Paulo, SP',
      verified: 'Paciente particular de alto ticket',
      metric: '4.8x mais conversão',
    },
    {
      quote:
        'Fiquei impressionado com o nível de detalhismo. Meu foco são lentes de contato dental e implantes guiados. O site transmitiu uma seriedade e sofisticação que nenhuma outra agência conseguiu entregar. No primeiro mês após o lançamento, fechamos 3 reabilitações completas vindas do site.',
      doctor: 'Dr. Lucas Montenegro',
      role: 'Cirurgião Dentista · CRO/RJ 43.109',
      clinic: 'Montenegro Oral Institute',
      location: 'Barra da Tijuca, RJ',
      verified: 'R$ 140k em fechamentos no 1º mês',
      metric: '3 reabilitações no mês 1',
    },
    {
      quote:
        'O site carrega de forma instantânea no celular. Nossos pacientes elogiam a clareza para entender como funciona o pré e pós-operatório. A Mizael entregou antes do prazo e com suporte impecável em todas as etapas.',
      doctor: 'Dra. Beatriz Prado',
      role: 'Cirurgiã Plástica · CRM/PR 32.411',
      clinic: 'Prado Plastic Surgery',
      location: 'Curitiba, PR',
      verified: 'Score 100 no Google PageSpeed',
      metric: '0.6s de carregamento',
    },
  ];

  return (
    <section id="depoimentos" className="py-24 sm:py-32 relative bg-[#0b0c0f] overflow-hidden">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-slate-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span className="uppercase tracking-widest text-[11px] font-mono">Autoridade Comprovada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight uppercase">
            O Que as Clínicas Falam Sobre Nós
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
            Resultados mensuráveis na captação de pacientes particulares e percepção de valor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="relative rounded-3xl border border-white/10 bg-[#0d0f14]/85 p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-slate-300/40 hover:-translate-y-1.5 shadow-xl group backdrop-blur-sm"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Tag de destaque */}
                <div className="inline-block mb-4 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 font-semibold uppercase tracking-wider">
                  {item.metric}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Doctor Details */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-1.5">
                <div className="font-bold text-white text-base font-heading">
                  {item.doctor}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {item.role}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{item.clinic}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
                
                {/* Verified Badge */}
                <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{item.verified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
