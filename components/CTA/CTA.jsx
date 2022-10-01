import Link from "next/link";

function CTA() {
    return ( 
        <div className="w-[100%] h-[150px] lg:h-[300px] mt-10 mb-10 bg-gradient-to-r from-[#ededed] to-[#F5E4B1] flex flex-col justify-center items-center z-[10]">
            <h1 className="text-[15px] lg:text-3xl font-semibold font-montserrat lg:p-5 p-2">¿Que estas esperando para impulsar tu negocio?</h1>
            <span className="text-[13px] lg:text-2xl font-normal font-montserrat lg:mt-5 lg:p-0 mt-1 p-2">Digitaliza tu negocio con nuestra ayuda 
                
                <Link href="/contact">
                    <a className="bg-white hover:text-white hover:bg-black font-goldman rounded-full border-[1px] border-solid border-black shadow-lg p-2 m-2">Contactanos</a>
                </Link>
            </span>
        </div>
     );
}

export default CTA;