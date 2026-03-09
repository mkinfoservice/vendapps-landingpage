const modules = [
  {
    tag: 'Pedidos',
    color: 'primary',
    title: 'Gestão de pedidos',
    description:
      'Acompanhe todo o fluxo do pedido — do recebimento à entrega — com status em tempo real, histórico completo e notificações automáticas para o cliente.',
    features: ['Status em tempo real', 'Histórico de pedidos', 'Filtros e buscas', 'Notificações automáticas'],
    visual: (
      <div className="space-y-2">
        {[
          { label: '#1042 · Petshop Bella', status: 'Entregue', color: 'bg-brand-accent/20 text-brand-accent border-brand-accent/30' },
          { label: '#1041 · Loja Vida Pet', status: 'Em rota', color: 'bg-brand-secondary/20 text-brand-secondary border-brand-secondary/30' },
          { label: '#1040 · Restaurante Sabor', status: 'Preparando', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
          { label: '#1039 · Dogão Delivery', status: 'Novo', color: 'bg-brand-primary/20 text-brand-primary border-brand-primary/30' },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between bg-surface-bg/60 rounded-lg px-3 py-2 border border-surface-border/30">
            <span className="text-xs text-text-secondary">{item.label}</span>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${item.color}`}>{item.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: 'WhatsApp',
    color: 'accent',
    title: 'WhatsApp automatizado',
    description:
      'Integração com a API oficial do WhatsApp Business. Envie notificações de status, confirmações de pedido e atualizações de entrega de forma automática — sem digitar nada.',
    features: ['API oficial WhatsApp Business', 'Templates personalizáveis', 'Envio automático por evento', 'Sem mensagem manual'],
    visual: (
      <div className="space-y-3">
        <div className="bg-surface-bg/60 rounded-xl p-3 border border-surface-border/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#22C55E">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.522 5.858L0 24l6.253-1.636A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.695-.505-5.24-1.385l-.374-.222-3.895 1.02 1.04-3.79-.244-.39A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-medium text-text-primary">vendApps</div>
              <div className="text-[9px] text-text-secondary">agora</div>
            </div>
          </div>
          <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-2.5 text-[11px] text-text-secondary leading-relaxed">
            Olá, <span className="text-text-primary font-medium">João</span>! Seu pedido <span className="text-brand-accent">#1042</span> foi entregue com sucesso. Obrigado pela preferência! 🎉
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-text-secondary">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          Enviado automaticamente ao marcar como entregue
        </div>
      </div>
    ),
  },
  {
    tag: 'Logística',
    color: 'secondary',
    title: 'Entregas e rotas inteligentes',
    description:
      'Organize entregadores, monte rotas otimizadas e acompanhe o progresso em tempo real. Cada parada abre direto no Waze ou Google Maps — o entregador segue o melhor caminho.',
    features: ['Criação de rotas bidirecionais', 'Área exclusiva do entregador', 'Abertura no Waze / Google Maps', 'Acompanhamento em tempo real'],
    visual: (
      <div className="space-y-2">
        <div className="bg-surface-bg/60 rounded-xl p-3 border border-surface-border/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-medium text-text-secondary uppercase tracking-wide">Rota #08 — hoje</span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30">Em andamento</span>
          </div>
          <div className="space-y-2">
            {[
              { stop: '1ª parada', address: 'Rua das Flores, 42', done: true },
              { stop: '2ª parada', address: 'Av. Central, 180', done: true },
              { stop: '3ª parada', address: 'Travessa Sul, 9', done: false },
              { stop: '4ª parada', address: 'Rua Norte, 231', done: false },
            ].map((s) => (
              <div key={s.stop} className="flex items-center gap-2.5">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${s.done ? 'bg-brand-accent/20 border-brand-accent/50' : 'border-surface-border'}`}>
                  {s.done && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2 3-3" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="text-[9px] text-text-secondary">{s.stop}</div>
                  <div className={`text-[11px] ${s.done ? 'text-text-secondary line-through' : 'text-text-primary'}`}>{s.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-surface-border/50 text-[10px] text-text-secondary hover:border-brand-secondary/40 transition-colors cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Google Maps
          </div>
          <div className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-surface-border/50 text-[10px] text-text-secondary hover:border-brand-secondary/40 transition-colors cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Waze
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: 'Financeiro',
    color: 'primary',
    title: 'Dashboard financeiro',
    description:
      'Visualize métricas da operação, receita acumulada, pedidos pagos e pendências — tudo num painel limpo e fácil de interpretar.',
    features: ['Receita por período', 'Pedidos pagos e pendentes', 'Performance por categoria', 'Exportação de dados'],
    visual: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Receita hoje', value: 'R$ 3.840', color: 'text-brand-accent' },
            { label: 'Pedidos', value: '47', color: 'text-brand-secondary' },
            { label: 'Ticket médio', value: 'R$ 81,70', color: 'text-brand-primary' },
            { label: 'Em aberto', value: 'R$ 420', color: 'text-yellow-400' },
          ].map((s) => (
            <div key={s.label} className="bg-surface-bg/60 rounded-lg p-3 border border-surface-border/30">
              <div className="text-[9px] text-text-secondary mb-1">{s.label}</div>
              <div className={`text-base font-bold ${s.color}`}>{s.value}</div>
            </div>
          ))}
        </div>
        {/* Mini bar chart */}
        <div className="bg-surface-bg/60 rounded-lg p-3 border border-surface-border/30">
          <div className="text-[9px] text-text-secondary mb-2">Últimos 7 dias</div>
          <div className="flex items-end gap-1.5 h-10">
            {[40, 65, 50, 80, 55, 90, 72].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-brand-primary/30 hover:bg-brand-primary/50 transition-colors" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
]

const colorMap = {
  primary: { badge: 'border-brand-primary/30 bg-brand-primary/10 text-brand-primary', accent: 'text-brand-primary', dot: 'bg-brand-primary' },
  secondary: { badge: 'border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary', accent: 'text-brand-secondary', dot: 'bg-brand-secondary' },
  accent: { badge: 'border-brand-accent/30 bg-brand-accent/10 text-brand-accent', accent: 'text-brand-accent', dot: 'bg-brand-accent' },
}

export function Modules() {
  return (
    <section className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary text-xs font-medium mb-5">
            Módulos da plataforma
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Cada módulo resolve<br />
            <span className="gradient-text">um ponto crítico</span> da operação.
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary text-base leading-relaxed">
            Pedidos, logística, WhatsApp e financeiro — integrados e funcionando juntos desde o primeiro acesso.
          </p>
        </div>

        <div className="space-y-6">
          {modules.map((mod, i) => {
            const c = colorMap[mod.color as keyof typeof colorMap]
            const isEven = i % 2 === 0
            return (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl border border-surface-border/60 bg-surface-card/30 hover:bg-surface-card/50 transition-all duration-300"
              >
                {/* Text side */}
                <div className={`flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium mb-4 ${c.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    {mod.tag}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{mod.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{mod.description}</p>
                  <ul className="space-y-2">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="#22C55E" strokeWidth="1" />
                          <path d="M4.5 7l2 2 3-3" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="rounded-xl border border-surface-border/40 bg-surface-bg/60 p-4">
                    {mod.visual}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
