import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      quote: "Melhor dentista de todos os tempos. E olha que tenho medo/trauma, mas o Dr Alison é muito paciente e nos deixa confortável.",
      author: "James Maciel",
      image: "/assets/testimonials/james-maciel.webp"
    },
    {
      quote: "Atendimento de Excelência e um profissional super competente! Recomendo muito ☺️",
      author: "LEANDRO BENTO",
      image: "/assets/testimonials/leandro-bento.webp"
    },
    {
      quote: "Excelente atendimento! O Dr. trabalha com Invisalign com muita precisão e cuidado. Além da qualidade técnica, o atendimento é extremamente humanizado, me senti acolhida em todas as etapas. Um grande diferencial é que ele já informa a data prevista de término do tratamento... Recomendo muito!",
      author: "Nayra Sampaio",
      image: "/assets/testimonials/nayra.webp"
    },
    {
      quote: "Parabéns pelo excelente trabalho, meu amigo Alison! Dá pra ver o cuidado, a dedicação e o profissionalismo em cada detalhe. Sua clínica é referência em qualidade e atendimento.",
      author: "MARINHO DA SILVA ROCHA",
      image: "/assets/testimonials/marinho.webp"
    },
    {
      quote: "Lugar incrível, aconchegante, recepção super atenciosa",
      author: "Pedro Lucas",
      image: "/assets/testimonials/pedro.webp"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="depoimentos" className="pt-12 pb-4 sm:pt-16 sm:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkblue mb-3">
              O que dizem os pacientes
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <span className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </span>
              5.0 no Google
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-petroleum hover:border-brand-petroleum transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-petroleum hover:border-brand-petroleum transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] sm:min-w-[360px] snap-center bg-brand-ice p-7 rounded-2xl border border-slate-100 flex flex-col h-fit gap-5"
            >
              {/* Author Info at the Top */}
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.author} className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0" />
                <div>
                  <p className="text-brand-darkblue font-semibold text-sm leading-tight">{item.author}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                  </div>
                </div>
              </div>

              {/* Quote Below */}
              <p className="text-slate-700 leading-relaxed text-sm">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
