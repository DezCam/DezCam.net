import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, GraduationCap, Award, Calendar } from "lucide-react";
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
  { icon: GraduationCap, title: "BS Business Administration", sub: "UC Berkeley, Haas School of Business" },
  { icon: Award, title: "Product Management First Steps", sub: "LinkedIn Learning" },
  { icon: Award, title: "Professional Forex Trader", sub: "Online Trading Academy" },
];

const values = [
  { title: "Strategy meets execution", description: "I don't hand you a slide deck and disappear. I stay involved until the thing actually works." },
  { title: "Customer-first thinking", description: "Every system I design, every product I build starts by asking: what does the end customer actually need?" },
  { title: "Data-driven decisions", description: "Gut instinct informed by numbers. I analyze before I act and measure after." },
  { title: "Founder mentality", description: "I've built from zero. I understand the constraints, the pressure, and what it takes to actually ship." },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F3E8" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-bg relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #D6B36A 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-champagne-gold font-semibold mb-3 uppercase tracking-widest text-xs">About Desmond</p>
              <h1 className="text-5xl font-bold mb-4 leading-tight text-ivory">
                Builder. Analyst.<br />
                <span className="text-champagne-gold">Operator.</span>
              </h1>
              <div className="w-16 h-px bg-champagne-gold/40 mb-6" />
              <p className="text-soft-gray leading-relaxed mb-8 text-lg">
                UC Berkeley Haas graduate combining business strategy with technical execution to help businesses build better systems, improve operations, and turn ideas into usable digital products.
              </p>
              <Link href="/contact">
                <Button className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold px-8 border border-transparent hover:border-champagne-gold/20 transition-all" size="lg">
                  <Calendar className="mr-2 h-4 w-4" /> Work Together
                </Button>
              </Link>
            </motion.div>
            <motion.div className="flex justify-center" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-champagne-gold/30 ring-offset-4 ring-offset-near-black">
                <img src="/images/profile-haas.jpg" alt="Desmond Campbell" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-near-black border-b border-champagne-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="text-3xl font-bold text-champagne-gold mb-1">{s.value}</div>
                <div className="font-semibold text-ivory text-sm">{s.label}</div>
                <div className="text-xs text-soft-gray mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-24" style={{ backgroundColor: "#F7F3E8" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-3">My Story</p>
            <h2 className="text-3xl font-bold text-near-black mb-3">An unconventional path</h2>
            <div className="w-10 h-px bg-champagne-gold/40 mb-8" />
            <div className="space-y-6 text-graphite leading-relaxed text-lg">
              <p>I didn't take the straight line. I started by founding a mobile martial arts academy — Kratos Combat Club — where I trained at-risk youth, ran women's self-defense programs, and built a business from the ground up with dual black belts and a lot of hustle.</p>
              <p>From there I moved into production coordination for major events — Grammys, E3, Samsung campaigns — learning how to manage stakeholders, align cross-functional teams, and execute under pressure. Then into life insurance, where I ranked among the nation's top performers in 2017.</p>
              <p>My analytical nature pulled me toward trading. On live accounts, I grew a $15,000 account to $23,000 in four months — a 53% return. In a paper trading environment, I set a firm record with a 1,407.75% return, growing $100K to $1.51M in five months. What that taught me was how to read data, manage risk, and stay disciplined under uncertainty.</p>
              <p>That drive brought me to UC Berkeley Haas, where I earned my Business Administration degree and co-founded LoyalPup — a pet product startup that placed 3rd at the Haas Entrepreneurship Challenge and was later validated when Trader Joe's stocked a similar product at our exact price point.</p>
              <p>Today I work with businesses as a RevOps consultant, software developer, and market analyst. I bring every one of those experiences to the table — the founder's mindset, the operator's instincts, the developer's ability to build, and the analyst's discipline to measure everything.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-graphite">
        <div className="h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent -mt-px mb-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-3">How I Work</p>
            <h2 className="text-3xl font-bold text-ivory mb-2">Principles that guide every engagement</h2>
            <div className="w-10 h-px bg-champagne-gold/40 mx-auto mt-4" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div key={i} className="bg-near-black/50 rounded-xl p-6 border border-champagne-gold/10 hover:border-champagne-gold/30 transition-all"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-champagne-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-ivory mb-1">{v.title}</h3>
                    <p className="text-soft-gray text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent mt-20" />
      </section>

      {/* Credentials */}
      <section className="py-24" style={{ backgroundColor: "#F7F3E8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-3">Credentials</p>
              <h2 className="text-3xl font-bold text-near-black mb-3">Education & Certifications</h2>
              <div className="w-10 h-px bg-champagne-gold/40 mb-8" />
              <div className="space-y-4">
                {credentials.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-soft-gray/30 hover:border-champagne-gold/30 transition-all"
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-near-black flex-shrink-0">
                        <Icon className="text-champagne-gold h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-near-black">{c.title}</div>
                        <div className="text-graphite text-sm">{c.sub}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-champagne-gold/20 shadow-xl">
                <img src="/images/sather-tower.jpg" alt="UC Berkeley Sather Tower" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #D6B36A 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-4">Work Together</p>
            <h2 className="text-3xl font-bold text-ivory mb-3">Let's build something together</h2>
            <div className="w-12 h-px bg-champagne-gold/40 mx-auto mb-6" />
            <p className="text-soft-gray mb-8 text-lg">Tell me what you're working on and we'll figure out the best next step.</p>
            <Link href="/contact">
              <Button className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold px-10 border border-transparent hover:border-champagne-gold/20 transition-all" size="lg">
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
