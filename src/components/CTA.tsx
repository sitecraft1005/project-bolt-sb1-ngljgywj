import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            business_type: formData.businessType,
            message: formData.message || null
          }
        ]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          message: ''
        });
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 lg:px-0">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-blue-100 px-4 lg:px-0">
              Get your free demo and see how we can help your local business stand out online. 
              No tech skills required – we handle everything for you.
            </p>
            
            <div className="space-y-4 mb-6 sm:mb-8 px-4 lg:px-0">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <Check size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg sm:text-xl">No Tech Skills Needed</h3>
                  <p className="text-blue-100 text-sm sm:text-base">We handle all the technical aspects so you can focus on your business.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <Check size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg sm:text-xl">Ready in Weeks, Not Months</h3>
                  <p className="text-blue-100 text-sm sm:text-base">Our streamlined process gets your website up and running quickly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <Check size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg sm:text-xl">Affordable Local Pricing</h3>
                  <p className="text-blue-100 text-sm sm:text-base">Our rates are designed specifically for local business budgets.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 px-4 lg:px-0">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Mail size={16} className="sm:w-5 sm:h-5" />
                </div>
                <a href="mailto:connect@sitecraft.com" className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base">
                  connect@sitecraft.com
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Phone size={16} className="sm:w-5 sm:h-5" />
                </div>
                <a href="tel:+917633880806" className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base">
                  +91 76338 80806
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden text-gray-800 mx-4 lg:mx-0">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-1">See Plans & Pricing</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Fill out the form and we'll get back to you with pricing options.</p>
              
              {isSubmitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 mb-4">
                    <Check size={24} className="sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We've received your request and will contact you shortly to schedule your free demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        value={formData.businessType}
                        onChange={handleChange}
                      >
                        <option value="">Select a type</option>
                        <option value="cafe">Café or Restaurant</option>
                        <option value="salon">Hair Salon or Spa</option>
                        <option value="gym">Gym or Fitness Studio</option>
                        <option value="retail">Retail Shop or Boutique</option>
                        <option value="professional">Professional Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      placeholder="Tell us about your business and website needs..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-md transition-all flex items-center justify-center group text-sm sm:text-base ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'See Plans & Pricing'}
                    {!isSubmitting && (
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;