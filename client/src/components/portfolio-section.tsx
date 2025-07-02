import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Digital Transformation Platform",
    description: "Led the development of an enterprise-wide digital transformation platform that improved operational efficiency by 40% and reduced costs by $2M annually.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Cloud Architecture", "API Design", "Leadership"]
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Architected and delivered a real-time analytics platform serving 1M+ users with 99.9% uptime and sub-second response times.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Big Data", "Real-time", "Scalability"]
  },
  {
    title: "Team Excellence Initiative",
    description: "Developed and implemented a comprehensive team development program that increased productivity by 35% and reduced turnover by 50%.",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Leadership", "Process", "Culture"]
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
