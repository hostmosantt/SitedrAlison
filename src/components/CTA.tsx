import { Calendar, MapPin, Clock, Navigation } from 'lucide-react';

export function CTA() {
  return (
    <section id="contato" className="py-14 sm:py-20 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Banner CTA */}
        <div className="bg-brand-petroleum rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
              Agende uma avaliação sem compromisso no Studio Als. Vamos entender o que você precisa e montar um plano que faça sentido para você.
            </p>
            <a 
              href="https://wa.me/5568992302967?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Dr.%20Alison." 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-brand-petroleum font-bold hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-1 text-base sm:text-lg"
            >
              <Calendar size={20} />
              Agendar minha avaliação
            </a>
          </div>
          
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Card de Localização & Mapa */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-100">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Informações da Clínica */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest text-brand-petroleum uppercase mb-2">
                Onde estamos
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-darkblue mb-3">
                Venha nos visitar
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 pr-4">
                Estamos localizados na <strong className="text-brand-petroleum font-bold">Galeria Mosantt</strong>, um espaço focado em saúde e bem-estar. Venha conhecer a galeria e o nosso consultório!
                <br />
                <a href="https://galeriamosantt.web.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-brand-mint font-bold hover:text-brand-petroleum transition-colors group underline underline-offset-4 decoration-2">
                  Acessar o site da Galeria 
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-petroleum shrink-0 border border-slate-100">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong className="text-brand-darkblue block text-sm font-bold mb-1">
                      Localização
                    </strong>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Studio Als Odontologia Integrada<br />
                      Galeria Mosantt<br />
                      Estrada Dias Martins, Rio Branco - AC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-ice flex items-center justify-center text-brand-petroleum shrink-0 border border-slate-100">
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong className="text-brand-darkblue block text-sm font-bold mb-1">
                      Horário de Atendimento
                    </strong>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Segunda a Sexta: 08h às 18h<br />
                      Sábado: 08h às 12h
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://share.google/VmPxxysEw3jEIa0TJ" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-petroleum text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-md self-start hover:-translate-y-0.5"
              >
                <Navigation size={16} />
                Abrir rota no GPS
              </a>
            </div>

            {/* Mapa Interativo */}
            <div className="lg:col-span-7 h-[300px] sm:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-inner border border-slate-200 relative group bg-slate-100">
              <iframe 
                title="Mapa do Consultório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31610.12648839077!2d-67.8441113!3d-9.97499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8c8577a79933%3A0x6b907a7e8e5ab140!2sRio%20Branco%2C%20AC!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-opacity group-hover:opacity-95"
              ></iframe>
              
              <a 
                href="https://share.google/VmPxxysEw3jEIa0TJ" 
                target="_blank" 
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-brand-darkblue px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 hover:bg-white hover:scale-105 transition-all"
              >
                <MapPin size={15} className="text-brand-petroleum"/>
                Ver no Maps
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
