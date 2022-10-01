import Link from "next/link";

function Hero () {
  return (
    <section className="w-[100%] h-[100vh] px-5 py-7 flex flex-row">
      <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-10 ">
          <h1 className="text-3xl lg:text-6xl font-semibold font-montserrat">Expande tu negocio a travez de la tecnología</h1>
          <h2 className="text-xl lg:text-4xl font-normal font-montserrat mt-5 ">En VENUS Dev te ayudamos a lograrlo</h2>
          <div className="mt-10 ">
            <Link href="/contact">
              <a id="btn_section">Contactanos</a>
            </Link>
          </div>
      </div>

      <div className="hidden md:w-[50%] md:flex items-center justify-center ">
        <img src="img/hero_img.png" alt="section_img" />
      </div>
    </section>
  );
}
export default Hero;
