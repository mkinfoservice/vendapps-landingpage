const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    text: 'Pedidos chegando por WhatsApp, telefone e anotação no papel — sem controle nenhum.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    text: 'Atendimento lento no WhatsApp: responder status de pedido manualmente pra cada cliente.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: 'Entregadores sem rota definida, saindo em ordem errada e atrasando todas as entregas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    text: 'Nenhuma visibilidade do financeiro: não sabe quanto vendeu, quanto recebeu nem o que está em aberto.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    text: 'Sem painel centralizado: cada operação em um app diferente, nada se conversa.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    text: 'Difícil crescer: o negócio escala, a operação vira caos.',
  },
]

export function Problem() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Subtle top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-surface-border/0 to-surface-border/60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-medium mb-5">
            O problema real
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Seu negócio cresce,<br />
            <span className="text-text-secondary">mas a operação vira caos.</span>
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary text-base leading-relaxed">
            A vendApps organiza vendas, atendimento e entregas em um único sistema — para você parar de apagar incêndios e começar a escalar.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group flex gap-4 p-5 rounded-2xl border border-surface-border/60 bg-surface-card/30 hover:bg-surface-card/60 hover:border-red-500/20 transition-all duration-300"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/15 transition-colors">
                {problem.icon}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed pt-1">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary text-sm">
            Esses problemas têm solução.
          </p>
          <div className="mt-3 flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-surface-border/60 to-brand-primary/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
