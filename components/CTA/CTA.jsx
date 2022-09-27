import Link from "next/link";

function CTA() {
    return ( 
        <div className="w-[100%] h-[300px] mt-10 mb-10 bg-gradient-to-l from-[#F5E4B1] flex flex-col justify-center items-center z-[10]">
            <h1 className="text-3xl lg:text-3xl font-semibold font-montserrat p-5">¿Que estas esperando para impulsar tu negocio?</h1>
            <span className="text-xl lg:text-2xl font-normal font-montserrat mt-5">Digitaliza tu negocio con nuestra ayuda 
                
                <Link href="/contact">
                    <a id="btn_section">Contactanos</a>
                </Link>
            </span>
        </div>
     );
}

export default CTA;