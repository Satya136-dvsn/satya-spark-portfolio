
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "Data Analysis & Visualization", level: 85 },
        { name: "Arduino Programming", level: 90 },
        { name: "Power BI", level: 78 },
        { name: "AWS Cloud", level: 75 },
        { name: "FPGA Design", level: 82 },
        { name: "Robotics", level: 88 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Microsoft Office", level: 90 },
        { name: "Adobe Suite", level: 85 },
        { name: "Git & Version Control", level: 80 },
        { name: "Event Photography", level: 88 },
        { name: "Project Management", level: 85 },
        { name: "Digital Forensics", level: 75 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", level: 95 },
        { name: "Event Coordination", level: 92 },
        { name: "Student Engagement", level: 90 },
        { name: "Team Collaboration", level: 88 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skill highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🎯", title: "Problem Solver", desc: "Analytical thinking" },
            { icon: "🚀", title: "Innovation", desc: "Creative solutions" },
            { icon: "⚡", title: "Fast Learner", desc: "Quick adaptation" },
            { icon: "🤝", title: "Team Player", desc: "Collaborative spirit" }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
