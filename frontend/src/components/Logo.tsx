/**
 * Logo — vendApps
 *
 * ÍCONE (a criar):
 *   Conceito: cubo isométrico (face esquerda + face inferior + face frontal) + 3 barras crescentes + seta diagonal
 *   viewBox:  "0 0 60 56"
 *   Render:   width={size} height={size}  (size padrão = 40 na Navbar)
 *   Gradiente (bottom-left → top-right):  #6C5CE7 → #00D2FF → #AAFF45
 *
 * Estrutura do SVG:
 *   Face esquerda:  path "M2 48 L2 26 L16 16 L16 38 Z"
 *   Face inferior:  path "M2 48 L16 38 L44 38 L30 48 Z"
 *   Face frontal:   path "M16 16 L44 16 L44 38 L16 38 Z"  (outline)
 *   Barra 1 (menor): rect x=19 y=30 w=6 h=8
 *   Barra 2 (média): rect x=27 y=24 w=6 h=14
 *   Barra 3 (maior): rect x=35 y=18 w=6 h=20
 *   Seta caule:     line x1=42 y1=12 x2=56 y2=2
 *   Seta ponta:     path "M46 2 L56 2 L56 12"
 */

interface LogoProps {
  size?: number
  withWordmark?: boolean
  className?: string
}

export function Logo({ size = 40, withWordmark = true, className = '' }: LogoProps) {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      className={`flex items-center gap-2.5 cursor-pointer select-none ${className}`}
      aria-label="vendApps — voltar ao início"
    >
      {/* Placeholder — substituir pelo ícone SVG final */}
      <div
        style={{ width: size, height: size }}
        className="rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-primary text-xs font-bold"
      >
        V
      </div>

      {withWordmark && (
        <span className="text-xl font-bold tracking-tight leading-none">
          <span className="gradient-text">vend</span>
          <span className="text-text-primary">Apps</span>
        </span>
      )}
    </a>
  )
}
