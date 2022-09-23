import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Navbar () {
    return (<nav className='nav_principal'>

                <div className='logo_nav'>
                    <Link href='/'>
                        <a><img src='img/venus_logo.png' alt='Logo Venus'/></a>
                    </Link>
                    
                </div>

                <div className='links_conteiner'>
                    <Link  href='/Our-work'>
                    <a className='item_link'>Nuestro Trabajo</a>
                    </Link>
                    
                    <Link href='#'>
                        <a className='item_link'>Servicios</a>
                    </Link>
                    
                    <Link href='/Contact'>
                        <a id='contact_btn'>Contact</a>
                    </Link>
                </div>
                
                
            </nav>)
}
export default Navbar;