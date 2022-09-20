import styles from '../../styles/Home.module.css'
import Image from 'next/image'

function About () {
    return (<about className='about'>

                <div className='conteiner_about img_about'>
                    <img src="img/about_img.png" alt="about_img"></img>
                </div>  

                <div className='conteiner_about'>
                    <div className='text_about'>
                        <h1>About VENUS Dev</h1>
                        <h2>Somos una startup enfocada en desarrollo web, nuestro objetivo es ayudarte a dar el siguiente paso hacia la transformación digital. A travez de nuestros servicios de desarrollo y marketing llevaremos tu negocio a internet. </h2>
                    </div>
                    
                </div>

            </about>)
}
export default About;