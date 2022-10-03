import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import ContactPages from '../components/ContactPages/ContactPages';
import Footer from '../components/Footer/Footer'
import BaseLayout from '../components/Layouts/BaseLayout'

function Index() {
  return (
    <BaseLayout namePage='Venus Dev' >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <ContactPages/>
      <Footer/>
    </BaseLayout>
  )
}

export default Index;
