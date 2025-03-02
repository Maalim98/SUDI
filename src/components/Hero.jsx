import { Link } from 'react-router-dom'
import susDevImg from '/src/assets/images/sus-dev.jpg'

const Hero = () => {
  return (
    <>
      {/* Simple, clean hero section */}
      <section className="relative w-full h-[calc(100vh-72px)] mt-[72px]">
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Simple content container */}
        <div className="relative h-full flex items-center">
          <div className="w-full px-6">
            {/* Simple heading */}
            <h1 className="text-4xl font-bold text-white max-w-xl mx-auto text-center">
              <div>EMPOWERING</div>
              <div className="text-[#F9B872]">COMMUNITIES</div>
            </h1>
            
            {/* Simple description */}
            <p className="text-white mt-4 mb-8 max-w-xl mx-auto text-center">
              Building a better tomorrow through sustainable development and peace initiatives in Garissa County
            </p>

            {/* Simple buttons */}
            <div className="max-w-xs mx-auto space-y-4">
              <Link
                to="/about-us"
                className="block bg-[#D4813B] text-white py-3
                  rounded text-center font-medium w-full"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="block bg-transparent border border-white
                  text-white py-3 rounded text-center font-medium w-full"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple About section */}
      <section className="py-12 bg-white">
        <div className="px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            About <span className="text-[#C17F59]">SUDI</span>
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
              SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
            </p>
            <p className="text-gray-700">
              SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
              while alleviating poverty among the rural poor, through the use of local resources.
            </p>
            <div className="text-center pt-8">
              <Link 
                to="/about-us" 
                className="inline-block bg-[#45702D] text-white px-8 py-3
                  rounded font-medium"
              >
                About Us
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero 