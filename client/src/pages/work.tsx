import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
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
    status: "In Development",
    category: "Software",
    highlight: true,
  },
  {
    title: "Gratuitous",
    description: "A premium tip-tracking web app for service industry professionals. Built to replace paper tip logs and spreadsheets with a clean, fast interface for logging and analyzing income.",
    skills: ["Full-Stack Dev", "UX Design", "React"],
    status: "In Development",
    category: "Software",
    highlight: true,
  },
  {
    title: "Mina on the Map",
    description: "A travel website and digital product business. Designed to monetize travel expertise through guides, content, and affiliate partnerships with a clean editorial aesthetic.",
    skills: ["Web Design", "Content Strategy", "Digital Products"],
    status: "In Development",
    category: "Website",
  },
  {
    title: "HomeBase",
    description: "A home-buying tracker concept that simplifies the overwhelming process of tracking listings, offers, inspections, and timelines for first-time homebuyers.",
    skills: ["Product Design", "UX Research", "MVP Development"],
    status: "Concept",
    category: "Product",
  },
  {
    title: "Insta-Plumber",
    description: "A service marketplace concept connecting homeowners with verified local plumbers for same-day emergency and scheduled service — Uber for plumbing.",
    skills: ["Marketplace Design", "GTM Strategy", "Business Model"],
    status: "Concept",
    category: "Product",
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
    description: "Achieved a 1,407.75% paper trading return in 5 months — a firm record for the trading company I contracted with. On live accounts, grew $15K to $23K (53%) in 4 months through disciplined quantitative analysis and risk management.",
    skills: ["Quantitative Analysis", "Risk Management", "Data-Driven Strategy"],
    status: "Verified",
    category: "Trading",
    image: "/images/trading-performance.png",
    expandable: true,
  },
  {
    title: "Kratos Combat Club",
    description: "Founded and operated a martial arts academy (2007–2014) serving diverse communities. Programs included youth training for at-risk kids through CARY, women's self-defense, and private coaching. Dual black belts in Tae Kwon Do and Ninjutsu.",
    skills: ["Entrepreneurship", "Leadership", "Community Impact"],
    status: "Completed",
    category: "Business",
    image: "/images/kratos-combat-club-jump.jpg",
  },
];

const categoryColors: Record<string, string> = {
  Software: "bg-pigment-green text-white",
  Website: "bg-black-olive text-white",
  Product: "bg-dim-gray text-white",
  Startup: "bg-light-green text-black-olive",
  Trading: "bg-ash-gray text-black-olive",
  Business: "bg-black-olive/80 text-white",
};

const statusColors: Record<string, string> = {
  "In Development": "text-pigment-green border-pigment-green",
  Concept: "text-dim-gray border-dim-gray",
  Completed: "text-black-olive border-black-olive",
  Verified: "text-pigment-green border-pigment-green",
};

export default function Work() {
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
            <p className="text-light-green font-medium mb-3 uppercase tracking-widest text-sm">Selected Work</p>
            <h1 className="text-5xl font-bold text-white mb-6">Projects & Capabilities</h1>
            <p className="text-xl text-ash-gray max-w-2xl mx-auto">
              A look at what I've built, launched, and delivered — across startups, software, trading, and consulting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className={`bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow ${
                  project.highlight ? "border-pigment-green/40 ring-1 ring-pigment-green/20" : "border-gray-100"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                {project.image && (
                  <div className="h-44 overflow-hidden bg-gray-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full ${
                        project.image.includes("loyalpup")
                          ? "object-contain p-4"
                          : "object-cover"
                      }`}
                    />
                  </div>
                )}
                {!project.image && (
                  <div className="h-2 bg-gradient-to-r from-pigment-green to-light-green" />
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs font-medium ${categoryColors[project.category] || "bg-ash-gray text-white"}`}>
                      {project.category}
                    </Badge>
                    <span className={`text-xs font-medium border rounded-full px-2 py-0.5 ${statusColors[project.status] || "text-dim-gray border-dim-gray"}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-black-olive mb-2">{project.title}</h3>
                  <p className="text-dim-gray text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, j) => (
                      <span key={j} className="text-xs bg-gray-100 text-dim-gray px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pigment-green font-semibold text-sm flex items-center hover:text-black-olive transition-colors"
                    >
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black-olive mb-4">Let's add your project to this list</h2>
            <p className="text-dim-gray mb-8 text-lg">
              Tell me what you're building and I'll tell you how I can help.
            </p>
            <Link href="/contact">
              <Button className="bg-pigment-green hover:bg-black-olive text-white font-semibold px-10" size="lg">
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
