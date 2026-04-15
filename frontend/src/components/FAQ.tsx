import { useState } from 'react'

const faqs = [
  {
    question: 'Preciso instalar alguma coisa?',
    answer: 'Não. O vendApps funciona 100% no navegador — Chrome, Safari ou Firefox. Sem instalação, sem download. Você acessa de qualquer celular, tablet ou computador.',
  },
  {
    question: 'Como funciona a integração com o iFood?',
    answer: 'Você cadastra as credenciais da sua loja (ClientId, ClientSecret e MerchantId) em menos de 5 minutos. A partir daí, todo pedido do iFood entra automaticamente no sistema, imprime na cozinha e tem o status atualizado de volta ao iFood em cada etapa — sem você fazer nada.',
  },
  {
    question: 'A impressão realmente funciona sem clicar nada?',
    answer: 'Sim. Quando um pedido chega — seja do iFood, do catálogo online, da mesa ou do balcão — a comanda imprime automaticamente na cozinha via SignalR (WebSocket em tempo real). Você só configura a impressora uma vez e esquece.',
  },
  {
    question: 'Posso usar em mais de um ponto de venda?',
    answer: 'Sim. Você pode ter múltiplas impressoras, múltiplos caixas e múltiplos terminais. Para redes e franquias, cada unidade tem seu próprio sistema isolado — gerenciados do mesmo painel master.',
  },
  {
    question: 'O programa de fidelidade precisa de um app separado?',
    answer: 'Não. O programa de fidelidade está integrado ao sistema. Pontos são acumulados automaticamente em cada venda — por CPF ou telefone — e a notificação de pontos é enviada pelo WhatsApp sem configuração extra.',
  },
  {
    question: 'Como o app do entregador funciona sem instalar?',
    answer: 'O entregador acessa um link pelo Chrome do celular, loga com telefone + PIN e já vê as rotas atribuídas a ele. Cada parada abre no Waze ou Google Maps com um toque. Não precisa de App Store, Google Play ou configuração.',
  },
  {
    question: 'A emissão de NFC-e funciona mesmo sem internet?',
    answer: 'Sim. O sistema tem contingência offline — os documentos são emitidos localmente e transmitidos à SEFAZ assim que a conexão for restaurada. Sua operação não para por queda de internet.',
  },
  {
    question: 'Quanto tempo leva para começar a usar?',
    answer: 'O DbSeeder cria sua empresa, categorias e produtos de exemplo automaticamente na primeira execução. Para ter o catálogo no ar com seus produtos reais, conta de 30 minutos a algumas horas — dependendo do tamanho do seu cardápio.',
  },
  {
    question: 'Como funciona o multi-tenant? Meus dados ficam misturados?',
    answer: 'Nunca. Cada empresa tem seu próprio subdomínio (suaempresa.vendapps.com.br) e todos os dados são filtrados por CompanyId em cada consulta. É impossível cruzar dados entre clientes diferentes.',
  },
  {
    question: 'Posso integrar com outros marketplaces além do iFood?',
    answer: 'A arquitetura foi desenhada para isso. A interface IMarketplaceOrderIngester permite adicionar Rappi, Uber Eats ou qualquer outro canal sem alterar o núcleo do sistema.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-medium mb-5">
            Dúvidas frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Perguntas<br />
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Não encontrou sua resposta? Fale com a gente pelo WhatsApp.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-brand-primary/30 bg-surface-card/60'
                    : 'border-surface-border/60 bg-surface-card/30 hover:bg-surface-card/50 hover:border-surface-border'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-text-primary' : 'text-text-secondary'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'border-brand-primary/40 bg-brand-primary/10 text-brand-primary rotate-45'
                      : 'border-surface-border text-text-secondary'
                  }`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <line x1="6" y1="1" x2="6" y2="11" />
                      <line x1="1" y1="6" x2="11" y2="6" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-text-secondary text-sm mb-4">Ainda tem dúvida?</p>
          <a
            href="#teste-gratis"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-brand-primary text-sm border border-brand-primary/40 hover:bg-brand-primary/10 transition-all duration-200"
          >
            Fale com a gente
          </a>
        </div>
      </div>
    </section>
  )
}
