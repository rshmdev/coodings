import Image from "next/image";
import { SocialIcon } from "./social-icon";
import { Facebook, Instagram, Linkedin, Menu, Twitter, X } from "lucide-react";

export const Header = ({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image src="/logo.png" width={70} height={55} alt="Coodings Logo" />

          <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6 mr-6">
              <li><a href="#about" className="hover:text-blue-400 transition">Sobre</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Serviços</a></li>
              <li><a href="#ecosystem" className="hover:text-blue-400 transition">Ecossistema</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contato</a></li>
            </ul>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} link="https://facebook.com" />
              <SocialIcon Icon={Twitter} link="https://twitter.com" />
              <SocialIcon Icon={Linkedin} link="https://linkedin.com" />
              <SocialIcon Icon={Instagram} link="https://instagram.com" />
            </div>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

  );
};
