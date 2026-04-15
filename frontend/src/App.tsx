import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Benefits } from './components/Benefits'
import { Differentials } from './components/Differentials'
import { Modules } from './components/Modules'
import { ProfitSection } from './components/ProfitSection'
import { DeliveryApp } from './components/DeliveryApp'
import { WhatsAppSection } from './components/WhatsAppSection'
import { SocialProof } from './components/SocialProof'
import { HowItWorks } from './components/HowItWorks'
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
        <Benefits />
        <Differentials />
        <Modules />
        <ProfitSection />
        <div id="delivery">
          <DeliveryApp />
        </div>
        <WhatsAppSection />
        <SocialProof />
        <HowItWorks />
        <BusinessTypes />
        <PricingTable />
        <div id="faq">
          <FAQ />
        </div>
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}

export default App
