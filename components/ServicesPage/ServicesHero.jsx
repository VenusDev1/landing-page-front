import Styles from "../../styles/ServicesHero.module.css"

function ServicesHero() {
    return ( 
        <header className="w-[100%] h-auto bg-slate-600 flex flex-col justify-center items-center  ">
            <div className={Styles.context} >
                <div className=" flex flex-col justify-center items-center">
                    <img className='w-[50%] h-auto' src='img/logo_services.png' alt='Logo Venus'/>
                    <h2 className="text-black font-goldman text-3xl lg:text-4xl">Services</h2>  
                </div>
                
            </div>
            <div className={Styles.area} >
                <ul className={Styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </header>
     );
}

export default ServicesHero;