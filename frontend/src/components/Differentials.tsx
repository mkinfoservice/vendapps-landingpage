const differentials = [
  {
    color: 'primary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Sistema completo — não é só PDV',
    description: 'PDV, catálogo online, iFood, WhatsApp, fidelidade, NFC-e, delivery, estoque e financeiro. Tudo integrado, tudo funcionando junto.',
    highlight: 'completo',
  },
  {
    color: 'secondary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: 'iFood entra automático — zero redigitação',
    description: 'Pedido do iFood chega direto no sistema. Imprime na cozinha. Status atualizado de volta ao iFood. Tudo sem tocar.',
    highlight: 'automático',
  },
  {
    color: 'accent',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
    title: 'Impressão automática em tempo real',
    description: 'Pedido chega, comanda imprime sozinha. Cozinha não precisa ser chamada. Sem delay, sem esquecimento, sem papel voando.',
    highlight: 'sozinha',
  },
  {
    color: 'primary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    title: 'Programa de fidelidade integrado',
    description: 'Pontos por compra, resgate no caixa, notificação automática no WhatsApp. Cliente volta. Sem app extra, sem configuração complexa.',
    highlight: 'volta',
  },
  {
    color: 'secondary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: 'NFC-e emitida automaticamente',
    description: 'Nota fiscal emitida no fechamento da venda, sem clique extra. Contingência offline inclusa. Conformidade fiscal sem dor de cabeça.',
    highlight: 'automaticamente',
  },
  {
    color: 'accent',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'App do entregador — sem instalar nada',
    description: 'O entregador abre o navegador do celular. Loga com telefone + PIN. Vê a rota, navega no Waze e confirma entregas. Pronto.',
    highlight: 'navegador',
  },
  {
    color: 'primary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Multi-tenant — cada cliente isolado',
    description: 'Cada negócio tem o seu sistema próprio com subdomínio exclusivo. Dados separados, identidade visual própria, sem cruzamento.',
    highlight: 'separados',
  },
  {
    color: 'secondary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    title: 'WhatsApp automático do pedido à fidelidade',
    description: 'Confirmação, status de entrega e pontos de fidelidade — tudo enviado pelo WhatsApp Business API oficial, sem digitar nada.',
    highlight: 'oficial',
  },
]

const colorMap = {
  primary: { border: 'border-brand-primary/20', bg: 'bg-brand-primary/10', text: 'text-brand-primary', glow: 'group-hover:border-brand-primary/40' },
  secondary: { border: 'border-brand-secondary/20', bg: 'bg-brand-secondary/10', text: 'text-brand-secondary', glow: 'group-hover:border-brand-secondary/40' },
  accent: { border: 'border-brand-accent/20', bg: 'bg-brand-accent/10', text: 'text-brand-accent', glow: 'group-hover:border-brand-accent/40' },
}

export function Differentials() {
  return (
    <section className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-medium mb-5">
            Por que vendApps
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Não é mais um sistema.<br />
            <span className="gradient-text">É o sistema que faltava.</span>
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary text-base leading-relaxed">
            Cada diferencial foi construído para resolver uma dor real de quem opera um negócio de food service ou varejo no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentials.map((d, i) => {
            const c = colorMap[d.color as keyof typeof colorMap]
            return (
              <div
                key={i}
                className={`group p-5 rounded-2xl border border-surface-border/60 bg-surface-card/30 hover:bg-surface-card/50 transition-all duration-300 flex flex-col gap-4 ${c.glow}`}
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${c.border} ${c.bg} ${c.text}`}>
                  {d.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2 leading-snug">{d.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{d.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 text-center">
          <p className="text-text-primary font-semibold text-base sm:text-lg mb-1">
            Tudo isso sem instalar nada. 100% no navegador.
          </p>
          <p className="text-text-secondary text-sm">
            Acesse de qualquer celular, tablet ou computador. Seu sistema está sempre disponível.
          </p>
        </div>
      </div>
    </section>
  )
}
