import { motion } from "framer-motion";
import { Users, BarChart3, TrendingUp, GraduationCap, Award, Tag } from "lucide-react";

const skillCategories = [
  {
    title: "Product Management",
    icon: Users,
    color: "navy",
    skills: [
      { name: "User Research", level: 4 },
      { name: "Project Management", level: 5 },
      { name: "Cross-functional Leadership", level: 5 }
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    color: "blue-500",
    skills: [
      { name: "SQL & Python", level: 4 },
      { name: "Financial Modeling", level: 5 },
      { name: "Data Analysis", level: 5 }
    ]
  },
  {
    title: "Business Strategy",
    icon: TrendingUp,
    color: "gray-600",
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
    color: "navy"
  },
  {
    title: "Product Management First Steps",
    institution: "LinkedIn Learning",
    icon: Tag,
    color: "blue-500"
  },
  {
    title: "Professional Forex Trader",
    institution: "Online Trading Academy",
    icon: Award,
    color: "gray-600"
  }
];

const SkillLevel = ({ level }: { level: number }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((dot) => (
      <div
        key={dot}
        className={`w-2 h-2 rounded-full ${
          dot <= level ? 'bg-current' : 'bg-gray-300'
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
          <h2 className="text-4xl font-bold text-navy mb-4">Skills & Expertise</h2>
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
                    category.color === 'navy' ? 'bg-navy' :
                    category.color === 'blue-500' ? 'bg-blue-500' :
                    'bg-gray-600'
                  }`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <div className={`${
                        category.color === 'navy' ? 'text-navy' :
                        category.color === 'blue-500' ? 'text-blue-500' :
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

        {/* Certifications */}
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">Education & Certifications</h3>
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
                    cert.color === 'navy' ? 'bg-navy' :
                    cert.color === 'blue-500' ? 'bg-blue-500' :
                    'bg-gray-600'
                  }`}>
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{cert.title}</h4>
                    <p className="text-gray-600 text-sm">{cert.institution}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
