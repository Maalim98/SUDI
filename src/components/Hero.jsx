import { Link } from 'react-router-dom'
import bgHero from '/src/assets/images/bg-hero.jpg'

const Hero = () => {
  return (
    <>
      {/* Hero section with container padding */}
      <section className="relative w-full min-h-[90vh] mt-[72px] px-0">
        {/* Background Image with Overlay and rounded corners */}
        <div 
          className="absolute inset-x-4 md:inset-x-8 lg:inset-x-12 inset-y-0 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden my-4 max-w-[100%]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${bgHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-6 py-20 max-w-full">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
                <span className="block text-white drop-shadow-md mb-3">EMPOWERING</span>
                <span className="block text-white drop-shadow-md mb-3">COMMUNITIES FOR A</span>
                <span className="block text-[#F9B872] drop-shadow-md">BETTER TOMORROW</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white mb-12 max-w-full drop-shadow-md leading-relaxed">
                Supporting sustainable development and peace in Garissa County through community-driven initiatives
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
                <Link
                  to="/about-us"
                  className="inline-block bg-[#D4813B] text-white px-8 py-4
                    rounded-md text-lg font-semibold hover:bg-[#B36B2D] 
                    transition duration-300 shadow-lg text-center
                    hover:translate-y-[-2px] w-full sm:w-auto"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-white bg-white/10 backdrop-blur-sm 
                    text-white px-8 py-4 rounded-md text-lg font-semibold 
                    hover:bg-white/30 transition duration-300 shadow-lg text-center
                    hover:translate-y-[-2px] w-full sm:w-auto"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center animate-pulse hidden md:block">
          <p className="text-sm mb-2">Scroll to discover</p>
          <svg 
            className="w-6 h-6 mx-auto animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              About <span className="text-[#C17F59]">SUDI</span>
            </h2>
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed px-2 md:px-0">
                SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
                SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed px-2 md:px-0">
                SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
                while alleviating poverty among the rural poor, through the use of local resources.
              </p>
              <div className="text-center pt-10">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#C17F59] text-white text-base 
                    font-semibold uppercase tracking-wide hover:bg-[#A66B48] transition-all duration-300 
                    rounded-md shadow-lg hover:translate-y-[-2px]"
                >
                  About Us
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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