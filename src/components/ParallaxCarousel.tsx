import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// CONFIGURAÇÃO DO CARROSSEL
// ============================================================================
// gapAfter: true  → espaço (separação) DEPOIS desta foto
// singular: true  → foto independente → bordas arredondadas
// singular: false → faz parte de um panorama → bordas retas
// ============================================================================
const carouselItems = [
  { id: '1', src: '/assets/carousel/1.webp', gapAfter: true, singular: true },
  { id: '2', src: '/assets/carousel/2.webp', gapAfter: false, singular: false },
  { id: '3', src: '/assets/carousel/3.webp', gapAfter: false, singular: false },
  { id: '4', src: '/assets/carousel/4.webp', gapAfter: false, singular: false },
  { id: '5', src: '/assets/carousel/5.webp', gapAfter: false, singular: false },
  { id: '6', src: '/assets/carousel/6.webp', gapAfter: false, singular: false },
  { id: '7', src: '/assets/carousel/7.webp', gapAfter: false, singular: false },
  { id: '8', src: '/assets/carousel/9.webp', gapAfter: false, singular: false },
  { id: '9', src: '/assets/carousel/8.webp', gapAfter: false, singular: false }, // 8 e 10 se complementam
  { id: '10', src: '/assets/carousel/10.webp', gapAfter: false, singular: false }, // 10 e 12 se complementam
  { id: '12', src: '/assets/carousel/12.webp', gapAfter: true, singular: false }, // último do par 10+12
  { id: '11', src: '/assets/carousel/11.webp', gapAfter: true, singular: true },
  { id: '13', src: '/assets/carousel/13.webp', gapAfter: true, singular: true },
];

export function ParallaxCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Aguarda as imagens carregarem para calcular a largura correta da trilha
    const images = track.querySelectorAll('img');
    const imagesLoaded = Array.from(images).map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        })
    );

    let ctx: gsap.Context;

    Promise.all(imagesLoaded).then(() => {
      // Calcula o quanto precisamos deslocar horizontalmente
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslateX = trackWidth - viewportWidth;

      // Se as imagens cabem na tela, não faz scroll
      if (maxTranslateX <= 0) return;

      // Cria o contexto GSAP para cleanup automático
      ctx = gsap.context(() => {
        gsap.to(track, {
          x: -maxTranslateX,
          ease: 'none',
          force3D: true,
          modifiers: {
            x: gsap.utils.unitize(Math.round)
          },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,    // scrub síncrono para evitar atraso que gera blur
            pin: false,     // Não usamos pin pois já temos sticky via CSS
            invalidateOnRefresh: true, // Recalcula em resize
          },
        });
      }, section);
    });

    // Cleanup: mata animações e ScrollTrigger ao desmontar
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    // A seção tem 400vh de altura para dar tempo de sobra pro usuário rolar e ver o carrossel.
    <section id="estrutura" className="relative bg-brand-ice" ref={sectionRef} style={{ height: '400vh' }}>

      {/* Contêiner que fica grudado na tela (sticky) */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-brand-ice">

        {/* Cabeçalho */}
        <div className="absolute top-12 left-0 w-full px-4 text-center z-10 pointer-events-none transition-opacity duration-300">
          <h2 className="text-3xl md:text-5xl font-light text-brand-petroleum mb-4 drop-shadow-sm">
            Casos <span className="font-semibold text-brand-mint">Invisalign®</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg drop-shadow-md bg-white/70 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
            Role a tela para baixo e explore nossos resultados
          </p>
        </div>

        {/* Trilha do carrossel */}
        <div
          ref={trackRef}
          className="flex items-center h-[60vh] md:h-[70vh] mt-12"
          style={{
            willChange: 'transform',
            width: 'max-content', // Fundamental para manter a largura natural das imagens
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        >
          {/* Espaço em branco inicial para a primeira imagem não ficar grudada na borda da tela */}
          <div className="w-[10vw] flex-none" />

          {carouselItems.map((item) => (
            <div
              key={item.id}
              className={`flex-none h-full ${item.gapAfter ? 'mr-8 sm:mr-16' : 'mr-0'}`}
            >
              <img
                src={item.src}
                alt={`Ambiente ${item.id}`}
                // w-auto combinado com h-full faz com que a imagem mantenha sua largura original perfeitamente.
                className="w-auto h-full block object-contain shadow-2xl"
                style={{ 
                  borderRadius: item.singular ? '1rem' : '0',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
                draggable="false"
              />
            </div>
          ))}

          {/* Espaço em branco final para a última imagem poder chegar ao meio da tela */}
          <div className="w-[10vw] flex-none" />
        </div>
      </div>
    </section>
  );
}
