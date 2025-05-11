import React from 'react';
import { MessageSquare, PenTool, Rocket } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const processSteps: Step[] = [
  {
    id: 1,
    title: "Consult",
    icon: <MessageSquare size={32} className="text-white" />,
    description: "We start with a detailed consultation to understand your business goals and target audience.",
    details: [
      "Business requirements gathering",
      "Target audience analysis",
      "Competitive landscape review",
      "Project scope definition"
    ]
  },
  {
    id: 2,
    title: "Design",
    icon: <PenTool size={32} className="text-white" />,
    description: "Our designers create a custom website tailored specifically to your local business.",
    details: [
      "Custom visual design concepts",
      "Responsive layout planning",
      "Content organization",
      "Interactive prototype review"
    ]
  },
  {
    id: 3,
    title: "Launch",
    icon: <Rocket size={32} className="text-white" />,
    description: "We handle all technical aspects to ensure your site launches seamlessly and securely.",
    details: [
      "Development and testing",
      "Content population",
      "Performance optimization",
      "Training and handover"
    ]
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Simple 3-Step Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your business online is easier than you think. We've streamlined the process to make it 
            stress-free and straightforward.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

          <div className="space-y-16 lg:space-y-24 relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.id} className={`lg:flex items-center gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Step Number with Icon */}
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <div className="relative mx-auto lg:mx-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 duration-300">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md text-blue-600 font-bold">
                      {step.id}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`bg-white p-8 rounded-xl shadow-md lg:w-5/6 ${index % 2 !== 0 ? 'text-right' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${index % 2 !== 0 ? 'md:justify-items-end' : ''}`}>
                    {step.details.map((detail, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mx-2"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ready to start your project? Let's create something amazing together.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;