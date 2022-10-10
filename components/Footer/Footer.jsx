import Link from 'next/link';

function Footer () {
    return (
    <footer className=' bg-black h-auto lg:h-[40vh] z-[10] p-3 '>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:m-0 mb-5'>
            <div className=' w-[80%] lg:w-[50%] mt-5 mb-5 flex flex-col justify-center items-center'>
                <Link href='/'>
                    <img className='cursor-pointer w-[65%] lg:w-[75%] h-auto' src='img/venus_logo.png' alt='Logo Venus'/>
                </Link>
                <h3 className=' text-white m-auto font-goldman text-center text-[17px] lg:text-xl'>Agencia de Desarrollo y Marketing</h3>
            </div> 
            <div className='w-[100%] lg:w-[50%] lg:flex flex-col lg:justify-center lg:items-center  mb-10'>
                <h2 className='font-goldman text-[#F5E4B1] text-center text-2xl m-1 p-2'>Contacto</h2>
                <h3 className='font-goldman text-white text-center text-xl pb-3'>Mail: venusdevit@gmail.com</h3>
                <h3 className='font-goldman text-white text-center text-xl'>Tel: +54 03513084848</h3>
            </div>
            <div className='redes_footer w-[100%] lg:w-[50%]'>
                <h2 className='font-goldman text-[#F5E4B1] text-center text-2xl'>Redes Sociales</h2>
                <div className='mx-auto flex flex-row justify-between w-[160px]'>
                    <div className=' w-[100%] lg:w-[100%]'>
                        <Link href= 'https://www.instagram.com/venusdevit/'>
                            <a target="_blank">
                                <img  className='w-[100%] h-[100%] p-3' src='/img/ig_footer.png' alt='Logo Instagram'/>
                            </a>
                        </Link> 
                    </div>
                    <div className=' w-[100%] lg:w-[100%]'>
                        <Link href= 'https://www.linkedin.com/in/venus-dev-880749252/'>
                            <a target="_blank">
                                <img className='w-[100px] lg:h-[100%] p-3' src='/img/lk_footer.png' alt='Logo Linkedin'/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='derechos'>
            <h4>© VENUS Dev 2022. </h4>
        </div>
    </footer>
    )
}
export default Footer;