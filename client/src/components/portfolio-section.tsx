import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Pet Product Startup - UC Berkeley Entrepreneurship Challenge",
    description: "Led team to 3rd place finish in Haas entrepreneurship challenge, launching pet product business that generated several hundred dollars in first week. Later validated product-market fit when Trader Joe's stocked similar product at identical price point.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Entrepreneurship", "Product-Market Fit", "Team Leadership"]
  },
  {
    title: "Trading Platform Multi-Function Product Management",
    description: "Performed multiple product management functions at Toshi Markets including SDR, CSM, APM, and GTM while maintaining profitable trading record. Led cross-functional collaboration to scale user training processes and improve satisfaction.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Product Management", "Cross-functional", "User Experience"]
  },
  {
    title: "High-Profile Event Production Management",
    description: "Managed stakeholder alignment and cross-functional collaboration for major events including Grammys, E3, and Samsung campaigns. Transformed creative ideas into tangible results under tight deadlines through effective coordination.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Project Management", "Creative Vision", "Stakeholder Management"]
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-berkeley-blue mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing key projects and achievements that demonstrate my expertise
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-berkeley-blue mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className={`${
                        tagIndex === 0 ? 'bg-berkeley-blue text-white hover:bg-berkeley-blue/90' :
                        tagIndex === 1 ? 'bg-california-gold text-berkeley-blue hover:bg-california-gold/90' :
                        'bg-gray-500 text-white hover:bg-gray-500/90'
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button className="text-berkeley-blue font-semibold hover:text-california-gold transition-colors flex items-center">
                  View Case Study 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
