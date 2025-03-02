import { Link } from 'react-router-dom'
import susDevImg from '/src/assets/images/sus-dev.jpg'

const Hero = () => {
  return (
    <>
      {/* Hero section with natural full-width image and fixed height */}
      <section className="relative w-full h-[calc(100vh-72px)] mt-[72px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              backgroundImage: `url(${susDevImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          {/* Simple dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content - centered with proper spacing */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-center">
              {/* Responsive heading with better spacing */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
                <span className="block text-white">EMPOWERING</span>
                <span className="block text-[#F9B872] mt-2">COMMUNITIES</span>
              </h1>
              
              {/* Responsive description with better line height */}
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                Building a better tomorrow through sustainable development and peace initiatives in Garissa County
              </p>

              {/* Responsive buttons - full width on mobile, side by side on larger screens */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6">
                <Link
                  to="/about-us"
                  className="bg-[#D4813B] text-white px-6 sm:px-8 py-3 sm:py-4
                    rounded-md text-lg font-semibold hover:bg-[#B36B2D] 
                    transition duration-300 text-center w-full sm:w-auto sm:min-w-[180px]"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 border border-white
                    text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-lg font-semibold 
                    hover:bg-white/20 transition duration-300 text-center
                    w-full sm:w-auto sm:min-w-[180px]"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section - with responsive improvements */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-center">
              About <span className="text-[#C17F59]">SUDI</span>
            </h2>
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
                SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
                while alleviating poverty among the rural poor, through the use of local resources.
              </p>
              <div className="text-center pt-8 sm:pt-10">
                <Link 
                  to="/about-us" 
                  className="inline-block bg-[#45702D] text-white px-8 py-3 sm:py-4
                    rounded-md text-lg font-semibold hover:bg-[#385c25] 
                    transition duration-300"
                >
                  About Us
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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