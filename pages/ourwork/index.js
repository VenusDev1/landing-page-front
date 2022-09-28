import BaseLayout from "../../components/Layouts/BaseLayout";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import CTA from "../../components/CTA/CTA";

export default function Index () {
    return (
        <BaseLayout namePage='Nuestro Trabajo'>
            <Navbar />
            <div className="w-[100%] h-[100vh] flex justify-center items-center ">
                <h1>Nuestro trabajo</h1>
            </div>
            <CTA/>
            <Footer />
        </BaseLayout>
    )

}

