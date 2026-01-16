import { BookOpen, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
    const blogPosts = [
        {
            title: "Building a 32-bit Hybrid Multiplier with FPGA",
            excerpt: "A deep dive into optimizing multiplication algorithms using Vedic and Karatsuba techniques for improved efficiency in digital signal processing.",
            category: "Hardware Design",
            readTime: "8 min read",
            date: "Coming Soon",
            status: "upcoming",
            image: "/placeholder.svg"
        },
        {
            title: "Getting Started with Java Spring Boot",
            excerpt: "A beginner's guide to building RESTful APIs with Spring Boot, covering project setup, dependency injection, and best practices.",
            category: "Backend Development",
            readTime: "12 min read",
            date: "Coming Soon",
            status: "upcoming",
            image: "/placeholder.svg"
        },
        {
            title: "Data Visualization with Python & Power BI",
            excerpt: "Learn how to create compelling data visualizations and interactive dashboards using Python libraries and Power BI.",
            category: "Data Analytics",
            readTime: "10 min read",
            date: "Coming Soon",
            status: "upcoming",
            image: "/placeholder.svg"
        }
    ];

    return (
        <section id="blog" className="py-16 px-6 relative z-10">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
                        Blog
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technical articles, tutorials, and insights from my development journey
                    </p>
                </div>

                {/* Coming Soon Banner */}
                <div className="mb-12 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <BookOpen className="w-6 h-6 text-purple-400" />
                        <span className="text-xl font-semibold text-white">Blog Coming Soon!</span>
                    </div>
                    <p className="text-gray-400">
                        I'm working on creating valuable content to share my learnings. Stay tuned!
                    </p>
                </div>

                {/* Blog Posts Preview */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                        >
                            {/* Post Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center relative">
                                <BookOpen className="w-16 h-16 text-purple-400/40" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-purple-500/30 border border-purple-400/50 rounded-full text-xs font-medium text-purple-300">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-yellow-500/30 border border-yellow-400/50 rounded-full text-xs font-medium text-yellow-300">
                                        {post.date}
                                    </span>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <button
                                        className="flex items-center gap-1 text-purple-400 text-sm font-medium opacity-50 cursor-not-allowed"
                                        disabled
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">
                        Want to be notified when new articles are published?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300"
                    >
                        Get in Touch
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
