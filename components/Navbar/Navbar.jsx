import Link from 'next/link'
import { useState } from 'react';
import Nd from './Nd'
import Nm from './Nm'

function Navbar () {

    return (
        <nav className='z-[99999] w-[100%] lg:h-[70px] bg-black fixed'>
            
            <div className='hidden md:block '>
                <Nd/>
            </div>

            <div className='block md:hidden'>
                <Nm/>
            </div>
        </nav>
        
    )
}
export default Navbar;