import styles from '../../styles/Home.module.css'
import Image from 'next/image'

function Contact () {
    return (<section className='contact'>
                <header className='h_contact'>
                    <h1>Contact</h1>
                    <span>No dudes en contactarnos si tienes dudas, quieres trabajar con nosotros o quieres que desarrollemos algo para ti o tu empresa</span>
                </header>
                <main className='m_contact'>
                    <form>
                            <div className='formulario'>
                                <div>
                                    <input className='text_campos' type="text" placeholder="Nombre"/>  
                                </div>    

                                <div>
                                    <input className='text_campos' type="email" placeholder="Email"/>
                                </div>

                                <div>
                                    <input className='text_campos' type="text" placeholder="Asunto"/>  
                                </div>
                                
                                <div>
                                    <textarea className='text_campos' placeholder='Mensaje'/>
                                </div>

                                <div>
                                    <input id='btn_enviar' type="submit" value="Enviar"/>
                                </div>
                                        
                            </div>

                    </form>
                </main>    
            </section>)
}
export default Contact;