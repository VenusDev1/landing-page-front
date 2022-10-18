import Link from "next/link";

function CTAservices() {
    return ( 
        <div className="w-[100%] h-[150px] lg:h-[300px] my-5 lg:mb-0 bg-black text-white flex flex-col justify-center items-center z-[10]">
            <h1 className="text-[15px] lg:text-3xl font-semibold font-montserrat lg:p-5 p-2">Encontra tu plan ideal para digitalizar tu negocio</h1>
            <Link href="/services">
                <a className="bg-black duration-200 hover:bg-fy font-goldman rounded-full border-2 border-solid border-white shadow-lg p-2 m-2">Ver Planes</a>
            </Link>
        </div>
     );
}

export default CTAservices;