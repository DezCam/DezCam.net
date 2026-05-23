import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center pt-16">
      {/* Subtle gold horizontal rule */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-champagne-gold/30 text-champagne-gold text-sm font-medium px-4 py-1.5 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 bg-champagne-gold rounded-full" />
              RevOps · Software · Market Analysis
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-ivory">
              Build better systems.<br />
              <span className="text-champagne-gold">Launch smarter tools.</span>
            </h1>

            <p className="text-lg md:text-xl mb-4 text-soft-gray leading-relaxed">
              Boutique consulting and software studio helping businesses improve revenue operations, build custom software, and understand their markets.
            </p>
            <p className="text-sm mb-10 text-soft-gray/60 tracking-wide uppercase">
              UC Berkeley Haas · Founder · Operator · Developer
            </p>

            {/* Thin gold divider */}
            <div className="w-16 h-px bg-champagne-gold/40 mb-8" />

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  className="bg-forest-green hover:bg-forest-green/80 text-ivory px-8 py-3 font-semibold text-base border border-transparent hover:border-champagne-gold/20 transition-all"
                  size="lg"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border border-champagne-gold/40 text-champagne-gold px-8 py-3 hover:bg-champagne-gold/10 hover:border-champagne-gold font-semibold text-base bg-transparent transition-all"
                  size="lg"
                >
                  See What I Offer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Gold ring frame */}
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-2 ring-champagne-gold/30 ring-offset-4 ring-offset-near-black">
                <img
                  src="/images/profile-haas.jpg"
                  alt="Desmond Campbell at UC Berkeley Haas School of Business"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-graphite border border-champagne-gold/30 rounded-xl shadow-xl p-3 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-lg font-bold text-champagne-gold">UC Berkeley</div>
                <div className="text-xs text-soft-gray">Haas School of Business</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
