const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': '' // Custom Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0); // Cooldown in seconds
  const { toast } = useToast();

  // Check for existing cooldown on mount
  useState(() => {
    const lastSubmission = localStorage.getItem('lastContactSubmission');
    if (lastSubmission) {
      const timePassed = Math.floor((Date.now() - parseInt(lastSubmission)) / 1000);
      const remainingTime = 120 - timePassed;
      if (remainingTime > 0) {
        setCooldown(remainingTime);
      }
    }
  });

  // Countdown timer effect
  useState(() => { // Using useState instead of useEffect for the initial setup to ensure hydration matches, but actually useEffect is better for the interval.
    // Changing to useEffect below.
  });

  // Actually, let's just use useEffect for the interval logic
  import { useEffect } from 'react'; // Allow me to add this import if missing, but it is standard. 
  // Wait, I cannot add imports easily inside the component body. I need to be careful with the replace block.
  // I will assume React is imported or available, but I should look at lines 1-3.
  // Line 2 has `import { useState } from 'react';`. I need to change that line too.

  // Let's rewrite the component start to include useEffect.
};
// RESETTING THOUGHTS: I will use a larger block to handle imports and the logic cleanly.

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': '' // Custom Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const { toast } = useToast();

  // Check LocalStorage on Mount & Run Timer
  useEffect(() => {
    const checkCooldown = () => {
      const lastSubmission = localStorage.getItem('lastContactSubmission');
      if (lastSubmission) {
        const timePassed = Math.floor((Date.now() - parseInt(lastSubmission)) / 1000);
        const remainingTime = 120 - timePassed; // 120 seconds = 2 minutes

        if (remainingTime > 0) {
          setCooldown(remainingTime);
        } else {
          setCooldown(0);
        }
      }
    };

    checkCooldown();

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🛡️ Custom Honeypot Check
    if (formData['bot-field']) {
      return; // Silently ignore bots
    }

    if (cooldown > 0) {
      toast({
        title: "Please wait",
        description: \`You can send another message in \${cooldown} seconds.\`,
        variant: "destructive"
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for sending me a message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '', 'bot-field': '' });
        
        // Start Cooldown
        const now = Date.now();
        localStorage.setItem('lastContactSubmission', now.toString());
        setCooldown(120);

      } else {
        throw new Error(result.message || "Failed to send");
      }

    } catch (error) {
      console.error('Web3Forms Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300">Email</p>
                    <a href="mailto:d.v.satyanarayana260@gmail.com" className="text-white hover:text-purple-400 transition-colors break-all">
                      d.v.satyanarayana260@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300">Phone</p>
                    <a href="tel:+918639796150" className="text-white hover:text-purple-400 transition-colors">
                      +91 8639796150
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex-shrink-0 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Visakhapatnam, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>

              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/venkatasatyanarayana-duba-679372255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a
                  href="https://github.com/Satya136-dvsn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center hover:bg-gray-500/30 transition-colors group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              {/* Honeypot Field - Hidden */}
              <input
                type="text"
                name="bot-field"
                value={formData['bot-field']}
                onChange={handleInputChange}
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />

              <button
                type="submit"
                disabled={isSubmitting || cooldown > 0}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale"
              >
                {cooldown > 0 
                  ? \`Wait \${Math.floor(cooldown / 60)}:\${(cooldown % 60).toString().padStart(2, '0')}s\` 
                  : isSubmitting 
                    ? 'Sending...' 
                    : 'Send Message'
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
