import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AIChatWidget from "@/components/ai-chat-widget";

const projects = [
  {
    title: "Market Volume Clock",
    description: "A trading session timing and market context app that visualizes global market overlaps and volume patterns, helping traders know exactly when the market is prime for entries.",
    skills: ["Market Analysis", "Data Visualization", "Trading Strategy"],
    status: "Live",
    category: "Product",
    highlight: true,
    link: "https://market-volume-clock.vercel.app/",
  },
  {
    title: "Gratuity Pro",
    description: "A premium tip-tracking web app for service industry professionals. Built to replace paper tip logs and spreadsheets with a clean, fast interface for logging and analyzing income.",
    skills: ["Full-Stack Dev", "UX Design", "React"],
    status: "Live",
    category: "Product",
    highlight: true,
    link: "https://gratuitypro.io",
    image: "/images/gratuity-pro-logo.png",
  },
  {
    title: "Mina on the Map",
    description: "A travel website and digital product business. Designed to monetize travel expertise through guides, content, and affiliate partnerships with a clean editorial aesthetic.",
    skills: ["Web Design", "Content Strategy", "Digital Products"],
    status: "Live",
    category: "Website",
    link: "https://mina-on-the-map.vercel.app/",
  },
  {
    title: "HomeBase",
    description: "A home-buying tracker concept that simplifies the overwhelming process of tracking listings, offers, inspections, and timelines for first-time homebuyers.",
    skills: ["Product Design", "UX Research", "MVP Development"],
    status: "Concept",
    category: "Product",
    link: "https://home-base-4spc.vercel.app/",
    image: "/images/homebase-logo.png",
  },
  {
    title: "Del Amo Card Gallery",
    description: "An online marketplace for buying, selling, and trading sports and collectible cards. Built for the local Del Amo community with a clean interface for browsing inventory and connecting buyers with sellers.",
    skills: ["Full-Stack Dev", "Marketplace Design", "React"],
    status: "Live",
    category: "Website",
    link: "https://card-trading-marketplace.vercel.app/",
  },
  {
    title: "LoyalPup — Organic Dog Treats",
    description: "Co-founded at UC Berkeley Haas. Organic treats targeting working dogs with a mental health awareness mission. Placed 3rd at the Haas Entrepreneurship Challenge. Validated when Trader Joe's stocked a similar product at our exact price point.",
    skills: ["Entrepreneurship", "Product-Market Fit", "Brand Strategy"],
    status: "Completed",
    category: "Startup",
    link: "https://www.instagram.com/loyalpup_ucb/",
    image: "/images/loyalpup-logo.png",
  },
  {
    title: "Trading Performance: $100K → $1.51M",
    description: "Achieved a 1,407.75% paper trading return in 5 months — a firm record. On live accounts, grew $15K to $23K (53%) in 4 months through disciplined quantitative analysis and risk management.",
    skills: ["Quantitative Analysis", "Risk Management", "Data-Driven Strategy"],
    status: "Verified",
    category: "Trading",
    image: "/images/trading-performance.png",
  },
  {
    title: "Kratos Combat Club",
    description: "Founded and operated a martial arts academy (2007–2014). Programs included youth training for at-risk kids through CARY, women's self-defense, and private coaching. Dual black belts in Tae Kwon Do and Ninjutsu.",
    skills: ["Entrepreneurship", "Leadership", "Community Impact"],
    status: "Completed",
    category: "Business",
    image: "/images/kratos-combat-club-jump.jpg",
  },
];

const categoryStyle: Record<string, string> = {
  Software:  "bg-forest-green text-ivory",
  Website:   "bg-graphite text-ivory",
  Product:   "bg-near-black text-ivory",
  Startup:   "bg-champagne-gold text-near-black",
  Trading:   "border border-champagne-gold/50 text-champagne-gold",
  Business:  "bg-graphite text-soft-gray",
};

const statusStyle: Record<string, string> = {
  "In Development": "text-forest-green border-forest-green/50",
  Live:             "text-forest-green border-forest-green font-semibold",
  Concept:          "text-graphite border-graphite/50",
  Completed:        "text-near-black border-near-black/30",
  Verified:         "text-champagne-gold border-champagne-gold/50",
};

export default function Work() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F3E8" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-bg relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #D6B36A 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-champagne-gold font-semibold mb-3 uppercase tracking-widest text-xs">Selected Work</p>
            <h1 className="text-5xl font-bold text-ivory mb-4">Projects & Capabilities</h1>
            <div className="w-16 h-px bg-champagne-gold/40 mx-auto mb-6" />
            <p className="text-soft-gray max-w-2xl mx-auto text-lg">
              A look at what I've built, launched, and delivered — across startups, software, trading, and consulting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all group ${
                  project.highlight
                    ? "border-champagne-gold/30 ring-1 ring-champagne-gold/10"
                    : "border-soft-gray/30 hover:border-champagne-gold/20"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                {project.image ? (
                  <div className="h-44 overflow-hidden bg-near-black/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full ${project.image.includes("loyalpup") || project.image.includes("gratuity") || project.image.includes("homebase") ? "object-contain p-4" : "object-cover group-hover:scale-105 transition-transform duration-500"}`}
                    />
                  </div>
                ) : (
                  <div className="h-1.5 bg-gradient-to-r from-forest-green via-champagne-gold/60 to-forest-green/30" />
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs font-medium ${categoryStyle[project.category] || "bg-soft-gray text-near-black"}`}>
                      {project.category}
                    </Badge>
                    <span className={`text-xs font-medium border rounded-full px-2.5 py-0.5 ${statusStyle[project.status] || "text-graphite border-graphite/30"}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-near-black mb-2 leading-snug">{project.title}</h3>
                  <p className="text-graphite text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.skills.map((skill, j) => (
                      <span key={j} className="text-xs bg-soft-gray/30 text-graphite px-2 py-0.5 rounded-full border border-soft-gray/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="text-champagne-gold font-semibold text-sm flex items-center hover:text-forest-green transition-colors">
                      View Project <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
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
            <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-4">Start a Project</p>
            <h2 className="text-3xl font-bold text-ivory mb-3">Let's add your project to this list</h2>
            <div className="w-12 h-px bg-champagne-gold/40 mx-auto mb-6" />
            <p className="text-soft-gray mb-8 text-lg">Tell me what you're building and I'll tell you how I can help.</p>
            <Link href="/contact">
              <Button className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold px-10 border border-transparent hover:border-champagne-gold/20 transition-all" size="lg">
                <Calendar className="mr-2 h-4 w-4" /> Start a Project
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
