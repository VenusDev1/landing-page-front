import BaseLayout from "../../components/Layouts/BaseLayout";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'


export default function Index () {
    return (
        <BaseLayout namePage='Our Work Venus'>
            <Navbar />
                <div className="w-[100%] h-[100vh] flex justify-center items-center ">
                    <h1>Pagina Our Work</h1>
                </div>
            <Footer />
        </BaseLayout>
    )

}

