import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const WorkingProcess = () => {
  const processSteps = [
    {
      number: "01",
      question: "Consultation",
      answer:
        "Lors de la première consultation, nous discuterons de vos objectifs commerciaux, de votre public cible et de vos efforts marketing actuels. Cela nous permettra de comprendre vos besoins et d'adapter nos services pour répondre au mieux à vos exigences.",
    },
    {
      number: "02",
      question: "Recherche et développement de stratégie",
      answer:
        "Nous effectuons des recherches approfondies pour développer une stratégie marketing personnalisée qui correspond à vos buts et objectifs",
    },
    {
      number: "03",
      question: "Mise en œuvre",
      answer:
        "Notre équipe exécutera la stratégie avec précision, en veillant à ce que tous les aspects soient réalisés efficacement.",
    },
    {
      number: "04",
      question: "Suivi et optimisation",
      answer:
        "Nous surveillons en permanence les performances de la stratégie mise en œuvre et effectuons les ajustements nécessaires pour maximiser les résultats.",
    },
    {
      number: "05",
      question: "Rapports et communication",
      answer:
        "Des rapports réguliers et une communication ouverte vous tiennent informé des progrès et du succès des efforts de marketing.",
    },
    {
      number: "06",
      question: "Continual Improvement",
      answer:
        "We are committed to ongoing optimization and improvement to ensure your marketing strategy evolves with your business.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  items-center md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 my-11 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Notre processus de travail</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptas unde, Harum ullam aspernatur nemo laboriosam:
            </p>
          </div>
        </div>
        <div>
          {processSteps.map((item, index) => (
            <div key={index} className={`border rounded-md mb-4 overflow-hidden${openIndex === index? "border-primary":"border-gray-300"}`}>
              <button
              onClick={()=>handleToggle(index)}
                className={`w-full text-left p-4 flex justify-between items-center ${openIndex === index ? 'bg-primary':'bg-gray-200'}`}
              >
                <div className="flex items-center">
                  <span className="text-secondary font-extrabold text-2xl mr-4 ">
                    {item.number}
                  </span>
                  <h3>{item.question}</h3>
                </div>
                <div className="bg-white text-black border p-1.5 rounded-full">
                  {openIndex === index ? <FaMinus /> : <FaPlus/>}
                </div>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-primary text-secondary">
                  <hr className="mt- mb-5 border-black" />
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
