import { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io5";

const Team = () => {
  const teamData = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Emily Davis",
      position: "Lead Developer",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Michael Wilson",
      position: "UX Designer",
      description:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Sophia Lee",
      position: "Marketing Manager",
      description: "Driving marketing efforts to reach our audience.",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "David Clark",
      position: "Project Manager",
      description: "Ensuring projects are delivered on time and within budget.",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Olivia Martinez",
      position: "HR Manager",
      description: "Fostering a positive and productive work environment.",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Lucas Garcia",
      position: "Sales Manager",
      description: "Building relationships with clients and driving sales.",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
    {
      name: "Ella Rodriguez",
      position: "Content Strategist",
      description: "Creating content that resonates with our audience.",
      image:
        "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1724792787~exp=1724796387~hmac=eb9a126ee0d3f13f4c384750fdf62e135c21b4b56cbe48a0b133187d5acf20e7&w=740",
    },
  ];
  const [visibleTeam, setVisibleTeam] = useState(6);
  const handleShowMore = () => {
    setVisibleTeam((prevCount) => prevCount + 3);
  };

  return (
    <section className="pt-24 pb-12 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Header */}
        <div className="flex flex-col  items-center md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 my-11 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Équipe</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptas unde, Harum ullam aspernatur nemo laboriosam:
            </p>
          </div>
        </div>
        {/*Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.slice(0, visibleTeam).map((item, index) => (
            <div
              key={index}
              className="bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300"
            >
              <div className="relative mb-4">
                {/*first row */}
                <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-full w-32 h-32 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-secondary">{item.position}</p>
                  </div>
                  <a
                    href=""
                    className="absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 rounded-full cursor-pointer transition-all duration-300 "
                  >
                    <IoLogoLinkedin className="size-6" />
                  </a>
                </div>
                {}
              </div>
              <div className="px-2 ">
                <hr className="my-4 border-secondary " />
                <p className="text-black">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/*more btn */}
        {
          visibleTeam < teamData.length && (
            <div className="flex justify-end py-3 w-full">
            <button
              onClick={handleShowMore}
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300 "
            >
              See All Team
            </button>
          </div>
          )
        }
      
      </div>
    </section>
  );
};

export default Team;
