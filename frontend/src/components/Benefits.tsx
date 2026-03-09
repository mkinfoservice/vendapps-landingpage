const benefits = [
  {
    color: 'primary',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Catálogo digital',
    description: 'Publique seus produtos com fotos, preços e categorias. Seus clientes pedem direto pelo catálogo online.',
  },
  {
    color: 'secondary',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: 'Pedidos centralizados',
    description: 'Todos os pedidos em um painel único. Acompanhe o status de cada um do recebimento à entrega.',
  },
  {
    color: 'accent',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    title: 'Automação via WhatsApp',
    description: 'Notificações automáticas de status enviadas para o cliente pelo WhatsApp Business API. Sem digitar nada.',
  },
  {
    color: 'primary',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: 'Rotas e entregas',
    description: 'Crie rotas otimizadas para seus entregadores com abertura direta no Waze ou Google Maps.',
  },
  {
    color: 'secondary',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Painel administrativo',
    description: 'Visão completa da operação em tempo real. Pedidos, entregas, entregadores e status num só lugar.',
  },
  {
    color: 'accent',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Financeiro integrado',
    description: 'Acompanhe receita, pedidos pagos e pendências. Métricas reais da sua operação sem planilha.',
  },
  {
    color: 'primary',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Multiempresa',
    description: 'Gerencie múltiplas operações na mesma plataforma. Ideal para redes, franquias e gestores de mais de um negócio.',
  },
  {
    color: 'secondary',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Escalável por design',
    description: 'Arquitetura moderna pronta para crescer junto com o seu negócio — sem travar quando a demanda aumentar.',
  },
]

const colorMap = {
  primary: {
    border: 'border-brand-primary/20',
    bg: 'bg-brand-primary/10',
    text: 'text-brand-primary',
    hover: 'group-hover:bg-brand-primary/15 group-hover:border-brand-primary/40',
  },
  secondary: {
    border: 'border-brand-secondary/20',
    bg: 'bg-brand-secondary/10',
    text: 'text-brand-secondary',
    hover: 'group-hover:bg-brand-secondary/15 group-hover:border-brand-secondary/40',
  },
  accent: {
    border: 'border-brand-accent/20',
    bg: 'bg-brand-accent/10',
    text: 'text-brand-accent',
    hover: 'group-hover:bg-brand-accent/15 group-hover:border-brand-accent/40',
  },
}

export function Benefits() {
  return (
    <section id="recursos" className="relative py-24">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-medium mb-5">
            Tudo que você precisa
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Uma plataforma.<br />
            <span className="gradient-text">Operação completa.</span>
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary text-base leading-relaxed">
            Cada módulo da vendApps foi pensado para resolver um ponto real da operação de negócios que vendem, atendem e entregam.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => {
            const c = colorMap[b.color as keyof typeof colorMap]
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-surface-border/60 bg-surface-card/30 hover:bg-surface-card/60 hover:border-surface-border transition-all duration-300 flex flex-col gap-4"
              >
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${c.border} ${c.bg} ${c.text} ${c.hover}`}
                >
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1.5">{b.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{b.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
