import Image from "next/image";

export const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Image src="/logo.png" width={90} height={90} alt="Coodings Logo" />
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#products" className="hover:text-blue-400 transition">
              Products
            </a>
          </li>
          <li>
            <a href="#ecosystem" className="hover:text-blue-400 transition">
              Ecosystem
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
