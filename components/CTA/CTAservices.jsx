import Link from "next/link";

function CTAservices() {
    return ( 
        <div className="w-[100%] h-[150px] lg:h-[300px] my-5 lg:mb-0 bg-gradient-to-r from-[#111111] to-[#252525] flex flex-col justify-center items-center z-[10]">
            <h1 className="text-white text-[15px] lg:text-3xl font-semibold font-montserrat lg:p-5 p-2">Encontra tu plan ideal para digitalizar tu negocio</h1>
            <Link href="/services">
                <a className="bg-white duration-200 hover:text-white hover:bg-sy font-goldman rounded-full border-[1px] border-solid border-black shadow-lg p-2 m-2">Ver Planes</a>
            </Link>
        </div>
     );
}

export default CTAservices;