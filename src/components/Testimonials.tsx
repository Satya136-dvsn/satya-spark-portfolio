import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Dr. Faculty Name",
            role: "Professor, ECE Department",
            organization: "ANITS",
            image: "/placeholder.svg",
            quote: "Satya demonstrated exceptional problem-solving abilities during his coursework. His project on the 32-bit hybrid multiplier showcased both technical depth and innovative thinking.",
            rating: 5
        },
        {
            name: "Supervisor Name",
            role: "Project Lead",
            organization: "Infosys Springboard",
            image: "/placeholder.svg",
            quote: "During the Java Full Stack internship, Satya showed remarkable dedication and quickly grasped complex concepts. His ability to deliver quality code under tight deadlines is commendable.",
            rating: 5
        },
        {
            name: "Team Member Name",
            role: "Fellow Developer",
            organization: "IEEE Student Chapter",
            image: "/placeholder.svg",
            quote: "Working with Satya on various tech fest projects was a great experience. His leadership as Student President of ELEKTRA 2K25 brought creative ideas and excellent coordination to our team.",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-16 px-6 relative z-10">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
                    Testimonials
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    What people say about working with me
                </p>

                {/* Main Testimonial Card */}
                <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                        <Quote className="w-12 h-12 text-purple-400/30 mb-6" />

                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                            "{testimonials[currentIndex].quote}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-0.5">
                                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-purple-400">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-purple-400">{testimonials[currentIndex].role}</p>
                                <p className="text-gray-400 text-sm">{testimonials[currentIndex].organization}</p>
                            </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1 mt-4">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-lg">★</span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <ChevronLeft className="w-6 h-6 text-purple-400 group-hover:-translate-x-1 transition-transform duration-300" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                                            : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <ChevronRight className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Note for placeholder */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm italic">
                        💡 These are placeholder testimonials. Replace with real quotes from your professors, colleagues, or supervisors.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
