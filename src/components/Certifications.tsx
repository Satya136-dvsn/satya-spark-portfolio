
const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics & Visualization Certificate",
      provider: "Accenture & Forage",
      description: "Certified in data analytics and storytelling through Accenture's virtual program, covering data cleaning, modeling, visualization, and client-ready presentations",
      score: "Certified",
      type: "Virtual Experience",
      certificateUrl: "https://drive.google.com/file/d/1CXfG9XX0pFSkfjUVu0HHaBhddGVXdwO6/view?usp=sharing"
    },
    {
      title: "AWS APAC Solutions Architecture",
      provider: "Forage",
      description: "Completed a virtual experience designing a scalable cloud hosting architecture using AWS Elastic Beanstalk, and communicated technical solutions in clear business terms",
      score: "Certified",
      type: "Virtual Experience",
      certificateUrl: "https://drive.google.com/file/d/1u39Iz8A2v3f5qY_YWD7uS2mBUrohPFCs/view?usp=sharing"
    },
    {
      title: "Deloitte Australia Data Analytics",
      provider: "Forage",
      description: "Completed a data analytics simulation involving forensic analysis, data classification in Excel, and interactive dashboard creation using Tableau",
      score: "Certified",
      type: "Virtual Experience",
      certificateUrl: "https://drive.google.com/file/d/1UupXoeoRMCBsrZlfkRpjLPSsn5KK7p4i/view?usp=drive_link"
    },
    {
      title: "NCAT Participation Certificate",
      provider: "Naukri Campus",
      description: "Secured 49/60 with an All India Rank of 1886 in the Naukri Campus All-India Online Aptitude Test, demonstrating strong problem-solving and analytical skills",
      score: "49/60 (AIR: 1886)",
      type: "Competition",
      certificateUrl: "https://www.naukri.com/campus/certificates/naukri_campus_ai_ncat_participation_may_2025/v0/683a1f17892c1f3133ab2ac2?utm_source=certificate&utm_medium=copy&utm_campaign=683a1f17892c1f3133ab2ac2",
      scoreUrl: "https://www.naukri.com/campus/contests/all-india-online-aptitude-test/assessment/2025-NjgyMjBjYTc4N2M5NzY3NzJiZmEyOWEx?utm_source=score_card_share"
    },
    {
      title: "Generative AI Foundations Certificate",
      provider: "upGrad",
      description: "Certified in Generative AI Foundations, covering advanced prompt engineering, AI-powered research, automation, and problem-solving—endorsed by Microsoft and upGrad.",
      score: "Certified",
      type: "Professional Certificate",
      certificateUrl: "https://drive.google.com/file/d/1HteJMu-N7oG1k_HTXvjITMG5hO2FFAPh/view?usp=drive_link"
    },
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
    }
  ];

  return (
    <section id="certifications" className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
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
                    : cert.type === 'Virtual Experience'
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : cert.type === 'Competition'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {cert.type}
                </span>
                <div className="text-right">
                  {cert.scoreUrl ? (
                    <a
                      href={cert.scoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300"
                    >
                      {cert.score}
                    </a>
                  ) : (
                    <span className="text-yellow-400 font-bold text-sm">{cert.score}</span>
                  )}
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
            <div className="text-3xl font-bold text-purple-400 mb-2">11</div>
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
            <div className="text-3xl font-bold text-pink-400 mb-2">3</div>
            <div className="text-gray-300 text-sm">Virtual Experiences</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
