import { ExternalLink } from 'lucide-react';

const SkillBadges = () => {
  const skillBadges = [
    {
      title: "Build Real World AI Applications with Gemini and Imagen",
      provider: "Google Cloud",
      description: "Skill badge showcasing expertise in building practical AI applications using Gemini and Imagen technologies",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/ab5eff35-f358-4bb7-910c-0d1b2adb224d/public_url"
    },
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      provider: "Google Cloud",
      description: "Demonstrated proficiency in developing generative AI applications using Gemini and Streamlit",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/9f5949d8-b02b-4301-bcb8-83fcfd872865/public_url"
    },
    {
      title: "Inspect Rich Documents with Gemini Multimodality",
      provider: "Google Cloud",
      description: "Expertise in analyzing rich documents using Gemini's multimodality features and RAG techniques",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/94cc5a7d-3761-4f23-9913-b6ddb4ae26bd/public_url"
    },
    {
      title: "Explore Generative AI with the Gemini API",
      provider: "Google Cloud",
      description: "Proficiency in leveraging the Gemini API within Vertex AI for generative AI applications",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/18304b8e-f5b3-4d14-8316-ddefaffcb049/public_url"
    },
    {
      title: "SQL for Data Science",
      provider: "IBM",
      description: "Proficiency in SQL database querying and data manipulation for data science applications",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/ffd12ba2-b6dd-414f-a7b8-4ba6b89c8ff7/public_url"
    },
    {
      title: "Analyzing Data with Python",
      provider: "IBM",
      description: "Advanced data analysis techniques using Python libraries including pandas, numpy, and matplotlib",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/1a30f4cc-8bea-4154-9202-406f4ab4a097/public_url"
    },
    {
      title: "Data Analytics Essentials",
      provider: "IBM",
      description: "Foundational skills in data analytics principles, tools, and methodologies for business insights",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/7046ea1c-4845-46bc-ba8b-922283d346bc/public_url"
    },
    {
      title: "Analyzing Data with Excel",
      provider: "IBM",
      description: "Demonstrated competency in data analysis techniques and methodologies using Microsoft Excel",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/5eda6ed8-e09c-4d75-955a-0b512a04e9dc/public_url"
    }
  ];

  return (
    <section id="skill-badges" className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Skill Badges
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Skill badges represent structured learning applied alongside real projects and internships.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  {badge.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                {badge.title}
              </h3>

              <p className="text-purple-300 font-semibold mb-3">{badge.provider}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{badge.description}</p>

              {badge.badgeUrl && (
                <div className="mt-auto -mx-6 px-6 pt-4 border-t border-white/10 flex gap-3">
                  <a
                    href={badge.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/50 hover:border-purple-400 rounded-lg text-white font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <ExternalLink className="w-4 h-4 text-purple-200 group-hover/btn:text-white transition-colors" />
                    <span className="text-purple-100 group-hover/btn:text-white transition-colors tracking-wide">
                      View Badge
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-64 text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">{skillBadges.length}</div>
            <div className="text-gray-300 text-sm">Skill Badges</div>
          </div>
          <div className="w-full md:w-64 text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
            <div className="text-gray-300 text-sm">Google Cloud</div>
          </div>
          <div className="w-full md:w-64 text-center p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">4</div>
            <div className="text-gray-300 text-sm">IBM Badges</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillBadges;
