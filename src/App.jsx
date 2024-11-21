import CaseStudies from "./components/CaseStudies"
import CAT from "./components/CAT"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials"
import WorkingProcess from "./components/WorkingProcess"


const App = () => {
  return (
    <div className="font-primary">
      <Navbar/>
      <Hero/>
      <Services/>
      <CAT/>
      <CaseStudies/>
      <WorkingProcess/>
      <Team/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App