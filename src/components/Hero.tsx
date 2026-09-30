import { useEffect, useRef, useState } from 'react';
import { Calendar, MessageCircle, Award, Star } from 'lucide-react';

const chapters = [
  {
    id: 'apresentacao',
    eyebrow: 'Dr. Alison Mota Rabelo · CRO/AC 1229',
    title: 'Ortodontista. Especialista. Acreano.',
    sub: 'Rio Branco, Acre.',
    body: 'Formado e especializado em Ortodontia, Dr. Alison construiu sua carreira com foco em resultados clínicos precisos e atendimento humano. Hoje, é referência no estado.',
    badge: null,
    // Card stack transform per chapter — cards shuffle on each chapter
    stack: [
      { img: '/assets/_MG_3178.webp', rotate: '6deg',  x: '12px',  y: '-8px'  },
      { img: '/assets/fotohero.webp', rotate: '-4deg', x: '-10px', y: '10px'  },
      { img: '/assets/fotojaleco.webp', rotate: '1deg',  x: '0px',   y: '0px'   },
    ],
  },
  {
    id: 'invisalign',
    eyebrow: 'Especialidade · Invisalign®',
    title: 'O Top Doctor Invisalign® número 1 no Acre.',
    sub: 'Reconhecido pela Align Technology.',
    body: 'Título concedido pela fabricante do Invisalign® aos profissionais com maior volume e excelência em casos tratados. Uma distinção que poucos possuem no Brasil.',
    badge: { icon: Award, text: 'Top Doctor Invisalign®', color: 'from-yellow-400 to-yellow-600' },
    stack: [
      { img: '/assets/fotojaleco.webp', rotate: '-8deg', x: '-14px', y: '6px'   },
      { img: '/assets/_MG_3178.webp', rotate: '3deg',  x: '8px',   y: '-12px' },
      { img: '/assets/fotohero.webp', rotate: '-1deg', x: '2px',   y: '0px'   },
    ],
  },
  {
    id: 'galeria',
    eyebrow: 'Studio Als Odontologia Integrada · Rio Branco',
    title: 'Tecnologia, cuidado e sem pressa.',
    sub: 'Cada caso, único. Cada resultado, planejado.',
    body: 'À frente do Studio Als Odontologia Integrada, combina planejamento digital 3D com um olhar clínico atento. Você vê o resultado antes mesmo de começar o tratamento.',
    badge: { icon: Star, text: 'Planejamento Digital 3D', color: 'from-brand-mint to-teal-500' },
    stack: [
      { img: '/assets/fotohero.webp', rotate: '10deg', x: '16px',  y: '4px'   },
      { img: '/assets/fotojaleco.webp', rotate: '-6deg', x: '-4px',  y: '-14px' },
      { img: '/assets/_MG_3178.webp', rotate: '2deg',  x: '-2px',  y: '2px'   },
    ],
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Desktop observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    textRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(idx); },
        { threshold: 0.55 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);



  const active = chapters[activeIndex];


  return (
    <section id="inicio" ref={sectionRef} className="relative bg-brand-ice">

      {/* ══════════════════════════════════════════════════ */}
      {/* ══ DESKTOP ══════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════ */}
      <div className="hidden lg:flex" style={{ minHeight: `${chapters.length * 100}vh` }}>

        {/* LEFT – sticky card stack */}
        <div className="sticky top-0 h-screen w-[55%] flex-none flex items-center justify-center bg-brand-ice">
          <div className="absolute w-80 h-80 rounded-full bg-brand-mint/10 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Stacked photo cards — shuffle on chapter change */}
          <div className="relative w-72 h-80 xl:w-80 xl:h-96">
            {active.stack.map((card, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/60"
                style={{
                  rotate: card.rotate,
                  translate: `${card.x} ${card.y}`,
                  zIndex: i + 1,
                  transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              >
                <img
                  src={card.img}
                  alt="Dr. Alison Mota Rabelo"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
              </div>
            ))}

            <div key={`chip-${activeIndex}`} className="absolute -bottom-16 left-0 right-0 flex justify-center animate-hero-fade z-20">
              <span className="inline-block bg-white text-brand-darkblue text-[11px] tracking-widest uppercase font-semibold px-4 py-2 rounded-full shadow-md border border-slate-100">
                {active.eyebrow}
              </span>
            </div>
          </div>

          <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
            {chapters.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: '6px',
                  height: activeIndex === i ? '32px' : '6px',
                  backgroundColor: activeIndex === i ? 'var(--color-brand-mint)' : 'var(--color-brand-darkblue)',
                  opacity: activeIndex === i ? 1 : 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT – scrollable text */}
        <div className="w-[45%] flex-none flex flex-col bg-brand-ice">
          <div className="h-[15vh]" />
          {chapters.map((chapter, i) => (
            <div
              key={chapter.id}
              ref={(el) => { textRefs.current[i] = el; }}
              className="min-h-screen flex items-center px-14 xl:px-20"
            >
              <div className="max-w-lg">
                {chapter.badge && (
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${chapter.badge.color} text-white text-xs font-bold px-4 py-2 rounded-full mb-6 shadow`}>
                    <chapter.badge.icon size={14} />
                    {chapter.badge.text}
                  </div>
                )}
                <p className="text-brand-mint text-[11px] tracking-widest uppercase mb-4 font-semibold">
                  {chapter.eyebrow}
                </p>
                <h1 className={`font-extrabold leading-[1.05] mb-5 text-brand-darkblue transition-all duration-500 text-4xl xl:text-5xl ${activeIndex !== i ? 'opacity-25' : 'opacity-100'}`}>
                  {i === 0 && <span className="block text-sm font-semibold text-brand-petroleum tracking-widest uppercase mb-2">Conheça quem vai cuidar do seu sorriso</span>}
                  {chapter.title}
                </h1>
                <p className="text-brand-petroleum text-base font-semibold mb-4">{chapter.sub}</p>
                <p className="text-slate-500 text-base leading-relaxed mb-10">{chapter.body}</p>
                {i === chapters.length - 1 && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/5568992302967?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Dr.%20Alison." target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-petroleum text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-lg">
                      <Calendar size={16} /> Agendar avaliação
                    </a>
                    <a href="https://wa.me/5568992302967?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20tratamentos." target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 text-brand-darkblue font-medium text-sm hover:border-brand-petroleum transition-all">
                      <MessageCircle size={16} /> Tirar uma dúvida
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="h-[10vh]" />
        </div>
      </div>

      {/* ══ MOBILE — SIMPLES ══ */}
      <div className="lg:hidden bg-brand-ice pt-24 pb-12 px-6">
        {/* Text */}
        <div className="text-center mb-8 flex flex-col items-center">
          <h1 className="text-brand-darkblue text-3xl font-extrabold leading-tight mb-3">
            Dr. Alison Mota Rabelo
          </h1>
          <div className="inline-flex items-center gap-1.5 bg-brand-petroleum/10 border border-brand-petroleum/20 text-brand-petroleum px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            CRO/AC 1229 · Rio Branco, Acre
          </div>
          <p className="text-slate-500 text-base leading-relaxed">
            Ortodontista especializado em Invisalign®. O Top Doctor número 1 no Acre, com planejamento digital e atendimento personalizado.
          </p>
        </div>

        {/* Photos Infinite Scroll */}
        <div className="relative overflow-hidden mb-8 -mx-6 pb-4">
          <div className="flex animate-marquee w-max">
            {/* Set 1 */}
            <div className="flex gap-4 pr-4 pl-4">
              {[ '/assets/fotojaleco.webp', '/assets/fotohero.webp', '/assets/_MG_3178.webp' ].map((src, i) => (
                <div key={`set1-${i}`} className="flex-none w-[65vw] max-w-sm relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
                  <img src={src} alt="Dr. Alison Mota Rabelo" className="w-full h-full object-cover object-top pointer-events-none" />
                </div>
              ))}
            </div>
            {/* Set 2 */}
            <div className="flex gap-4 pr-4 pl-4">
              {[ '/assets/fotojaleco.webp', '/assets/fotohero.webp', '/assets/_MG_3178.webp' ].map((src, i) => (
                <div key={`set2-${i}`} className="flex-none w-[65vw] max-w-sm relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
                  <img src={src} alt="Dr. Alison Mota Rabelo" className="w-full h-full object-cover object-top pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/5568992302967?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Dr.%20Alison."
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-brand-petroleum text-white font-bold text-sm shadow-lg"
          >
            <Calendar size={16} />
            Agendar avaliação
          </a>
          <a
            href="https://wa.me/5568992302967?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20tratamentos."
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-slate-200 text-brand-darkblue font-medium text-sm"
          >
            <MessageCircle size={16} />
            Tirar uma dúvida
          </a>
        </div>
      </div>

      <style>{`
        @keyframes hero-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-fade { animation: hero-fade 0.35s ease both; }
      `}</style>
    </section>
  );
}
