import React, { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cards data array
  const keyValues = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We embrace the latest technologies to deliver modern and innovative solutions tailored to our clients' needs.",
      gradient: "from-blue-500 to-blue-700",
      glow: "shadow-blue-500/25"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We work closely with our clients to understand their vision and bring it to life with transparency and trust.",
      gradient: "from-purple-500 to-purple-700",
      glow: "shadow-purple-500/25"
    },
    {
      icon: "🌱",
      title: "Growth",
      description:
        "Our goal is to create digital experiences that drive business growth and deliver measurable results.",
      gradient: "from-emerald-500 to-emerald-700",
      glow: "shadow-emerald-500/25"
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="bg-gray-900 py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">INXCODE Pvt Ltd</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
            At INXCODE, we are passionate about crafting digital solutions that help startups
            and businesses grow. Our team combines creativity, technology, and strategy to
            deliver user-friendly products that make a real impact.
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {keyValues.map((card, index) => (
            <div
              key={index}
              className={`group bg-gray-800/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 hover:bg-gray-750 transition-all duration-500 border border-gray-700 hover:border-gray-600 hover:shadow-2xl ${card.glow} hover:${card.glow} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-white text-3xl">{card.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-50 mb-4 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Our Mission */}
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-50 mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Mission</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We believe in the power of technology to transform businesses and create 
                meaningful connections. Our mission is to democratize access to high-quality 
                digital solutions, making them accessible to businesses of all sizes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every project we undertake is driven by our commitment to excellence, 
                innovation, and client satisfaction. We don't just build websites and apps; 
                we build partnerships that last.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">💡</div>
                <div className="text-xl font-bold mb-2">Our Vision</div>
                <div className="text-blue-100 opacity-90">
                  To be the leading digital partner for businesses worldwide
                </div>
              </div>
            </div>
          </div>
        </div>

        
       
        
      </div>
    </section>
  );
};

export default About;