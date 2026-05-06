import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Benefits } from './components/Benefits'
import { Differentials } from './components/Differentials'
import { Modules } from './components/Modules'
import { HowItWorks } from './components/HowItWorks'
import { ProfitSection } from './components/ProfitSection'
import { DeliveryApp } from './components/DeliveryApp'
import { WhatsAppSection } from './components/WhatsAppSection'
import { LoyaltySection } from './components/LoyaltySection'
import { SocialProof } from './components/SocialProof'
import { BusinessTypes } from './components/BusinessTypes'
import { PricingTable } from './components/PricingTable'
import { FAQ } from './components/FAQ'
import { CtaFinal } from './components/CtaFinal'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-surface-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Benefits />          {/* #recursos       → Funcionalidades */}
        <Differentials />
        <Modules />
        <HowItWorks />        {/* #como-funciona  → Como funciona   */}
        <ProfitSection />
        <div id="delivery">
          <DeliveryApp />     {/* #delivery       → Delivery        */}
        </div>
        <WhatsAppSection />
        <div id="fidelidade">
          <LoyaltySection />  {/* #fidelidade     → Fidelidade      */}
        </div>
        <SocialProof />
        <BusinessTypes />
        <PricingTable />      {/* #planos         → Planos          */}
        <div id="faq">
          <FAQ />             {/* #faq            → FAQ             */}
        </div>
        <CtaFinal />          {/* #teste-gratis                     */}
      </main>
      <Footer />
    </div>
  )
}

export default App
