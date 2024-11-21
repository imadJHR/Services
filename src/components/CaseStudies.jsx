const CaseStudies = () => {
    const caseStudies = [
        {
            title: 'Étude de cas 1',
            description: "Pour un restaurant local, nous avons mis en œuvre une campagne PPC ciblée qui a entraîné une augmentation de 50 % du trafic sur le site Web et une augmentation de 25 % des ventes." ,
            link: '#'
        },
        {
            title: 'Étude de cas 2',
            description: "Pour une entreprise de logiciels B2B, nous avons développé une stratégie de référencement qui a abouti à un classement en première page pour les mots clés clés et à une augmentation de 200 % du trafic organique.",
            link: '#'
        },
        {
            title: 'Étude de cas 3',
            description: "Pour une chaîne de vente au détail nationale, nous avons créé une campagne de marketing sur les réseaux sociaux qui a augmenté le nombre d'abonnés de 25 % et généré une augmentation de 20 % des ventes en ligne.",
            link: '#'
        },
        // Add more case studies as needed
    ];
  return (
    <section className="pt-24 pb-16 bg-white " id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*headline and description */}
        <div className="flex flex-col  items-center md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 my-11 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Études de cas</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptas unde.
            </p>
          </div>
        </div>
        <div className="bg-black text-white p-8 rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    caseStudies.map((caseStudy, index) => (
                        <div key={index} className="p-4 border border-gray-700 rounded-md">
                            <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                            <p className="mb-4">{caseStudy.description}</p>
                            <a href={caseStudy.link} className="text-primary flex items-center hover:underline">Lire plus</a>
                        </div>
                    ))
                }
            </div>
        </div>
       
      </div>
    </section>
  );
};

export default CaseStudies;
