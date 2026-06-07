import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import {
  BarChart3, Code2, TrendingUp, Globe, Bot, Wrench, FileText,
  Users, Target, PieChart, Calendar, Star, ChevronUp, Quote, ArrowRight,
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
    popular: true,
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
  },
];

const additionalService = {
  id: "trading",
  icon: <TrendingUp className="h-8 w-8" />,
  title: "Trading Education & Mentorship",
  description: "Learn proven trading strategies from someone who achieved 1,407% returns. Weekly live sessions, 1-on-1 mentorship, and risk management frameworks that actually work.",
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F3E8" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-bg relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #D6B36A 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-champagne-gold font-semibold mb-3 uppercase tracking-widest text-xs">What I Offer</p>
            <h1 className="text-5xl font-bold text-ivory mb-6">Services</h1>
            <div className="w-16 h-px bg-champagne-gold/40 mx-auto mb-6" />
            <p className="text-soft-gray max-w-2xl mx-auto text-lg leading-relaxed">
              Three core disciplines delivered by someone who combines strategic thinking with hands-on execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24" style={{ backgroundColor: "#F7F3E8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-28">
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
                    <Badge className="bg-champagne-gold text-near-black font-semibold mb-4 text-xs">Most Requested</Badge>
                  )}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-near-black/5 text-forest-green border border-soft-gray/30">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-near-black mb-2">{service.title}</h2>
                  <p className="text-champagne-gold font-semibold mb-4 text-sm uppercase tracking-wide">{service.tagline}</p>
                  <div className="w-8 h-px bg-champagne-gold/40 mb-5" />
                  <p className="text-graphite leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-xl border border-soft-gray/30">
                    <div>
                      <div className="text-2xl font-bold text-near-black">{service.price}</div>
                      <div className="text-sm text-graphite">{service.duration}</div>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold border border-transparent hover:border-champagne-gold/20 transition-all">
                      <ArrowRight className="mr-2 h-4 w-4" /> {service.cta}
                    </Button>
                  </Link>
                </div>

                {/* Sub-services */}
                <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.subServices.map((sub, j) => (
                      <motion.div
                        key={j}
                        className="bg-white rounded-xl p-4 border border-soft-gray/20 hover:border-champagne-gold/30 hover:shadow-sm transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: j * 0.06 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-champagne-gold mt-0.5 flex-shrink-0">{sub.icon}</div>
                          <div>
                            <div className="font-semibold text-near-black text-sm mb-1">{sub.title}</div>
                            <div className="text-graphite text-xs leading-relaxed">{sub.desc}</div>
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
      <section className="py-16 bg-graphite">
        <div className="h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent -mt-px mb-16" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Card className="bg-near-black border border-champagne-gold/20 shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-champagne-gold/10 rounded-xl text-champagne-gold border border-champagne-gold/20">
                      {additionalService.icon}
                    </div>
                    <div>
                      <Badge className="bg-champagne-gold text-near-black font-semibold mb-2 text-xs">{additionalService.highlight}</Badge>
                      <CardTitle className="text-xl font-bold text-ivory">{additionalService.title}</CardTitle>
                      <CardDescription className="mt-1 text-soft-gray">{additionalService.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-champagne-gold">{additionalService.price}</div>
                    <div className="text-sm text-soft-gray">{additionalService.duration}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {additionalService.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-soft-gray">
                      <div className="w-1.5 h-1.5 bg-champagne-gold rounded-full flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <WaitingListDialog>
                  <Button className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold border border-transparent hover:border-champagne-gold/20 transition-all">
                    <TrendingUp className="mr-2 h-4 w-4" /> Join Waiting List
                  </Button>
                </WaitingListDialog>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent mt-16" />
      </section>

      {/* Stats */}
      <section className="py-14 bg-near-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="text-3xl font-bold text-champagne-gold mb-1">{stat.value}</div>
                <div className="text-soft-gray text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16" style={{ backgroundColor: "#F7F3E8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-3">Client Feedback</p>
            <h2 className="text-3xl font-bold text-near-black mb-4">What Clients Say</h2>
            <Button
              onClick={() => setShowTestimonials(!showTestimonials)}
              variant="outline"
              className="border-champagne-gold/50 text-champagne-gold hover:bg-champagne-gold/10 hover:border-champagne-gold transition-all mt-2"
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
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                    <Card className="h-full bg-white border border-soft-gray/30 shadow-sm hover:border-champagne-gold/30 transition-all">
                      <CardContent className="p-6">
                        <div className="flex mb-3">
                          {[...Array(t.rating)].map((_, j) => (
                            <Star key={j} className="h-4 w-4 text-champagne-gold fill-champagne-gold" />
                          ))}
                        </div>
                        <div className="relative mb-4">
                          <Quote className="h-6 w-6 text-champagne-gold/20 absolute -top-1 -left-1" />
                          <p className="text-graphite italic text-sm pl-5">"{t.content}"</p>
                        </div>
                        <div className="border-t border-soft-gray/30 pt-3">
                          <p className="font-semibold text-near-black text-sm">{t.name}</p>
                          <p className="text-xs text-graphite">{t.company}</p>
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
      <section className="py-20 gradient-bg relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #D6B36A 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-3xl font-bold text-ivory mb-3">Not sure which service fits?</h2>
            <div className="w-12 h-px bg-champagne-gold/40 mx-auto mb-6" />
            <p className="text-soft-gray mb-8 text-lg">Book a free 30-minute call. We'll figure it out together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold px-8 border border-transparent hover:border-champagne-gold/20 transition-all" size="lg">
                  <ArrowRight className="mr-2 h-4 w-4" /> Book Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold/10 hover:border-champagne-gold font-semibold px-8 bg-transparent transition-all" size="lg">
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
