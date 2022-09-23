import Styles from "../../styles/ServicesHero.module.css"

function ServicesHero() {
    return ( 
        <header className="w-[100%] h-auto bg-slate-600 flex flex-col justify-center items-center  ">
            <div className={Styles.context} >
                <h1>VENUS Dev</h1>
                <h3>Services</h3>
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