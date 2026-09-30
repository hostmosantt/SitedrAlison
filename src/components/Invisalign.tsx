import { Award, ArrowRight } from 'lucide-react';

export function Invisalign() {
  return (
    <section id="invisalign" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      
      {/* ══ DESKTOP (lg and up) ══ */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Award size={16} />
              Top Doctor Invisalign®
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-darkblue mb-6 leading-tight">
              O aparelho invisível que mudou a Ortodontia.
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Alinhadores transparentes planejados digitalmente. Mais conforto, resultado previsível e sem precisar de aparelho metálico. É o tratamento pelo qual somos mais procurados em todo o Acre.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Removível: você tira para comer e escovar os dentes.',
                'Transparente: praticamente imperceptível.',
                'Previsível: veja o resultado antes de começar.',
                'Confortável: sem fios ou braquetes machucando a boca.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-petroleum/10 text-brand-petroleum rounded-full p-1">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/5568992302967" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              Quero saber se é para mim
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
              <img 
                src="/assets/comparando antes e depois.jpg" 
                alt="Antes e depois — Invisalign" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 right-4 flex justify-between px-2">
                 <span className="bg-black/50 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide">Antes</span>
                 <span className="bg-black/50 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide">Depois</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* ══ MOBILE (below lg) ══ */}
      <div className="lg:hidden max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Tag Amarela Centralizada */}
        <div className="inline-flex items-center justify-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          <Award size={16} />
          Top Doctor Invisalign®
        </div>
        
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkblue mb-5 leading-tight">
          O aparelho invisível que mudou a Ortodontia.
        </h2>
        
        {/* Imagem Abaixo do Título */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 mb-5 w-full max-w-md">
          <img 
            src="/assets/comparando antes e depois.jpg" 
            alt="Antes e depois — Invisalign" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-3 left-3 right-3 flex justify-between px-2">
             <span className="bg-black/60 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide">Antes</span>
             <span className="bg-black/60 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide">Depois</span>
          </div>
        </div>
        
        {/* Texto Abaixo da Imagem */}
        <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed mb-4 max-w-md">
          Alinhadores transparentes planejados digitalmente.
        </p>

        <ul className="space-y-3 mb-6 text-left max-w-md w-full px-1">
          {[
            'Removível: você tira para comer e escovar os dentes.',
            'Transparente: praticamente imperceptível.',
            'Previsível: veja o resultado antes de começar.',
            'Confortável: sem fios ou braquetes machucando a boca.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 bg-brand-petroleum/10 text-brand-petroleum rounded-full p-1 shrink-0">
                <ArrowRight size={14} />
              </div>
              <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a 
          href="https://wa.me/5568992302967" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 w-full max-w-md justify-center"
        >
          Quero saber se é para mim
        </a>
        
      </div>
    </section>
  );
}
