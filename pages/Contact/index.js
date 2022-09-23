import Image from 'next/image'
import BaseLayout from "../../components/Layouts/BaseLayout";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactPages from '../../components/ContactPages/ContactPages';
import HContact from '../../components/Header/HContac';

export default function Index () {
    return (
            <BaseLayout>
                <HContact/>
                    <body>
                        <Navbar/>
                        <ContactPages/>
                        <Footer/>
                    </body>
            </BaseLayout>)

}