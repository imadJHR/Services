const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
      <div className="bg-secondary rounded-t-2xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
          <a href="">LOGO</a>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#about"className="text-white hover:text-gray-400">Home</a>
            <a href="#services"className="text-white hover:text-gray-400">Services</a>
            <a href="#use-cases"className="text-white hover:text-gray-400">use cases</a>
            <a href="#contact"className="text-white hover:text-gray-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
