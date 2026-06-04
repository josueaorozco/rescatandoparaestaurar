import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ActivitiesPreview from '../components/ActivitiesPreview'
import DonationSection from '../components/DonationSection'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ActivitiesPreview />
      <DonationSection />
      <Testimonials />
    </>
  )
}
