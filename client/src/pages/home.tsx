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
    description: "Fix the bottlenecks slowing your revenue. I map your customer journey, optimize your workflows, and build the systems that let your team close faster and retain longer.",
    bullets: ["Sales process improvement", "CRM & workflow strategy", "GTM planning"],
    href: "/services",
    color: "bg-pigment-green/10 text-pigment-green",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Software Development",
    description: "From AI agents to full web apps, I build practical digital tools that fit your business — not generic templates that sort of work.",
    bullets: ["AI agents & automation", "Custom web applications", "Business websites & landing pages"],
    href: "/services",
    color: "bg-black-olive/10 text-black-olive",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Market Analysis",
    description: "Understand your market before you move. I deliver research, competitor analysis, and strategic insight so your decisions are grounded in data.",
    bullets: ["Competitor & market research", "Customer discovery", "Product positioning"],
    href: "/services",
    color: "bg-dim-gray/10 text-dim-gray",
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
  { value: "3", label: "Service Areas" },
  { value: "1,407%", label: "Trading Record" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Client Focus" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* What I Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black-olive mb-4">What I Do</h2>
            <p className="text-lg text-dim-gray max-w-2xl mx-auto">
              I combine business strategy with technical execution — giving you a partner who understands both the problem and how to build the solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black-olive mb-3">{service.title}</h3>
                <p className="text-dim-gray mb-5 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((b, j) => (
                    <li key={j} className="flex items-center text-sm text-dim-gray">
                      <div className="w-1.5 h-1.5 bg-pigment-green rounded-full mr-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <span className="text-pigment-green font-semibold text-sm flex items-center hover:text-black-olive transition-colors cursor-pointer">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button className="bg-pigment-green hover:bg-black-olive text-white font-semibold px-8" size="lg">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-black-olive py-14">
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
                <div className="text-3xl md:text-4xl font-bold text-light-green mb-1">{stat.value}</div>
                <div className="text-ash-gray text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black-olive mb-6">Why work with me</h2>
              <p className="text-dim-gray leading-relaxed mb-8">
                I'm a UC Berkeley Haas graduate who's been a founder, operator, developer, and analyst. I don't just advise — I build. When you hire me, you get someone who understands your business challenges and can actually implement the solutions.
              </p>
              <ul className="space-y-4">
                {credibilityPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-pigment-green flex-shrink-0 mt-0.5" />
                    <span className="text-dim-gray">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" className="border-pigment-green text-pigment-green hover:bg-pigment-green hover:text-white font-semibold">
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
              className="relative"
            >
              <img
                src="/images/sather-tower.jpg"
                alt="UC Berkeley Sather Tower"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build something?
            </h2>
            <p className="text-xl text-ash-gray mb-10 leading-relaxed">
              Whether you need a better revenue system, a custom tool, or clarity on your market — let's figure out the best path forward together. First call is always free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  className="bg-pigment-green hover:bg-light-green hover:text-black-olive text-white font-semibold px-10 py-4 text-lg"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Start the Conversation
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  className="border-2 border-ash-gray text-ash-gray hover:bg-ash-gray hover:text-black-olive font-semibold px-10 py-4 text-lg bg-transparent"
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
