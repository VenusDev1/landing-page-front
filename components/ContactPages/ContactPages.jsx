import emailjs from '@emailjs/browser';
import {useState} from 'react';

function ContactPages () {
    const [send, setSend] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9na8nup', 'template_w13qmaj', e.target, '-8jvx3xXspwOP6IX5')
            .then((result) => {
                console.log(result.text);
                setSend(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    return (
        <section className='w-[100%] h-[100vh] flex flex-col'>
            <div className='flex flex-row w-[100%] h-[80%] '>
                <div className='w-[50%] h-[100%] p-8  bg-gradient-to-b from-[#ededed] to-[#F5E4B1]  '>
                    <form onSubmit={sendEmail} className='w-[100%] h-[100%] '>
                        <div className='w-[90%] h-[100%] mx-auto  flex flex-col justify-center'>
                            <h3 className='text-5xl font-goldman font-semibold ' >Contacto</h3>
                            <h5 className='text-2xl ' >Envianos un mail y nuestro equipo se contactara con usted para ayudarlo a resolver su problema lo antes posible.</h5>
                            <div>
                                <input className='text_campos ' type='text' placeholder='Nombre' name='user_name'/>  
                            </div>
                            <div>
                                <input className='text_campos' type='email' placeholder='Email' name='user_email'/>
                            </div>
                            <div>
                                <input className='text_campos' type='text' placeholder='Asunto' name='user_affair' />  
                            </div>
                            <div>
                                <textarea className='text_campos' placeholder='Mensaje' name='user_message'/>
                            </div>
                            <div>
                                {
                                    send 
                                    ? <span className='text-[#05F100]'>form sent successfully!</span>
                                    : <input id='btn_enviar' type='submit' value='Enviar' />
                                }
                            </div>             
                        </div>
                    </form>
                </div>
                <div className='w-[50%] h-[100%] '>
                    <img className='w-[100%] h-[100%] ' src='img/contact_page.png' alt='Logo Venus'/>
                </div>
            </div>
            <div className='w-[100%] h-[20%] flex justify-center items-center'>
                <h2 className='text-xl lg:text-4xl font-normal font-montserrat mt-5 text-center m-20 p-5 '>No te quedes sin tu pagina web. Contactanos</h2> 
            </div>
        </section>
    )
}

export default ContactPages;