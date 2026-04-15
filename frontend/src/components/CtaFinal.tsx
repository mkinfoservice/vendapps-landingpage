import { useState, useEffect } from 'react'

declare global {
  interface Window {
    __vendappsPlano?: string
  }
}

const WEB3FORMS_KEY = '14941864-c768-4c27-8764-7d28c080e897'

const stats = [
  { value: '7 dias', label: 'Teste gratuito' },
  { value: '100%', label: 'Web — sem instalar' },
  { value: 'iFood', label: 'Integração inclusa' },
  { value: 'Multi-tenant', label: 'Arquitetura nativa' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export function CtaFinal() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '' })
  const [selectedPlan, setSelectedPlan] = useState('')

  useEffect(() => {
    const plan = window.__vendappsPlano
    if (plan) setSelectedPlan(plan)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const plan = window.__vendappsPlano || selectedPlan || 'Não informado'

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Novo teste gratuito solicitado — ${form.name} (${form.company}) · Plano: ${plan}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          plano_interesse: plan,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', company: '', phone: '', email: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-3.5 py-2.5 rounded-xl bg-surface-bg/60 border border-surface-border/60 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-primary/60 transition-colors'

  return (
    <section id="teste-gratis" className="relative py-24 overflow-hidden">

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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          7 dias grátis — sem cartão de crédito
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
          Solicite um período de<br />
          <span className="gradient-text-full">teste gratuito para sua loja.</span>
        </h2>

        <p className="max-w-xl mx-auto text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
          Preencha abaixo e nossa equipe entra em contato para configurar seu sistema personalizado — sem custo, sem compromisso.
        </p>

        {/* Form */}
        <div className="max-w-lg mx-auto bg-surface-card/50 border border-surface-border/60 rounded-2xl p-6 sm:p-8 mb-12 backdrop-blur-sm">

          {status === 'success' ? (
            <div className="py-8 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">Solicitação recebida!</h3>
                <p className="text-sm text-text-secondary">Nossa equipe vai entrar em contato em breve pelo WhatsApp ou e-mail para configurar seu teste.</p>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-text-primary mb-1">Solicitar período de teste gratuito</h3>
              <p className="text-sm text-text-secondary mb-6">
                Preencha e entraremos em contato em até 1 dia útil.
              </p>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-text-secondary mb-1.5">Nome</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-text-secondary mb-1.5">Nome do negócio</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Restaurante, cafeteria..."
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1.5">WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(11) 99999-9999"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className={inputClass}
                  />
                </div>

                {/* Selected plan indicator */}
                {selectedPlan && (
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-sm">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#6C5CE7" strokeWidth="1" />
                      <path d="M4.5 7l2 2 3-3" stroke="#6C5CE7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-text-secondary">Plano de interesse: <span className="text-brand-primary font-semibold">{selectedPlan}</span></span>
                  </div>
                )}

                {status === 'error' && (
                  <p className="text-xs text-red-400 text-center">
                    Erro ao enviar. Tente novamente ou entre em contato diretamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full mt-2 py-3.5 rounded-xl font-semibold text-white text-sm bg-brand-primary hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-brand-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Enviando...' : 'Quero testar grátis por 7 dias →'}
                </button>
              </form>

              <p className="text-[11px] text-text-secondary/50 text-center mt-4">
                Sem spam. Entraremos em contato pelo WhatsApp ou e-mail informado.
              </p>
            </>
          )}
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
