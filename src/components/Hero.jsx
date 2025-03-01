import { Link } from 'react-router-dom'
import bgHero from '/src/assets/images/bg-hero.jpg'

const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full min-h-[80vh] mt-[72px]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="block text-white drop-shadow-md mb-2">EMPOWERING</span>
                <span className="block text-white drop-shadow-md mb-2">COMMUNITIES FOR A</span>
                <span className="block text-[#F9B872] drop-shadow-md">BETTER TOMORROW</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white mb-12 max-w-2xl drop-shadow-md">
                Supporting sustainable development and peace in Garissa County through community-driven initiatives
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about-us"
                  className="inline-block bg-[#C17F59] text-white px-8 py-3 
                    rounded-md text-lg font-semibold hover:bg-[#A66B48] 
                    transition duration-300 shadow-lg"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 
                    rounded-md text-lg font-semibold hover:bg-white/30 
                    transition duration-300 shadow-lg"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              About <span className="text-[#C17F59]">SUDI</span>
            </h2>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
                SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
                while alleviating poverty among the rural poor, through the use of local resources.
              </p>
              <div className="text-center pt-8">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center px-8 py-3 bg-[#C17F59] text-white text-base 
                    font-semibold uppercase tracking-wide hover:bg-[#A66B48] transition-all duration-300 
                    rounded-md shadow-lg"
                >
                  About Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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