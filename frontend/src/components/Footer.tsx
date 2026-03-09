import { Logo } from './Logo'

const links = {
  Produto: ['Recursos', 'Como funciona', 'WhatsApp', 'Módulos', 'Preços'],
  Negócios: ['Petshops', 'Delivery', 'Restaurantes', 'Lojas locais', 'Redes e franquias'],
  Empresa: ['Sobre', 'Blog', 'Contato', 'Alpha'],
}

export function Footer() {
  return (
    <footer className="relative border-t border-surface-border/40 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo size={32} className="mb-4" />
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Plataforma de gestão comercial para negócios que vendem, atendem e entregam.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-xs text-brand-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              Em fase alpha
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-surface-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary/60 text-center sm:text-left">
            © {new Date().getFullYear()} vendApps. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary/60">
            <a href="#" className="hover:text-text-secondary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-text-secondary transition-colors">Termos</a>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              Todos os sistemas operacionais
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
