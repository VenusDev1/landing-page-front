function OurWorkBody() {
    return ( 
        <body className="z-[99] w-[100%] h-[100%]">
            <div className='flex flex-col m-4 lg:m-10 '>

                <div className=" w-[100%] flex flex-col lg:flex-row lg:justify-between items-center border-[2px] border-solid bg-white border-black mb-10">
                    
                    <div className=' w-[100%] lg:h-[25vw] p-5'>
                        <h2 className='font-monsterrat text-left text-black text-[15px] lg:text-[30px] lg:pb-10 pb-2 uppercase'>Páginas web a medida para las nececidas de nuestros clientes</h2>
                        <p className='font-monsterrat text-left text-black text-[10px] lg:text-xl uppercase'>Nuestro equipo de expertos se toman el tiempo de conocer a nuestros clientes para que el desarrollo de su sitio web sea de la mejor experiencia</p>
                    </div>

                    <div className='lg:w-[100%]'>
                        <img className='w-[100%]' src='img/ourwork01.png' alt='Logo Venus'/>
                    </div>
                </div>

                <div className=" w-[100%] flex flex-col lg:flex-row lg:justify-between items-center border-[2px] border-solid bg-white border-black mb-10">
                    
                    <div className='lg:w-[100%]'>
                        <img className='w-[100%]' src='img/ourwork02.png' alt='Logo Venus'/>
                    </div>
                    
                    <div className=' w-[100%] lg:h-[25vw] p-5'>
                        <h2 className='font-monsterrat text-left text-black text-[15px] lg:text-[30px] lg:pb-10 pb-2 uppercase'>Creación de Web apps para negocios</h2>
                        <p className='font-monsterrat text-left text-black text-[10px] lg:text-xl uppercase'>...</p>
                    </div>
                </div>
                
                <div className=" w-[100%] flex flex-col lg:flex-row lg:justify-between items-center border-[2px] border-solid bg-white border-black mb-10">
                    
                    <div className=' w-[100%] lg:h-[25vw] p-5'>
                        <h2 className='font-monsterrat text-left text-black text-[15px] lg:text-[30px] lg:pb-10 pb-2 uppercase'>Mantenimiento y actualizaciones</h2>
                        <p className='font-monsterrat text-left text-black text-[10px] lg:text-xl uppercase'>...</p>
                    </div>

                    <div className='lg:w-[100%]'>
                        <img className='w-[100%]' src='img/ourwork01.png' alt='Logo Venus'/>
                    </div>
                </div>

                <div className=" w-[100%] flex flex-col lg:flex-row lg:justify-between items-center border-[2px] border-solid bg-white border-black">
                    
                    <div className='lg:w-[100%]'>
                        <img className='w-[100%]' src='img/ourwork02.png' alt='Logo Venus'/>
                    </div>

                    <div className=' w-[100%] lg:h-[25vw] p-5'>
                        <h2 className='font-monsterrat text-left text-black text-[15px] lg:text-[30px] lg:pb-10 pb-2 uppercase'>Diseño UX/UI</h2>
                        <p className='font-monsterrat text-left text-black text-[10px] lg:text-xl uppercase'>Diseñamos todas las interfaces de su página, con el objetivo de hacer que la experiencia para tus clientes sea lo mas satisfactoria posible.</p>
                    </div>

                    
                </div>

            </div>
        </body>
     );
}

export default OurWorkBody;