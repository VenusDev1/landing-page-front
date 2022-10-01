import Link from "next/link";

function Nd () {
    return (
        <div className="flex justify-between items-center">
            <div className='w-[300px] h-auto mx-4 my-2m'>
                <Link href='/'>
                    <a><img src='img/venus_logo.png' alt='Logo Venus'/></a>
                </Link>             
            </div>

            <div className='flex flex-row justify-between items-center mr-[20px]'>
                <Link  href='/ourwork'>
                    <a className='px-8 py-2 font-goldman text-xl text-white hover:text-sy mt-3 lg:mt-0 '>Nuestro Trabajo</a>
                </Link>               
                <Link href='/services'>
                    <a className='px-8 py-2 font-goldman text-xl text-white hover:text-sy mt-3 lg:mt-0 '>Servicios</a>
                </Link>             
                <Link href='/contacto'>
                    <a className=' text-center px-4 py-2 bg-sy hover:bg-ty duration-300 font-goldman text-xl mt-3 lg:mt-0  text-white rounded-full border-4 border-white ' >
                        Contacto
                    </a>
                </Link>
            </div>
        </div>

        
    )
}

export default Nd;