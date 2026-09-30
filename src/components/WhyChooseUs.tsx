export function WhyChooseUs() {
  const cards = [
    {
      title: 'Planejamento digital',
      desc: 'Antes de começar qualquer tratamento, você vê uma simulação do resultado no computador. Sem surpresas.'
    },
    {
      title: 'Atendimento sem pressa',
      desc: 'Consultas com tempo dedicado para ouvir, explicar e alinhar expectativas com calma.'
    },
    {
      title: 'Equipe atualizada',
      desc: 'Formação continuada e participação em congressos para trazer o que há de mais atual na odontologia.'
    },
    {
      title: 'Ambiente pensado para você',
      desc: 'Espaço projetado para que a ida ao consultório seja o mais tranquila e confortável possível.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkblue mb-4">
            Por que o Studio Als Odontologia Integrada
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Não é só sobre alinhar dentes. É sobre como você se sente durante e depois do tratamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-petroleum/20 transition-colors"
            >
              <h3 className="text-lg font-bold text-brand-darkblue mb-2">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
