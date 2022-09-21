import Body from '../components/Body/Body'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section from '../components/Section/Section'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import BaseLayout from '../components/Layouts/BaseLayout'

function Index() {
  return (
    <BaseLayout>
      <Header/>
        <body>
          <Navbar/>
          <Section/>
          <About/>
          {/* <Services/> */}
          <Contact/>
          <Footer/>
        </body>
    </BaseLayout>)
}

export default Index;
