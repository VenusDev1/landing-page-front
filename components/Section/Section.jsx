import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Section () {
    return (<section className= 'section'>

                <div className='conteiner_section'>
                    <div className='tex_section'>
                        <h1 id='efect_tex_section'>Expande tu negocio a travez de la tecnología</h1>
                        <h2 id='efect_tex_section'>En VENUS Dev te ayudamos a lograrlo</h2>

                        <div>
                            <Link href='#'>
                                <a id='btn_section'>Contactanos</a>
                            </Link>
                        </div>
                        
                    </div>
                </div>

                <div className='conteiner_section'>
                    <img id='img_section' src='img/hero_img.png' alt='section_img'/>
                </div>
            
            </section>)
}
export default Section;