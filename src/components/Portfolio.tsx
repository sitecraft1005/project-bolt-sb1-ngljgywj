import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: 3,
    type: "Gym",
    title: "PowerFit Gym",
    description: "Dynamic website with membership management and class scheduling.",
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["Class schedules", "Trainer bios", "Membership plans", "Fitness blog"]
  },
  {
    id: 4,
    type: "Boutique",
    title: "Miraz By Noor",
    description: "Fashion-forward e-commerce site with inventory management.",
    image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["E-commerce", "Inventory system", "Fashion blog", "Gift cards"]
  },
  {
    id: 5,
    type: "Bakery",
    title: "Sweet Delights Bakery",
    description: "Delicious website with catering and special order capabilities.",
    image: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["Order forms", "Product gallery", "Catering info", "Testimonials"]
  },
];

const Portfolio: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
            Stunning Websites for Every Business
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We've helped numerous local businesses elevate their online presence with beautiful, functional websites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 mx-4 sm:mx-0"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-600 text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                  {item.type}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{item.description}</p>
                
                {(hoveredItem === item.id || window.innerWidth < 768) && (
                  <div className="space-y-2 animate-fadeIn">
                    <div className="text-sm font-semibold text-gray-800">Key Features:</div>
                    <ul className="text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
                      {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button 
                  onClick={() => window.location.href = `#/project/${item.id}`}
                  className="mt-4 text-yellow-600 font-medium hover:text-yellow-800 transition-colors flex items-center text-sm sm:text-base"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;