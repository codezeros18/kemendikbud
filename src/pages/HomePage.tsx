// import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Showcase from '../components/Showcase'
import MarketplacePreview from '../components/MarketplacePreview'
import EconomySection from '../components/EconomySection'
import CTASection from '../components/CTASection'

const homepage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Showcase />
      <MarketplacePreview />
      <EconomySection />
      <CTASection />
    </div>
  )
}

export default homepage