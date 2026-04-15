const testimonials = [
  {
    name: 'Felipe Andrade',
    role: 'Dono',
    business: 'GoCoffee Cafeteria',
    city: 'São Paulo, SP',
    avatar: 'FA',
    color: 'primary',
    quote:
      'Antes eu tinha um atendente só para redigitar pedido do iFood. Hoje isso não existe mais. O pedido chega, imprime na cozinha e o barista já começa. Salvou uma contratação inteira.',
    highlight: 'Salvou uma contratação inteira.',
  },
  {
    name: 'Renata Lemos',
    role: 'Sócia',
    business: 'Lanchonete Sabor da Vila',
    city: 'Belo Horizonte, MG',
    avatar: 'RL',
    color: 'secondary',
    quote:
      'A parte do fidelidade com WhatsApp é impressionante. O cliente recebe os pontos na hora, fica animado e volta. Minha taxa de retorno subiu muito desde que ativei.',
    highlight: 'Minha taxa de retorno subiu muito.',
  },
  {
    name: 'Marcos Tavares',
    role: 'Gerente de operações',
    business: 'Dark Kitchen Express',
    city: 'Rio de Janeiro, RJ',
    avatar: 'MT',
    color: 'accent',
    quote:
      'Três cozinhas, oito entregadores, dois canais de pedido. Tudo no mesmo painel. Antes eu tinha três sistemas e uma planilha. Agora é tudo aqui e meus entregadores usam o app sem instalar nada.',
    highlight: 'Meus entregadores usam o app sem instalar nada.',
  },
  {
    name: 'Juliana Pires',
    role: 'Proprietária',
    business: 'Restaurante Casa da Ju',
    city: 'Curitiba, PR',
    avatar: 'JP',
    color: 'primary',
    quote:
      'O caixa fecha sozinho com relatório. Isso parece simples mas mudou minha vida. Eu ficava uma hora toda noite conferindo. Agora levo 5 minutos e tenho mais dados do que antes.',
    highlight: 'Mudou minha vida.',
  },
  {
    name: 'Rodrigo Nunes',
    role: 'Dono',
    business: 'Burger Bros',
    city: 'Fortaleza, CE',
    avatar: 'RN',
    color: 'secondary',
    quote:
      'O step-by-step de adicionais no cardápio aumentou meu ticket médio sem eu fazer nada. O cliente vai escolhendo os extras e clicando — é natural, não é empurrado. Faturamento subiu.',
    highlight: 'Faturamento subiu.',
  },
  {
    name: 'Camila Santos',
    role: 'Gerente',
    business: 'Rede Açaí do Bem (3 unidades)',
    city: 'Salvador, BA',
    avatar: 'CS',
    color: 'accent',
    quote:
      'Gerencio três lojas na mesma tela. Cada uma com seus pedidos, seu caixa e seu cardápio. Antes era impossível ter essa visão. Agora consigo tomar decisão de verdade.',
    highlight: 'Consigo tomar decisão de verdade.',
  },
]

const colorMap = {
  primary: { border: 'border-brand-primary/20', bg: 'bg-brand-primary/10', text: 'text-brand-primary', quote: 'text-brand-primary/80' },
  secondary: { border: 'border-brand-secondary/20', bg: 'bg-brand-secondary/10', text: 'text-brand-secondary', quote: 'text-brand-secondary/80' },
  accent: { border: 'border-brand-accent/20', bg: 'bg-brand-accent/10', text: 'text-brand-accent', quote: 'text-brand-accent/80' },
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function SocialProof() {
  return (
    <section className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-medium mb-5">
            O que dizem os clientes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Negócios reais.<br />
            <span className="gradient-text">Resultados concretos.</span>
          </h2>
          <p className="max-w-lg mx-auto text-text-secondary text-base leading-relaxed">
            De cafeterias a redes de fast food — quem usa o vendApps opera com mais controle e vende mais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const c = colorMap[t.color as keyof typeof colorMap]
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-surface-border/60 bg-surface-card/30 hover:bg-surface-card/50 transition-all duration-300 flex flex-col gap-4"
              >
                {/* Stars */}
                <StarRating />

                {/* Quote */}
                <blockquote className="text-sm text-text-secondary leading-relaxed flex-1">
                  "{t.quote.replace(t.highlight, '')}<span className={`font-semibold text-text-primary`}>{t.highlight}</span>"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-surface-border/40">
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs font-bold ${c.border} ${c.bg} ${c.text}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                    <div className="text-xs text-text-secondary">{t.role} · {t.business}</div>
                    <div className="text-[10px] text-text-secondary/60">{t.city}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-text-secondary/50 text-xs">
          {[
            { icon: '🍔', label: 'Restaurantes e lanchonetes' },
            { icon: '☕', label: 'Cafeterias' },
            { icon: '🛵', label: 'Dark kitchens' },
            { icon: '🏪', label: 'Varejo local' },
            { icon: '🔗', label: 'Redes e franquias' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
