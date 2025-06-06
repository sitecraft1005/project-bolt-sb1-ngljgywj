import React from 'react';
import { Smartphone, Search, Zap, Palette, Globe, Shield } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    icon: <Smartphone size={32} className="text-blue-600" />,
    title: "Mobile-Responsive Design",
    description: "Every site we create automatically adapts to look perfect on phones, tablets, and desktops."
  },
  {
    icon: <Search size={32} className="text-blue-600" />,
    title: "SEO Optimization",
    description: "We build your site with search engines in mind, helping local customers find your business online."
  },
  {
    icon: <Zap size={32} className="text-blue-600" />,
    title: "Lightning-Fast Loading",
    description: "Our websites load quickly, keeping visitors engaged and improving your search rankings."
  },
  {
    icon: <Palette size={32} className="text-blue-600" />,
    title: "Custom Branding",
    description: "Your website will perfectly match your brand's colors, fonts, and overall aesthetic."
  },
  {
    icon: <Globe size={32} className="text-blue-600" />,
    title: "Content Management",
    description: "Easily update your website content without technical knowledge using our simple tools."
  },
  {
    icon: <Shield size={32} className="text-blue-600" />,
    title: "Security & Support",
    description: "We provide ongoing maintenance, updates, and security to keep your site protected."
  }
];

const Features: React.FC = () => {
  return (
    <section id="services\" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
            Features Your Business Deserves
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We build websites with powerful features that help your local business thrive online, without the technical headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 mx-4 sm:mx-0"
            >
              <div className="mb-4 sm:mb-5 inline-block p-3 bg-blue-50 rounded-lg">
                {React.cloneElement(feature.icon as React.ReactElement, {
                  size: window.innerWidth < 640 ? 28 : 32
                })}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;