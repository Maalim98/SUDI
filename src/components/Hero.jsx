import { Link } from 'react-router-dom'
import susDevImg from '/src/assets/images/sus-dev.jpg'

const Hero = () => {
  return (
    <>
      {/* Hero section with mobile-first approach */}
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
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>

        {/* Content - properly centered and spaced */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-5">
            <div className="mx-auto text-center">
              {/* Mobile-optimized heading */}
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                <span className="block text-white">EMPOWERING</span>
                <span className="block text-[#F9B872] mt-1">COMMUNITIES</span>
              </h1>
              
              {/* Mobile-optimized description */}
              <p className="text-base md:text-lg text-white mb-8 leading-relaxed mx-auto max-w-md md:max-w-xl">
                Building a better tomorrow through sustainable development and peace initiatives in Garissa County
              </p>

              {/* Mobile-optimized buttons */}
              <div className="space-y-3 md:space-y-4 px-4 md:px-0 md:flex md:justify-center md:space-x-4 md:space-y-0">
                <Link
                  to="/about-us"
                  className="block bg-[#D4813B] text-white py-3 md:py-3.5 
                    rounded text-base md:text-lg font-medium hover:bg-[#C17F59] 
                    transition duration-300 text-center w-full md:w-auto md:px-8"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="block bg-white/10 border border-white/30
                    text-white py-3 md:py-3.5 rounded text-base md:text-lg font-medium 
                    hover:bg-white/20 transition duration-300 text-center
                    w-full md:w-auto md:px-8"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section - with proper mobile-first approach */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
              About <span className="text-[#C17F59]">SUDI</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
                SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
                while alleviating poverty among the rural poor, through the use of local resources.
              </p>
              <div className="text-center pt-6 md:pt-8">
                <Link 
                  to="/about-us" 
                  className="inline-block bg-[#45702D] text-white px-6 md:px-8 py-2.5 md:py-3
                    rounded text-base md:text-lg font-medium hover:bg-[#385c25] 
                    transition duration-300"
                >
                  About Us
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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