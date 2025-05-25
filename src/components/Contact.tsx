
import { useState } from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect!</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just have a chat about technology and innovation. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">d.v.satyanarayana260@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 text-purple-400 flex items-center justify-center">📱</span>
                  <span className="text-gray-300">+91 8639796150</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 text-purple-400 flex items-center justify-center">📍</span>
                  <span className="text-gray-300">Visakhapatnam, India</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <span>LinkedIn Profile</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-gray-300 text-sm">Enthusiasm</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToTop}
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <ArrowUp size={24} />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Duba Venkata Satyanarayana. Built with passion and creativity.
          </p>
          <p className="text-gray-500 text-sm">
            "Innovation distinguishes between a leader and a follower." - Steve Jobs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
