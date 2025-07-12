
const SkillBadges = () => {
  const skillBadges = [
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      provider: "Google Cloud",
      description: "Skill badge demonstrating proficiency in developing generative AI applications using Gemini and Streamlit",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/9f5949d8-b02b-4301-bcb8-83fcfd872865/public_url"
    },
    {
      title: "Build Real World AI Applications with Gemini and Imagen",
      provider: "Google Cloud",
      description: "Skill badge showcasing expertise in building practical AI applications using Gemini and Imagen technologies",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/ab5eff35-f358-4bb7-910c-0d1b2adb224d/public_url"
    },
    {
      title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
      provider: "Google Cloud",
      description: "Skill badge demonstrating expertise in analyzing rich documents using Gemini's multimodality features and RAG techniques",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/94cc5a7d-3761-4f23-9913-b6ddb4ae26bd/public_url"
    },
    {
      title: "Explore Generative AI with the Gemini API in Vertex AI",
      provider: "Google Cloud",
      description: "Skill badge showcasing proficiency in leveraging the Gemini API within Vertex AI for generative AI applications",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/18304b8e-f5b3-4d14-8316-ddefaffcb049/public_url"
    },
    {
      title: "Analyzing Data with Excel",
      provider: "IBM",
      description: "Demonstrated competency in data analysis techniques and methodologies using Microsoft Excel",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/5eda6ed8-e09c-4d75-955a-0b512a04e9dc/public_url"
    },
    {
      title: "Data Analytics Essentials",
      provider: "IBM",
      description: "Foundational skills in data analytics principles, tools, and methodologies for business insights",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/7046ea1c-4845-46bc-ba8b-922283d346bc/public_url"
    },
    {
      title: "Data Visualization and Building Dashboards with Excel and Cognos",
      provider: "IBM",
      description: "Expertise in creating compelling data visualizations and interactive dashboards using Excel and Cognos",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/73d90ecb-3336-4845-af2f-fbfb152b9dfe/public_url"
    },
    {
      title: "Python Essentials",
      provider: "IBM",
      description: "Fundamental programming skills in Python including syntax, data structures, and basic programming concepts",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/1b59e9a9-3eba-4ae8-a0b5-b44d677bc8d8/public_url"
    },
    {
      title: "Python for Data Science Project",
      provider: "IBM",
      description: "Applied Python programming skills for data science projects including data manipulation and analysis",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/32495502-c686-4545-8d16-ddea2115867d/public_url"
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
      title: "Visualizing Data with Python",
      provider: "IBM",
      description: "Creating sophisticated data visualizations and statistical charts using Python visualization libraries",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/0167beb8-6fec-46fb-96ba-d5b141c4c64b/public_url"
    },
    {
      title: "Data Analytics and Visualization Capstone Project",
      provider: "IBM",
      description: "Comprehensive capstone project demonstrating end-to-end data analytics and visualization skills",
      type: "Skill Badge",
      badgeUrl: "https://www.credly.com/badges/5fc5c693-c742-40a2-84ad-8d7a5aed138f/public_url"
    }
  ];

  return (
    <section id="skill-badges" className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Skill Badges
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillBadges.map((badge, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
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
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href={badge.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-semibold"
                  >
                    View Badge →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">13</div>
            <div className="text-gray-300 text-sm">Skill Badges</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
            <div className="text-gray-300 text-sm">Google Cloud</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">9</div>
            <div className="text-gray-300 text-sm">IBM Badges</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-gray-300 text-sm">Data Science</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillBadges;
