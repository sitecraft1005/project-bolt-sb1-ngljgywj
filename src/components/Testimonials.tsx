import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  image: string;
  quote: string;
  rating: number;
  businessType: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Nooe Saba",
    business: "Miraz by Noor",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "SiteCraft designed an e-commerce site that perfectly captures our boutique's style. Sales have doubled and customers love browsing our collections online.",
    rating: 5,
    businessType: "Boutique"
  },
  {
    id: 2,
    name: "Animesh Krishnan",
    business: "Elite Fitness Gym",
    image: "/images/client1.jpeg",
    quote: "The team at SiteCraft made the process so easy. They understood exactly what our gym needed, and we've seen a 40% increase in new membership inquiries.",
    rating: 5,
    businessType: "Gym"
  },
  {
    id: 4,
    name: "Navneet Kumar",
    business: "Urban Thread Boutique",
    image: "/images/client2.jpeg",
    quote: "SiteCraft transformed our outdated website into a beautiful online experience. Our online orders have increased by 60% since the new site launched!",
    rating: 5,
    businessType: "Cafe"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const testimonial = testimonialData[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped numerous local businesses transform their online presence. Here's what they have to say.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90"></div>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-white text-lg font-bold">{testimonial.name}</div>
                  <div className="text-blue-200">{testimonial.business}</div>
                  <span className="inline-block bg-white/20 text-sm px-3 py-1 rounded-full mt-2">
                    {testimonial.businessType}
                  </span>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <svg className="w-10 h-10 text-blue-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex space-x-2">
                    {testimonialData.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                        }`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`View testimonial ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                      onClick={() => setCurrentIndex((currentIndex - 1 + testimonialData.length) % testimonialData.length)}
                      aria-label="Previous testimonial"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                      onClick={() => setCurrentIndex((currentIndex + 1) % testimonialData.length)}
                      aria-label="Next testimonial"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;