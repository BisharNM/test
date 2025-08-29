import { useState, useEffect } from "react";
import { ArrowRight, Code2, Zap, Shield, Globe } from "lucide-react";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const codeSnippets = [
    "const website = new Innovation();",
    "function buildDreams() { return success; }",
    "export default YourSuccess;",
    "npm install amazing-results"
  ];

  const features = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: Shield, text: "Secure & Reliable" },
    { icon: Globe, text: "Global Reach" },
    { icon: Code2, text: "Clean Code" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    const currentSnippet = codeSnippets[currentIndex];
    let charIndex = 0;
    setTypedText("");
    
    const typingInterval = setInterval(() => {
      if (charIndex < currentSnippet.length) {
        setTypedText(currentSnippet.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <div>
      
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden">
        {/* Animated Code Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='code' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ctext x='10' y='20' fill='white' font-family='monospace' font-size='12'%3E%3C/%3E%3Ctext x='10' y='40' fill='white' font-family='monospace' font-size='12'%3Efunction%3C/text%3E%3Ctext x='10' y='60' fill='white' font-family='monospace' font-size='12'%3Ereturn%3C/text%3E%3Ctext x='10' y='80' fill='white' font-family='monospace' font-size='12'%3E%7B%7D%3C/text%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23code)'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            
            {/* Code Terminal */}
            <div className={`inline-block bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-left font-mono text-sm text-green-400">
                <span className="text-gray-500">~/projects/your-success $</span> {typedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              We Build Digital
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform your business with cutting-edge web applications, mobile apps, and digital solutions that drive growth and innovation.
            </p>

            {/* Features */}
            <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
                    <IconComponent className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 rounded-xl transition-all duration-300 font-semibold">
                <span>View Our Work</span>
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">150+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">99%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}