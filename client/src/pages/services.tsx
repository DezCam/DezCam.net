import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import {
  BarChart3, Code2, TrendingUp, Globe, Bot, Wrench, FileText,
  Users, Target, PieChart, Calendar, Star, ChevronDown, ChevronUp,
  Quote, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WaitingListDialog from "@/components/waiting-list-dialog";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AIChatWidget from "@/components/ai-chat-widget";

const mainServices = [
  {
    id: "revops",
    icon: <BarChart3 className="h-10 w-10" />,
    title: "RevOps Consulting",
    tagline: "Fix the systems slowing your revenue",
    description:
      "I help businesses identify bottlenecks, organize workflows, improve customer journeys, and build better systems for sales, marketing, and operations — so your team can focus on growing.",
    subServices: [
      { icon: <Users className="h-5 w-5" />, title: "Sales Process Improvement", desc: "Streamline how your team sells — from first touch to close." },
      { icon: <Wrench className="h-5 w-5" />, title: "CRM & Workflow Strategy", desc: "Set up and optimize your CRM so it actually gets used." },
      { icon: <Target className="h-5 w-5" />, title: "Customer Journey Optimization", desc: "Map and fix the gaps customers fall through." },
      { icon: <FileText className="h-5 w-5" />, title: "Business Systems Planning", desc: "Build the operational infrastructure your business needs to scale." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "GTM & Revenue Workflow", desc: "Align your go-to-market motion with revenue goals." },
    ],
    price: "Custom Pricing",
    duration: "Flexible engagement",
    cta: "Book Consultation",
    calendlyUrl: "https://calendly.com/desmondjr88/outcome-alignment-session",
    popular: true,
    color: "pigment-green",
  },
  {
    id: "software",
    icon: <Code2 className="h-10 w-10" />,
    title: "Software Development",
    tagline: "Build practical tools that actually work",
    description:
      "I build custom digital solutions for businesses, founders, and operators who need something built right — not a template that kind of fits.",
    subServices: [
      { icon: <Bot className="h-5 w-5" />, title: "AI Agents", desc: "Custom AI agents that automate workflows and handle repetitive tasks." },
      { icon: <Wrench className="h-5 w-5" />, title: "Custom Internal Tools", desc: "Replace clunky spreadsheets with purpose-built software." },
      { icon: <Globe className="h-5 w-5" />, title: "Business Websites", desc: "Fast, modern sites that convert visitors to customers." },
      { icon: <FileText className="h-5 w-5" />, title: "Landing Pages", desc: "High-converting pages built for campaigns and launches." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Automation Workflows", desc: "Connect your tools and automate manual processes." },
      { icon: <Target className="h-5 w-5" />, title: "MVP / Prototype Dev", desc: "Launch a working product fast to test and validate." },
    ],
    price: "$700 – $5,000+",
    duration: "2–6 weeks",
    cta: "Discuss Your Project",
    calendlyUrl: "https://calendly.com/desmondjr88/custom-software-solutions",
    color: "black-olive",
  },
  {
    id: "market-analysis",
    icon: <PieChart className="h-10 w-10" />,
    title: "Market Analysis",
    tagline: "Understand your market before you move",
    description:
      "I help businesses understand their market landscape, customers, competitors, and opportunities using research, data, and strategic analysis — so you move with confidence.",
    subServices: [
      { icon: <BarChart3 className="h-5 w-5" />, title: "Market Research", desc: "Deep dives into market size, trends, and dynamics." },
      { icon: <Target className="h-5 w-5" />, title: "Competitor Analysis", desc: "Know exactly who you're up against and where you have an edge." },
      { icon: <Users className="h-5 w-5" />, title: "Customer Discovery", desc: "Understand who your customers are and what they actually want." },
      { icon: <FileText className="h-5 w-5" />, title: "Product Positioning", desc: "Define where your product fits and why customers should choose you." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Financial Market Analysis", desc: "Trading and financial market insights for data-driven decisions." },
    ],
    price: "Starting at $500",
    duration: "1–3 weeks",
    cta: "Start a Project",
    calendlyUrl: "https://calendly.com/desmondjr88/outcome-alignment-session",
    color: "dim-gray",
  },
];

const additionalService = {
  id: "trading",
  icon: <TrendingUp className="h-8 w-8" />,
  title: "Trading Education & Mentorship",
  description: "Learn proven trading strategies from someone who achieved 1,407% returns. Weekly live sessions, 1-on-1 mentorship, and access to risk management frameworks that actually work.",
  price: "$500/month",
  duration: "1 free week trial",
  features: [
    "1-on-1 mentorship from beginner to advanced",
    "Weekly live sessions + chat support",
    "Proven trading strategy access",
    "Risk management techniques",
    "Only 4 slots available",
  ],
  highlight: "1,407% Return Record",
};

const testimonials = [
  {
    name: "Sarah M.",
    company: "Local Bakery Owner",
    content: "Desmond helped us streamline our ordering process and build a beautiful website. Our online orders increased by 40% in the first month!",
    rating: 5,
  },
  {
    name: "Marcus T.",
    company: "E-commerce Entrepreneur",
    content: "The trading mentorship completely changed my approach to the markets. Desmond's risk management techniques saved me from costly mistakes.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    company: "Fitness Studio Owner",
    content: "Professional, responsive, and incredibly knowledgeable. The custom booking software Desmond built has been a game-changer for our business.",
    rating: 5,
  },
];

const stats = [
  { value: "1,407%", label: "Trading Return Record" },
  { value: "10+", label: "Projects Delivered" },
  { value: "3", label: "Core Service Areas" },
  { value: "100%", label: "Client Focus" },
];

export default function Services() {
  const [showTestimonials, setShowTestimonials] = useState(false);

  const openCalendly = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-light-green font-medium mb-3 uppercase tracking-widest text-sm">What I Offer</p>
            <h1 className="text-5xl font-bold text-white mb-6">Services</h1>
            <p className="text-xl text-ash-gray max-w-2xl mx-auto">
              Three core disciplines — Revenue Operations, Software Development, and Market Analysis — delivered by someone who combines strategic thinking with hands-on execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Info */}
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  {service.popular && (
                    <Badge className="bg-pigment-green text-white mb-4">Most Requested</Badge>
                  )}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                    service.color === "pigment-green" ? "bg-pigment-green/10 text-pigment-green" :
                    service.color === "black-olive" ? "bg-black-olive/10 text-black-olive" :
                    "bg-dim-gray/10 text-dim-gray"
                  }`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-black-olive mb-2">{service.title}</h2>
                  <p className={`font-semibold mb-4 ${
                    service.color === "pigment-green" ? "text-pigment-green" :
                    service.color === "black-olive" ? "text-black-olive" :
                    "text-dim-gray"
                  }`}>{service.tagline}</p>
                  <p className="text-dim-gray leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-black-olive">{service.price}</div>
                      <div className="text-sm text-dim-gray">{service.duration}</div>
                    </div>
                  </div>
                  <Button
                    onClick={() => openCalendly(service.calendlyUrl)}
                    className="bg-pigment-green hover:bg-black-olive text-white font-semibold"
                  >
                    <Calendar className="mr-2 h-4 w-4" /> {service.cta}
                  </Button>
                </div>

                {/* Sub-services */}
                <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.subServices.map((sub, j) => (
                      <motion.div
                        key={j}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-pigment-green/30 hover:bg-pigment-green/5 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: j * 0.06 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-pigment-green mt-0.5 flex-shrink-0">{sub.icon}</div>
                          <div>
                            <div className="font-semibold text-black-olive text-sm mb-1">{sub.title}</div>
                            <div className="text-dim-gray text-xs leading-relaxed">{sub.desc}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Education */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-pigment-green/30 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pigment-green/10 rounded-xl text-pigment-green">
                      {additionalService.icon}
                    </div>
                    <div>
                      <Badge className="bg-pigment-green text-white mb-2 text-xs">{additionalService.highlight}</Badge>
                      <CardTitle className="text-xl font-bold text-black-olive">{additionalService.title}</CardTitle>
                      <CardDescription className="mt-1">{additionalService.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-2xl font-bold text-pigment-green">{additionalService.price}</div>
                    <div className="text-sm text-dim-gray">{additionalService.duration}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {additionalService.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-dim-gray">
                      <div className="w-1.5 h-1.5 bg-pigment-green rounded-full flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <WaitingListDialog>
                  <Button className="bg-pigment-green hover:bg-black-olive text-white font-semibold">
                    <TrendingUp className="mr-2 h-4 w-4" /> Join Waiting List
                  </Button>
                </WaitingListDialog>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-black-olive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-light-green mb-1">{stat.value}</div>
                <div className="text-ash-gray text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black-olive mb-4">What Clients Say</h2>
            <Button
              onClick={() => setShowTestimonials(!showTestimonials)}
              variant="outline"
              className="border-pigment-green text-pigment-green hover:bg-pigment-green hover:text-white"
            >
              {showTestimonials ? (
                <><ChevronUp className="h-4 w-4 mr-2" /> Hide Testimonials</>
              ) : (
                <><Star className="h-4 w-4 mr-2" /> Read Testimonials</>
              )}
            </Button>
          </div>
          <AnimatePresence>
            {showTestimonials && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-6 mt-8"
              >
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="h-full shadow-sm border border-gray-100">
                      <CardContent className="p-6">
                        <div className="flex mb-3">
                          {[...Array(t.rating)].map((_, j) => (
                            <Star key={j} className="h-4 w-4 text-pigment-green fill-pigment-green" />
                          ))}
                        </div>
                        <div className="relative mb-4">
                          <Quote className="h-6 w-6 text-ash-gray/40 absolute -top-1 -left-1" />
                          <p className="text-dim-gray italic text-sm pl-5">"{t.content}"</p>
                        </div>
                        <div className="border-t pt-3">
                          <p className="font-semibold text-black-olive text-sm">{t.name}</p>
                          <p className="text-xs text-dim-gray">{t.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Not sure which service fits?</h2>
            <p className="text-ash-gray mb-8 text-lg">
              Book a free 30-minute call. We'll figure it out together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("https://calendly.com/desmondjr88/outcome-alignment-session", "_blank", "noopener,noreferrer")}
                className="bg-pigment-green hover:bg-light-green hover:text-black-olive text-white font-semibold px-8"
                size="lg"
              >
                <Calendar className="mr-2 h-4 w-4" /> Book Free Consultation
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-ash-gray text-ash-gray hover:bg-ash-gray hover:text-black-olive font-semibold px-8 bg-transparent"
                  size="lg"
                >
                  Send an Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChatWidget />
    </div>
  );
}
