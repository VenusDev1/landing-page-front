import BaseLayout from "../../components/Layouts/BaseLayout";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import CTA from "../../components/CTA/CTA";
import OurWorkHero from "../../components/OurWorkPage/OurWorkHero";
import OurWorkBody from "../../components/OurWorkPage/OurWorkBody";

export default function Index () {
    return (
        <BaseLayout namePage='Nuestro Trabajo'>
            <Navbar />
            <OurWorkHero/>
            <OurWorkBody/>
            <CTA/>
            <Footer />
        </BaseLayout>
    )

}

