const steps = [
  {
    number: '01',
    color: 'primary',
    title: 'Cadastre seus produtos',
    description:
      'Monte seu catálogo digital com fotos, descrições, preços e categorias. Seu cliente já pode visualizar e pedir.',
    detail: 'Leva menos de 10 minutos para ter o catálogo no ar.',
  },
  {
    number: '02',
    color: 'secondary',
    title: 'Receba pedidos e automatize o atendimento',
    description:
      'Os pedidos chegam direto no painel. O cliente recebe confirmação automática pelo WhatsApp — sem você digitar nada.',
    detail: 'Integração com WhatsApp Business API já incluída.',
  },
  {
    number: '03',
    color: 'accent',
    title: 'Organize entregas e acompanhe em tempo real',
    description:
      'Monte rotas para seus entregadores, acompanhe o progresso e veja tudo sendo atualizado no mapa em tempo real.',
    detail: 'Abre no Waze ou Google Maps com um toque.',
  },
  {
    number: '04',
    color: 'primary',
    title: 'Cresça com dados, controle e eficiência',
    description:
      'Acesse o dashboard financeiro, métricas de operação e histórico completo para tomar decisões com base em dados reais.',
    detail: 'Visibilidade total da operação, do primeiro ao último pedido.',
  },
]

const colorMap = {
  primary: {
    number: 'gradient-text',
    ring: 'border-brand-primary/40 bg-brand-primary/10',
    line: 'bg-brand-primary/30',
    dot: 'bg-brand-primary',
  },
  secondary: {
    number: 'text-brand-secondary',
    ring: 'border-brand-secondary/40 bg-brand-secondary/10',
    line: 'bg-brand-secondary/30',
    dot: 'bg-brand-secondary',
  },
  accent: {
    number: 'text-brand-accent',
    ring: 'border-brand-accent/40 bg-brand-accent/10',
    line: 'bg-brand-accent/30',
    dot: 'bg-brand-accent',
  },
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #6C5CE7 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-medium mb-5">
            Como funciona
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Da configuração à<br />
            <span className="gradient-text-full">operação escalável</span> em 4 passos.
          </h2>
          <p className="max-w-lg mx-auto text-text-secondary text-base leading-relaxed">
            A vendApps foi desenhada para ser simples de começar e poderosa para crescer.
          </p>
        </div>

        {/* Timeline — desktop horizontal */}
        <div className="hidden lg:block">
          {/* Steps */}
          <div className="grid grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-primary/30 via-brand-secondary/30 to-brand-accent/30" />

            {steps.map((step, i) => {
              const c = colorMap[step.color as keyof typeof colorMap]
              return (
                <div key={i} className="relative flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center mb-6 ${c.ring}`}>
                    <span className={`text-xl font-black ${c.number}`}>{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-text-primary mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className={`inline-flex items-center gap-1.5 text-[11px] text-text-secondary/70`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                    {step.detail}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline — mobile vertical */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => {
            const c = colorMap[step.color as keyof typeof colorMap]
            const isLast = i === steps.length - 1
            return (
              <div key={i} className="flex gap-5">
                {/* Left: circle + line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 ${c.ring}`}>
                    <span className={`text-base font-black ${c.number}`}>{step.number}</span>
                  </div>
                  {!isLast && <div className={`w-px flex-1 my-2 ${c.line}`} />}
                </div>

                {/* Right: content */}
                <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-8'}`}>
                  <h3 className="text-base font-semibold text-text-primary mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-text-secondary/70">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                    {step.detail}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl border border-surface-border/60 bg-surface-card/30">
          <p className="text-text-secondary text-sm mb-4">
            Pronto para testar na prática?
          </p>
          <a
            href="#alpha"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm bg-brand-primary hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-primary/30"
          >
            Quero testar no alpha
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M3 8a.5.5 0 01.5-.5h6.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H3.5A.5.5 0 013 8z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
