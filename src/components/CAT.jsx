import CTA from "../../public/cta-image.png";
const CAT = () => {
  return (
    <div className="relative py-12 ">
      <div className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 ">
          <h1 className="text-3xl font-bold text-secondary mb-4 ">
            faisons bouger les choses
          </h1>
          <p className="text-gray-600 mb-6 md:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            veniam totam quisquam iusto consequuntur, tempora voluptates earum
            corporis modi ducimus a ipsa neque eum, veritatis numquam, harum
            tenetur quibusdam accusantium.
          </p>
          <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary  ">
            obtenez votre proposition gratuite
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center relative">
          <img
            src={CTA}
            alt=""
            className="md:absolute md:-top-52 md:bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CAT;
