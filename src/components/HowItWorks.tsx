import { MessageCircle, Search, FileText, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      num: '01',
      icon: <MessageCircle size={28} />,
      title: 'Agende pelo WhatsApp',
      desc: 'Entre em contato de forma rápida e prática para marcar seu horário de acordo com sua disponibilidade.'
    },
    {
      num: '02',
      icon: <Search size={28} />,
      title: 'Avaliação personalizada',
      desc: 'Consulta inicial detalhada para entender seus desejos e necessidades com exames de alta precisão.'
    },
    {
      num: '03',
      icon: <FileText size={28} />,
      title: 'Planejamento do tratamento',
      desc: 'Criação de um plano digital e previsível, desenhado exclusivamente para o seu sorriso.'
    },
    {
      num: '04',
      icon: <Sparkles size={28} />,
      title: 'Transformação do sorriso',
      desc: 'Execução cuidadosa para que você conquiste um sorriso saudável, funcional e belo.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px', // Trigger when item is near the vertical center
        threshold: 0
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-14 bg-brand-ice relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-petroleum tracking-widest uppercase mb-3">Sua Jornada</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-darkblue">
            Como funciona o seu <span className="font-light">tratamento</span>
          </h3>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Connecting Line Base */}
          <div className="absolute top-10 left-[12.5%] w-[75%] h-1 bg-brand-petroleum/20 -translate-y-1/2 rounded-full z-0"></div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-20 h-20 rounded-full border-4 border-brand-petroleum bg-white text-brand-petroleum shadow-xl flex items-center justify-center mb-6 relative transition-all duration-500 group-hover:bg-brand-petroleum group-hover:text-white group-hover:scale-110">
                    {step.icon}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm transition-colors duration-500 bg-brand-mint">
                      {step.num}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-brand-darkblue transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 font-light text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline (Scrollytelling) */}
        <div className="md:hidden relative border-l-2 border-slate-200 ml-12 mt-12 py-10">
          
          {/* Animated Progress Line for Mobile */}
          <div 
            className="absolute top-0 -left-[2px] w-[2px] bg-brand-petroleum transition-all duration-700 ease-out"
            style={{ 
              height: `${activeStep === 0 ? 15 : activeStep === 1 ? 40 : activeStep === 2 ? 70 : 100}%` 
            }}
          ></div>

          <div className="space-y-32">
            {steps.map((step, idx) => {
              const isActive = activeStep >= idx;
              const isCurrent = activeStep === idx;
              
              return (
                <div 
                  key={idx} 
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  data-index={idx}
                  className={`relative pl-10 transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-2 grayscale'
                  }`}
                >
                  {/* Icon Container */}
                  <div className={`absolute -left-10 top-0 w-12 h-12 rounded-full shadow-md flex items-center justify-center transform -translate-x-1/2 transition-all duration-700 ${
                    isCurrent ? 'scale-110 bg-brand-petroleum text-white ring-4 ring-brand-petroleum/20' : 
                    isActive ? 'bg-white text-brand-petroleum border-[1.5px] border-brand-petroleum' : 'bg-white text-slate-300 border-[1.5px] border-slate-200'
                  }`}>
                    <div className="scale-[0.6]">{step.icon}</div>
                    
                    {/* Number Badge */}
                    <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[9px] font-bold flex items-center justify-center transition-colors duration-700 ${
                      isActive ? 'bg-brand-mint' : 'bg-slate-300'
                    }`}>
                      {step.num}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="pt-1">
                    <h4 className={`text-xl font-bold mb-2 transition-colors duration-700 ${
                      isActive ? 'text-brand-darkblue' : 'text-slate-400'
                    }`}>{step.title}</h4>
                    <p className={`font-light text-base transition-colors duration-700 ${
                      isActive ? 'text-slate-600' : 'text-slate-400'
                    }`}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
