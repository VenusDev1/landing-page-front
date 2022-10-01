import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import ContactPages from '../components/ContactPages/ContactPages';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import BaseLayout from '../components/Layouts/BaseLayout'

function Index() {
  return (
    <BaseLayout namePage='Venus Dev' >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <div className='w-[100%] h-[100px] lg:h-[150px] bg-black ' />
      <ContactPages/>
      <Footer/>
    </BaseLayout>)
}

export default Index;
