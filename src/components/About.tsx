const About = () => {
  return <section id="about" className="py-24 px-6 relative z-10">
    <div className="container mx-auto max-w-6xl">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Get to know me</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About Me
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Summary — Spans 2 columns, tall */}
        <div className="md:col-span-2 bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20">
              <span className="text-lg">✦</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Summary</h3>
          </div>
          <p className="text-gray-400 leading-[1.8] text-[14px]">
            B.Tech Electronics & Communication Engineering (2025) graduate with hands-on experience in Java full-stack development, data analytics, and FPGA-based digital design. Built scalable applications, data-driven solutions, and performance-optimized hardware projects through internships, certifications, and real-world projects. Actively seeking entry-level software, data, or cloud engineering roles.
          </p>
        </div>

        {/* Stats — Stacked */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-purple-500/20 transition-all duration-300 flex-1 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">8</span>
            <span className="text-gray-400 text-sm mt-1">Projects Built</span>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-purple-500/20 transition-all duration-300 flex-1 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10+</span>
            <span className="text-gray-400 text-sm mt-1">Certifications</span>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20">
              <span className="text-lg">🎓</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Education</h3>
          </div>
          <h4 className="text-white font-medium mb-1">Bachelor of Technology</h4>
          <p className="text-gray-400 text-sm">Electronics & Communications Engineering</p>
          <p className="text-gray-500 text-xs mt-1">Anil Neerukonda Institute Of Technology & Sciences</p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/[0.06] border border-purple-500/[0.1]">
            <span className="text-purple-300 text-xs font-medium">CGPA: 6.25 • 2021 - 2025</span>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center border border-pink-500/20">
              <span className="text-lg">📍</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Location</h3>
          </div>
          <p className="text-gray-300 text-sm mb-2">Visakhapatnam, India</p>
          <div className="space-y-1.5">
            <p className="text-gray-500 text-xs flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              +91 8639796150
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              d.v.satyanarayana260@gmail.com
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/20">
              <span className="text-lg">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Leadership</h3>
          </div>
          <div className="space-y-2">
            {[
              "Student President – ELEKTRA 2K25",
              "NSS Unit-2 Coordinator (2023–2025)",
              "GDG Vizag Member & DevFest Volunteer",
              "Class Representative"
            ].map((item, i) => (
              <p key={i} className="text-gray-400 text-xs flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500/60 mt-1.5 shrink-0" />
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