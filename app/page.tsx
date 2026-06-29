import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

// Landing Sections
import LandingHero from "@/components/landing/LandingHero"
import PainPointsSection from "@/components/landing/PainPointsSection"
import StepsSection from "@/components/landing/StepsSection"
import BenefitsGrid from "@/components/landing/BenefitsGrid"
import ReportPreviewSection from "@/components/landing/ReportPreviewSection"
import SocialProofSection from "@/components/landing/SocialProofSection"
import PricingSection from "@/components/landing/PricingSection"
import FAQSection from "@/components/landing/FAQSection"
import FinalCTASection from "@/components/landing/FinalCTASection"

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink selection:bg-brand-500 selection:text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow flex flex-col">
        <LandingHero />
        <PainPointsSection />
        <StepsSection />
        <BenefitsGrid />
        <ReportPreviewSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}
