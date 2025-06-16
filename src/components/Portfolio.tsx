import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Palette, Zap } from 'lucide-react';

interface PortfolioItem {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  color: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 3,
    type: "Gym",
    title: "PowerFit Gym",
    description: "Dynamic website with membership management and class scheduling.",
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["Class schedules", "Trainer bios", "Membership plans", "Fitness blog"],
    color: "from-red-500 to-orange-500"
  },
  {
    id: 4,
    type: "Boutique",
    title: "Miraz By Noor",
    description: "Fashion-forward e-commerce site with inventory management.",
    image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["E-commerce", "Inventory system", "Fashion blog", "Gift cards"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    type: "Bakery",
    title: "Sweet Delights Bakery",
    description: "Delicious website with catering and special order capabilities.",
    image: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["Order forms", "Product gallery", "Catering info", "Testimonials"],
    color: "from-yellow-500 to-orange-500"
  },
];

const Portfolio: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('portfolio');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Palette size={16} className="mr-2 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Our Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Stunning Websites for Every Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've helped numerous local businesses elevate their online presence with beautiful, 
            functional websites that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {portfolioData.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 mx-2 sm:mx-0 ${
                isVisible ? 'animate-slideUp' : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image container with overlay */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                {/* Type badge */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white py-2 px-4 rounded-full text-sm font-bold shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                  {item.type}
                </div>

                {/* Hover overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button 
                    onClick={() => window.location.href = `#/project/${item.id}`}
                    className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="font-bold text-xl sm:text-2xl mb-3 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
                
                {/* Features with animation */}
                <div className={`space-y-3 transition-all duration-500 ${
                  hoveredItem === item.id || window.innerWidth < 768 
                    ? 'opacity-100 max-h-40' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  <div className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                    <Code size={16} className="mr-2 text-purple-600" />
                    Key Features:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className={`flex items-center text-sm text-gray-600 animate-slideInLeft`}
                        style={{animationDelay: `${featureIndex * 0.1}s`}}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mr-2 flex-shrink-0 animate-pulse`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* View project button for mobile */}
                <button 
                  onClick={() => window.location.href = `#/project/${item.id}`}
                  className={`mt-6 w-full bg-gradient-to-r ${item.color} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2 md:hidden`}
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>

              {/* Floating icon */}
              <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100`}>
                <Zap size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
          <p className="text-gray-600 mb-6 text-lg">Ready to see your business featured here?</p>
          <button 
            onClick={() => window.location.hash = '#contact'}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 animate-glow"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;