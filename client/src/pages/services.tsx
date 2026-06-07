import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BarChart3, Code2, TrendingUp, Globe, Bot, Wrench, FileText,
  Users, Target, PieChart, Calendar, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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


const stats = [
  { value: "53%", label: "Live Trading Return", sub: "$15K → $23K in 4 months" },
  { value: "8", label: "Projects Delivered" },
  { value: "3", label: "Core Service Areas" },
];

export default function Services() {
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


      {/* Stats */}
      <section className="py-14 bg-near-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="text-3xl font-bold text-champagne-gold mb-1">{stat.value}</div>
                <div className="text-soft-gray text-sm">{stat.label}</div>
                {stat.sub && <div className="text-soft-gray/60 text-xs mt-0.5">{stat.sub}</div>}
              </motion.div>
            ))}
          </div>
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
            <p className="text-soft-gray mb-8 text-lg">Send an inquiry and we'll figure out the best path together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
