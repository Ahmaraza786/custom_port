import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from "./logo.png"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center sticky top-0 py-6 px-10">
      <div className="flex items-center  text-sm">
      <img src={logo} style={{ height: '56px' }} alt='logo' />

      </div>
      <div className="md:flex hidden gap-8">
        <a href="#about" className="hover:text-gray-600">About</a>
        <a href="#services" className="hover:text-gray-600">Services</a>
        <a href="#portfolio" className="hover:text-gray-600">Portfolio</a>
        <a href="#contact" className="hover:text-gray-600">Contact</a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute top-16 right-0 bg-white shadow-md py-2 px-4 rounded-md flex-col items-center gap-8 z-50`}
      >
        <a href="#about" className="hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#services" className="hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#portfolio" className="hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
        <a href="#contact" className="hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Header;
