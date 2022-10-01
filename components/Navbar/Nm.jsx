import Link from "next/link";
import { useState } from 'react';

function Nm () {

    const[isOpen, setIsOpen] = useState(false);


    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <div className="w-[100%]">
            <div className='w-[100%] flex flex-row justify-between items-center'>
                <Link href='/'>
                    <a className="w-[250px] h-auto"><img src='img/venus_logo.png' alt='Logo Venus'/></a>
                </Link>
                
                <button onClick={toggleOpen} className="p-3">
                        {(isOpen) ? (
                            <img src="/img/svg/close.svg"  alt="close" className="w-[30px] h-[30px] " />
                        ) : (
                            <img src="/img/svg/bars.svg"  alt="bars" className="w-[30px] h-[30px]" />
                        )}
                </button>

            </div>
                    {isOpen && (
                        <div className='w-[100%] h-[300px] absolute top-[60px] bg-[#121212] flex flex-col justify-center items-center'>
                            <Link  href='/ourwork'>
                                <a className='px-8 py-2 font-goldman text-xl text-white hover:text-sy mt-5 '>Nuestro Trabajo</a>
                            </Link>               
                            <Link href='/services'>
                                <a className='px-8 py-2 font-goldman text-xl text-white hover:text-sy mt-5'>Servicios</a>
                            </Link>             
                            <Link href='/contact'>
                                <a className=' text-center px-4 py-2 bg-sy hover:bg-ty duration-300 font-goldman text-xl mt-3 text-white rounded-full border-4 border-white ' >
                                    Contacto
                                </a>
                            </Link>
                    </div>
                    )}
                

        </div>  
    )
}

export default Nm;