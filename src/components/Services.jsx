import { CiLink } from "react-icons/ci";

const Services = () => {
  const servicesData = [
    {
      title: "SEO Optimization",
      description:
        "inclut des mots-clés, répond à l’intention de l’utilisateur et encourage l’engagement.",
      image:
        "https://img.freepik.com/vecteurs-libre/vecteur-entreprise-internet-strategie-referencement_23-2147494779.jpg?t=st=1724744083~exp=1724747683~hmac=2e75fe1bb3e9a5f0cd877d2234940e0babbb0d3937e76b623f8b80c23a09e3c0&w=360",
      bgColor: "bg-[#F3F3F3]",
      foreColor: "bg-primary",
      textColor: "text-black",
    },
    {
      title: "PPC Advertising",
      description:
        "Boostez votre présence en ligne avec des campagnes publicitaires PPC ciblées.",
      image:
        "https://img.freepik.com/vecteurs-libre/illustration-concept-abstrait-campagne-ppc_335657-3747.jpg?t=st=1724744482~exp=1724748082~hmac=c73483cf73a191caf37d8fd0a6d73726d94ca2f4d23bf60fa05611b543d0ba87&w=360",
      bgColor: "bg-primary",
      foreColor: "bg-white",
      textColor: "text-blue-900",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engagez votre public et développez votre marque sur les plateformes de médias sociaux.",
      image:
        "https://img.freepik.com/photos-gratuite/concept-marketing-medias-sociaux-pour-marketing-applications_23-2150063134.jpg?t=st=1724744531~exp=1724748131~hmac=2196494f3ed66d6c63ae582622b5cf8515c733e1c1f99e40bbbb4751d95fabd2&w=360",
      bgColor: "bg-green-100",
      foreColor: "bg-green-500",
      textColor: "text-green-900",
    },
    {
      title: "Content Creation",
      description:
        "Créez du contenu convaincant qui génère de l’engagement et des conversions.",
      image:
        "https://img.freepik.com/vecteurs-libre/personnes-concept-creation-contenu-numerique_53876-59861.jpg?t=st=1724744577~exp=1724748177~hmac=b5ada6a64fe90feda748f280c06ddf84c1a59fdc4d330f1c90f8a2f72f5ab62a&w=360",
      bgColor: "bg-red-100",
      foreColor: "bg-red-500",
      textColor: "text-red-900",
    },
    {
      title: "Email Marketing",
      description:
        "Atteignez directement votre public avec des campagnes e-mail et des newsletters ciblées.",
      image:
        "https://img.freepik.com/photos-gratuite/e-mail-global-communications-connection-concept-reseautage-social_53876-123795.jpg?t=st=1724744615~exp=1724748215~hmac=8447f9582a3c003dbe9d9148fcaf7c305d57e93c6fe82e2adcf4f7b9df4fb6f4&w=360",
      bgColor: "bg-purple-100",
      foreColor: "bg-purple-500",
      textColor: "text-purple-900",
    },
    {
      title: "Analytics",
      description:
        "Suivez et analysez les performances de votre site Web pour prendre des décisions basées sur les données.",
      image:
        "https://img.freepik.com/vecteurs-libre/illustration-du-concept-analyse-configuration_114360-1859.jpg?t=st=1724744660~exp=1724748260~hmac=3321c0797ac70ccfefc0decbe9a3b250ef641f1b5490b52e02490f2dff8f8bab&w=360",
      bgColor: "bg-gray-100",
      foreColor: "bg-blue-800",
      textColor: "text-gray-900",
    },
  ];

  return (
    <section className="pt-24 pb-16 bg-white " id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*headline and description */}
        <div className="flex flex-col  items-center md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 my-11 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Services</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptas unde, Harum ullam aspernatur nemo laboriosam:
            </p>
          </div>
        </div>
        {/*services card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row cursor-pointer md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23]${service.bgColor} ${service.textColor} `}
            >
              <div className="md:w-1/2 flex flex-col h-full justify-between">
                <button
                  className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foreColor}`}
                >
                  {service.title}
                </button>
                <a href="#" className={`flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80 `}>
                  <CiLink className="size-6 rounded-full" />
                  <span className="text-lg font-medium">En savoir plus</span>
                </a>
              </div>
              <div className="md:w-1/2 order-first md:order-last ">
                <img src={service.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
