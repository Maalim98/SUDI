import { Link } from 'react-router-dom'
import susDevImg from '/src/assets/images/sus-dev.jpg'

const Hero = () => {
  return (
    <>
      {/* Hero section with Tailwind classes */}
      <section className="relative w-full h-[calc(100vh-72px)] mt-[72px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url(${susDevImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Simple overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center">
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <div className="text-white">EMPOWERING</div>
                <div className="text-[#F9B872]">COMMUNITIES</div>
              </h1>
              
              {/* Description */}
              <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                Building a better tomorrow through sustainable development and peace initiatives in Garissa County
              </p>

              {/* Buttons */}
              <div className="flex flex-col space-y-4 max-w-xs mx-auto">
                <Link 
                  to="/about-us" 
                  className="bg-[#D4813B] text-white py-3 rounded text-lg font-medium hover:bg-[#C17F59] transition duration-300 text-center"
                >
                  Learn More
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border border-white text-white py-3 rounded text-lg font-medium hover:bg-white/10 transition duration-300 text-center"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section with Tailwind classes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About <span className="text-[#C17F59]">SUDI</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
                SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
              </p>
              <p className="text-gray-700 leading-relaxed">
                SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
                while alleviating poverty among the rural poor, through the use of local resources.
              </p>
              <div className="text-center pt-8">
                <Link 
                  to="/about-us" 
                  className="inline-block bg-[#45702D] text-white px-8 py-3 rounded text-lg font-medium hover:bg-[#385c25] transition duration-300"
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