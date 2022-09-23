import styles from '../../styles/Home.module.css'
import Image from 'next/image'

function ContactPages () {
    return (<section className='contact'>
                <main className='m_contact w-[100%] h-[100vh] flex flex-row items-center '>
                    <form items-center>
                            <div className='m-[10px] items-center rounded-none w-[100%] p-8 bg-gradient-to-b from-[#EBCC80] to-[#F5E4B1] '>
                                <div>
                                    <input className='text_campos ' type="text" placeholder="Nombre"/>  
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

                    <img width={550} src='img/contact_page.png' alt='Logo Venus'/>
                </main>
                
                <div>
                   <h2 className='text-xl lg:text-4xl font-normal font-montserrat mt-5 text-center m-20 p-5 '>No te quedes sin tu pagina web. Contactanos</h2> 
                </div>
                

            </section>)
}
export default ContactPages;