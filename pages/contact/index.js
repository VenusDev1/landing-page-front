import BaseLayout from "../../components/Layouts/BaseLayout";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactPages from '../../components/ContactPages/ContactPages';

export default function Index () {
    return (
        <BaseLayout namePage='Contact Venus' >
            <Navbar/>
            <div className='w-[100%] hidden h-[60px] lg:block'></div>
            <ContactPages/>
            <Footer/>
        </BaseLayout>
    )
}