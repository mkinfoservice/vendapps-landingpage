import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Benefits } from './components/Benefits'
import { Modules } from './components/Modules'
import { HowItWorks } from './components/HowItWorks'
import { WhatsAppSection } from './components/WhatsAppSection'
import { BusinessTypes } from './components/BusinessTypes'
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
        <Modules />
        <HowItWorks />
        <WhatsAppSection />
        <BusinessTypes />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}

export default App
