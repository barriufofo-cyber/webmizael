import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Instagram,
  Phone,
  Building2,
  User,
  HeartHandshake
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [nome, setNome] = useState('');
  const [clinica, setClinica] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [nicho, setNicho] = useState<'Estética' | 'Odontologia'>('Estética');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);

    const texto = `*Contato via Site Mizael - Diagnóstico Exclusivo*%0A%0A` +
      `*Nome:* ${encodeURIComponent(nome)}%0A` +
      `*Nome da Clínica:* ${encodeURIComponent(clinica)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(whatsapp)}%0A` +
      `*Nicho:* ${encodeURIComponent(nicho)}%0A` +
      (mensagem ? `*Mensagem / Procedimentos:* ${encodeURIComponent(mensagem)}%0A` : '') +
      `%0A_Olá Mizael, gostaria de solicitar uma proposta para elevar a presença digital da minha clínica._`;

    const url = `https://wa.me/5571986922653?text=${texto}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
    }, 400);
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative bg-[#090b0e] border-t border-white/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-slate-400/5 via-slate-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BIG HERO CTA BANNER */}
        <div className="mb-16 sm:mb-20 p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#141720] to-[#0e1017] border border-white/15 shadow-2xl relative overflow-hidden text-center">
          {/* Subtle decorative grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight uppercase">
              <span className="text-metallic block">SUA EMPRESA SENDO VISTA</span>
              <span className="text-white block">DA FORMA QUE MERECE.</span>
            </h2>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Quero%20minha%20cl%C3%ADnica%20sendo%20vista%20da%20forma%20que%20merece.%20Podemos%20conversar?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto metallic-button px-8 py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-3 shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#formulario"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Preencher Formulário</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Atendimento Rápido e Direto
              </span>
              <span>·</span>
              <span>Projetos em conformidade com o CFM & CFO</span>
              <span>·</span>
              <span>Entrega Completa em até 21 dias</span>
            </div>
          </div>
        </div>

        {/* 2-COLUMN LAYOUT: Contact Details & Lead Capture Form */}
        <div id="formulario" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Contact & Social Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                Canais de Atendimento
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Fale Diretamente Conosco
              </h3>
            </div>

            {/* Official Contact Cards */}
            <div className="space-y-3.5 pt-2">
              {/* WhatsApp Official */}
              <a
                href="https://wa.me/5571986922653?text=Ol%C3%A1%20Mizael!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites%20para%20cl%C3%ADnicas."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#12151d] border border-white/10 hover:border-emerald-500/40 hover:bg-[#151923] transition-all group cursor-pointer shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">
                    WhatsApp Direto (Principal)
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Falar no WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Clique para iniciar uma conversa sem compromisso
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
              </a>

              {/* Instagram Official */}
              <a
                href="https://www.instagram.com/miza.ssilva/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#12151d] border border-white/10 hover:border-pink-500/40 hover:bg-[#151923] transition-all group cursor-pointer shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/10 via-pink-500/10 to-purple-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono text-pink-400 uppercase font-semibold">
                    Instagram Oficial
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                    @miza.ssilva
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Acompanhe bastidores, projetos e novidades de design
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
              </a>

              {/* Email Official */}
              <a
                href="mailto:mizassilva.11@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#12151d] border border-white/10 hover:border-slate-400/40 hover:bg-[#151923] transition-all group cursor-pointer shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                    E-mail Comercial
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white truncate group-hover:text-slate-200 transition-colors">
                    mizassilva.11@gmail.com
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Para propostas detalhadas e envio de briefings
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
              </a>
            </div>

            <div className="pt-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Atendimento privativo para proprietários de clínicas, médicos dermatologistas, cirurgiões e dentistas em todo o Brasil.
              </span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-[#12151e] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative text-left">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                <HeartHandshake className="w-3.5 h-3.5 text-slate-300" />
                <span>Formulário de Captação & Diagnóstico</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Solicite o Projeto da Sua Clínica
              </h3>
            </div>

            {!enviado ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field: Nome */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Seu Nome Completo / Dr(a). <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dra. Camila Andrade ou Dr. Marcos Silva"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-[#181c27] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-all"
                    />
                  </div>
                </div>

                {/* Field: Nome da Clínica & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nome da Clínica <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Clínica Lumina Estética"
                        value={clinica}
                        onChange={(e) => setClinica(e.target.value)}
                        className="w-full bg-[#181c27] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      WhatsApp com DDD <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full bg-[#181c27] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Field: Nicho (Estética ou Odontologia) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nicho da Clínica <span className="text-rose-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setNicho('Estética')}
                      className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        nicho === 'Estética'
                          ? 'bg-slate-200 text-slate-900 border-white shadow-md font-bold'
                          : 'bg-[#181c27] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>Estética</span>
                      <span className="text-[10px] opacity-75 font-normal hidden sm:inline">(Facial, Corporal & Laser)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setNicho('Odontologia')}
                      className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        nicho === 'Odontologia'
                          ? 'bg-slate-200 text-slate-900 border-white shadow-md font-bold'
                          : 'bg-[#181c27] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>Odontologia</span>
                      <span className="text-[10px] opacity-75 font-normal hidden sm:inline">(Lentes, Implantes & Ortodontia)</span>
                    </button>
                  </div>
                </div>

                {/* Field: Mensagem / Detalhes Opcionais */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Quais são os principais tratamentos ou desafios atuais? (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Queremos atrair pacientes particulares para bioestimuladores de colágeno e harmonização, reduzindo dependência de indicações..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full bg-[#181c27] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full metallic-button py-4 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2.5 cursor-pointer shadow-xl hover:scale-[1.01] transition-transform"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                    <span>Enviar e Iniciar Conversa no WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1 text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Seus dados são confidenciais e utilizados apenas para o atendimento direto da Mizael.</span>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Dados Recebidos com Sucesso!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  A tela do WhatsApp com as informações da clínica <strong className="text-white">"{clinica}"</strong> foi aberta para você conversar diretamente com o Mizael.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/5571986922653?text=${encodeURIComponent(`Olá Mizael, sou ${nome} da clínica ${clinica} (${nicho}). Gostaria de dar continuidade à proposta.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="metallic-button px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Reabrir WhatsApp Manualmente</span>
                  </a>

                  <button
                    onClick={() => {
                      setEnviado(false);
                      setNome('');
                      setClinica('');
                      setWhatsapp('');
                      setMensagem('');
                    }}
                    className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Enviar Novo Formulário
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
