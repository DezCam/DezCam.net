import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Trading Platform User Experience Optimization",
    description: "Collaborated with development teams to scale user training processes at Toshi Markets, resulting in 4% user-to-customer conversion rate improvement and increased user satisfaction with trading products and services.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["User Research", "Cross-functional", "Product Strategy"]
  },
  {
    title: "High-Profile Event Production Management",
    description: "Managed stakeholder alignment and cross-functional collaboration for major events including Grammys, E3, and Samsung campaigns. Delivered camera-ready results through effective project coordination and vendor management.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Project Management", "Stakeholder", "Coordination"]
  },
  {
    title: "Financial Services Customer Success Program",
    description: "Built strong client relationships at Primerica by addressing financial concerns with empathy, achieving #7 ranking in California and consistently exceeding $10k monthly sales quotas through data-driven insights.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Customer Success", "Sales Strategy", "Relationship Building"]
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
          <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
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
                <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className={`${
                        tagIndex === 0 ? 'bg-navy text-white hover:bg-navy/90' :
                        tagIndex === 1 ? 'bg-blue-500 text-white hover:bg-blue-500/90' :
                        'bg-gray-500 text-white hover:bg-gray-500/90'
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button className="text-navy font-semibold hover:text-blue-500 transition-colors flex items-center">
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
