import BaseLayout from "../../components/Layouts/BaseLayout";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicesHero from "../../components/ServicesPage/ServicesHero";
import ServicesBody from "../../components/ServicesPage/ServicesBody";
import CTA from "../../components/CTA/CTA";


export default function Index () {
    return (
        <BaseLayout namePage='Contact Venus' >
            <Navbar/>
            <ServicesHero/>
            <div>
                <ServicesBody/>
                <CTA/>
                <Footer/>
            </div>
        </BaseLayout>
    )
}