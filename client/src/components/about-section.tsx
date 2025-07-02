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
          <h2 className="text-4xl font-bold text-navy mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UC Berkeley Haas graduate with entrepreneurial experience and a passion for turning 
            user insights into successful product strategies that drive business growth.
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace" 
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
              I'm a product management professional who carved my own unconventional path from a non-technical 
              background to UC Berkeley Haas. My journey includes building a mobile martial arts business, 
              launching a pet product startup, and developing multiple MVPs to bridge into product management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Haas, I placed third in an entrepreneurship challenge where my team launched a pet product 
              business that generated several hundred dollars in its first week. I later saw validation of 
              our product-market fit when Trader Joe's began stocking a similar product at our exact price point.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-navy">#7</div>
                <div className="text-gray-600">CA Insurance Ranking</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-navy">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
