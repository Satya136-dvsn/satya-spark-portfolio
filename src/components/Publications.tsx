
const Publications = () => {
  const publications = [
    {
      title: "Performance Optimized 32-bit Multiplier: Integrating Vedic and Karatsuba Techniques",
      venue: "2025 IEEE International Conference on Computing, Communication and Networking Technologies (ICCCNT)",
      date: "May 2025",
      description: "Developed a high-performance 32-bit multiplier by integrating Vedic and Karatsuba algorithms, achieving significant improvements in speed and area efficiency—vital for high-speed digital signal processing and computational applications.",
      doi: "10.1109/ICCCNT.2025.11012447",
      status: "Published",
      paperUrl: "https://drive.google.com/file/d/1WpY7VJv_Sc4pZF9RLFJFCi39UILDwWlR/view?usp=sharing",
      citeUrl: "https://ieeexplore.ieee.org/document/11012447"
    }
  ];

  return (
    <section id="publications" className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Publications
        </h2>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group mb-6"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                  {publication.status}
                </span>
                <div className="text-right">
                  <span className="text-purple-300 font-semibold text-sm">{publication.date}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-3">
                {publication.title}
              </h3>
              
              <p className="text-purple-300 font-semibold mb-4 text-lg">{publication.venue}</p>
              
              <p className="text-gray-300 leading-relaxed mb-4">{publication.description}</p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 border-t border-white/10 gap-4">
                <div className="text-sm">
                  <span className="text-gray-400">DOI: </span>
                  <a 
                    href={publication.citeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 font-mono hover:text-purple-300 transition-colors duration-300"
                  >
                    {publication.doi}
                  </a>
                </div>
                <div className="flex gap-3">
                  <a
                    href={publication.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-sm font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    View Paper
                  </a>
                  <a
                    href={publication.citeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-sm font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Cite
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
            <div className="text-gray-300 text-sm">Published Papers</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">IEEE</div>
            <div className="text-gray-300 text-sm">Conference</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">2025</div>
            <div className="text-gray-300 text-sm">Publication Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
