import Link from 'next/link';

function Footer () {
    return (
    <footer className='footer h-[45vh] z-[10]'>
        <div className='footer_conteiner items-center'>
            <div className='logo_footer'>
                <img className='w-[100%] h-[100%]' src='img/venus_logo.png' alt='Logo Venus'/>
                <h3 className='text-center text-2xl'>Agencia de Desarrollo y Marketing</h3>
            </div> 
            <div className='cont_footer'>
                <h2 className='text-center text-3xl m-1 p-2'>Contacto</h2>
                <h3 className='text-center text-2xl pb-3'>Mail: contacto@venusdev.com</h3>
                <h3 className='text-center text-2xl'>Tel: +54 03513084848</h3>
            </div>
            <div className='redes_footer mt-10'>
                <h2 className='text-center text-3xl'>Redes Sociales</h2>
                <div className='imgs_redes m-1 p-2'>
                    <div className='img_footer'>
                        <Link href= 'https://www.instagram.com/venusdevit/'>
                            <a>
                                <img  className='w-[100%] h-[100%] p-3' width={50} src='img/ig_footer.png' alt='Logo Venus'/>
                            </a>
                        </Link> 
                    </div>
                    <div>
                        <Link href= '#'>
                            <a>
                                <img className='w-[100%] h-[100%] p-3' width={50} src='img/lk_footer.png' alt='Logo Venus'/>
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