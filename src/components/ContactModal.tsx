import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  CheckCircle, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  User, 
  Phone, 
  MapPin 
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceContext?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  sourceContext,
}) => {
  const [nome, setNome] = useState('');
  const [clinica, setClinica] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [especialidade, setEspecialidade] = useState('Estética Facial & Harmonização');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const texto = `*Solicitação de Diagnóstico Web - Mizael*%0A%0A` +
      `*Nome:* ${encodeURIComponent(nome)}%0A` +
      `*Clínica:* ${encodeURIComponent(clinica)}%0A` +
      `*Especialidade:* ${encodeURIComponent(especialidade)}%0A` +
      `*Telefone:* ${encodeURIComponent(telefone)}%0A` +
      `*Cidade:* ${encodeURIComponent(cidade)}%0A` +
      `*Origem:* ${encodeURIComponent(sourceContext || 'Site Mizael')}`;

    const whatsappUrl = `https://wa.me/5571986922653?text=${texto}`;
    
    // Open WhatsApp in new tab after a brief pause
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#111319] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg border border-white/5 hover:border-white/20 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                Atendimento Privativo
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Diagnóstico & Orçamento do Seu Site
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Preencha os dados da sua clínica para receber um plano de posicionamento sob medida.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Seu Nome ou Nome do Responsável
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dra. Mariana Albuquerque"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-[#181b24] border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nome da Clínica / Consultório
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Instituto Albuquerque"
                      value={clinica}
                      onChange={(e) => setClinica(e.target.value)}
                      className="w-full bg-[#181b24] border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp (com DDD)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      className="w-full bg-[#181b24] border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-300"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Especialidade Principal
                  </label>
                  <select
                    value={especialidade}
                    onChange={(e) => setEspecialidade(e.target.value)}
                    className="w-full bg-[#181b24] border border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-slate-300"
                  >
                    <option value="Estética Facial & Harmonização">Estética Facial & Harmonização</option>
                    <option value="Odontologia & Lentes de Contato">Odontologia & Lentes de Contato</option>
                    <option value="Dermatologia Clínica & Laser">Dermatologia Clínica & Laser</option>
                    <option value="Cirurgia Plástica">Cirurgia Plástica</option>
                    <option value="Outra Especialidade Médica">Outra Especialidade Médica</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Cidade / UF
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: São Paulo, SP"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      className="w-full bg-[#181b24] border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-300"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full metallic-button py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Solicitar Diagnóstico no WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Dados protegidos. Não enviamos spam.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              Solicitação Enviada com Sucesso!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              Nossa equipe já preparou as informações para o seu atendimento no WhatsApp. Caso a janela não tenha aberto automaticamente, clique no botão abaixo.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 text-xs font-semibold text-slate-300 border border-white/10 rounded-lg hover:bg-white/5"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
