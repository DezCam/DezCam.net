import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Code2, TrendingUp, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import AIChatWidget from "@/components/ai-chat-widget";

const services = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "RevOps Consulting",
    description: "Fix the bottlenecks slowing your revenue. I map your customer journey, optimize workflows, and build the systems that let your team close faster and retain longer.",
    bullets: ["Sales process improvement", "CRM & workflow strategy", "GTM planning"],
    href: "/services",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Software Development",
    description: "From AI agents to full web apps, I build practical digital tools that fit your business — not generic templates that sort of work.",
    bullets: ["AI agents & automation", "Custom web applications", "Business websites & landing pages"],
    href: "/services",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Market Analysis",
    description: "Understand your market before you move. I deliver research, competitor analysis, and strategic insight so your decisions are grounded in data.",
    bullets: ["Competitor & market research", "Customer discovery", "Product positioning"],
    href: "/services",
  },
];

const credibilityPoints = [
  "UC Berkeley Haas School of Business graduate",
  "Founder — built and operated two businesses from scratch",
  "1,407% trading return record demonstrating analytical precision",
  "Full-stack developer with real deployed products",
  "GTM, RevOps, and sales experience across multiple industries",
];

const stats = [
  { value: "3", label: "Core Service Areas" },
  { value: "1,407%", label: "Trading Record" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Client Focus" },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F3E8" }}>
      <Navigation />
      <HeroSection />

      {/* What I Do */}
      <section className="py-24" style={{ backgroundColor: "#F7F3E8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-3">What I Do</p>
            <h2 className="text-4xl font-bold text-near-black mb-4">Three ways I help businesses grow</h2>
            <div className="w-12 h-px bg-champagne-gold/50 mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 border border-soft-gray/30 shadow-sm hover:shadow-md hover:border-champagne-gold/30 transition-all group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Gold top accent */}
                <div className="w-8 h-0.5 bg-champagne-gold/60 mb-6 group-hover:w-12 transition-all duration-300" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-near-black/5 text-forest-green">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-near-black mb-3">{service.title}</h3>
                <p className="text-graphite mb-5 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((b, j) => (
                    <li key={j} className="flex items-center text-sm text-graphite">
                      <div className="w-1.5 h-1.5 bg-champagne-gold rounded-full mr-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <span className="text-forest-green font-semibold text-sm flex items-center hover:text-champagne-gold transition-colors cursor-pointer">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold px-8 border border-transparent hover:border-champagne-gold/20 transition-all" size="lg">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-near-black py-14">
        <div className="h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent mb-14 -mt-px" />
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
                <div className="text-3xl md:text-4xl font-bold text-champagne-gold mb-1">{stat.value}</div>
                <div className="text-soft-gray text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent mt-14" />
      </section>

      {/* Why Work With Me */}
      <section className="py-24" style={{ backgroundColor: "#F7F3E8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-3">Why Work With Me</p>
              <h2 className="text-4xl font-bold text-near-black mb-2">Strategy meets execution</h2>
              <div className="w-12 h-px bg-champagne-gold/50 mb-6" />
              <p className="text-graphite leading-relaxed mb-8">
                I'm a UC Berkeley Haas graduate who's been a founder, operator, developer, and analyst. I don't just advise — I build. When you work with me, you get someone who understands your business challenges and can implement the solutions.
              </p>
              <ul className="space-y-4">
                {credibilityPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0 mt-0.5" />
                    <span className="text-graphite text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" className="border-champagne-gold/50 text-champagne-gold hover:bg-champagne-gold/10 hover:border-champagne-gold font-semibold transition-all">
                    My Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-champagne-gold/20 shadow-xl">
                <img
                  src="/images/sather-tower.jpg"
                  alt="UC Berkeley Sather Tower"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #D6B36A 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-4">Let's Build Something</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ivory mb-6">
              Ready to start a project?
            </h2>
            <div className="w-16 h-px bg-champagne-gold/40 mx-auto mb-8" />
            <p className="text-soft-gray mb-10 leading-relaxed text-lg max-w-2xl mx-auto">
              Whether you need a better revenue system, a custom tool, or clarity on your market — let's figure out the best path forward. First call is always free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold px-10 py-4 text-base border border-transparent hover:border-champagne-gold/20 transition-all"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Start the Conversation
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  className="border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold/10 hover:border-champagne-gold font-semibold px-10 py-4 text-base bg-transparent transition-all"
                  size="lg"
                >
                  See My Work
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
