import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Code, Smartphone, Monitor, TrendingUp, Star, ArrowRight } from "lucide-react";

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(1);

  const services = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
      title: "Web Development",
      subtitle: "Build beautiful UX/UI designs using React and Tailwind CSS with high-performance backend development",
      icon: Code,
      gradient: "from-blue-500 to-blue-700",
      glow: "shadow-blue-500/25",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      rating: 4.9
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      title: "Mobile App Development",
      subtitle: "Get your mobile app developed for both Android and iOS platforms with seamless performance and modern UI.",
      icon: Smartphone,
      gradient: "from-purple-500 to-purple-700",
      glow: "shadow-purple-500/25",
      features: ["Cross Platform", "Native Performance", "App Store Ready"],
      rating: 4.8
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=250&fit=crop",
      title: "Desktop Application",
      subtitle: "Custom desktop applications tailored to your business needs for enhanced productivity and efficiency.",
      icon: Monitor,
      gradient: "from-emerald-500 to-emerald-700",
      glow: "shadow-emerald-500/25",
      features: ["Multi-Platform", "Secure", "High Performance"],
      rating: 4.7
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      title: "Digital Marketing",
      subtitle: "Boost your online presence with our expert digital marketing services and data-driven strategies.",
      icon: TrendingUp,
      gradient: "from-indigo-500 to-indigo-700",
      glow: "shadow-indigo-500/25",
      features: ["SEO & SEM", "Social Media", "Analytics"],
      rating: 4.9
    }
  ];

  // Responsive cards calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet: 2 cards
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3); // Small desktop: 3 cards
      } else {
        setCardsToShow(4); // Large desktop: 4 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max slides based on cards to show
  const maxSlides = Math.max(0, services.length - cardsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlides));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, maxSlides]);

  // Calculate transform percentage
  const transformPercentage = (100 / cardsToShow) * currentSlide;

  return (
    <div 
      className=" mx-auto px-4 py-16 bg-gray-900 relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-8 md:mb-12 relative">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Our Services
        </h2>
        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
          We provide comprehensive digital solutions to help your business thrive in the modern world
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full p-2 lg:p-3 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:bg-gray-700 hover:border-blue-500/50"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-4 w-4 lg:h-6 lg:w-6 text-gray-300 hover:text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full p-2 lg:p-3 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:bg-gray-700 hover:border-blue-500/50"
          disabled={currentSlide === maxSlides}
        >
          <ChevronRight className="h-4 w-4 lg:h-6 lg:w-6 text-gray-300 hover:text-white" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden rounded-xl md:rounded-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${transformPercentage}%)` }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`flex-shrink-0 px-2 md:px-4 ${
                    cardsToShow === 1 ? 'w-full' :
                    cardsToShow === 2 ? 'w-1/2' :
                    cardsToShow === 3 ? 'w-1/3' : 'w-1/4'
                  }`}
                >
                  <div className={`group bg-gray-800/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl hover:${service.glow} transition-all duration-500 h-full flex flex-col border border-gray-700 hover:border-gray-600 hover:scale-105`}>
                    {/* Image */}
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                      
                      {/* Service Icon */}
                      <div className={`absolute top-3 md:top-4 right-3 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${service.gradient} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-3 md:top-4 left-3 md:left-4 flex items-center bg-gray-900/80 backdrop-blur-sm rounded-lg px-2 py-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-white text-xs font-medium">{service.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                      {/* Title and Subtitle */}
                      <div className="mb-3 md:mb-4 flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-50 mb-2 md:mb-3 group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed group-hover:text-gray-200 transition-colors line-clamp-2 md:line-clamp-3">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* Features - Hidden on small mobile */}
                      <div className="mb-3 md:mb-4 hidden sm:block">
                        <div className="flex flex-wrap gap-1">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:shadow-lg hover:${service.glow} transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center group text-sm md:text-base`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 w-6 md:w-8 shadow-lg"
                  : "bg-gray-600 w-2 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="flex justify-center mt-8 md:mt-12">
        <div className="text-center px-4">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 text-white border-0 rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm md:text-base">
            Explore All Services
          </button>
          <p className="text-gray-400 text-xs md:text-sm mt-3">
            Ready to start your project? Let's discuss your requirements
          </p>
        </div>
      </div>
    </div>
  );
}