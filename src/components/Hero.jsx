import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="w-full">
      {/* Hero section with background image */}
      <div className="relative h-screen w-full">
        {/* Background image with warmer overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.7)), url("/src/assets/images/bg-hero.jpg")',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Content - improved typography and spacing */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.2] tracking-normal">
            EMPOWERING<br />
            COMMUNITIES FOR A<br />
            <span className="text-[#F9B872]">BETTER TOMORROW</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 font-normal mb-12 max-w-2xl leading-relaxed">
            Supporting sustainable development and peace in Garissa County through community-driven initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href="#programs" 
              className="bg-[#C17F59] text-white px-8 py-3 min-w-[200px]
                text-base font-semibold uppercase tracking-wide transition-all duration-300
                hover:bg-[#A66B48] transform hover:-translate-y-1"
            >
              Our Programs
            </a>
            <a 
              href="#contact" 
              className="border-2 border-[#C17F59] text-[#C17F59] px-8 py-3 min-w-[200px]
                text-base font-semibold uppercase tracking-wide transition-all duration-300
                hover:bg-[#C17F59] hover:text-white transform hover:-translate-y-1"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>

      {/* About section with new neutral colors */}
      <div id="about" className="bg-[#2F343B] w-full">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              About <span className="text-[#E8B34B]">SUDI</span>
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-10 space-y-8 shadow-xl">
              <p className="text-base md:text-lg leading-relaxed text-gray-100">
                SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. SUDI was registered 
                as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-100">
                SUDI values the local existing potential and resources from the communities and aims at strengthening peace while 
                alleviating poverty among the rural poor, through the use of local resources.
              </p>
              <div className="text-center pt-6">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center bg-[#E8B34B] hover:bg-[#D4A144] text-white px-8 py-3
                    text-base font-semibold uppercase tracking-wide transition-all duration-300
                    hover:shadow-lg transform hover:-translate-y-1"
                >
                  About Us
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 