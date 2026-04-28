import { motion } from "framer-motion";
import { Users, BarChart3, TrendingUp, GraduationCap, Award, Tag } from "lucide-react";

const skillCategories = [
  {
    title: "Product Management",
    icon: Users,
    color: "berkeley-blue",
    skills: [
      { name: "User Research", level: 4 },
      { name: "Project Management", level: 5 },
      { name: "Cross-functional Leadership", level: 5 }
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    color: "california-gold",
    skills: [
      { name: "SQL & Python", level: 4 },
      { name: "Financial Modeling", level: 5 },
      { name: "Data Analysis", level: 5 }
    ]
  },
  {
    title: "Business Strategy",
    icon: TrendingUp,
    color: "berkeley-blue",
    skills: [
      { name: "Entrepreneurship", level: 5 },
      { name: "Sales & Marketing", level: 4 },
      { name: "Portfolio Management", level: 4 }
    ]
  }
];

const certifications = [
  {
    title: "BS Business Administration",
    institution: "UC Berkeley, Haas School of Business",
    icon: GraduationCap,
    color: "berkeley-blue"
  },
  {
    title: "Product Management First Steps",
    institution: "LinkedIn Learning",
    icon: Tag,
    color: "california-gold"
  },
  {
    title: "Professional Forex Trader",
    institution: "Online Trading Academy",
    icon: Award,
    color: "berkeley-blue"
  }
];

const SkillLevel = ({ level }: { level: number }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((dot) => (
      <div
        key={dot}
        className={`w-2 h-2 rounded-full ${
          dot <= level ? 'bg-current' : 'bg-ash-gray'
        }`}
      />
    ))}
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-berkeley-blue mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Core competencies and technical expertise across multiple domains
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    category.color === 'berkeley-blue' ? 'bg-berkeley-blue' :
                    category.color === 'california-gold' ? 'bg-california-gold' :
                    'bg-dim-gray'
                  }`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-berkeley-blue">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <div className={`${
                        category.color === 'berkeley-blue' ? 'text-berkeley-blue' :
                        category.color === 'california-gold' ? 'text-california-gold' :
                        'text-gray-600'
                      }`}>
                        <SkillLevel level={skill.level} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Certifications */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative h-64 md:h-48">
            <img 
              src="/images/haas-campus-sunset.webp" 
              alt="UC Berkeley Haas School of Business Campus at Sunset with Campanile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log('Image failed to load:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-berkeley-blue bg-opacity-70 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Education & Certifications</h3>
                <p className="text-california-gold text-lg">UC Berkeley Haas School of Business</p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-light-gray rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      cert.color === 'berkeley-blue' ? 'bg-berkeley-blue' :
                      cert.color === 'california-gold' ? 'bg-california-gold' :
                      'bg-dim-gray'
                    }`}>
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-berkeley-blue">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.institution}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
