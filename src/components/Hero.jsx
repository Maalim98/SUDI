import { Link } from 'react-router-dom'
import bgHero from '../assets/images/bg-hero.jpg'

const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <section 
        className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-video mt-[100px]"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center -mt-[100px]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="block text-white drop-shadow-md">EMPOWERING</span>
                <span className="block text-white drop-shadow-md">COMMUNITIES FOR A</span>
                <span className="block text-white drop-shadow-md">BETTER TOMORROW</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white mb-12 max-w-2xl drop-shadow-md">
                Supporting sustainable development and peace in Garissa County through community-driven initiatives
              </p>

              <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                <Link
                  to="/programs"
                  className="inline-block bg-[#C17F59] text-white px-8 py-3 rounded-md
                    text-lg font-semibold hover:bg-[#A66B48] transition duration-300 shadow-lg"
                >
                  Our Programs
                </Link>
                <Link
                  to="/contact"
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 
                    rounded-md text-lg font-semibold hover:bg-white/30 transition duration-300 shadow-lg"
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
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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