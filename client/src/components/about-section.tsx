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
          <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-6">
            <p>
              I'm a Trading Analyst and entrepreneur who carved an unconventional path from launching a mobile 
              martial arts business to working in production coordination for major events and commercials. 
              My career then took me into life insurance, where I ranked among the nation's top performers 
              in 2017, before diving into the world of trading.
            </p>
            <p>
              On live accounts, I achieved a 53% return by growing a $15,000 account to $23,000 in four months. 
              Separately, in a paper trading environment, I set a new record for the start-up trading firm I 
              contracted with by delivering a 1,407.75% return in five months—demonstrating my ability 
              to test strategies and manage risk under diverse conditions.
            </p>
            <p>
              My drive to keep growing led me to UC Berkeley Haas, where I expanded my skills in business, IT, 
              and information systems. While there, I co-founded a pet product business that profited several 
              hundred dollars in its first month—a product concept later validated when Trader Joe's stocked a 
              similar item at our price point.
            </p>
            <p>
              Today, I help SMBs strategize, scale, and market their businesses, bringing a blend of data-driven 
              insights, creative problem-solving, and a passion for modernizing operations, including leveraging 
              AI integration. Across all my experiences, I've learned that great business solutions start with 
              understanding people. Whether building websites, improving operations, or crafting marketing 
              strategies, I'm dedicated to creating customer-centered solutions that drive growth and make a 
              lasting impact.
            </p>
          </div>
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
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-berkeley-blue">53%</div>
                <div className="text-gray-600">Live Trading Return</div>
                <div className="text-xs text-gray-500">($15K → $23K)</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-berkeley-blue">1,407.75%</div>
                <div className="text-gray-600">Paper Trading Record</div>
                <div className="text-xs text-gray-500">(5 months)</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
