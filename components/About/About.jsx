
function About () {
    return (<about className='w-[100%] h-[60vh] lg:h-[100vh] md:h-[55vw] items-center flex flex-row bg-gradient-to-r from-[#F5E4B1]'>

                <div className='hidden lg:flex w-[40%] lg:w-[100%] bg-gradient-to-r from-[#F5E4B1] justify-center items-center'>
                    <img className='hidden md:flex' src='img/about_img.png' alt='about_img'></img>
                </div>  

                <div className='w-[100%] flex flex-col p-5 lg:p-5 lg:m-3 md:p-20 text-center lg:text-center'>
                    <div className='text_about'>
                        <h1 className='text-[30px] md:text-[40px] lg:text-[50px]'>About VENUS Dev</h1>
                        <p className='font-montserrat text-[25px] md:text-[20px] lg:text-[35px] lg:mt-5'>Somos una startup enfocada en desarrollo web, nuestro objetivo es ayudarte a dar el siguiente paso hacia la transformación digital. A travez de nuestros servicios de desarrollo y marketing llevaremos tu negocio a internet. </p>
                    </div>
                    
                </div>

            </about>)
}
export default About;