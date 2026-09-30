import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Eu gastava muito tempo e dinheiro com anúncios no Instagram e quase 90% das mensagens eram pessoas pedindo tabela de preços. Quando o Mizael refez o site da clínica com o filtro de triagem e design premium, a recepção passou a receber pacientes que já chegam prontos para fechar nossos protocolos de R$ 6.000.',
      doctor: 'Dra. Camila Figueiredo',
      role: 'Médica Dermatologista · CRM/SP 179.330',
      clinic: 'Clínica Figueiredo Dermatologia',
      location: 'São Paulo, SP',
      verified: 'Paciente particular exclusivo',
    },
    {
      quote:
        'Fiquei impressionado com o nível de detalhismo. Meu foco são lentes de contato dental e implantes guiados. O site transmitiu uma seriedade e sofisticação que nenhuma outra agência conseguiu entregar. No primeiro mês após o lançamento, fechamos 3 reabilitações completas vindas do site.',
      doctor: 'Dr. Lucas Montenegro',
      role: 'Cirurgião Dentista · CRO/RJ 43.109',
      clinic: 'Montenegro Oral Institute',
      location: 'Barra da Tijuca, RJ',
      verified: 'R$ 140k em fechamentos no 1º mês',
    },
    {
      quote:
        'O site carrega de forma instantânea no celular. Nossos pacientes elogiam a clareza para entender como funciona o pré e pós-operatório. A Mizael entregou antes do prazo e com suporte impecável em todas as etapas.',
      doctor: 'Dra. Beatriz Prado',
      role: 'Cirurgiã Plástica · CRM/PR 32.411',
      clinic: 'Prado Plastic Surgery',
      location: 'Curitiba, PR',
      verified: 'Score 100 no Google PageSpeed',
    },
  ];

  return (
    <section id="depoimentos" className="py-24 sm:py-32 relative bg-[#0b0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase font-mono mb-2">
            Autoridade Comprovada
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-heading uppercase">
            O Que As Clínicas Falam Sobre Nós
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#12141a] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg text-left"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-slate-200">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-slate-200 text-slate-200" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-600" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Doctor Details */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-1">
                <div className="font-bold text-white text-sm font-heading">
                  {item.doctor}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {item.role}
                </div>
                <div className="text-xs text-slate-500">
                  {item.clinic} · {item.location}
                </div>
                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
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
