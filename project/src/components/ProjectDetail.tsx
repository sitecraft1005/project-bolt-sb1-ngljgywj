import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  // Project data mapping
  const projectsData = {
    "4": {
      id: "4",
      type: "Boutique",
      title: "Miraz By Noor",
      description: "A comprehensive e-commerce solution for a luxury fashion boutique.",
      fullDescription: "We created a sophisticated online shopping experience that reflects the boutique's high-end brand identity while providing seamless functionality for customers.",
      image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg",
      features: ["E-commerce platform", "Inventory management", "Customer accounts", "Wishlist feature"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe Integration"],
      results: [
        "150% increase in online sales",
        "45% reduction in inventory management time",
        "98% positive customer feedback",
        "Mobile conversion rate improved by 75%"
      ],
      gallery: [
        "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg",
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
        "https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg"
      ]
    },
    "5": {
      id: "5",
      type: "Bakery",
      title: "Sweet Delights Bakery",
      description: "Delicious website with catering and special order capabilities.",
      fullDescription: "We developed a mouth-watering website that showcases their delectable creations while streamlining the ordering process for customers and catering clients.",
      image: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg",
      features: ["Online ordering system", "Custom cake designer", "Catering portal", "Event planning integration"],
      technologies: ["Vue.js", "Laravel", "MySQL", "PayPal Integration"],
      results: [
        "200% increase in catering inquiries",
        "35% boost in special orders",
        "90% reduction in order processing time",
        "500+ positive customer reviews"
      ],
      gallery: [
        "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg",
        "https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg",
        "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg"
      ]
    },
    "3": {
      id: "3",
      type: "Gym",
      title: "PowerFit Gym",
      description: "Dynamic website with membership management and class scheduling.",
      fullDescription: "We built a powerful platform that helps PowerFit Gym manage their memberships, class schedules, and trainer bookings while providing an engaging experience for their members.",
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
      features: ["Class scheduling system", "Membership management", "Trainer booking portal", "Fitness progress tracking"],
      technologies: ["React", "Firebase", "Node.js", "Stripe Integration"],
      results: [
        "180% increase in class bookings",
        "60% rise in membership retention",
        "40% boost in trainer sessions",
        "95% member satisfaction rate"
      ],
      gallery: [
        "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
        "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg",
        "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg"
      ]
    }
  };

  const projectData = projectsData[projectId as keyof typeof projectsData] || projectsData["4"];

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-yellow-600 hover:text-yellow-700 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </button>

        {/* Project Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{projectData.title}</h1>
            <span className="inline-block bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {projectData.type}
            </span>
            <p className="text-lg text-gray-600 mb-6">{projectData.fullDescription}</p>
            
            <div className="space-y-4">
              {projectData.results.map((result, index) => (
                <div key={index} className="flex items-center">
                  <Check size={20} className="text-yellow-500 mr-2" />
                  <span className="text-gray-700">{result}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img 
              src={projectData.image} 
              alt={projectData.title}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Features & Technologies */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-4">
              {projectData.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check size={20} className="text-yellow-500 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {projectData.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.gallery.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`Project view ${index + 1}`}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
