export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-secondary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-accent/6 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#6C5CE7 1px, transparent 1px), linear-gradient(90deg, #6C5CE7 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-sm text-brand-secondary mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          Plataforma em fase alpha — vagas limitadas
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
          <span className="text-text-primary">Automação inteligente</span>
          <br />
          <span className="text-text-primary">para vender mais,</span>
          <br />
          <span className="gradient-text-full">atender melhor</span>
          <br />
          <span className="text-text-primary">e entregar com eficiência.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed mb-10">
          A vendApps centraliza pedidos, catálogo, entregas, financeiro e automações via WhatsApp
          em uma única plataforma para o seu negócio crescer com organização.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#alpha"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm bg-brand-primary hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-primary/30"
          >
            Quero testar no alpha
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M3 8a.5.5 0 01.5-.5h6.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H3.5A.5.5 0 013 8z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#como-funciona"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-text-secondary text-sm border border-surface-border hover:border-brand-primary/50 hover:text-text-primary transition-all duration-200"
          >
            Ver como funciona
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-surface-border/60 bg-surface-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40 glow-primary">

            {/* Mockup top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border/50 bg-surface-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="ml-4 flex-1 h-5 rounded bg-surface-border/40 max-w-[200px]" />
            </div>

            {/* Mockup content */}
            <div className="p-6 grid grid-cols-12 gap-4 min-h-[300px]">

              {/* Sidebar */}
              <div className="col-span-2 hidden sm:flex flex-col gap-3">
                {['Pedidos', 'Catálogo', 'Rotas', 'WhatsApp', 'Financeiro'].map((item, i) => (
                  <div
                    key={item}
                    className={`h-7 rounded-lg text-xs flex items-center px-2 font-medium transition-all ${
                      i === 0
                        ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/30'
                        : 'text-text-secondary/50'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-12 sm:col-span-10 grid grid-cols-3 gap-4">

                {/* Stats cards */}
                {[
                  { label: 'Pedidos hoje', value: '47', color: 'text-brand-secondary' },
                  { label: 'Em entrega', value: '12', color: 'text-brand-accent' },
                  { label: 'Receita', value: 'R$ 3.840', color: 'text-brand-primary' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="col-span-1 rounded-xl bg-surface-bg/60 border border-surface-border/40 p-3"
                  >
                    <div className="text-[10px] text-text-secondary mb-1">{stat.label}</div>
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                  </div>
                ))}

                {/* Order list */}
                <div className="col-span-2 rounded-xl bg-surface-bg/60 border border-surface-border/40 p-3">
                  <div className="text-[10px] text-text-secondary mb-2 font-medium uppercase tracking-wide">Últimos pedidos</div>
                  {[
                    { name: 'Petshop Bella', status: 'Em rota', color: 'bg-brand-secondary/20 text-brand-secondary' },
                    { name: 'Restaurante Sabor', status: 'Entregue', color: 'bg-brand-accent/20 text-brand-accent' },
                    { name: 'Loja Vida Pet', status: 'Novo', color: 'bg-brand-primary/20 text-brand-primary' },
                  ].map((order) => (
                    <div key={order.name} className="flex items-center justify-between py-1.5 border-b border-surface-border/20 last:border-0">
                      <span className="text-[11px] text-text-secondary">{order.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${order.color}`}>{order.status}</span>
                    </div>
                  ))}
                </div>

                {/* Route mini map */}
                <div className="col-span-1 rounded-xl bg-surface-bg/60 border border-surface-border/40 p-3 flex flex-col gap-2">
                  <div className="text-[10px] text-text-secondary font-medium uppercase tracking-wide">Rota ativa</div>
                  <div className="flex-1 rounded-lg bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-brand-accent text-lg font-bold">3</div>
                      <div className="text-[9px] text-text-secondary">paradas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-bg to-transparent pointer-events-none rounded-b-2xl" />
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-text-secondary/50 text-xs">
          {[
            'Integração WhatsApp Business API',
            'Multi-tenant',
            'Rotas inteligentes',
            'Painel em tempo real',
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#22C55E" strokeWidth="1" />
                <path d="M3.5 6l2 2 3-3" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
