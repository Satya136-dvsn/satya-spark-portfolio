import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics & Visualization Certificate",
      provider: "Accenture & Forage",
      description: "Certified in data analytics and storytelling through Accenture's virtual program, covering data cleaning, modeling, visualization, and client-ready presentations",
      score: "Certified",
      type: "Virtual Experience",
      certificateUrl: "https://drive.google.com/file/d/1rVPAPUUYvllInj5_7MSqwLjQ6Eleq3mk/view?usp=drive_link"
    },
    {
      title: "AWS APAC Solutions Architecture",
      provider: "Forage",
      description: "Completed a virtual experience designing a scalable cloud hosting architecture using AWS Elastic Beanstalk, and communicated technical solutions in clear business terms",
      score: "Certified",
      type: "Virtual Experience",
      certificateUrl: "https://drive.google.com/file/d/15r189HgXjNwUT7gwcZKnHJcOXylir3Er/view?usp=drive_link"
    },
    {
      title: "Deloitte Australia Data Analytics",
      provider: "Forage",
      description: "Completed a data analytics simulation involving forensic analysis, data classification in Excel, and interactive dashboard creation using Tableau",
      score: "Certified",
      type: "Virtual Experience",
      certificateUrl: "https://drive.google.com/file/d/1ZbyvfGLnISXvalmyd1ZvO_T1efEJqFUl/view?usp=drive_link"
    },
    {
      title: "Generative AI Foundations Certificate",
      provider: "upGrad",
      description: "Certified in Generative AI Foundations, covering advanced prompt engineering, AI-powered research, automation, and problem-solving—endorsed by Microsoft and upGrad.",
      score: "Certified",
      type: "Professional Certificate",
      certificateUrl: "https://drive.google.com/file/d/1ShharIB84CbAUJ0W1zfQuRMZ9NO6G_pD/view?usp=drive_link"
    },
    {
      title: "Professional Certificate in Data Analytics",
      provider: "edX",
      description: "Comprehensive certification validating skills in data analysis, visualization, and statistical tools",
      score: "Certified",
      type: "Professional Certificate",
      certificateUrl: "https://drive.google.com/file/d/1BYj_FAxaRLFzFzR5X-EetSuWW-nC3T3c/view?usp=drive_link"
    },
    {
      title: "Introduction to Operating Systems",
      provider: "NPTEL",
      description: "8-week course covering service models, deployment models, virtualization, storage, and security",
      score: "55/100",
      type: "Course",
      certificateUrl: "https://drive.google.com/file/d/1nKEZK6CBohYSnWmqy0tnBbsE2wNsUbPM/view?usp=drive_link"
    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      description: "12-week course covering service models, deployment models, virtualization, storage, and security",
      score: "57/100",
      type: "Course",
      certificateUrl: "https://drive.google.com/file/d/1dvY8TOCpROkIpDSbCeUvjBMmaS9Y3VOM/view?usp=drive_link"
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      provider: "Oracle",
      description: "Foundational knowledge of AI, Machine Learning, and Deep Learning concepts in OCI.",
      score: "Certified",
      type: "Professional Certificate",
      certificateUrl: "https://drive.google.com/file/d/1Hus4e39-a1AnMrEtenMWhGa935ketECR/view?usp=drive_link"
    },
    {
      title: "Hack2Skill Recognition",
      provider: "Hack2Skill",
      description: "Recognized for active participation and skill demonstration in hackathons and coding challenges.",
      score: "Verified",
      type: "Virtual Experience",
      certificateUrl: "https://drive.google.com/file/d/1Iq4g22nKyXlvC1yDqJOZoxzW4tIlu9Ky/view?usp=drive_link"
    }
  ];

  // Separate certifications into categories
  const professionalCerts = certifications.filter(c =>
    c.type === "Professional Certificate" || c.type === "Course" || c.type === "Specialist Certification"
  );

  const virtualCerts = certifications.filter(c =>
    c.type === "Virtual Experience" || c.type === "Skill Badge" || c.type === "Competition"
  );

  interface Certification {
    title: string;
    provider: string;
    description: string;
    score: string;
    type: string;
    certificateUrl: string;
  }

  const CertCard = ({ cert }: { cert: Certification }) => (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cert.type === 'Professional Certificate' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
          cert.type === 'Virtual Experience' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
            'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
          {cert.type}
        </span>
        <div className="text-right">
          {cert.score !== "Certified" && <span className="text-yellow-400 font-bold text-sm">{cert.score}</span>}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
        {cert.title}
      </h3>

      <p className="text-purple-300 font-semibold mb-3">{cert.provider}</p>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{cert.description}</p>

      {cert.certificateUrl && (
        <div className="mt-auto -mx-6 px-6 pt-4 border-t border-white/10 flex gap-3">
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/50 hover:border-purple-400 rounded-lg text-white font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] group/btn relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <ExternalLink className="w-4 h-4 text-purple-200 group-hover/btn:text-white transition-colors" />
            <span className="text-purple-100 group-hover/btn:text-white transition-colors tracking-wide">
              View Certificate
            </span>
          </a>
        </div>
      )}
    </div>
  );

  return (
    <section id="certifications" className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Certifications
        </h2>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalCerts.map((cert, index) => (
              <CertCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* Virtual Experience */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-orange-500 pl-4">
            Virtual Experience & Skill-Based
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualCerts.map((cert, index) => (
              <CertCard key={index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
