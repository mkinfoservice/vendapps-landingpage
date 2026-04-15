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
