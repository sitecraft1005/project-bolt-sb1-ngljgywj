import React, { useState, useEffect } from 'react';
import { Smartphone, Search, Zap, Palette, Globe, Shield, Sparkles } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const featuresData: Feature[] = [
  {
    icon: <Smartphone size={32} />,
    title: "Mobile-Responsive Design",
    description: "Every site we create automatically adapts to look perfect on phones, tablets, and desktops.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Search size={32} />,
    title: "SEO Optimization",
    description: "We build your site with search engines in mind, helping local customers find your business online.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Zap size={32} />,
    title: "Lightning-Fast Loading",
    description: "Our websites load quickly, keeping visitors engaged and improving your search rankings.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Palette size={32} />,
    title: "Custom Branding",
    description: "Your website will perfectly match your brand's colors, fonts, and overall aesthetic.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Globe size={32} />,
    title: "Content Management",
    description: "Easily update your website content without technical knowledge using our simple tools.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Shield size={32} />,
    title: "Security & Support",
    description: "We provide ongoing maintenance, updates, and security to keep your site protected.",
    color: "from-red-500 to-rose-500"
  }
];

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Sparkles size={16} className="mr-2 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Features Your Business Deserves
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build websites with powerful features that help your local business thrive online, 
            without the technical headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100/50 mx-2 sm:mx-0 hover-lift ${
                isVisible ? 'animate-slideUp' : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 0.15}s`}}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Icon container */}
              <div className={`relative mb-6 inline-block p-4 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <div className="text-white">
                  {React.cloneElement(feature.icon as React.ReactElement, {
                    size: window.innerWidth < 640 ? 28 : 32
                  })}
                </div>
                
                {/* Floating particles */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}></div>
                <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse`} style={{animationDelay: '0.2s'}}></div>
              </div>
              
              <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-4 transition-all duration-300 ${
                hoveredIndex === index ? 'text-transparent bg-gradient-to-r bg-clip-text ' + feature.color : ''
              }`}>
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                {feature.description}
              </p>

              {/* Animated border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{padding: '2px'}}>
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>

              {/* Hover indicator */}
              <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100`}>
                <Sparkles size={16} className="text-white animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white mx-4 sm:mx-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 animate-neon">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 text-lg">Let's build something amazing together</p>
            <button 
              onClick={() => window.location.hash = '#contact'}
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 animate-pulse-custom"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;