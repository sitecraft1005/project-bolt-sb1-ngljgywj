import React from 'react';
import { Smartphone, Search, Zap, Palette, Globe, Shield } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    icon: <Smartphone size={40} className="text-blue-600" />,
    title: "Mobile-Responsive Design",
    description: "Every site we create automatically adapts to look perfect on phones, tablets, and desktops."
  },
  {
    icon: <Search size={40} className="text-blue-600" />,
    title: "SEO Optimization",
    description: "We build your site with search engines in mind, helping local customers find your business online."
  },
  {
    icon: <Zap size={40} className="text-blue-600" />,
    title: "Lightning-Fast Loading",
    description: "Our websites load quickly, keeping visitors engaged and improving your search rankings."
  },
  {
    icon: <Palette size={40} className="text-blue-600" />,
    title: "Custom Branding",
    description: "Your website will perfectly match your brand's colors, fonts, and overall aesthetic."
  },
  {
    icon: <Globe size={40} className="text-blue-600" />,
    title: "Content Management",
    description: "Easily update your website content without technical knowledge using our simple tools."
  },
  {
    icon: <Shield size={40} className="text-blue-600" />,
    title: "Security & Support",
    description: "We provide ongoing maintenance, updates, and security to keep your site protected."
  }
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features Your Business Deserves</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We build websites with powerful features that help your local business thrive online, without the technical headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-5 inline-block p-3 bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 text-blue-800 font-semibold py-2 px-4 rounded-full text-sm mb-4">
            All websites include:
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["Custom domain setup", "SSL security", "Google Analytics", "Contact forms", 
              "Social media integration", "Local business schema", "Image optimization", "Unlimited revisions"].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-full py-2 px-4 text-sm text-gray-700 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;