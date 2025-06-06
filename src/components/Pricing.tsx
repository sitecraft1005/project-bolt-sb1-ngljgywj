import React, { useState } from 'react';
import { Check, ArrowRight, Star, Zap, Rocket, Crown } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  bonus: string;
  popular?: boolean;
}

interface AddOn {
  service: string;
  price: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'launch-pad',
    name: 'Launch Pad',
    price: '₹15,000',
    description: 'For businesses starting fresh online.',
    icon: <Rocket size={24} className="text-white" />,
    features: [
      '3-Page Mobile-Responsive Website (Home, About, Contact)',
      'WhatsApp Chat Button Integration',
      'Basic Contact Form',
      'Domain + Hosting Setup Support',
      'Google Maps Listing Setup',
      'SEO-Ready (Meta Tags, Image Alt Text)',
      '2 Design Revisions'
    ],
    bonus: 'Lifetime Bug Fix Support'
  },
  {
    id: 'brand-builder',
    name: 'Brand Builder',
    price: '₹20,000',
    description: 'For growing businesses that want an identity.',
    icon: <Star size={24} className="text-white" />,
    features: [
      'Everything in Launch Pad, plus:',
      'Logo Design (if not already present)',
      'Social Media Page Setup (Instagram, Facebook, Google Maps)',
      'Copywriting for All Website Pages',
      '5-Page Website (Home, About, Services, Contact, Gallery/Blog)',
      'Custom Fonts, Colors & Branding',
      '3 Design Revisions'
    ],
    bonus: '3 Editable Social Media Templates'
  },
  {
    id: 'growth-pro',
    name: 'Growth Pro',
    price: '₹25,000',
    description: 'For serious businesses ready to grow traffic and visibility.',
    icon: <Zap size={24} className="text-white" />,
    features: [
      'Everything in Brand Builder, plus:',
      'Advanced SEO (Local Keywords, On-Page Optimization)',
      'Google My Business Ranking Support (Reviews Strategy, NAP Audit)',
      'Social Media Content Plan (8 Post Ideas + Captions)',
      'Blog Setup + 1 Free Blog Article',
      'Google Analytics & Search Console Setup',
      'Speed Optimization (90+ Score on Mobile)',
      '4 Design Revisions'
    ],
    bonus: '2 Custom Reels with Captions & Hashtags',
    popular: true
  },
  {
    id: 'digital-dominator',
    name: 'Digital Dominator',
    price: '₹35,000',
    description: 'For businesses wanting both a site and an app.',
    icon: <Crown size={24} className="text-white" />,
    features: [
      'Everything in Growth Pro, plus:',
      'Android App (WebView version)',
      'Play Store Publishing Support',
      'Online Ordering or Booking System (if applicable)',
      'Payment Gateway Integration',
      'Email Setup (e.g., info@yourbusiness.com)',
      '8 Designed Posts for Social Media',
      'Priority Support for 30 Days',
      '5 Revisions'
    ],
    bonus: 'Complete Digital Ecosystem Setup'
  }
];

const addOns: AddOn[] = [
  { service: 'Monthly SEO & Google Maps Ranking', price: '₹2,500/mo' },
  { service: 'Monthly Social Media (8 posts)', price: '₹3,000/mo' },
  { service: 'WhatsApp Catalog Setup', price: '₹999' },
  { service: 'Blog Article Writing', price: '₹500/article' },
  { service: 'Facebook Ads Setup', price: '₹2,000 (One-Time)' }
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
            SiteCraft — Premium Website & Digital Presence Plans
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Helping local businesses look world-class online.
          </p>
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            📈 All plans include one-time payment • No monthly fees
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 mx-4 sm:mx-0 ${
                plan.popular ? 'ring-2 ring-yellow-500 lg:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-yellow-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Plan Icon & Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">
                    {plan.price}
                    <span className="text-xs sm:text-sm font-normal text-gray-500 block"> (One-Time)</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Includes:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check size={14} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus */}
                <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2 text-sm sm:text-base">Bonus:</h4>
                  <p className="text-xs sm:text-sm text-yellow-700">{plan.bonus}</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center group text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      : 'bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-800'
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-12 sm:mb-16 mx-4 sm:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">⚡ Add-Ons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:border-yellow-500 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{addon.service}</h3>
                <div className="text-lg sm:text-2xl font-bold text-yellow-600">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose SiteCraft */}
        <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 sm:p-12 text-white mx-4 sm:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose SiteCraft?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2">Build Trust</h3>
              <p className="text-yellow-100 text-sm sm:text-base">Professional websites that establish credibility with your customers</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-4">🔍</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2">Get Found</h3>
              <p className="text-yellow-100 text-sm sm:text-base">SEO-optimized sites that help local customers discover your business</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-4">📈</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2">Grow Online</h3>
              <p className="text-yellow-100 text-sm sm:text-base">Complete digital presence that drives real business growth</p>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-lg"
            >
              Contact SiteCraft Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;