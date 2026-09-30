import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Quanto tempo leva para o site da minha clínica ficar pronto?',
      a: 'Nosso ciclo médio de entrega é de 15 a 21 dias úteis. Trabalhamos com etapas estruturadas: diagnóstico estratégico, redação persuasiva (copywriting), design de alta fidelidade e engenharia front-end com testes de velocidade e conversão.',
    },
    {
      q: 'Não tenho textos prontos nem fotos profissionais. Vocês ajudam?',
      a: 'Sim, cuidamos de toda a estrutura textual (copywriting) especializada em estética e odontologia. Além disso, fornecemos um guia detalhado de direcionamento para que o seu fotógrafo capture os ângulos, luzes e expressões ideais para um site de alto padrão.',
    },
    {
      q: 'O site está em conformidade com as normas do CFM e do CFO?',
      a: 'Rigorosamente. Todos os elementos, avisos legais, espaços para CRM/CRO, RQE de especialidades e orientações de imagem são criados em estrita observância às resoluções do Conselho Federal de Medicina e do Conselho Federal de Odontologia.',
    },
    {
      q: 'Como funciona o encaminhamento de pacientes para o WhatsApp da clínica?',
      a: 'Implementamos botões inteligentes que já abrem a conversa no WhatsApp da sua secretária com o procedimento exato de interesse do paciente. Isso economiza tempo da recepção e agiliza o fechamento de consultas particulares.',
    },
    {
      q: 'Terei custos mensais obrigatórios com a Mizael?',
      a: 'Não exigimos mensalidades compulsórias. O código e o site pertencem integralmente à sua clínica. Os únicos custos recorrentes são a hospedagem segura de alta velocidade e o registro de domínio, que ficam sob sua titularidade.',
    },
    {
      q: 'Meu público é 90% mobile (celular). Como o site se comporta?',
      a: 'Desenvolvemos com arquitetura Mobile-first. Isso significa que a experiência é projetada prioritariamente para smartphones com carregamento em menos de 0.8s, botões ergonômicos e leitura agradável sem necessidade de zoom.',
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-[#090b0e] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase font-mono mb-2">
            Transparência Total
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            Dúvidas Frequentes de Clínicas e Consultórios
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#12141b] border border-white/10 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white font-heading">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
