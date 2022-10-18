import Link from "next/link";

function Services () {
    return (
        <div className='w-[100%] h-auto lg:h-[100vh] xl:h-[90vh] flex flex-col '>
            <div className='serv_tex text-5xl mt-10 mb-5 pt-5'>
                <h1>Services</h1> 
            </div>
            <div className="w-[100%] h-[90%] flex items-center ">
                <div className=' bg-gradient-to-b w-[100%] h-auto py-3 flex flex-col lg:flex-row lg:justify-around justify-center items-center lg:bg-gradient-to-l from-py via-ty to-sy pb-10'>
                    <div className=' lg:flex w-[340px] h-[400px] lg:justify-center flex flex-col justify-center items-center rounded-lg border-[1px] border-solid bg-white border-black m-5 shadow-lg shadow-black'>
                        <div className=' w-[100%] h-[40%] '>
                            <img src="img/service01.png" alt="section_img"></img>
                        </div>
                        <div className='w-[100%] h-[60%] py-4 px-2 flex flex-col justify-center'>
                            <h2 className='font-goldman text-[20px] ml-3'>Desarrollo Web</h2>
                            <p className='font-monsterrat text-[15px] m-3'>Creacion de páginas web y aplicaciónes web, utilizamos herramientas como Node.js y React.</p>
                            <div className='w-[100%] mx-auto mt-5 text-center'>
                                <Link href="/services">
                                    <a id="btn_section">Descubrir</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:flex w-[340px] h-[400px] lg:justify-center flex flex-col justify-center items-center rounded-lg border-[1px] border-solid bg-white border-black m-5 shadow-lg shadow-black'>
                        <div className=' w-[100%] h-[40%] '>
                            <img src="img/service02.png" alt="section_img"></img>
                        </div>
                        <div className='w-[100%] h-[60%] py-4 px-2 flex flex-col justify-center'>
                            <h2 className='font-goldman text-[20px] ml-3'>Actualizaciones y Mejoras</h2>
                            <p className='font-monsterrat text-[15px] m-3'>Ya tenes una pagina y no tienes el tiempo o el equipo para manterla actualizada, Venus dev esta aqui para ayudarte.</p>
                            <div className='w-[100%] mx-auto mt-5 text-center'>
                                <Link href="/services">
                                    <a id="btn_section">Descubrir</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:flex w-[340px] h-[400px] lg:justify-center flex flex-col justify-center items-center rounded-lg border-[1px] border-solid bg-white border-black m-5 shadow-lg shadow-black'>
                        <div className=' w-[100%] h-[40%] '>
                            <img src="img/service03.png" alt="section_img"></img>
                        </div>
                        <div className='w-[100%] h-[60%] py-4 px-2 flex flex-col justify-center'>
                            <h2 className='font-goldman text-[20px] ml-3'>Posicionamiento web SEO</h2>
                            <p className='font-monsterrat text-[15px] m-3'>Utilizamos las mejores practicas para que tu web sea de las mejores posicionadas en los buscadores.</p>
                            <div className='w-[100%] mx-auto mt-5 text-center'>
                                <Link href="/services">
                                    <a id="btn_section">Descubrir</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;