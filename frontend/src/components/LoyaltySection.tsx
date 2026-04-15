const loyaltyFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    color: 'primary',
    title: 'Pontos por compra',
    description: 'Configure quantos pontos valem por real gasto. O cliente acumula automaticamente em cada compra — PDV, delivery ou catálogo online.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    color: 'accent',
    title: 'Cupons de desconto',
    description: 'O cliente troca os pontos acumulados por cupons de desconto aplicáveis na próxima compra — no balcão ou no site da loja.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    color: 'secondary',
    title: 'Resgate por produtos',
    description: 'Em promoções especiais, o cliente pode trocar pontos por produtos do catálogo. Ideal para lançamentos e datas comemorativas.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    color: 'primary',
    title: 'Aba de recompensas no site',
    description: 'O catálogo da loja tem uma aba de Recompensas onde o cliente vê o saldo de pontos e solicita o resgate — sem precisar ligar ou ir ao balcão.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    color: 'accent',
    title: 'Notificação automática no WhatsApp',
    description: 'Após cada compra, o cliente recebe no WhatsApp: pontos ganhos, saldo atual e uma chamada para voltar. Sem configuração extra.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: 'secondary',
    title: 'Identificação por CPF ou telefone',
    description: 'O cliente é identificado pelo CPF ou pelo número de celular — ambos acumulam pontos corretamente, sem duplicidade.',
  },
]

const colorMap = {
  primary: { border: 'border-brand-primary/20', bg: 'bg-brand-primary/10', text: 'text-brand-primary' },
  secondary: { border: 'border-brand-secondary/20', bg: 'bg-brand-secondary/10', text: 'text-brand-secondary' },
  accent: { border: 'border-brand-accent/20', bg: 'bg-brand-accent/10', text: 'text-brand-accent' },
}

export function LoyaltySection() {
  return (
    <section id="fidelidade" className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-medium mb-5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
              </svg>
              Programa de fidelidade
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Seu cliente volta.<br />
              <span className="gradient-text">Porque vale a pena voltar.</span>
            </h2>

            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Cada compra gera pontos. Pontos viram desconto ou produto. O cliente recebe tudo no WhatsApp e ainda pode consultar o saldo pelo catálogo online da sua loja. Um programa de fidelidade profissional — sem app extra, sem mensalidade separada.
            </p>

            <div className="space-y-4 mb-8">
              {loyaltyFeatures.map((f, i) => {
                const c = colorMap[f.color as keyof typeof colorMap]
                return (
                  <div key={i} className="flex gap-3">
                    <div className={`shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center mt-0.5 ${c.border} ${c.bg} ${c.text}`}>
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary mb-0.5">{f.title}</div>
                      <div className="text-xs text-text-secondary leading-relaxed">{f.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="#teste-gratis"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm bg-brand-primary hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-primary/30"
            >
              Ativar fidelidade na minha loja
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M3 8a.5.5 0 01.5-.5h6.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H3.5A.5.5 0 013 8z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Right: visual mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm space-y-3">

              {/* Points card */}
              <div className="rounded-2xl border border-brand-primary/30 bg-surface-card/60 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-text-secondary mb-0.5">Saldo de pontos</div>
                    <div className="text-3xl font-black gradient-text">1.240 pts</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                    </svg>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-surface-border/40 rounded-full overflow-hidden">
                  <div className="h-full w-[62%] bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
                </div>
                <div className="flex items-center justify-between mt-1.5 text-[10px] text-text-secondary">
                  <span>1.240 / 2.000 pts para próximo nível</span>
                  <span className="text-brand-primary font-medium">62%</span>
                </div>
              </div>

              {/* Recompensas disponíveis */}
              <div className="rounded-2xl border border-surface-border/60 bg-surface-card/40 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  <span className="text-xs font-semibold text-text-primary uppercase tracking-wide">Recompensas disponíveis</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Cupom 10% de desconto', pts: '500 pts', type: 'cupom', available: true },
                    { label: 'Café Espresso grátis', pts: '800 pts', type: 'produto', available: true },
                    { label: 'Combo do Chef (promo)', pts: '1.200 pts', type: 'produto', available: false },
                  ].map((r, i) => (
                    <div key={i} className={`flex items-center justify-between p-2.5 rounded-xl border ${r.available ? 'border-surface-border/50 bg-surface-bg/40' : 'border-surface-border/30 bg-surface-bg/20 opacity-50'}`}>
                      <div>
                        <div className={`text-[11px] font-medium ${r.available ? 'text-text-primary' : 'text-text-secondary'}`}>{r.label}</div>
                        <div className={`text-[9px] px-1.5 py-0.5 rounded-full inline-block mt-0.5 ${r.type === 'cupom' ? 'bg-brand-accent/10 text-brand-accent' : 'bg-brand-secondary/10 text-brand-secondary'}`}>
                          {r.type}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-semibold text-brand-primary">{r.pts}</div>
                        {r.available && (
                          <div className="text-[9px] text-brand-accent mt-0.5">Resgatar</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp notification */}
              <div className="rounded-2xl border border-brand-accent/20 bg-brand-accent/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#22C55E">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.522 5.858L0 24l6.253-1.636A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.695-.505-5.24-1.385l-.374-.222-3.895 1.02 1.04-3.79-.244-.39A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  <span className="text-[10px] font-semibold text-brand-accent uppercase tracking-wide">WhatsApp automático</span>
                </div>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Olá, <span className="text-text-primary font-medium">João</span>! Você ganhou <span className="text-brand-primary font-semibold">+80 pontos</span> nesta compra. Saldo atual: <span className="text-brand-primary font-semibold">1.240 pts</span>. Acesse sua loja e resgate suas recompensas. 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
