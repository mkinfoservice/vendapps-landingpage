const stats = [
  { value: 'Alpha', label: 'Fase atual' },
  { value: '100%', label: 'Focado em operação real' },
  { value: 'Multi-tenant', label: 'Arquitetura nativa' },
  { value: 'WhatsApp', label: 'API oficial integrada' },
]

export function CtaFinal() {
  return (
    <section id="alpha" className="relative py-24 overflow-hidden">

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-bg via-surface-bg to-surface-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-brand-secondary/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-brand-accent/6 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#6C5CE7 1px, transparent 1px), linear-gradient(90deg, #6C5CE7 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-secondary text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          Vagas limitadas para o teste alpha
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
          Sua operação pode<br />
          <span className="gradient-text-full">vender mais com menos caos.</span>
        </h2>

        <p className="max-w-xl mx-auto text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
          Conheça a vendApps e participe do teste alpha. Ajude a moldar uma plataforma construída para negócios reais.
        </p>

        {/* Form */}
        <div className="max-w-lg mx-auto bg-surface-card/50 border border-surface-border/60 rounded-2xl p-6 sm:p-8 mb-12 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-text-primary mb-1">Quero participar do alpha</h3>
          <p className="text-sm text-text-secondary mb-6">Preencha e entraremos em contato em breve.</p>

          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-text-secondary mb-1.5">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-bg/60 border border-surface-border/60 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-primary/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-text-secondary mb-1.5">Empresa</label>
                <input
                  type="text"
                  placeholder="Nome do negócio"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-bg/60 border border-surface-border/60 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-primary/60 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-text-secondary mb-1.5">WhatsApp</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-bg/60 border border-surface-border/60 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-primary/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-text-secondary mb-1.5">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-bg/60 border border-surface-border/60 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-primary/60 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-xl font-semibold text-white text-sm bg-brand-primary hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-brand-primary/30"
            >
              Quero entrar no alpha →
            </button>
          </form>

          <p className="text-[11px] text-text-secondary/50 text-center mt-4">
            Sem spam. Entraremos em contato pelo WhatsApp ou e-mail informado.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-lg font-bold gradient-text mb-0.5">{s.value}</div>
              <div className="text-xs text-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
