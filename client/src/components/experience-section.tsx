import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Technology Director",
    company: "TechCorp Solutions",
    period: "2020 - Present",
    description: "Leading digital transformation initiatives, managing cross-functional teams of 25+ engineers, and driving strategic technology decisions that resulted in 40% efficiency improvements.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    color: "navy"
  },
  {
    title: "Engineering Manager",
    company: "InnovateTech Inc.",
    period: "2017 - 2020",
    description: "Built and managed high-performing engineering teams, implemented agile methodologies, and delivered mission-critical software solutions serving 1M+ users.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "blue-500"
  },
  {
    title: "Senior Software Engineer",
    company: "StartupTech",
    period: "2014 - 2017",
    description: "Architected and developed scalable web applications, mentored junior developers, and contributed to the company's growth from startup to Series B funding.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "gray-500"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my professional journey and key accomplishments
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className={index % 2 === 0 ? "md:text-right" : "md:order-2"}>
                    <div className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${
                      exp.color === 'navy' ? 'border-navy' : 
                      exp.color === 'blue-500' ? 'border-blue-500' : 
                      'border-gray-500'
                    }`}>
                      <h3 className="text-xl font-bold text-navy mb-2">{exp.title}</h3>
                      <p className="text-gray-600 mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                  <div className={`hidden md:block ${index % 2 === 0 ? "" : "md:order-1"}`}>
                    <img 
                      src={exp.image} 
                      alt={`${exp.title} at ${exp.company}`}
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full hidden md:block ${
                  exp.color === 'navy' ? 'bg-navy' : 
                  exp.color === 'blue-500' ? 'bg-blue-500' : 
                  'bg-gray-500'
                }`} style={{ top: '2rem' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
