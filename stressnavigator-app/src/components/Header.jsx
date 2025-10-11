import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Forside' },
    { href: '/om-netvaerket', label: 'Om netværket' },
    { href: '/om-isabella', label: 'Om Isabella' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-5 h-24 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/assets/images/0f5688-fc85-5b5-aa4b-202e2130a00_logo.png"
              alt="StressNavigator"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-lg font-medium transition-colors ${pathname === link.href ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${pathname === link.href ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
