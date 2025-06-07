import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handlePricingClick = () => {
    window.location.hash = '#pricing';
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-yellow-400 opacity-20 rounded-full -top-10 -left-10 sm:-top-20 sm:-left-20"></div>
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-yellow-300 opacity-20 rounded-full top-20 -right-5 sm:top-40 sm:-right-10"></div>
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-yellow-200 opacity-20 rounded-full bottom-10 left-1/4 sm:bottom-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block transform transition-all hover:scale-105 hover:text-yellow-300 duration-300">Crafting Stunning</span>
              <span className="block transform transition-all hover:scale-105 hover:text-yellow-200 delay-75 duration-300">Websites for</span>
              <span className="block transform transition-all hover:scale-105 hover:text-yellow-100 delay-150 duration-300">Local Businesses</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0">
              We help small business owners establish a powerful online presence without the tech overwhelm. Stand out from competitors with a website that truly represents your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={handlePricingClick}
                className="bg-white text-yellow-600 hover:bg-yellow-50 font-semibold px-6 py-3 sm:py-4 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base"
              >
                See Plans & Pricing
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={handlePortfolioClick}
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 sm:py-4 rounded-md transition-all flex items-center justify-center text-sm sm:text-base"
              >
                View Our Work
              </button>
            </div>
          </div>
          
          {/* Hero Images - Hidden on mobile, visible on larger screens */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white p-3 sm:p-4 rounded-lg shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Website example" 
                className="rounded w-full h-auto" 
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-semibold">
                Café Website
              </div>
            </div>
            
            <div className="absolute top-1/4 -left-8 sm:-left-12 bg-white p-2 sm:p-3 rounded-lg shadow-xl transform -rotate-6 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Mobile design" 
                className="w-16 sm:w-24 h-auto rounded" 
              />
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-purple-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-xs font-semibold">
                Mobile-First
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;