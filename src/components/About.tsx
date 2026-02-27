const About = () => {
  return <section id="about" className="py-16 px-6 relative z-10">
    <div className="container mx-auto max-w-5xl">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">Get to know me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About Me
        </h2>
        <div className="mt-3 mx-auto w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Summary — Spans 2 columns, tall */}
        <div className="md:col-span-2 bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/[0.05] hover:border-purple-500/30 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
              <span className="text-sm">✦</span>
            </div>
            <h3 className="text-base font-semibold text-white tracking-wide">Summary</h3>
          </div>
          <p className="text-gray-400 leading-[1.7] text-[13px]">
            B.Tech Electronics & Communication Engineering (2025) graduate with hands-on experience in Java full-stack development, data analytics, and FPGA-based digital design. Built scalable applications, data-driven solutions, and performance-optimized hardware projects through internships, certifications, and real-world projects. Actively seeking entry-level software, data, or cloud engineering roles.
          </p>
        </div>

        {/* Stats — Stacked */}
        <div className="flex flex-col gap-3">
          <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-5 border border-white/[0.05] hover:border-purple-500/30 transition-all duration-300 flex-1 flex flex-col items-center justify-center text-center group">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">8</span>
            <span className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-medium">Projects Built</span>
          </div>
          <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-5 border border-white/[0.05] hover:border-purple-500/30 transition-all duration-300 flex-1 flex flex-col items-center justify-center text-center group">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">10+</span>
            <span className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-medium">Certifications</span>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/[0.05] hover:border-blue-500/30 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
              <span className="text-sm">🎓</span>
            </div>
            <h3 className="text-base font-semibold text-white tracking-wide">Education</h3>
          </div>
          <h4 className="text-gray-200 text-sm font-medium mb-0.5">Bachelor of Technology</h4>
          <p className="text-gray-400 text-[11px] uppercase tracking-wider">Electronics & Communications Engineering</p>
          <p className="text-gray-500 text-[11px] mt-1">Anil Neerukonda Institute Of Technology & Sciences</p>
          <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/[0.05] border border-blue-500/[0.1]">
            <span className="text-blue-300 text-[10px] font-semibold tracking-wider">CGPA: 6.25 • 2021-2025</span>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/[0.05] hover:border-pink-500/30 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center border border-pink-500/20 group-hover:border-pink-500/40 transition-colors">
              <span className="text-sm">📍</span>
            </div>
            <h3 className="text-base font-semibold text-white tracking-wide">Location</h3>
          </div>
          <p className="text-gray-300 text-[13px] font-medium mb-3">Visakhapatnam, India</p>
          <div className="space-y-2">
            <p className="text-gray-400 text-[11px] flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-pink-500/50" />
              +91 8639796150
            </p>
            <p className="text-gray-400 text-[11px] flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-orange-500/50" />
              d.v.satyanarayana260@gmail.com
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
              <span className="text-sm">👥</span>
            </div>
            <h3 className="text-base font-semibold text-white tracking-wide">Leadership</h3>
          </div>
          <div className="space-y-2.5">
            {[
              "Student President – ELEKTRA 2K25",
              "NSS Unit-2 Coordinator (2023–2025)",
              "GDG Vizag Member & DevFest Volunteer",
              "Class Representative"
            ].map((item, i) => (
              <p key={i} className="text-gray-400 text-[11px] flex items-start gap-2 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-emerald-500/50 mt-1.5 shrink-0" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default About;