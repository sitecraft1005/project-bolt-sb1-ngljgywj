import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img 
                src="/images/logo2.png"
                alt="SiteCraft Logo" 
                className="h-350 w-[250px] rounded-lg"
                onError={(e) => {
                  console.error('Error loading logo:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-600 mb-6">
              We help local businesses establish a powerful online presence with stunning, 
              functional websites that drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Our Services</h4>
            <ul className="space-y-3">
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
                    className="text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  building 2130 , Race Cousrse, Camp<br />
                  Pune, Maharashtra (411001)
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-yellow-500 mr-3 flex-shrink-0" />
                <a href="tel:+917633880806" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  +91 76338 80806
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-yellow-500 mr-3 flex-shrink-0" />
                <a href="mailto:connect@sitecraft.com" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  connect@sitecraft.com
                </a>
              </li>
            </ul>
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2 text-gray-800">Business Hours:</h5>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} SiteCraft. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-600">
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