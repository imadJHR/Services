import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };

  const navItems = [
    { name: "À propos de nous", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Cas d'utilisation", href: "#use-cases" },
    { name: "Équipe", href: "#team" },
    { name: "Témoignages", href: "#testimonials" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";
      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop < scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveItem(
        navItems.find((item) => item.href === `#${currentSection}`?.name || "")
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  return (
    <nav className="fixed top-0 w-full left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div>
            <a href="" className="h-8">
              LOGO
            </a>
          </div>
          <div className="space-x-8 hidden md:flex items-center ">
            {navItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={`block  text-black px-2 pb-2 hover:bg-primary rounded-sm hover:text-white hover:underline underline-offset-4 transition-all duration-300
                    ${
                      activeItem === item.name
                        ? "bg-primary text-white underline underline-offset-4"
                        : ""
                    }`}
                href={item.href}
                key={index}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Demander un devis
            </a>
          </div>
          <div>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <HiOutlineX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
            {navItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={`block  text-black px-2 pb-2 hover:bg-primary rounded-sm hover:text-white hover:underline underline-offset-4 transition-all duration-300${
                  activeItem === item.name ? "text-primary" : ""
                }`}
                href={item.href}
                key={index}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block border px-4 py-2  mt-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
