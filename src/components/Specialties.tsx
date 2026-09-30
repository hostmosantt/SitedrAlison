import { ArrowRight, User } from 'lucide-react';

export function Specialties() {
  return (
    <section id="especialidades" className="py-14 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkblue mb-4">
            Nosso Corpo Clínico
          </h2>
          <p className="text-slate-600 leading-relaxed">
            O Studio Als Odontologia Integrada conta com um time de especialistas altamente qualificados para oferecer um tratamento completo, em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card Estética - Alison */}
          <div className="bg-white rounded-2xl p-7 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-brand-petroleum mb-3 bg-brand-petroleum/10 px-2.5 py-1 rounded-md">
                <User size={12} /> Dr. Alison Mota
              </div>
              <ul className="text-slate-600 text-[15px] font-medium leading-relaxed mb-6 space-y-3 mt-2">
                <li className="flex gap-2 items-start"><span className="text-brand-petroleum mt-1">•</span> Lentes/Facetas em Porcelana</li>
                <li className="flex gap-2 items-start"><span className="text-brand-petroleum mt-1">•</span> Especialista em Harmonização Orofacial</li>
                <li className="flex gap-2 items-start"><span className="text-brand-petroleum mt-1">•</span> Restaurações e Profilaxias (limpezas)</li>
                <li className="flex gap-2 items-start"><span className="text-brand-petroleum mt-1">•</span> Clareamento</li>
                <li className="flex gap-2 items-start"><span className="text-brand-petroleum mt-1">•</span> Contenções removíveis Invisalign</li>
              </ul>
            </div>
            <a href="https://wa.me/5568992302967" target="_blank" rel="noreferrer" className="inline-flex items-center text-brand-petroleum font-medium text-sm group mt-auto pt-4 border-t border-slate-100">
              Agendar consulta <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card Endodontia - Davi */}
          <div className="bg-white rounded-2xl p-7 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-brand-petroleum mb-3 bg-brand-petroleum/10 px-2.5 py-1 rounded-md">
                <User size={12} /> Dr Davi Lima
              </div>
              <ul className="text-slate-600 text-[15px] font-medium leading-relaxed mb-6 space-y-3 mt-2">
                <li className="flex gap-2 items-start"><span className="text-brand-petroleum mt-1">•</span> Endodontia Motorizada</li>
                <li className="flex gap-2 items-start"><span className="text-brand-petroleum mt-1">•</span> Reabilitação Prótese Fixa e Removível</li>
              </ul>
            </div>
            <a href="https://wa.me/5568992302967" target="_blank" rel="noreferrer" className="inline-flex items-center text-brand-petroleum font-medium text-sm group mt-auto pt-4 border-t border-slate-100">
              Agendar consulta <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card Cirurgia - Anny */}
          <div className="bg-white rounded-2xl p-7 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-brand-petroleum mb-3 bg-brand-petroleum/10 px-2.5 py-1 rounded-md">
                <User size={12} /> Drª Anny Cabral
              </div>
              <ul className="text-slate-600 text-[15px] font-medium leading-relaxed mb-6 space-y-3 mt-2">
                <li className="flex gap-2 items-start"><span className="text-brand-petroleum mt-1">•</span> Cirurgia e traumatologia Bucomaxilo Facial</li>
              </ul>
            </div>
            <a href="https://wa.me/5568992302967" target="_blank" rel="noreferrer" className="inline-flex items-center text-brand-petroleum font-medium text-sm group mt-auto pt-4 border-t border-slate-100">
              Agendar consulta <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
