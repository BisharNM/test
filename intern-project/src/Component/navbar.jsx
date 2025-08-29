import { ChevronDown, Phone, Mail, Menu, X, Code, Smartphone, Monitor, TrendingUp, Globe, Zap } from "lucide-react";

import React, { useState, useEffect } from "react";

export default function DevNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      label: "Services",
      icon: Code,
      hasDropdown: [
        { 
          name: "Web Development", 
          link: "#services", 
          icon: "🌐",
          description: "Custom websites & web apps"
        },
        { 
          name: "Mobile Development", 
          link: "#services", 
          icon: "📱",
          description: "iOS & Android applications"
        },
        { 
          name: "Desktop Apps", 
          link: "#services", 
          icon: "💻",
          description: "Cross-platform desktop solutions"
        },
        { 
          name: "Digital Marketing", 
          link: "#services", 
          icon: "📈",
          description: "SEO, SEM & social media"
        },
        { 
          name: "UI/UX Design", 
          link: "#services", 
          icon: "🎨",
          description: "User-centered design solutions"
        },
        { 
          name: "E-commerce", 
          link: "#services", 
          icon: "🛒",
          description: "Online store development"
        }
      ]
    },
    {
      label: "Portfolio",
      icon: Monitor,
      hasDropdown: [
        { name: "Web Projects", link: "#portfolio", icon: "🌐", description: "Our latest web work" },
        { name: "Mobile Apps", link: "#portfolio", icon: "📱", description: "Mobile application showcase" },
        { name: "AI/ML Projects", link: "#portfolio", icon: "🤖", description: "AI-powered solutions" },
        { name: "Case Studies", link: "#portfolio", icon: "📊", description: "Detailed project analysis" }
      ]
    },
    {
      label: "Technologies",
      icon: Smartphone,
      hasDropdown: [
        { name: "Frontend", link: "#", icon: "⚛️", description: "React, Vue, Angular" },
        { name: "Backend", link: "#", icon: "🔧", description: "Node.js, Python, Java" },
        { name: "Mobile", link: "#", icon: "📱", description: "React Native, Flutter" },
        { name: "Database", link: "#", icon: "🗄️", description: "MongoDB, PostgreSQL" },
        { name: "Cloud", link: "#", icon: "☁️", description: "AWS, Azure, GCP" }
      ]
    },
    {
      label: "Company",
      icon: TrendingUp,
      hasDropdown: [
        { name: "About Us", link: "#about", icon: "👥", description: "Our story & mission" },
        { name: "Our Team", link: "#about", icon: "🤝", description: "Meet the experts" },
        { name: "Careers", link: "#", icon: "💼", description: "Join our team" },
        { name: "Blog", link: "#", icon: "📝", description: "Tech insights & news" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[9999] transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-blue-500/10 border-b border-gray-800' 
        : 'bg-gray-900/90 backdrop-blur-sm'
    }`}>
      {/* Top Header */}
      <div className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Live Status */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-xs">Live Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-gray-400 text-xs">24/7 Response Time</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:hello@inxcode.com" 
                className="hidden md:flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-xs"
              >
                <Mail className="h-3 h-3 text-blue-400" />
                <span>hello@inxcode.com</span>
              </a>

              <a 
                href="tel:+1234567890" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-xs"
              >
                <Phone className="h-3 w-3 text-purple-400" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div className="text-xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  INXCODE
                </span>
                <div className="text-gray-400 text-xs tracking-wider">Pvt Ltd</div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Home Link */}
              <a 
                href="#home" 
                className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/50 relative group"
              >
                <span className="font-medium">Home</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>

              {/* Navigation Items with Enhanced Dropdowns */}
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative group">
                    <button className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/50 group/btn relative">
                      <IconComponent className="h-4 w-4 text-blue-400 group-hover/btn:text-blue-300" />
                      <span className="font-medium">{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                      )}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                    </button>

                    {/* Enhanced Dropdown Menu */}
                    {Array.isArray(item.hasDropdown) && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl shadow-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-700">
                        <div className="p-3">
                          <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3 px-3">
                            {item.label}
                          </div>
                          {item.hasDropdown.map((subItem, i) => (
                            <a 
                              key={i} 
                              href={subItem.link} 
                              className="flex items-start space-x-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 group/item"
                            >
                              <span className="text-lg mt-1">{subItem.icon}</span>
                              <div className="flex-1">
                                <div className="font-medium group-hover/item:translate-x-1 transition-transform duration-200">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-400 group-hover/item:text-gray-300">
                                  {subItem.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Contact Link */}
              <a 
                href="#contact" 
                className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-800/50 relative group"
              >
                <span className="font-medium">Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>

            {/* Right side - CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href="#contact"
                className="px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 rounded-lg transition-all duration-300 font-medium"
              >
                Get Quote
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium"
              >
                Start Project
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-gray-800/50 rounded-lg"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700 transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
          {/* Home */}
          <a
            href="#home"
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>

          {/* Services with mobile dropdown */}
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative">
                <button 
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4 text-blue-400" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === index ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Mobile Dropdown */}
                {Array.isArray(item.hasDropdown) && (
                  <div className={`pl-6 space-y-1 transition-all duration-200 ${
                    activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {item.hasDropdown.map((subItem, i) => (
                      <a 
                        key={i} 
                        href={subItem.link} 
                        className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{subItem.icon}</span>
                        <div>
                          <div className="text-sm font-medium">{subItem.name}</div>
                          <div className="text-xs text-gray-500">{subItem.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Contact */}
          <a
            href="#contact"
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-gray-700 space-y-3">
            <button 
              className="w-full px-4 py-3 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </button>
            <button 
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}