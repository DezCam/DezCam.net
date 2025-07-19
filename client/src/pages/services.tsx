import { motion } from "framer-motion";
import { TrendingUp, Globe, Code, Calendar, BarChart3, Users, Clock, DollarSign, Mail, Phone } from "lucide-react";
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
    price: "$500/month",
    duration: "1 free week trial",
    features: [
      "1-on-1 mentorship from beginner to advanced",
      "Weekly live sessions and chat support",
      "Access to proven trading strategies",
      "Risk management techniques",
      "Trading tools and resources",
      "Only 4 slots left"
    ],
    highlight: "1,407% Returns Achieved",
    cta: "Join Waiting List"
  },
  {
    id: "website",
    title: "Website Development",
    description: "Professional websites that convert visitors into customers with modern design and functionality",
    icon: <Globe className="h-8 w-8" />,
    price: "$700 - $3,000",
    duration: "2-3 weeks delivery",
    features: [
      "One-page to multi-page websites",
      "Custom responsive design",
      "Modern React/TypeScript development",
      "SEO optimization",
      "Contact forms and integrations",
      "1 month free support"
    ],
    highlight: "Berkeley-Trained Developer",
    cta: "Schedule Consultation",
    popular: true
  },
  {
    id: "software",
    title: "Custom Software Solutions",
    description: "Tailored software applications to streamline your business operations and boost productivity",
    icon: <Code className="h-8 w-8" />,
    price: "Starting at $3,000",
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
    // Navigate to home page contact section
    window.location.href = '/#contact';
  };

  const openCalendly = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
                      ) : service.id === 'website' ? (
                        <Button 
                          onClick={() => openCalendly('https://calendly.com/your-website-consultation')}
                          className="w-full bg-berkeley-blue hover:bg-blue-800 text-white"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          {service.cta}
                        </Button>
                      ) : service.id === 'software' ? (
                        <Button 
                          onClick={() => openCalendly('https://calendly.com/your-software-consultation')}
                          className="w-full bg-berkeley-blue hover:bg-blue-800 text-white"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          {service.cta}
                        </Button>
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

      {/* Contact Information Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-berkeley-blue mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to discuss your project? Let's connect and create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-berkeley-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold text-berkeley-blue mb-2">Email</h3>
              <a 
                href="mailto:Desmondjr88@gmail.com"
                className="text-gray-600 hover:text-berkeley-blue transition-colors"
              >
                Desmondjr88@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-berkeley-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold text-berkeley-blue mb-2">Phone</h3>
              <a 
                href="tel:+13109952476"
                className="text-gray-600 hover:text-berkeley-blue transition-colors"
              >
                (310) 995-2476
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-berkeley-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-white h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-berkeley-blue mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/desmondcampbell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-berkeley-blue transition-colors"
              >
                desmondcampbell
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-berkeley-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 48 48">
                  <polygon points="4.5 14.453 4.5 22.273 11.865 22.273 11.865 33.547 19.685 33.547 19.685 14.453 4.5 14.453"/>
                  <polygon points="26.202 33.547 34.326 14.453 43.5 14.453 35.376 33.547 26.202 33.547"/>
                  <circle cx="25.8407" cy="18.3627" r="3.9101"/>
                </svg>
              </div>
              <h3 className="font-semibold text-berkeley-blue mb-2">TradingView</h3>
              <a 
                href="https://www.tradingview.com/u/CashFalcon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-berkeley-blue transition-colors"
              >
                @CashFalcon
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-12"
          >
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
                onClick={() => window.location.href = '/#contact'}
                className="border-berkeley-blue text-berkeley-blue hover:bg-berkeley-blue hover:text-white"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Full Contact Form
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}