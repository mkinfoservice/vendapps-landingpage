const deliveryFeatures = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Sem instalar nada',
    description: 'O entregador abre o Chrome do celular. Entra no link. Pronto — sem App Store, sem Google Play.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 8 12 12 14 14" />
      </svg>
    ),
    title: 'Login por telefone + PIN',
    description: 'Simples e rápido. Sem senha longa. Troca de turno em segundos, sem reconfigurar.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
    title: 'Waze e Google Maps com 1 toque',
    description: 'Cada parada abre direto no Waze ou Google Maps. O entregador segue o melhor caminho sem pensar.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Confirmação por parada',
    description: 'Entregue, falhou ou ignorou — cada parada registrada com motivo. Gestor vê tudo em tempo real.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Rotas otimizadas',
    description: 'O sistema cria rotas com OpenRouteService, ordenando as paradas pelo melhor trajeto automaticamente.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'WhatsApp automático ao entregar',
    description: 'Ao confirmar entrega, o cliente recebe mensagem no WhatsApp automaticamente. Sem digitar nada.',
  },
]

export function DeliveryApp() {
  return (
    <section className="relative py-24">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone */}
              <div className="w-64 sm:w-72 rounded-[2.5rem] border-4 border-surface-border/60 bg-surface-card overflow-hidden shadow-2xl shadow-black/50">

                {/* Status bar */}
                <div className="bg-surface-bg px-5 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-[10px] text-text-secondary font-medium">10:42</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="flex gap-0.5">
                      {[2, 3, 4, 4].map((h, i) => (
                        <div key={i} className="w-0.5 bg-text-secondary/50 rounded-sm" style={{ height: `${h * 2}px` }} />
                      ))}
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
                    </svg>
                    <div className="w-6 h-3 rounded-sm border border-text-secondary/40 flex items-center px-0.5">
                      <div className="flex-1 h-1.5 bg-brand-accent rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App header */}
                <div className="bg-surface-card px-4 py-3 border-b border-surface-border/40 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-text-primary">Rota #12 — Hoje</div>
                    <div className="text-[9px] text-brand-secondary">Em andamento · 4 paradas</div>
                  </div>
                  <div className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30">
                    2/4
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-surface-border/30">
                  <div className="h-full w-1/2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-r-full" />
                </div>

                {/* Stop cards */}
                <div className="px-3 py-3 space-y-2 bg-surface-bg/40">

                  {/* Next stop — highlighted */}
                  <div className="rounded-xl border border-brand-secondary/40 bg-brand-secondary/10 p-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
                      <span className="text-[9px] font-semibold text-brand-secondary uppercase tracking-wide">Próxima parada</span>
                    </div>
                    <div className="text-[11px] font-semibold text-text-primary mb-0.5">Carlos Mendes</div>
                    <div className="text-[10px] text-text-secondary mb-2">Rua das Flores, 42 — Pedido #1041</div>
                    <div className="flex gap-1.5">
                      <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-surface-card border border-surface-border/50 text-[9px] text-text-secondary">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                        Waze
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-surface-card border border-surface-border/50 text-[9px] text-text-secondary">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Maps
                      </button>
                    </div>
                  </div>

                  {/* Other stops */}
                  {[
                    { name: 'Maria Souza', addr: 'Av. Central, 180', done: true },
                    { name: 'João Lima', addr: 'Travessa Sul, 9', done: false },
                    { name: 'Ana Costa', addr: 'Rua Norte, 231', done: false },
                  ].map((s, i) => (
                    <div key={i} className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg ${s.done ? 'opacity-50' : ''}`}>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${s.done ? 'bg-brand-accent/20 border-brand-accent/50' : 'border-surface-border'}`}>
                        {s.done && (
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4l2 2 3-3" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className={`text-[10px] font-medium ${s.done ? 'text-text-secondary line-through' : 'text-text-primary'}`}>{s.name}</div>
                        <div className="text-[9px] text-text-secondary">{s.addr}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom actions */}
                <div className="px-3 py-3 border-t border-surface-border/40 bg-surface-card flex gap-2">
                  <button className="flex-1 py-2.5 rounded-xl bg-brand-accent/20 border border-brand-accent/40 text-[11px] font-semibold text-brand-accent">
                    Entregue
                  </button>
                  <button className="flex-1 py-2.5 rounded-xl border border-surface-border/60 text-[11px] font-medium text-text-secondary">
                    Falhou
                  </button>
                </div>
              </div>

              {/* Floating badge — admin view */}
              <div className="absolute -right-4 sm:-right-6 top-1/4 bg-surface-card border border-brand-primary/30 rounded-xl px-3 py-2.5 shadow-xl max-w-[130px]">
                <div className="text-[9px] text-text-secondary mb-1 font-medium uppercase tracking-wide">Gestor vê</div>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-[10px] text-brand-accent font-medium">Em tempo real</span>
                </div>
                <div className="text-[9px] text-text-secondary">3 entregadores ativos</div>
              </div>

              {/* Floating badge — no app */}
              <div className="absolute -left-4 sm:-left-6 bottom-1/4 bg-surface-card border border-brand-secondary/30 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-[10px] text-brand-secondary font-medium">Sem app instalado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary text-xs font-medium mb-5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Delivery inteligente
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              App do entregador.<br />
              <span className="gradient-text">No navegador do celular.</span>
            </h2>

            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Nada para instalar. Nada para configurar. O entregador abre o Chrome, loga com o telefone e o PIN — e já está na rota, com Waze ou Google Maps a um toque de distância.
            </p>

            <div className="space-y-4">
              {deliveryFeatures.map((f, i) => (
                <div key={i} className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary mb-0.5">{f.title}</div>
                    <div className="text-xs text-text-secondary leading-relaxed">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
