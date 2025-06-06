import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-gray-800 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
              <img 
                src="/images/logo2.png"
                alt="SiteCraft Logo" 
                className="h-16 sm:h-20 w-auto rounded-lg"
                onError={(e) => {
                  console.error('Error loading logo:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              We help local businesses establish a powerful online presence with stunning, 
              functional websites that drive growth.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                <Facebook size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                <Twitter size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-600 hover:text-yellow-500 transition-colors flex items-center justify-center sm:justify-start text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-gray-800">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Website Design & Development', 
                'E-commerce Solutions', 
                'Content Management Systems', 
                'SEO Optimization', 
                'Mobile Responsive Design',
                'Website Maintenance',
                'Local Business SEO'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-gray-600 hover:text-yellow-500 transition-colors flex items-center justify-center sm:justify-start text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-gray-800">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin size={18} className="sm:w-5 sm:h-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                  building 2130 , Race Cousrse, Camp<br />
                  Pune, Maharashtra (411001)
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone size={18} className="sm:w-5 sm:h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <a href="tel:+917633880806" className="text-gray-600 hover:text-yellow-500 transition-colors text-sm sm:text-base">
                  +91 76338 80806
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail size={18} className="sm:w-5 sm:h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <a href="mailto:connect@sitecraft.com" className="text-gray-600 hover:text-yellow-500 transition-colors text-sm sm:text-base">
                  connect@sitecraft.com
                </a>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h5 className="font-medium mb-2 text-gray-800 text-sm sm:text-base">Business Hours:</h5>
              <p className="text-gray-600 text-xs sm:text-sm">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-0">
              © {currentYear} SiteCraft. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-600">
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;