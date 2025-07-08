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
            I'm a Trading Analyst and entrepreneur who carved an unconventional path from launching a mobile 
            martial arts business to working in production coordination for major events and commercials. 
            My career then took me into life insurance, where I ranked among California's top performers, 
            before diving into the world of trading and achieving a 1,400% return in just four months.
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
              My drive to keep growing led me to UC Berkeley Haas, where I expanded my skills in business, IT, 
              and information systems. While there, I co-founded a pet product business that profited several 
              hundred dollars in its first month—a product concept later validated when Trader Joe's stocked a 
              similar item at our price point.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, I help SMBs strategize, scale, and market their businesses, bringing a blend of data-driven 
              insights, creative problem-solving, and a passion for modernizing operations, including leveraging 
              AI integration. Across all my experiences, I've learned that great business solutions start with 
              understanding people. Whether building websites, improving operations, or crafting marketing 
              strategies, I'm dedicated to creating customer-centered solutions that drive growth and make a 
              lasting impact.
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
