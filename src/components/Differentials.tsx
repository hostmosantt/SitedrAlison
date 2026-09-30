import { ScanFace, Activity, ShieldCheck, Wand2 } from 'lucide-react';
import { useRef, useEffect } from 'react';

export function Differentials() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Vídeo em autoplay nativo não precisa mais do IntersectionObserver
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const features = [
    {
      icon: Activity,
      title: "Sistema NIRI",
      desc: "Tecnologia que auxilia na detecção de cáries interproximais de forma precoce, sem a necessidade de radiação ionizante."
    },
    {
      icon: Wand2,
      title: "Simulação 3D",
      desc: "Ferramenta Outcome Simulator, que permite visualizar uma projeção do sorriso antes mesmo do início do tratamento ortodôntico."
    },
    {
      icon: ScanFace,
      title: "Conforto ao Paciente",
      desc: "Substitui as moldagens convencionais, garantindo um processo de registro da arcada dentária muito mais rápido e sem desconforto."
    },
    {
      icon: ShieldCheck,
      title: "Precisão Clínica",
      desc: "Captura imagens de alta resolução que garantem a confecção de alinhadores e próteses com adaptação milimétrica."
    }
  ];

  return (
    <section className="py-20 bg-brand-petroleum overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            Scanner iTero 5D Plus
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Mais precisão no diagnóstico e conforto no atendimento. O escaneamento digital intraoral é uma etapa fundamental para um planejamento odontológico seguro e previsível.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Video Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-square lg:aspect-[4/5] shadow-lg border border-slate-200">
              <video 
                ref={videoRef}
                src="/assets/videopaciente.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/fotojaleco.webp"
              />
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="bg-brand-petroleum/10 p-2.5 rounded-lg text-brand-petroleum">
                    <ScanFace size={24} />
                  </div>
                  <div>
                    <div className="text-brand-darkblue font-bold text-sm">Escaneamento Digital</div>
                    <div className="text-slate-500 text-xs mt-0.5">Visão 3D e diagnóstico integrado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl shadow-brand-darkblue/10">
                  <div className="bg-brand-ice text-brand-petroleum w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-darkblue mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA Centered */}
            <div className="mt-12 flex justify-center">
              <a href="https://wa.me/5568992302967" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand-darkblue hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
                <ScanFace size={20} />
                Agendar meu Escaneamento
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
