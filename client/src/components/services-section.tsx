import { motion } from "framer-motion";
import { Globe, Code, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Design & Development",
    description: "Custom websites and web applications built with modern technologies for businesses and organizations.",
    features: [
      "One-page to multi-page websites",
      "Responsive design for all devices",
      "Modern UI/UX with professional aesthetics",
      "SEO optimization and performance",
      "E-commerce integration",
      "Database integration"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    pricing: "$700 - $3,000",
    timeline: "2-4 weeks",
    color: "berkeley-blue"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Custom Software Development",
    description: "Tailored software solutions for businesses needing specialized tools and automation.",
    features: [
      "Custom business applications",
      "API development and integration",
      "Database design and optimization",
      "Automation and workflow tools",
      "Cloud deployment and scaling",
      "Ongoing maintenance and support"
    ],
    technologies: ["Python", "JavaScript", "PostgreSQL", "AWS", "Docker"],
    pricing: "Starting at $3,000",
    timeline: "4-8 weeks",
    color: "california-gold"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Trading Education & Consulting",
    description: "Learn proven trading strategies and risk management techniques from a consistently profitable trader.",
    features: [
      "1-on-1 mentorship from beginner to advanced",
      "Weekly live sessions and chat support",
      "Risk management strategies",
      "Technical analysis training",
      "Trading tools and resources",
      "Only 4 slots left"
    ],
    technologies: ["TradingView", "Risk Management", "Technical Analysis", "Psychology"],
    pricing: "$500/month",
    timeline: "1 free week trial",
    color: "green-600"
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const openCalendly = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleServiceClick = (serviceIndex: number) => {
    if (serviceIndex === 0) { // Website Development
      openCalendly('https://calendly.com/desmondjr88/web-design-development');
    } else if (serviceIndex === 1) { // Custom Software
      openCalendly('https://calendly.com/desmondjr88/custom-software-solutions');
    } else { // Trading Education
      scrollToContact();
    }
  };

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-berkeley-blue mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional development services combining UC Berkeley business education with hands-on technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 rounded-full ${
                    service.color === 'berkeley-blue' ? 'bg-berkeley-blue/10 text-berkeley-blue' :
                    service.color === 'california-gold' ? 'bg-california-gold/10 text-california-gold' :
                    'bg-pigment-green/10 text-pigment-green'
                  }`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-berkeley-blue">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-berkeley-blue mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-berkeley-blue mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <h4 className="font-semibold text-berkeley-blue text-sm">Pricing:</h4>
                      <p className="text-sm text-gray-600">{service.pricing}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-berkeley-blue text-sm">Timeline:</h4>
                      <p className="text-sm text-gray-600">{service.timeline}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleServiceClick(index)}
                    className={`w-full ${
                      service.color === 'berkeley-blue' ? 'bg-berkeley-blue hover:bg-berkeley-blue/90' :
                      service.color === 'california-gold' ? 'bg-pigment-green text-white hover:bg-black-olive' :
                      'bg-pigment-green text-white hover:bg-black-olive'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-berkeley-blue mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project and create a solution that drives results for your business.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-pigment-green text-white hover:bg-black-olive px-8"
            >
              Contact Me Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}