import { profile } from '../data/profile'
import Hero from '../components/sections/Hero'
import AboutMe from '../components/sections/AboutMe'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import Aspirations from '../components/sections/Aspirations'

export default function Page() {
  return (
    <>
      <section id="home" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <Hero profile={profile} />
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-canvas">
        <div className="container mx-auto px-6">
          <AboutMe profile={profile} />
        </div>
      </section>

      <section id="education" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <Education education={profile.education} />
        </div>
      </section>

      <section id="experience" className="py-16 md:py-24 bg-canvas">
        <div className="container mx-auto px-6">
          <Experience experience={profile.experience} />
        </div>
      </section>

      <section id="aspirations" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <Aspirations aspirations={profile.aspirations} />
        </div>
      </section>
    </>
  )
}
