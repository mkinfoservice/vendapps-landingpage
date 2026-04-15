const plans = [
  {
    name: 'Teste Grátis',
    price: 'Grátis',
    period: '7 dias',
    description: 'Experimente sem compromisso. Acesso completo ao plano Starter.',
    highlight: 'Sem cartão de crédito',
    color: 'accent',
    featured: false,
    cta: 'Começar grátis',
    ctaStyle: 'outline',
    features: [
      'Acesso completo ao plano Starter',
      'Catálogo online + QR Code por mesa',
      'PDV com adicionais step-by-step',
      'WhatsApp automático',
      'Programa de fidelidade',
      'Suporte por e-mail',
    ],
    notIncluded: [],
  },
  {
    name: 'Starter',
    price: 'R$ 147',
    period: '/mês',
    description: 'Para quem está profissionalizando a operação e quer parar de perder pedido.',
    highlight: null,
    color: 'secondary',
    featured: false,
    cta: 'Falar com consultor',
    ctaStyle: 'ghost',
    features: [
      'Catálogo online + QR Code por mesa',
      'PDV completo com adicionais step-by-step',
      'Impressão automática (1 impressora)',
      'WhatsApp automático (confirmação + status)',
      'Programa de fidelidade integrado',
      'Gestão de pedidos (1 canal)',
      'Financeiro básico — caixa + relatório diário',
      '1 operador',
    ],
    notIncluded: ['iFood integrado', 'App do entregador', 'NFC-e automática', 'Múltiplas unidades'],
  },
  {
    name: 'Pro',
    price: 'R$ 297',
    period: '/mês',
    description: 'Para quem tem delivery, iFood e quer operação automatizada do início ao fim.',
    highlight: 'Mais popular',
    color: 'primary',
    featured: true,
    cta: 'Falar com consultor',
    ctaStyle: 'primary',
    features: [
      'Tudo do Starter, mais:',
      'iFood integrado — pedido entra automático',
      'App do entregador (sem instalar)',
      'Rotas otimizadas com Waze / Google Maps',
      'Emissão automática de NFC-e',
      'Controle de estoque com alertas',
      'Compras e fornecedores',
      'Até 5 operadores',
      'Impressoras ilimitadas',
      'Pedidos ilimitados',
    ],
    notIncluded: ['Múltiplas unidades', 'Master Admin'],
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    description: 'Para redes, franquias e operações com múltiplas unidades.',
    highlight: null,
    color: 'primary',
    featured: false,
    cta: 'Falar com consultor',
    ctaStyle: 'ghost-primary',
    features: [
      'Tudo do Pro, mais:',
      'Multi-unidades — redes e franquias',
      'Painel Master Admin centralizado',
      'Múltiplos marketplaces (Rappi, Uber Eats)',
      'Comissões e gorjetas por vendedor',
      'Agenda de serviços',
      'DAV / Orçamentos',
      'API de integração',
      'Onboarding assistido',
      'Suporte dedicado + SLA garantido',
    ],
    notIncluded: [],
  },
]

const colorMap = {
  primary: { badge: 'border-brand-primary/30 bg-brand-primary/10 text-brand-primary', check: '#6C5CE7' },
  secondary: { badge: 'border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary', check: '#00D2FF' },
  accent: { badge: 'border-brand-accent/30 bg-brand-accent/10 text-brand-accent', check: '#22C55E' },
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="1" />
      <path d="M4.5 7l2 2 3-3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" stroke="#334155" strokeWidth="1" />
      <path d="M5 5l4 4M9 5L5 9" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function PlanCTA({ plan }: { plan: typeof plans[0] }) {
  function handleClick() {
    window.__vendappsPlano = plan.name
    const el = document.getElementById('teste-gratis')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const base = 'w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] cursor-pointer'

  if (plan.ctaStyle === 'outline') {
    return (
      <button onClick={handleClick} className={`${base} border border-brand-accent/50 text-brand-accent hover:bg-brand-accent/10`}>
        {plan.cta}
      </button>
    )
  }
  if (plan.ctaStyle === 'primary') {
    return (
      <button onClick={handleClick} className={`${base} bg-brand-primary text-white hover:brightness-110 shadow-lg shadow-brand-primary/30`}>
        {plan.cta}
      </button>
    )
  }
  if (plan.ctaStyle === 'ghost-primary') {
    return (
      <button onClick={handleClick} className={`${base} border border-brand-primary/40 text-brand-primary hover:bg-brand-primary/10`}>
        {plan.cta}
      </button>
    )
  }
  return (
    <button onClick={handleClick} className={`${base} border border-surface-border/60 text-text-secondary hover:border-brand-secondary/40 hover:text-text-primary`}>
      {plan.cta}
    </button>
  )
}

export function PricingTable() {
  return (
    <section id="planos" className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-brand-primary/6 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-medium mb-5">
            Planos e preços
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Comece grátis.<br />
            <span className="gradient-text">Cresça no seu ritmo.</span>
          </h2>
          <p className="max-w-lg mx-auto text-text-secondary text-base leading-relaxed">
            7 dias gratuitos para testar com a sua loja, sem cartão de crédito. Depois, escolha o plano ideal para o tamanho da sua operação.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {plans.map((plan) => {
            const c = colorMap[plan.color as keyof typeof colorMap]
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-5 transition-all duration-300 ${
                  plan.featured
                    ? 'border-brand-primary/50 bg-surface-card/70 shadow-xl shadow-brand-primary/10'
                    : 'border-surface-border/60 bg-surface-card/30 hover:bg-surface-card/50'
                }`}
              >
                {/* "Mais popular" badge */}
                {plan.highlight === 'Mais popular' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wide shadow-lg shadow-brand-primary/40">
                    Mais popular
                  </div>
                )}

                {/* Plan name */}
                <div className={`inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-semibold mb-4 ${c.badge}`}>
                  {plan.name}
                </div>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-3xl font-black text-text-primary">{plan.price}</span>
                  {plan.period && <span className="text-sm text-text-secondary ml-1">{plan.period}</span>}
                </div>

                {/* Highlight */}
                {plan.highlight && plan.highlight !== 'Mais popular' && (
                  <div className="text-[11px] text-brand-accent font-medium mb-3">{plan.highlight}</div>
                )}

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-5">{plan.description}</p>

                {/* CTA */}
                <PlanCTA plan={plan} />

                {/* Divider */}
                <div className="my-5 border-t border-surface-border/40" />

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckIcon color={c.check} />
                      <span className={f === 'Tudo do Starter, mais:' || f === 'Tudo do Pro, mais:' ? 'font-semibold text-text-primary/70 italic' : ''}>
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-text-secondary/40">
                      <XIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center text-xs text-text-secondary/50">
          Todos os planos incluem atualizações automáticas, suporte por e-mail e dados isolados por empresa.
          <br />
          Preços em BRL. Planos pagos cobrados mensalmente. Cancele a qualquer momento.
        </div>
      </div>
    </section>
  )
}
