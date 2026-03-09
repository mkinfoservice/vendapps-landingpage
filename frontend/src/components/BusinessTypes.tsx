const businesses = [
  {
    emoji: '🐾',
    title: 'Petshops',
    description: 'Gerencie agendamentos, vendas de produtos e serviços. Notifique o tutor automaticamente a cada etapa.',
    tags: ['Catálogo', 'Pedidos', 'WhatsApp'],
  },
  {
    emoji: '🍔',
    title: 'Delivery & Restaurantes',
    description: 'Receba pedidos, organize filas de preparo e despache entregas com rotas otimizadas para seus motoboys.',
    tags: ['Rotas', 'Pedidos', 'Tempo real'],
  },
  {
    emoji: '🛒',
    title: 'Lojas locais',
    description: 'Catálogo digital, checkout simples e gestão de pedidos para lojas que atendem por WhatsApp ou online.',
    tags: ['Catálogo', 'Checkout', 'Financeiro'],
  },
  {
    emoji: '📦',
    title: 'Operações com entregadores',
    description: 'Gerencie equipes de entrega, monte rotas inteligentes e acompanhe cada entregador em campo.',
    tags: ['Rotas', 'Entregadores', 'Logística'],
  },
  {
    emoji: '💬',
    title: 'Negócios que vendem por WhatsApp',
    description: 'Profissionalize sua operação. Saia do caos do manual e centralize tudo em uma plataforma real.',
    tags: ['WhatsApp', 'Automação', 'Pedidos'],
  },
  {
    emoji: '🏢',
    title: 'Redes e franquias',
    description: 'Multi-tenant nativo. Gerencie várias unidades em uma única plataforma com controle centralizado.',
    tags: ['Multiempresa', 'Painel', 'Escalável'],
  },
]

const tagColors = [
  'border-brand-primary/30 bg-brand-primary/10 text-brand-primary',
  'border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary',
  'border-brand-accent/30 bg-brand-accent/10 text-brand-accent',
]

export function BusinessTypes() {
  return (
    <section id="negocios" className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary text-xs font-medium mb-5">
            Para quem é
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Feito para negócios que<br />
            <span className="gradient-text">vendem, entregam e atendem.</span>
          </h2>
          <p className="max-w-lg mx-auto text-text-secondary text-base leading-relaxed">
            Se o seu negócio tem pedidos, clientes e entregas — a vendApps foi feita para você.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {businesses.map((b, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-surface-border/60 bg-surface-card/30 hover:bg-surface-card/60 hover:border-surface-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-surface-bg/60 border border-surface-border/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                {b.emoji}
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">{b.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{b.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {b.tags.map((tag, j) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${tagColors[j % tagColors.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
