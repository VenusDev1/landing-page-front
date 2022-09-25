import Link from 'next/link'

function Navbar () {
    return (
        <nav className='z-[99999] w-[100%] h-[80px] bg-black fixed flex justify-between items-center '>
            <div className='w-[300px] h-auto mx-4 my-2 '>
                <Link href='/'>
                    <a><img src='img/venus_logo.png' alt='Logo Venus'/></a>
                </Link>             
            </div>
            <div className='flex flex-row mr-[20px]'>
                <Link  href='/ourwork'>
                    <a className='px-8 py-2 font-goldman text-xl text-white hover:text-sy '>Nuestro Trabajo</a>
                </Link>               
                <Link href='/services'>
                    <a className='px-8 py-2 font-goldman text-xl text-white hover:text-sy '>Servicios</a>
                </Link>             
                <Link href='/contact'>
                    <a className='px-4 py-2 bg-sy hover:bg-ty duration-300 font-goldman text-xl text-white rounded-full border-4 border-white ' >
                        Contacto
                    </a>
                </Link>
            </div>       
        </nav>
    )
}
export default Navbar;