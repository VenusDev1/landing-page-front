import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';

function Footer () {
    return (<footer className='footer'>

                <div className='footer_conteiner'>
                    <div className='logo_footer'>
                            <img src='img/venus_logo.png' alt='Logo Venus'/>
                            <h3>Agencia de Desarrollo y Marketing</h3>
                    </div>
                        
                    <div className='cont_footer'>
                            <h2>Contacto</h2>
                            <h3>Mail: contacto@venusdev.com</h3>
                            <h3>Tel: +54 03513084848</h3>
                    </div>

                    <div className='redes_footer'>
                            <h2>Redes Sociales</h2>

                            <div className='imgs_redes'>
                                <div className='img_footer'>
                                    <Link href= 'https://www.instagram.com/venusdevit/'>
                                        <a><img width={50} src='img/ig_footer.png' alt='Logo Venus'/></a>
                                    </Link> 
                                </div>

                                <div>
                                    <Link href= '#'>
                                        <a><img width={50} src='img/lk_footer.png' alt='Logo Venus'/></a>
                                    </Link>
                                </div>

                            </div>
                    </div>
                </div>

                <div className='derechos'>
                    <h4>© VENUS Dev 2022. </h4>
                </div>

            </footer>)
}
export default Footer;