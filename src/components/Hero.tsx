import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 rounded-full animate-float animate-morphing -top-10 -left-10 sm:-top-20 sm:-left-20"></div>
        <div className="absolute w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 rounded-full animate-float animate-morphing top-20 -right-5 sm:top-40 sm:-right-10" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-20 rounded-full animate-float animate-morphing bottom-10 left-1/4 sm:bottom-20" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Glowing particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Animated badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6 transition-all duration-1000 ${isVisible ? 'animate-slideUp opacity-100' : 'opacity-0'}`}>
              <Sparkles size={16} className="mr-2 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium text-yellow-300">Premium Web Design Agency</span>
            </div>

            {/* Main heading with typewriter effect */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className={`block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-gradient transition-all duration-1000 hover:scale-105 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
                Crafting Stunning
              </span>
              <span className={`block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient transition-all duration-1000 hover:scale-105 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
                Websites for
              </span>
              <span className={`block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient transition-all duration-1000 hover:scale-105 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                Local Businesses
              </span>
            </h1>

            <p className={`text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed px-2 lg:px-0 transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              We help small business owners establish a powerful online presence without the tech overwhelm. 
              Stand out from competitors with a website that truly represents your brand.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
              <button 
                onClick={handlePricingClick}
                className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-2 animate-glow overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Zap size={20} className="mr-2 animate-pulse" />
                  See Plans & Pricing
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button 
                onClick={handlePortfolioClick}
                className="group border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 backdrop-blur-sm bg-white/5"
              >
                <div className="flex items-center justify-center">
                  View Our Work
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Stats section */}
            <div className={`grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 animate-pulse-custom">50+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 animate-pulse-custom" style={{animationDelay: '0.5s'}}>100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 animate-pulse-custom" style={{animationDelay: '1s'}}>24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Hero Images */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main showcase */}
              <div className="relative bg-gradient-to-br from-white to-gray-100 p-4 rounded-2xl shadow-2xl transform rotate-3 transition-all duration-700 hover:rotate-0 hover:scale-105 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 rounded-2xl animate-pulse-custom"></div>
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Website example" 
                  className="relative rounded-xl w-full h-auto shadow-lg" 
                />
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg animate-bounceIn">
                  Café Website
                </div>
              </div>
              
              {/* Floating mobile mockup */}
              <div className="absolute top-1/4 -left-12 bg-gradient-to-br from-white to-gray-100 p-3 rounded-2xl shadow-2xl transform -rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-110 animate-float" style={{animationDelay: '1s'}}>
                <img 
                  src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Mobile design" 
                  className="w-24 h-auto rounded-lg shadow-md" 
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg animate-bounceIn" style={{animationDelay: '0.5s'}}>
                  Mobile-First
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float animate-pulse-custom" style={{animationDelay: '2s'}}>
                <Sparkles size={24} className="text-white" />
              </div>
              
              <div className="absolute bottom-10 left-5 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-float animate-pulse-custom" style={{animationDelay: '3s'}}>
                <Zap size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;