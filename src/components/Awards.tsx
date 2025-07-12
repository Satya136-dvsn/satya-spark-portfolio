
const Awards = () => {
  const awards = [
    {
      title: "Student President",
      event: "ELEKTRA 2K25 Tech Fest",
      description: "Elected as Student President for the prestigious tech fest, leading organizational activities and student engagement.",
      icon: "🏆",
      type: "Leadership",
      certificateUrl: "https://drive.google.com/file/d/1OYYNP3QhhOsF_gSCIXepN8Fgq8vzBnQX/view?usp=drive_link"
    },
    {
      title: "Charm With Grace",
      event: "ELEKTRA 2K24",
      description: "Volunteered and received recognition for outstanding contributions during the tech fest.",
      icon: "⭐",
      type: "Volunteer",
      certificateUrl: "https://drive.google.com/file/d/1nohAb1innzvhOvPK8Q1OYx-PLuKDSW5m/view?usp=drive_link"
    },
    {
      title: "Poster Designing Award",
      event: "ELEKTRA 2K24",
      description: "Awarded for designing creative posters and banners, showcasing artistic and design skills.",
      icon: "🎨",
      type: "Creative",
      certificateUrl: "https://drive.google.com/file/d/1UFFhBmDhHzTdsxfgpGk1VS8lxzsy8XTP/view?usp=drive_link"
    },
    {
      title: "Photography Recognition",
      event: "ELEKTRA 2K24",
      description: "Recognized for exceptional photography contributions, highlighting skills in event photography.",
      icon: "📸",
      type: "Creative",
      certificateUrl: "https://drive.google.com/file/d/1O0No4-5C_krRi5dkL-ZYkz5wF44j0PlV/view?usp=drive_link"
    },
    {
      title: "Student Body Recognition",
      event: "ELEKTRA 2K24",
      description: "Certificate of Recognition for contributions as a Student ACES Member during the national tech fest.",
      icon: "🎖️",
      type: "Recognition",
      certificateUrl: "https://drive.google.com/file/d/1uWwN5x2RCfOk6HW3EnZYn3MkWI_KQGJl/view?usp=drive_link"
    }
  ];

  const leadership = [
    {
      role: "Student Coordinator",
      organizations: ["NSS", "Green Club", "Wall Magazine Club"],
      description: "Demonstrated leadership and organizational skills across multiple student organizations."
    },
    {
      role: "Class Representative",
      organizations: ["ECE Department"],
      description: "Served as the primary liaison between students and faculty, facilitating communication and addressing concerns."
    },
    {
      role: "Active Member",
      organizations: ["IEEE Communication Society", "ISTE", "IETE"],
      description: "Actively participated in professional organizations, contributing to technical discussions and events."
    }
  ];

  const workshops = [
    { 
      name: "Power BI Workshop", 
      event: "TechTip24", 
      desc: "Enhanced skills in data visualization and interactive dashboard creation",
      certificateUrl: "https://drive.google.com/file/d/1KF7FrgVFHA5nb3-NcWjxR-6htqPCc-ir/view?usp=drive_link"
    },
    { 
      name: "Cybersecurity & Digital Forensics", 
      event: "IEEE", 
      desc: "Comprehensive course in cyber threat analysis and digital investigation",
      certificateUrl: "https://drive.google.com/file/d/11qGvTvnFHfUwKC0quNOD-9i663bNfRb-/view?usp=drive_link"
    },
    { 
      name: "Machine Learning & Google AI", 
      event: "IEEE", 
      desc: "Latest ML techniques and practical applications using Google AI tools",
      certificateUrl: "https://drive.google.com/file/d/1HltVaUOv1AmWOtp5xz6n10lkmrtT_OcK/view?usp=drive_link"
    },
    { 
      name: "AWS Workshop", 
      event: "Brainovision Solutions", 
      desc: "4-day AWS workshop and 24-hour hackathon on cloud solutions",
      certificateUrl: "https://drive.google.com/file/d/1byvrsF7QupG8uy5hULFR6C7bOnynd743/view?usp=drive_link"
    },
    { 
      name: "Arduino Workshop", 
      event: "IEEE EDS SB Chapter ANITS", 
      desc: "Hands-on workshop enhancing microcontroller and embedded systems knowledge",
      certificateUrl: "https://drive.google.com/file/d/1MAWuDpx-S3sDLvbOyxm9ebh1AEcu7wNg/view?usp=drive_link"
    }
  ];

  return (
    <section id="awards" className="py-12 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Awards & Recognition
        </h2>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{award.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  award.type === 'Leadership' 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : award.type === 'Creative'
                    ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' 
                    : award.type === 'Volunteer'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {award.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                {award.title}
              </h3>
              
              <p className="text-purple-300 font-semibold mb-3">{award.event}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href={award.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-semibold"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Leadership Roles</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((role, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl font-bold text-purple-400 mb-3">{role.role}</h4>
                
                <div className="mb-3">
                  {role.organizations.map((org, orgIndex) => (
                    <span 
                      key={orgIndex}
                      className="inline-block px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-xs text-purple-300 mr-2 mb-2"
                    >
                      {org}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops & Hackathons */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Workshops & Hackathons</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-1">{workshop.name}</h4>
                <p className="text-purple-300 text-sm font-medium mb-2">{workshop.event}</p>
                <p className="text-gray-300 text-sm mb-3">{workshop.desc}</p>
                
                <a
                  href={workshop.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-semibold"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
