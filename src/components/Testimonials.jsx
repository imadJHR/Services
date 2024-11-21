import { BsChatSquareQuote } from "react-icons/bs";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "This service is fantastic! My business has seen remarkable growth since we started using it.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "Excellent customer support and results. Highly recommend this team to anyone looking to enhance their online presence.",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "A game-changer for our marketing strategy. The results were beyond our expectations!",
      author: "Alice Johnson",
    },
    {
      id: 4,
      text: "Professional, reliable, and effective. This team knows what they're doing!",
      author: "Bob Brown",
    },
  ];

  return (
    <section className="pt-24 pb-8 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        <div className="flex flex-col  items-center md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 my-11 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Témoignages</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptas unde, Harum ullam aspernatur nemo laboriosam:
            </p>
          </div>
        </div>
        {/*testimonials slider */}
        <div className="relative mb-12">
          {/*slide */}
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto overflow-hidden ">
            {testimonialsData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="w-full relative py-5 md:max-w-md px-2 "
              >
                <div className="absolute top-0 left-0 z-50">
                  <BsChatSquareQuote className="size-8" />
                </div>
                <div className=" md:h-56 h-52 bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                  <p className="text-lg font-medium mb-4">{item.text}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
