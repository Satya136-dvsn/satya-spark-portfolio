const About = () => {
  return <section id="about" className="py-20 px-6 relative z-10">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Bachelor of Technology</h4>
              <p className="text-gray-300">Electronics and Communications Engineering</p>
              <p className="text-gray-400">Anil Neerukonda Institute Of Technology & Sciences</p>
              <p className="text-purple-300">CGPA: 6.25 | 2021 - 2025</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Location</h3>
            <p className="text-gray-300">Visakhapatnam, India</p>
            <p className="text-gray-400">+91 8639796150</p>
            <p className="text-gray-400">d.v.satyanarayana260@gmail.com</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 px-[32px]">
            <h3 className="text-2xl font-bold mb-6 text-white">Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              B.Tech Electronics & Communication Engineering (2025) graduate with hands-on experience in Java full-stack development, data analytics, and FPGA-based digital design. Built scalable applications, data-driven solutions, and performance-optimized hardware projects through internships, certifications, and real-world projects. Actively seeking entry-level software, data, or cloud engineering roles.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">8</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-pink-400">10+</div>
                <div className="text-sm text-gray-300">Certifications</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Leadership</h3>
            <p className="text-gray-300 text-sm mb-1">• Student President – ELEKTRA 2K25</p>
            <p className="text-gray-300 text-sm mb-1">• NSS Unit-2 Coordinator (2023–2025)</p>
            <p className="text-gray-300 text-sm mb-1">• GDG Vizag Member & DevFest Volunteer</p>
            <p className="text-gray-300 text-sm">• Class Representative</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default About;