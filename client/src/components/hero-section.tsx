import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block bg-pigment-green/20 border border-pigment-green/40 text-light-green text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            >
              RevOps · Software · Market Analysis
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build better systems.<br />
              <span className="text-light-green">Launch smarter tools.</span>
            </h1>
            <p className="text-lg md:text-xl mb-4 text-ash-gray leading-relaxed">
              I help businesses improve their revenue operations, build custom software, and understand their markets — so they can grow with clarity and confidence.
            </p>
            <p className="text-base mb-8 text-ash-gray/80 leading-relaxed">
              UC Berkeley Haas · Founder · Operator · Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  className="bg-pigment-green text-white px-8 py-3 hover:bg-light-green hover:text-black-olive font-semibold text-lg"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-2 border-ash-gray text-ash-gray px-8 py-3 hover:bg-ash-gray hover:text-black-olive font-semibold text-lg bg-transparent"
                  size="lg"
                >
                  See What I Offer
                  <ArrowRight className="ml-2 h-5 w-5" />
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
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-pigment-green/30">
                <img
                  src="/images/profile-haas.jpg"
                  alt="Desmond Campbell at UC Berkeley Haas School of Business"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-2xl font-bold text-pigment-green">UC Berkeley</div>
                <div className="text-xs text-dim-gray">Haas School of Business</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
