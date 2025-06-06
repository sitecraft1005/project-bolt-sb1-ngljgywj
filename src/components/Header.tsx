import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePricingClick = () => {
    window.location.hash = '#pricing';
    setIsMenuOpen(false);
  };

  const handleNavClick = (section: string) => {
    setIsMenuOpen(false);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/images/logo2.png"
            alt="SiteCraft Logo" 
            className="h-12 sm:h-16 md:h-19 w-auto object-contain"
            onError={(e) => {
              console.error('Error loading logo:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          {['Home', 'Portfolio', 'Services', 'Process', 'Testimonials', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavClick(item)}
              className={`font-medium transition-colors hover:text-yellow-600 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={handlePricingClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-all hover:shadow-lg text-sm xl:text-base"
          >
            See Plans
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-yellow-500 p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="flex flex-col p-4 space-y-3">
            {['Home', 'Portfolio', 'Services', 'Process', 'Testimonials', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item)}
                className="text-gray-800 font-medium transition-colors hover:text-yellow-600 text-left py-2"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={handlePricingClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-md transition-all hover:shadow-lg mt-2"
            >
              See Plans & Pricing
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;