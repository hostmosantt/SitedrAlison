import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutDoctor } from './components/AboutDoctor';
import { Invisalign } from './components/Invisalign';
import { Specialties } from './components/Specialties';
import { Differentials } from './components/Differentials';
import { HowItWorks } from './components/HowItWorks';

import { Testimonials } from './components/Testimonials';
import { FAQ as Faq } from './components/FAQ';
import { CTA as Cta } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieConsent } from './components/CookieConsent';
// import { ParallaxCarousel } from './components/ParallaxCarousel';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-ice selection:bg-brand-mint/30">
      <Navbar />
      <FloatingWhatsApp />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <AboutDoctor />
        <Invisalign />
        <Differentials />
        <Specialties />
        {/* <ParallaxCarousel /> */}
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
