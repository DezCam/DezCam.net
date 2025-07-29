import { motion } from "framer-motion";
import { ArrowRight, Expand } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WaitingListDialog from "./waiting-list-dialog";
import { useState } from "react";

const projects = [
  {
    title: "Trading Performance: $100K to $1.51M in 5 Months",
    description: "Achieved exceptional 1,407.75% return in paper trading account, demonstrating advanced quantitative analysis, risk management, and data-driven decision making. This performance showcases analytical skills directly applicable to product management and business strategy.",
    image: "/images/trading-performance.png",
    tags: ["Data Analysis", "Risk Management", "Quantitative Skills"]
  },
  {
    title: "LoyalPup - Organic Treats for Working Dogs",
    description: "Co-founded pet product startup earning 3rd place at UC Berkeley Haas Entrepreneurship Challenge. Developed organic treats targeting working dogs while supporting mental health awareness, demonstrating product-market fit validation and social impact integration.",
    image: "/images/loyalpup-logo.png",
    tags: ["Entrepreneurship", "Product-Market Fit", "Social Impact"],
    link: "https://www.instagram.com/loyalpup_ucb/",
    instagramPost: "https://www.instagram.com/p/CnyK35QLTMb/",
    caseStudy: {
      challenge: "Create sustainable pet product business addressing working dog nutrition needs while promoting mental health awareness",
      solution: "Developed organic treat formulation specifically for working dogs, integrating social impact mission with entrepreneurship challenge requirements",
      impact: "Achieved 3rd place at prestigious UC Berkeley Haas Entrepreneurship Challenge, validated product-market fit through Trader Joe's stocking similar product at identical price point"
    }
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
    image: "/images/event-production-new.jpg",
    tags: ["Project Management", "Creative Vision", "Stakeholder Management"]
  },
  {
    title: "Kratos Combat Club - Martial Arts Academy",
    description: "Founded and operated martial arts academy (2007-2014) serving diverse communities with dual black belts in Tae Kwon Do and Ninjutsu. Specialized programs included Coalition for At Risk Youth (CARY) where I trained hundreds of kids over intensive 3-day cycles, women's self-defense classes, children's birthday parties, and private training. Built entrepreneurial foundation teaching intangibles: self-control, focus, mental toughness, humility, and respect.",
    image: "/images/kratos-combat-club-jump.jpg",
    tags: ["Entrepreneurship", "Leadership Development", "Community Impact"],
    caseStudy: {
      challenge: "Serve at-risk youth through martial arts education while building sustainable business model",
      solution: "Developed intensive training programs cycling hundreds of students through structured sessions, emphasizing character development alongside physical skills",
      impact: "Built foundation of discipline and resilience that drives current entrepreneurial success and leadership approach"
    }
  }
];

export default function PortfolioSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const ImageWithExpand = ({ project, index }: { project: any, index: number }) => {
    const isExpandable = project.image.includes('trading-performance');
    
    if (isExpandable) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative group cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title}
                className={`w-full h-48 ${
                  project.image.includes('loyalpup-logo') 
                    ? 'object-contain bg-gradient-to-br from-yellow-100 to-yellow-50 p-4' 
                    : project.image.includes('kratos-combat-club')
                    ? 'object-cover object-center filter contrast-110 brightness-105 saturate-110 transform hover:scale-105 transition-all duration-300'
                    : 'object-cover hover:brightness-90 transition-all duration-300'
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                  <Expand className="h-6 w-6 text-berkeley-blue" />
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-berkeley-blue mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <img 
        src={project.image} 
        alt={project.title}
        className={`w-full h-48 ${
          project.image.includes('loyalpup-logo') 
            ? 'object-contain bg-gradient-to-br from-yellow-100 to-yellow-50 p-4' 
            : project.image.includes('kratos-combat-club')
            ? 'object-cover object-center filter contrast-110 brightness-105 saturate-110 transform hover:scale-105 transition-all duration-300'
            : 'object-cover'
        }`}
      />
    );
  };

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
              <ImageWithExpand project={project} index={index} />
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
                {project.link ? (
                  <div className="space-y-2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-berkeley-blue font-semibold hover:text-california-gold transition-colors flex items-center"
                    >
                      Follow us on Instagram
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                    {project.instagramPost && (
                      <a 
                        href={project.instagramPost} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-berkeley-blue transition-colors flex items-center"
                      >
                        View Instagram Case Study
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    )}
                    {project.caseStudy && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-berkeley-blue mb-2">Case Study Highlights:</h4>
                        <div className="text-sm text-gray-700 space-y-2">
                          <p><strong>Challenge:</strong> {project.caseStudy.challenge}</p>
                          <p><strong>Solution:</strong> {project.caseStudy.solution}</p>
                          <p><strong>Impact:</strong> {project.caseStudy.impact}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : project.caseStudy ? (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-berkeley-blue mb-2">Case Study Highlights:</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p><strong>Challenge:</strong> {project.caseStudy.challenge}</p>
                      <p><strong>Solution:</strong> {project.caseStudy.solution}</p>
                      <p><strong>Impact:</strong> {project.caseStudy.impact}</p>
                    </div>
                  </div>
                ) : index === 0 ? (
                  <WaitingListDialog />
                ) : (
                  <button className="text-berkeley-blue font-semibold hover:text-california-gold transition-colors flex items-center">
                    View Case Study 
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}