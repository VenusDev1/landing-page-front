import BaseLayout from "../../components/Layouts/BaseLayout";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactPages from '../../components/ContactPages/ContactPages';

export default function Index () {
    return (
        <BaseLayout namePage='Contact Venus' >
            <Navbar/>
            <ContactPages/>
            <Footer/>
        </BaseLayout>
    )
}