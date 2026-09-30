import { Award, GraduationCap, MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[600px] bg-slate-100 flex items-center justify-center">
               <div className="text-center p-8 text-slate-500">
                  <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-mono text-xs">[Foto 2]</span>
                  </div>
                  <p className="font-medium">Foto Dr. Alison em atendimento ou no consultório</p>
                </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
              Conheça o <span className="text-sky-600">Dr. Alison Mota</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Com foco em proporcionar uma experiência de excelência e resultados que aumentam a autoestima dos pacientes, o Dr. Alison se destaca pelo uso de tecnologia avançada em seus tratamentos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-sky-50 p-3 rounded-xl text-sky-600 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Especialista em Ortodontia</h3>
                  <p className="text-slate-600">Formação sólida e contínua atualização para oferecer as melhores soluções.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-50 p-3 rounded-xl text-sky-600 mt-1">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Top Doctor Invisalign®</h3>
                  <p className="text-slate-600">Reconhecimento como um dos maiores especialistas em alinhadores invisíveis no Acre.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-50 p-3 rounded-xl text-sky-600 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">CEO Galeria Mosantt</h3>
                  <p className="text-slate-600">À frente de um espaço que une saúde, estética e conforto para você.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
