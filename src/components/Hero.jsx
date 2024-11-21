import IMG from "../../public/Capture d'écran 2024-06-14 010331.png"
import LogoMarquee from "./LogoMarquee";
const Hero = () => {
  return (
    <section className="bg-white pt-12 " id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 ">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <div className="md:w-2/3">
            <h1 className="text-4xl font-bold text-secondary mb-4 ">
              Naviguer dans le paysage numérique pour réussir
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae veniam totam quisquam iusto consequuntur, tempora
              voluptates earum corporis modi ducimus a ipsa neque eum, veritatis
              numquam, harum tenetur quibusdam accusantium.
            </p>
            <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary  ">
              réserver une consultation
            </button>
            </div>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
          <img src="https://img.freepik.com/vecteurs-libre/vecteur-entreprise-internet-strategie-referencement_23-2147494779.jpg?t=st=1724744083~exp=1724747683~hmac=2e75fe1bb3e9a5f0cd877d2234940e0babbb0d3937e76b623f8b80c23a09e3c0&w=360" alt="" className="w-full h-auto rounded-md" />
          </div>
        </div>
        <LogoMarquee/>
      </div>
     
    </section>
  );
};

export default Hero;
