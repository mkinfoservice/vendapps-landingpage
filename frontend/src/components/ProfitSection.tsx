const gains = [
  {
    color: 'accent',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    stat: '+32%',
    label: 'no ticket médio',
    description: 'O stepper de adicionais guia o cliente passo a passo. Mais itens por pedido, sem pressão. Aumento comprovado em cafeterias e restaurantes.',
  },
  {
    color: 'secondary',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    stat: '+45%',
    label: 'de retenção com fidelidade',
    description: 'Clientes que recebem pontos e mensagem de fidelidade no WhatsApp voltam mais. Simples assim.',
  },
  {
    color: 'primary',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    stat: '−2h',
    label: 'por dia em operação manual',
    description: 'Com impressão automática, WhatsApp automático e rotas prontas — sua equipe para de apagar incêndio e começa a atender melhor.',
  },
  {
    color: 'accent',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    stat: 'Zero',
    label: 'pedido iFood redigitado',
    description: 'Cada pedido redigitado manualmente custa tempo, cria erro e atrasa a cozinha. Com vendApps, isso nunca mais acontece.',
  },
]

const beforeAfter = [
  { before: 'Pedido no iFood digitado na mão', after: 'Entra automático no sistema' },
  { before: 'Cozinha chamada para cada pedido', after: 'Comanda imprime sozinha' },
  { before: 'WhatsApp respondido manualmente', after: 'Status enviado automático' },
  { before: 'Caixa fechado no "feeling"', after: 'Relatório com 1 clique' },
  { before: 'Entregador sem rota definida', after: 'Rota otimizada no celular' },
  { before: 'NF-e emitida uma por uma', after: 'Emissão automática no fechamento' },
]

const colorMap = {
  primary: { text: 'text-brand-primary', border: 'border-brand-primary/20', bg: 'bg-brand-primary/10' },
  secondary: { text: 'text-brand-secondary', border: 'border-brand-secondary/20', bg: 'bg-brand-secondary/10' },
  accent: { text: 'text-brand-accent', border: 'border-brand-accent/20', bg: 'bg-brand-accent/10' },
}

export function ProfitSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-medium mb-5">
            Resultado real
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Quanto custa não ter<br />
            <span className="gradient-text">o sistema certo?</span>
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary text-base leading-relaxed">
            Cada pedido perdido, cada erro de redigitação e cada cliente que não volta é dinheiro saindo do seu bolso. O vendApps fecha essas torneiras.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {gains.map((g, i) => {
            const c = colorMap[g.color as keyof typeof colorMap]
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-surface-border/60 bg-surface-card/30 flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${c.border} ${c.bg} ${c.text}`}>
                  {g.icon}
                </div>
                <div>
                  <div className={`text-3xl font-black mb-0.5 ${c.text}`}>{g.stat}</div>
                  <div className="text-sm font-semibold text-text-primary mb-2">{g.label}</div>
                  <p className="text-xs text-text-secondary leading-relaxed">{g.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Before / After */}
        <div className="rounded-2xl border border-surface-border/60 bg-surface-card/30 overflow-hidden">
          <div className="grid grid-cols-2 border-b border-surface-border/60">
            <div className="px-6 py-4 border-r border-surface-border/60">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-red-400">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Sem vendApps
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="#22C55E" strokeWidth="1.2" />
                  <path d="M4.5 7l2 2 3-3" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Com vendApps
              </div>
            </div>
          </div>
          {beforeAfter.map((item, i) => (
            <div key={i} className={`grid grid-cols-2 ${i < beforeAfter.length - 1 ? 'border-b border-surface-border/40' : ''}`}>
              <div className="px-6 py-4 border-r border-surface-border/40 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                <span className="text-sm text-text-secondary">{item.before}</span>
              </div>
              <div className="px-6 py-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                <span className="text-sm text-text-primary font-medium">{item.after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bridge */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary text-sm mb-2">Sua operação pode funcionar assim desde o primeiro dia.</p>
          <a
            href="#teste-gratis"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm bg-brand-primary hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-primary/30"
          >
            Começar teste gratuito
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M3 8a.5.5 0 01.5-.5h6.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H3.5A.5.5 0 013 8z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
