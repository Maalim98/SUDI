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

        {/* Content container with left alignment */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Modern heading with dynamic spacing */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                  EMPOWERING
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F9B872]">
                  COMMUNITIES
                </h1>
              </div>
              
              {/* Description with improved typography */}
              <p className="mt-6 md:mt-8 mb-8 md:mb-12 text-white/90 text-lg md:text-xl max-w-xl leading-relaxed">
                Building a better tomorrow through sustainable development and peace initiatives in Garissa County
              </p>

              {/* Modern button design */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center justify-center bg-[#D4813B] text-white 
                    py-4 px-8 rounded-lg text-base font-medium hover:bg-[#C17F59] 
                    transition-all duration-300 transform hover:translate-y-[-2px]
                    shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[160px]"
                >
                  Learn More
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm
                    border border-white/30 text-white py-4 px-8 rounded-lg text-base 
                    font-medium hover:bg-white/20 transition-all duration-300 
                    transform hover:translate-y-[-2px] w-full sm:w-auto min-w-[160px]"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern About section with more content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-[#C17F59]">SUDI</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
                SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
                while alleviating poverty among the rural poor, through the use of local resources.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Our organization focuses on sustainable development through community-driven initiatives. We believe in 
                empowering local communities to be the drivers of their own development, ensuring long-term success and 
                sustainability of our projects.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Through partnerships with local stakeholders and international organizations, SUDI implements programs 
                in various sectors including education, healthcare, environmental conservation, and economic empowerment. 
                Our integrated approach ensures that development challenges are addressed holistically.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                We are committed to transparency, accountability, and inclusive development. Our team works closely with 
                community leaders, government agencies, and other stakeholders to ensure that our initiatives align with 
                local needs and priorities while promoting sustainable practices.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                SUDI's success is measured not just by the number of projects completed, but by the lasting positive 
                impact on communities. We focus on building capacity, promoting self-reliance, and creating opportunities 
                for sustainable livelihoods in Garissa County.
              </p>

              <div className="text-center pt-10">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center justify-center bg-[#45702D] text-white 
                    px-8 py-4 rounded-lg text-base font-medium hover:bg-[#385c25] 
                    transition-all duration-300 transform hover:translate-y-[-2px]
                    shadow-lg hover:shadow-xl group"
                >
                  About Us
                  <svg 
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
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