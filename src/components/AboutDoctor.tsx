import { Award } from 'lucide-react';

export function AboutDoctor() {

  return (
    <section id="sobre" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-[1.5rem] overflow-hidden shadow-xl aspect-[9/16] sm:aspect-[3/4] bg-brand-darkblue relative">
                <img 
                  src="/assets/troféis.webp"
                  alt="Premiação Dr. Alison"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Tag Overpondo a Imagem */}
              <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[-2rem] w-[90%] sm:w-auto flex items-center gap-4 p-4 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-slate-100 z-10">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2.5 rounded-xl text-white shadow-md shrink-0">
                  <Award size={20} />
                </div>
                <div className="text-left">
                  <p className="text-brand-darkblue font-bold text-sm">Top Doctor Invisalign® — Acre</p>
                  <p className="text-slate-500 text-xs mt-0.5">Reconhecimento pela Align Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkblue mb-6 leading-tight">
              Quem é o Dr. Alison
            </h2>
            
            <p className="text-slate-600 mb-5 leading-relaxed">
              Ortodontista formado e especializado em tratamentos com alinhadores transparentes. É o <strong className="text-brand-darkblue">Top Doctor Invisalign® número 1</strong> no Acre, título concedido pela Align Technology aos profissionais com maior volume e excelência em casos tratados.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              À frente do Studio Als Odontologia Integrada, ele combina planejamento digital com um olhar clínico atento — porque cada caso é um caso, e pressa não combina com resultado de qualidade.
            </p>




          </div>
        </div>
      </div>
    </section>
  );
}
