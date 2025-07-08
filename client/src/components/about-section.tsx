import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-berkeley-blue mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UC Berkeley Haas graduate and Trading Analyst currently building websites, operational processes, 
            and strategies for SMBs. With entrepreneurial experience, I'm aspiring to transition into 
            product management through my passion for creating user-centered solutions that drive business growth.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/sather-tower.jpg" 
              alt="Desmond Campbell at UC Berkeley Sather Tower" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a Trading Analyst and entrepreneur who carved my own unconventional path from a non-technical 
              background to UC Berkeley Haas. My journey includes building a mobile martial arts business, 
              launching a pet product startup, and developing multiple MVPs as I transition into product management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Haas, I placed third in an entrepreneurship challenge where my team launched a pet product 
              business that generated several hundred dollars in its first week. I later saw validation of 
              our product-market fit when Trader Joe's began stocking a similar product at our exact price point.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My analytical skills are demonstrated through exceptional trading performance, achieving a 1,400% 
              return in just 4 months. This quantitative success showcases the data-driven decision making and 
              risk management abilities I'm excited to bring to product management roles.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-berkeley-blue">1,400%</div>
                <div className="text-gray-600">Trading Return (4 months)</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-berkeley-blue">#7</div>
                <div className="text-gray-600">Internal Company Ranking</div>
                <div className="text-xs text-gray-500">(CA Insurance, 2017)</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
