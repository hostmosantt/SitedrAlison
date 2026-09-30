import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "Quanto tempo dura um tratamento com Invisalign?",
      a: "Depende do caso. Tem paciente que resolve em 3 meses, outros precisam de 12 a 18. Na avaliação a gente mostra uma simulação com a estimativa real do seu caso."
    },
    {
      q: "Lente de porcelana estraga o dente?",
      a: "Usamos técnicas minimamente invasivas. Em muitos casos o desgaste é quase zero — na espessura de uma lente de contato ocular. O objetivo é sempre preservar o máximo da estrutura natural."
    },
    {
      q: "Implante dói?",
      a: "O procedimento é feito com anestesia local e o pós costuma ser bem tranquilo. A maioria dos pacientes se surpreende com o quanto é mais simples do que imaginava."
    },
    {
      q: "Como funciona o pagamento?",
      a: "Aceitamos Crédito, Débito, Pix e boleto bancário. Parcelamos no cartão. Para pagamento à vista, temos condições especiais. A gente conversa sobre isso depois da avaliação, sem pressão."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="pt-6 pb-14 sm:pt-10 sm:pb-16 bg-brand-ice">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkblue mb-7 text-center">
          Dúvidas frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={faq.q} 
              className="bg-white rounded-xl border border-slate-100 overflow-hidden"
            >
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-brand-darkblue pr-4 text-[15px]">{faq.q}</span>
                <ChevronDown 
                  className={`text-slate-400 transition-transform duration-200 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  size={18} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-200 ${openIdx === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed text-[15px] border-t border-slate-50 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
