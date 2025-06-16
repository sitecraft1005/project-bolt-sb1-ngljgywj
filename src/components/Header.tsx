import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-2 sm:py-3 border-b border-gray-200/20' 
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center group">
          <div className="relative">
            <img 
              src="/images/logo2.png"
              alt="SiteCraft Logo" 
              className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110 ${
                isScrolled ? 'filter brightness-100' : 'filter brightness-110'
              }`}
              onError={(e) => {
                console.error('Error loading logo:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
            {!isScrolled && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {['Home', 'Portfolio', 'Services', 'Process', 'Testimonials', 'Contact'].map((item, index) => (
            <button 
              key={item} 
              onClick={() => handleNavClick(item)}
              className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                isScrolled ? 'text-gray-800 hover:text-yellow-600' : 'text-white hover:text-yellow-300'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <button 
            onClick={handlePricingClick}
            className="relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 animate-glow overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <Sparkles size={16} className="mr-2 animate-pulse" />
              See Plans
            </div>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
            isScrolled 
              ? 'text-gray-800 hover:bg-gray-100' 
              : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/20 mx-4 mt-2 rounded-2xl overflow-hidden">
          <nav className="flex flex-col p-6 space-y-4">
            {['Home', 'Portfolio', 'Services', 'Process', 'Testimonials', 'Contact'].map((item, index) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item)}
                className={`text-gray-800 font-medium transition-all duration-300 hover:text-yellow-600 text-left py-3 px-4 rounded-xl hover:bg-yellow-50 transform hover:translate-x-2 animate-slideInLeft`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={handlePricingClick}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 mt-4 animate-bounceIn flex items-center justify-center"
            >
              <Sparkles size={18} className="mr-2 animate-pulse" />
              See Plans & Pricing
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;