import { Link } from 'react-router-dom'
import susDevImg from '/src/assets/images/sus-dev.jpg'

const Hero = () => {
  return (
    <>
      {/* Modern Hero section */}
      <section className="relative w-full h-[calc(100vh-72px)] mt-[72px]">
        {/* Background Image with modern gradient */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${susDevImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content container with responsive padding */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Responsive heading */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                  EMPOWERING
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#F9B872]">
                  COMMUNITIES
                </h1>
              </div>

              {/* Responsive paragraphs */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 mb-4 sm:mb-6 max-w-xl leading-relaxed">
                At SUDI, we are dedicated to transforming lives through sustainable development initiatives. 
                Our commitment to community empowerment drives positive change and creates lasting impact 
                across Garissa County.
              </p>
              
              <p className="mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 md:mb-12 text-white/90 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
                Building a better tomorrow through sustainable development and peace initiatives in Garissa County
              </p>

              {/* Modern hero buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  to="/about-us" 
                  className="group inline-flex items-center justify-center bg-[#D4813B] text-white 
                    py-3 sm:py-3.5 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold
                    transition-all duration-300 transform hover:translate-y-[-2px]
                    hover:bg-[#C17F59] hover:shadow-lg w-full sm:w-auto min-w-[160px]
                    border border-transparent hover:border-white/10"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link 
                  to="/contact" 
                  className="group inline-flex items-center justify-center bg-transparent text-white 
                    py-3 sm:py-3.5 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold
                    transition-all duration-300 transform hover:translate-y-[-2px]
                    border-2 border-white/30 hover:border-white/50 hover:bg-white/10
                    hover:shadow-lg w-full sm:w-auto min-w-[160px]"
                >
                  Get Involved
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 opacity-0 transform transition-all 
                      duration-300 group-hover:opacity-100 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive About section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#45702D]">
                About <span className="text-[#2D572C]">SUDI</span>
              </h2>
              <div className="w-24 h-1 bg-[#F9B872] mx-auto mt-4"></div>
            </div>
            
            <div className="space-y-8 text-center">
              <p className="text-gray-700 text-xl leading-relaxed">
                SUDI is a local non-governmental organization dedicated to transforming lives 
                through sustainable development initiatives in Garissa County.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We implement impactful programs in education, healthcare, environmental conservation, 
                and economic empowerment, working closely with local communities and international partners 
                to create lasting positive change.
              </p>
              
              <div className="mt-12">
                <Link 
                  to="/about-us" 
                  className="group inline-flex items-center justify-center bg-[#45702D] text-white 
                    py-3 px-8 rounded-md text-base font-medium 
                    hover:bg-[#385c25] transition-all duration-300"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero 