import { motion } from "framer-motion";
import { TrendingUp, Globe, Code, Calendar, BarChart3, Users, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WaitingListDialog from "@/components/waiting-list-dialog";
import Navigation from "@/components/navigation";

const services = [
  {
    id: "trading",
    title: "Trading Education & Mentorship",
    description: "Learn proven trading strategies from someone who achieved 1,407% returns in 4 months",
    icon: <TrendingUp className="h-8 w-8" />,
    price: "$200/month",
    duration: "3-month program",
    features: [
      "1-on-1 mentorship sessions",
      "Access to proven trading strategies",
      "Risk management techniques",
      "Market analysis and timing",
      "Portfolio optimization methods",
      "24/7 support community"
    ],
    highlight: "1,407% Returns Achieved",
    cta: "Join Waiting List",
    popular: true
  },
  {
    id: "website",
    title: "Website Development",
    description: "Professional websites that convert visitors into customers with modern design and functionality",
    icon: <Globe className="h-8 w-8" />,
    price: "$2,500",
    duration: "2-3 weeks delivery",
    features: [
      "Custom responsive design",
      "Modern React/TypeScript development",
      "SEO optimization",
      "Contact forms and integrations",
      "Analytics setup",
      "1 month free support"
    ],
    highlight: "Berkeley-Trained Developer",
    cta: "Schedule Consultation"
  },
  {
    id: "software",
    title: "Custom Software Solutions",
    description: "Tailored software applications to streamline your business operations and boost productivity",
    icon: <Code className="h-8 w-8" />,
    price: "$150/hour",
    duration: "Project-based",
    features: [
      "Custom application development",
      "Database design and integration",
      "API development and integration",
      "User authentication systems",
      "Real-time features",
      "Ongoing maintenance"
    ],
    highlight: "Enterprise-Grade Solutions",
    cta: "Discuss Your Project"
  }
];

export default function Services() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Professional
              <span className="text-berkeley-blue"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage proven expertise in trading, technology, and business strategy. 
              From achieving 1,407% trading returns to developing enterprise solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className={`h-full relative ${service.popular ? 'ring-2 ring-berkeley-blue shadow-xl' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-california-gold text-berkeley-blue">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-berkeley-blue/10 rounded-full text-berkeley-blue">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Highlight */}
                    <div className="text-center">
                      <Badge variant="outline" className="text-berkeley-blue border-berkeley-blue">
                        {service.highlight}
                      </Badge>
                    </div>

                    {/* Pricing */}
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-berkeley-blue">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <div className="h-1.5 w-1.5 bg-berkeley-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      {service.id === 'trading' ? (
                        <WaitingListDialog>
                          <Button className="w-full bg-berkeley-blue hover:bg-blue-800 text-white">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            {service.cta}
                          </Button>
                        </WaitingListDialog>
                      ) : (
                        <Button 
                          onClick={scrollToContact}
                          className="w-full bg-berkeley-blue hover:bg-blue-800 text-white"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          {service.cta}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-berkeley-blue">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-blue-100">
              Results that speak for themselves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-california-gold mb-2">1,407%</div>
              <div className="text-blue-100">Trading Returns Achieved</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-california-gold mb-2">50+</div>
              <div className="text-blue-100">Websites Developed</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-california-gold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how these services can help achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitingListDialog>
                <Button size="lg" className="bg-berkeley-blue hover:bg-blue-800 text-white">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Join Trading Program
                </Button>
              </WaitingListDialog>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToContact}
                className="border-berkeley-blue text-berkeley-blue hover:bg-berkeley-blue hover:text-white"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}