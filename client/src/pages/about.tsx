import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, GraduationCap, Award, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AIChatWidget from "@/components/ai-chat-widget";

const stats = [
  { value: "53%", label: "Live Trading Return", sub: "$15K → $23K in 4 months" },
  { value: "1,407%", label: "Paper Trading Record", sub: "$100K → $1.51M in 5 months" },
  { value: "10+", label: "Years Entrepreneurship", sub: "Founder, operator, builder" },
  { value: "Haas", label: "UC Berkeley", sub: "Business Administration" },
];

const credentials = [
  {
    icon: GraduationCap,
    title: "BS Business Administration",
    sub: "UC Berkeley, Haas School of Business",
    color: "bg-pigment-green",
  },
  {
    icon: Award,
    title: "Product Management First Steps",
    sub: "LinkedIn Learning",
    color: "bg-black-olive",
  },
  {
    icon: Award,
    title: "Professional Forex Trader",
    sub: "Online Trading Academy",
    color: "bg-dim-gray",
  },
];

const values = [
  {
    title: "Strategy meets execution",
    description: "I don't hand you a slide deck and disappear. I stay involved until the thing actually works.",
  },
  {
    title: "Customer-first thinking",
    description: "Every system I design, every product I build starts by asking: what does the end customer actually need?",
  },
  {
    title: "Data-driven decisions",
    description: "Gut instinct informed by numbers. I analyze before I act and measure after.",
  },
  {
    title: "Founder mentality",
    description: "I've built from zero. I understand the constraints, the pressure, and what it takes to actually ship.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-light-green font-medium mb-3 uppercase tracking-widest text-sm">About Desmond</p>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Builder. Analyst.<br />
                <span className="text-light-green">Operator.</span>
              </h1>
              <p className="text-lg text-ash-gray leading-relaxed mb-8">
                I'm a UC Berkeley Haas graduate with a background in sales, marketing, finance, trading analysis, and software development. I combine business strategy with technical execution to help businesses build better systems, improve operations, and turn ideas into usable digital products.
              </p>
              <Link href="/contact">
                <Button className="bg-pigment-green hover:bg-light-green hover:text-black-olive text-white font-semibold px-8" size="lg">
                  <Calendar className="mr-2 h-4 w-4" /> Work Together
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-pigment-green/30">
                <img
                  src="/images/profile-haas.jpg"
                  alt="Desmond Campbell"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-pigment-green mb-1">{s.value}</div>
                <div className="font-semibold text-black-olive text-sm">{s.label}</div>
                <div className="text-xs text-dim-gray mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black-olive mb-8">My Story</h2>
            <div className="space-y-6 text-dim-gray leading-relaxed text-lg">
              <p>
                I didn't take the straight line. I started by founding a mobile martial arts academy — Kratos Combat Club — where I trained at-risk youth, ran women's self-defense programs, and built a business from the ground up with dual black belts and a lot of hustle.
              </p>
              <p>
                From there I moved into production coordination for major events — Grammys, E3, Samsung campaigns — learning how to manage stakeholders, align cross-functional teams, and execute under pressure. Then into life insurance, where I ranked among the nation's top performers in 2017.
              </p>
              <p>
                My analytical nature pulled me toward trading. On live accounts, I grew a $15,000 account to $23,000 in four months — a 53% return. In a paper trading environment, I set a firm record with a 1,407.75% return, growing $100K to $1.51M in five months. What that taught me was how to read data, manage risk, and stay disciplined under uncertainty.
              </p>
              <p>
                That drive brought me to UC Berkeley Haas, where I earned my Business Administration degree and co-founded LoyalPup — a pet product startup that placed 3rd at the Haas Entrepreneurship Challenge and was later validated when Trader Joe's stocked a similar product at our exact price point.
              </p>
              <p>
                Today I work with businesses as a RevOps consultant, software developer, and market analyst. I bring every one of those experiences to the table — the founder's mindset, the operator's instincts, the developer's ability to build, and the analyst's discipline to measure everything.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black-olive mb-4">How I work</h2>
            <p className="text-dim-gray max-w-xl mx-auto">The principles that guide every engagement</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pigment-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black-olive mb-1">{v.title}</h3>
                    <p className="text-dim-gray text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black-olive mb-8">Education & Credentials</h2>
              <div className="space-y-4">
                {credentials.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${c.color}`}>
                        <Icon className="text-white h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-black-olive">{c.title}</div>
                        <div className="text-dim-gray text-sm">{c.sub}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
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

      {/* CTA */}
      <section className="py-16 gradient-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Let's build something together</h2>
            <p className="text-ash-gray mb-8 text-lg">Tell me what you're working on and we'll figure out the best next step.</p>
            <Link href="/contact">
              <Button className="bg-pigment-green hover:bg-light-green hover:text-black-olive text-white font-semibold px-10" size="lg">
                <Calendar className="mr-2 h-4 w-4" /> Start the Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChatWidget />
    </div>
  );
}
