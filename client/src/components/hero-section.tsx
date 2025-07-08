import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-california-gold">Desmond</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Trading Analyst & Aspiring Product Manager
            </p>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              UC Berkeley Haas graduate and Trading Analyst with entrepreneurial experience building MVPs and launching successful products. Passionate about transitioning into product management to create products that inspire and change people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-california-gold text-berkeley-blue px-8 py-3 hover:bg-yellow-400 font-semibold text-lg"
                size="lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-california-gold text-california-gold px-8 py-3 hover:bg-california-gold hover:text-berkeley-blue font-semibold text-lg bg-transparent"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/images/profile-haas.jpg" 
                alt="Desmond Campbell at UC Berkeley Haas School of Business" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
