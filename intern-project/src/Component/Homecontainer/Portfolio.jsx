// Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Star, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample portfolio data with enhanced features
  const portfolioData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with React and Node.js featuring real-time inventory and payment processing",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 to-blue-700",
      glow: "shadow-blue-500/25",
      year: "2024",
      status: "Live",
      rating: 4.9
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking solution with biometric authentication and real-time notifications",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "Firebase", "API Integration"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 to-purple-700",
      glow: "shadow-purple-500/25",
      year: "2024",
      status: "In Development",
      rating: 4.8
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Collaborative project management tool for teams with real-time collaboration and advanced analytics",
      image: "/api/placeholder/400/300",
      tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-emerald-500 to-emerald-700",
      glow: "shadow-emerald-500/25",
      year: "2023",
      status: "Live",
      rating: 4.7
    },
    {
      id: 4,
      title: "AI-Powered Analytics",
      description: "Data visualization platform with machine learning insights and predictive analytics for business intelligence",
      image: "/api/placeholder/400/300",
      tags: ["Python", "TensorFlow", "D3.js", "Docker"],
      category: "ai",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-indigo-500 to-indigo-700",
      glow: "shadow-indigo-500/25",
      year: "2024",
      status: "Live",
      rating: 4.9
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property listing and management system with virtual tours and advanced search capabilities",
      image: "/api/placeholder/400/300",
      tags: ["Next.js", "Prisma", "Tailwind", "Vercel"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-cyan-500 to-cyan-700",
      glow: "shadow-cyan-500/25",
      year: "2023",
      status: "Live",
      rating: 4.6
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Personal health and workout tracking application with AI-powered recommendations and social features",
      image: "/api/placeholder/400/300",
      tags: ["Flutter", "Dart", "Firebase", "Health APIs"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-pink-500 to-pink-700",
      glow: "shadow-pink-500/25",
      year: "2024",
      status: "Beta",
      rating: 4.5
    }
  ];

  // Filter projects based on category
  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter);

  const filterCategories = [
    { key: 'all', label: 'All Projects', gradient: 'from-blue-500 to-purple-500', count: portfolioData.length },
    { key: 'web', label: 'Web Apps', gradient: 'from-blue-500 to-cyan-500', count: portfolioData.filter(p => p.category === 'web').length },
    { key: 'mobile', label: 'Mobile Apps', gradient: 'from-purple-500 to-pink-500', count: portfolioData.filter(p => p.category === 'mobile').length },
    { key: 'ai', label: 'AI/ML', gradient: 'from-indigo-500 to-purple-500', count: portfolioData.filter(p => p.category === 'ai').length }
  ];

  return (
    <section id="portfolio" className="py-8 md:py-16 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Our Portfolio
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Discover our latest projects and innovative solutions that drive business growth
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2">
          {filterCategories.map((category, index) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`group px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                activeFilter === category.key
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg hover:shadow-xl transform scale-105`
                  : 'bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 hover:scale-105'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              aria-label={`Filter projects by ${category.label}`}
            >
              <div className="flex items-center space-x-1 md:space-x-2">
                <Filter className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.key === 'all' ? 'All' : category.key.toUpperCase()}</span>
                <span className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-xs ${
                  activeFilter === category.key 
                    ? 'bg-white/20' 
                    : 'bg-gray-700 group-hover:bg-gray-600'
                }`}>
                  {category.count}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-16">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-50 mb-3 md:mb-4">
              Ready to Start Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Next Project?</span>
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-lg px-2">
              Let's collaborate to bring your vision to life with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm md:text-base rounded-lg md:rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Start Your Project
                <ExternalLink className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-gray-600 text-gray-300 font-semibold text-sm md:text-base rounded-lg md:rounded-xl hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Portfolio Card Component with Mobile Responsiveness
const PortfolioCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'In Development': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Beta': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <article className={`group bg-gray-800/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl hover:${project.glow} transition-all duration-500 overflow-hidden border border-gray-700 hover:border-gray-600 hover:scale-105`}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-40 md:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-75`}>
            <div className="text-center px-4">
              <svg className="w-8 md:w-12 h-8 md:h-12 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-xs md:text-sm text-white font-medium">{project.title}</p>
            </div>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
        
        {/* Top badges */}
        <div className="absolute top-2 md:top-4 left-2 md:left-4 flex flex-col space-y-1 md:space-y-2">
          <span className={`px-2 md:px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full shadow-lg`}>
            {project.category.toUpperCase()}
          </span>
          <span className={`px-2 md:px-3 py-1 ${getStatusColor(project.status)} text-xs font-medium rounded-full border backdrop-blur-sm`}>
            {project.status}
          </span>
        </div>

        {/* Rating - Hidden on small mobile */}
        <div className="absolute top-2 md:top-4 right-2 md:right-4 hidden sm:flex items-center bg-gray-900/80 backdrop-blur-sm rounded-lg px-2 py-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
          <span className="text-white text-xs font-medium">{project.rating}</span>
        </div>
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3 md:space-x-4">
            <a
              href={project.demoUrl}
              className="p-2 md:p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:scale-110"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href={project.githubUrl}
              className="p-2 md:p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:scale-110"
              aria-label={`View ${project.title} source code`}
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-2 md:mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-50 group-hover:text-white transition-colors flex-1 pr-2">
            {project.title}
          </h3>
          <div className="flex items-center text-gray-400 text-xs md:text-sm ml-2 flex-shrink-0">
            <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            {project.year}
          </div>
        </div>
        
        {/* Mobile rating */}
        <div className="flex items-center sm:hidden mb-2">
          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
          <span className="text-gray-300 text-xs font-medium">{project.rating}</span>
        </div>
        
        <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed group-hover:text-gray-200 transition-colors overflow-hidden text-ellipsis text-sm md:text-base" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 md:gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 bg-gray-700/50 text-gray-300 text-xs md:text-sm font-medium rounded-full border border-gray-600/50 hover:bg-gray-600/50 hover:border-gray-500/50 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 md:px-3 py-1 bg-gray-700/30 text-gray-400 text-xs md:text-sm font-medium rounded-full border border-gray-600/30">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default Portfolio;