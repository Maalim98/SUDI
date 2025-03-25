import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatuma Hassan",
      role: "Community Leader, Balambala",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "Before SUDI's intervention, our children walked 5 kilometers daily to fetch water. Now, thanks to the water conservation project, we have clean water right in our village. This has transformed our community's health and future.",
      impact: "500+ families now have sustainable access to clean water"
    },
    {
      id: 2,
      name: "Ibrahim Ahmed",
      role: "Local Teacher, Dadaab",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The educational support from SUDI has been life-changing. Our school now has proper learning materials, and our teachers are better equipped. The impact on our students' performance has been remarkable.",
      impact: "2,000+ students receiving quality education"
    },
    {
      id: 3,
      name: "Amina Omar",
      role: "Farmer, Fafi",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      quote: "I was struggling to feed my family before SUDI's agricultural training. Now, with sustainable farming techniques, I'm not only feeding my family but also selling surplus produce at the market.",
      impact: "300+ farmers trained in sustainable agriculture"
    },
    {
      id: 4,
      name: "Mohammed Ali",
      role: "Youth Group Leader, Ijara",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote: "The youth empowerment program gave us hope and direction. Many young people in our community now have skills and small businesses. We're building a better future for ourselves.",
      impact: "150+ youth trained in entrepreneurship"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real <span className="text-[#45702D]">Impact</span>, Real <span className="text-[#F9B872]">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See how your support is transforming lives in Garissa County
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-full px-4"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/2 bg-[#45702D] p-8 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#45702D] to-[#2C4A1E] opacity-90"></div>
                      <div className="relative z-10 text-center">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-lg"
                          />
                        </div>
                        <div className="mt-6">
                          <p className="text-white text-base font-semibold">{testimonial.name}</p>
                          <p className="text-white/80 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-gray-700 text-lg md:text-xl italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="bg-[#45702D]/5 rounded-lg p-4">
                        <p className="text-[#45702D] font-medium text-base">
                          Impact: {testimonial.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-[#45702D] w-8' 
                    : 'bg-gray-300 w-2.5 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white text-[#45702D] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-6"
            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white text-[#45702D] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-6"
            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 