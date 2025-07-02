import { motion } from "framer-motion";

const experiences = [
  {
    title: "Trading Analyst",
    company: "Toshi Markets",
    period: "Jan 2019 - July 2024",
    description: "Performed multiple product management functions including SDR, CSM, APM, GTM, software development, and tech support while maintaining profitable trading record. Collaborated cross-functionally with teams to scale training processes and improve user satisfaction.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    color: "berkeley-blue"
  },
  {
    title: "Production Coordinator & Talent Liaison",
    company: "Freelance",
    period: "Jan 2014 - Dec 2021",
    description: "Executed creative visions for high-profile events including Grammys, E3, and Samsung. Managed stakeholder alignment and cross-functional collaboration between teams, vendors, and talent, resulting in ongoing client referrals and successful project delivery.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "blue-500"
  },
  {
    title: "District Leader",
    company: "Primerica Life Insurance",
    period: "Jan 2017 - Dec 2018",
    description: "Ranked #7 in California and #13 nationally in life insurance sales during 2017. Consistently surpassed $10k monthly sales quota through data-driven client relationship building and empathetic approach to addressing financial concerns.",
    image: "/images/professional-headshot.jpg",
    color: "gray-500"
  },
  {
    title: "Mobile Martial Arts Business Owner",
    company: "Self-Employed",
    period: "Early Career",
    description: "Built and operated mobile martial arts business, contracting with at-risk youth programs. Developed entrepreneurial mindset, discipline, and resilience that later fueled passion for product management and creating products that change lives.",
    image: "https://images.unsplash.com/photo-1555597408-3a5c1aa1b4b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "green-600"
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
          <h2 className="text-4xl font-bold text-berkeley-blue mb-4">Professional Experience</h2>
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
                      exp.color === 'berkeley-blue' ? 'border-berkeley-blue' : 
                      exp.color === 'blue-500' ? 'border-blue-500' : 
                      exp.color === 'green-600' ? 'border-green-600' :
                      'border-gray-500'
                    }`}>
                      <h3 className="text-xl font-bold text-berkeley-blue mb-2">{exp.title}</h3>
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
                  exp.color === 'green-600' ? 'bg-green-600' :
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
