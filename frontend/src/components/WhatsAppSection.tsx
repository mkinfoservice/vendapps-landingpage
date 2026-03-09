const features = [
  {
    title: 'Notificações automáticas de status',
    description: 'Pedido confirmado, em preparo, em rota, entregue ou cancelado — o cliente é notificado automaticamente em cada etapa.',
  },
  {
    title: 'API oficial WhatsApp Business',
    description: 'Integração com a API oficial da Meta. Sem bots gambiarra, sem risco de bloqueio — comunicação profissional e confiável.',
  },
  {
    title: 'Templates personalizáveis',
    description: 'Configure mensagens com o nome do cliente, número do pedido e status. Comunicação com a identidade do seu negócio.',
  },
  {
    title: 'Zero mensagem manual',
    description: 'Nenhum atendente precisa digitar status de pedido. A plataforma envia tudo automaticamente conforme o fluxo avança.',
  },
]

const messages = [
  {
    text: 'Olá, Ana! Seu pedido #1038 foi confirmado e está sendo preparado. 🛒',
    tag: 'Pedido confirmado',
    delay: '09:14',
    color: 'brand-primary',
  },
  {
    text: 'Seu pedido #1038 saiu para entrega! Em breve chegará até você. 🚴',
    tag: 'Em rota',
    delay: '10:02',
    color: 'brand-secondary',
  },
  {
    text: 'Pedido #1038 entregue com sucesso! Obrigado pela preferência. ✅',
    tag: 'Entregue',
    delay: '10:47',
    color: 'brand-accent',
  },
]

export function WhatsAppSection() {
  return (
    <section id="whatsapp" className="relative py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-primary/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: phone mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 sm:w-72">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border-4 border-surface-border/60 bg-surface-card overflow-hidden shadow-2xl shadow-black/50">

                {/* Status bar */}
                <div className="bg-surface-bg px-5 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-[10px] text-text-secondary font-medium">10:47</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-1.5 rounded-sm bg-text-secondary/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-text-secondary/40" />
                    <div className="w-3 h-1.5 rounded-sm bg-text-secondary/40" />
                  </div>
                </div>

                {/* WhatsApp header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-accent/30 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#22C55E">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">vendApps Notificações</div>
                    <div className="text-green-200/70 text-[10px]">online</div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="bg-[#ECE5DD] dark:bg-[#0D1117] px-3 py-4 space-y-3 min-h-[280px]"
                  style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)' }}>
                  {messages.map((msg, i) => (
                    <div key={i} className="flex flex-col items-start">
                      <div className="max-w-[85%] bg-surface-card rounded-2xl rounded-tl-sm px-3 py-2.5 shadow-sm">
                        <div className={`text-[10px] font-semibold mb-1 ${
                          msg.color === 'brand-primary' ? 'text-brand-primary' :
                          msg.color === 'brand-secondary' ? 'text-brand-secondary' :
                          'text-brand-accent'
                        }`}>{msg.tag}</div>
                        <p className="text-[11px] text-text-primary leading-relaxed">{msg.text}</p>
                        <div className="text-right mt-1">
                          <span className="text-[9px] text-text-secondary">{msg.delay} ✓✓</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="bg-surface-card px-3 py-2.5 flex items-center gap-2 border-t border-surface-border/30">
                  <div className="flex-1 bg-surface-bg/60 rounded-full px-3 py-1.5 text-[10px] text-text-secondary/50">
                    Mensagem
                  </div>
                  <div className="w-7 h-7 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#22C55E">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 top-1/4 bg-surface-card border border-brand-accent/30 rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-[10px] text-text-primary font-medium">Automático</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-medium mb-5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.522 5.858L0 24l6.253-1.636A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.695-.505-5.24-1.385l-.374-.222-3.895 1.02 1.04-3.79-.244-.39A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Integração WhatsApp
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Transforme seu WhatsApp em um canal de{' '}
              <span className="gradient-text">operação inteligente.</span>
            </h2>

            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Pare de responder manualmente o status de cada pedido. A vendApps automatiza toda a comunicação com seus clientes — do pedido à entrega — via WhatsApp Business API oficial.
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 3.5-4" stroke="#22C55E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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
