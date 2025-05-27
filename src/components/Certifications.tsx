
const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Operating Systems",
      provider: "NPTEL",
      description: "8-week course covering service models, deployment models, virtualization, storage, and security",
      score: "55/100",
      type: "Course",
      certificateUrl: "https://drive.google.com/file/d/1GavwG7waIwsRqK-URB1AAIhlZz4TIdj8/view?usp=drive_link"
    },
    {
      title: "Professional Certificate in Data Analytics",
      provider: "edX",
      description: "Comprehensive certification validating skills in data analysis, visualization, and statistical tools",
      score: "Certified",
      type: "Professional Certificate",
      certificateUrl: "https://drive.google.com/file/d/16_NwCmsl1E3HZWwp06nlsOotIjGU6ut_/view?usp=drive_link"
    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      description: "12-week course covering service models, deployment models, virtualization, storage, and security",
      score: "57/100",
      type: "Course",
      certificateUrl: "https://drive.google.com/file/d/1DvMXn_UIVQw7B_z7Q6iipEFlYdqN7biF/view?usp=drive_link"
    },
    {
      title: "JavaScript Specialist",
      provider: "Dollar Design School",
      description: "Certified specialist with proficiency in web development and dynamic web applications",
      score: "Certified",
      type: "Specialist Certification",
      certificateUrl: "https://drive.google.com/file/d/1tV7BQowL3Fane-HueQW3hA9YukcvTAh8/view?usp=drive_link"
    },
    {
      title: "CSS3 Specialist",
      provider: "Framework Tech",
      description: "Expertise in creating visually appealing and responsive web experiences",
      score: "Certified",
      type: "Specialist Certification",
      certificateUrl: "https://drive.google.com/file/d/1nDr6tn35giKGBz5Z-1lAjIUeWXU8LL-8/view?usp=drive_link"
    },
    {
      title: "HTML5 Specialist",
      provider: "Framework Tech",
      description: "Demonstrating expertise in creating innovative and user-friendly web applications",
      score: "Certified",
      type: "Specialist Certification",
      certificateUrl: "https://drive.google.com/file/d/1khgGgsNyst1K0mMI-df9kubyei_tMklH/view?usp=drive_link"
    },
    {
      title: "Robotics with Arduino Internship",
      provider: "Verzeo",
      description: "Hands-on internship experience in robotics and Arduino programming, developing practical skills in embedded systems",
      score: "Certified",
      type: "Internship",
      certificateUrl: "https://drive.google.com/file/d/1nmAOSsYlAjonngk7IFURlgYX2xatRgJg/view?usp=drive_link"
    },
    {
      title: "Generative AI Foundations Certificate",
      provider: "upGrad",
      description: "Certified in Generative AI Foundations, covering advanced prompt engineering, AI-powered research, automation, and problem-solving—endorsed by Microsoft and upGrad.",
      score: "Certified",
      type: "Professional Certificate",
      certificateUrl: "https://drive.google.com/file/d/1HteJMu-N7oG1k_HTXvjITMG5hO2FFAPh/view?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.type === 'Professional Certificate' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : cert.type === 'Specialist Certification'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : cert.type === 'Internship'
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {cert.type}
                </span>
                <div className="text-right">
                  <span className="text-yellow-400 font-bold text-sm">{cert.score}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                {cert.title}
              </h3>
              
              <p className="text-purple-300 font-semibold mb-3">{cert.provider}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>

              {cert.certificateUrl && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-semibold"
                  >
                    View Certificate →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">8+</div>
            <div className="text-gray-300 text-sm">Certifications</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-300 text-sm">Specialist Certs</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">NPTEL Courses</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">Professional Certs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
