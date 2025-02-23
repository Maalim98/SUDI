import { useState } from 'react'

const AboutUs = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero image section */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/src/assets/images/community.jpg" 
            alt="SUDI volunteers delivering food aid" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
            SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990. 
            Prior to 2013, SUDI operated as a Community Based Organization since 2011.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
            while alleviating poverty among the rural poor, through the use of local resources.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            The organization works closely with local authorities including the National and County government ministries, 
            local and international organizations, purposed to contribute to the country's/counties' short and long-term 
            development priorities through participatory and sustainable approaches.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            SUDI addresses the challenges afflicting the communities particularly the pastoralists who are suffering 
            from the adverse effect of climate change, and to safeguard the rights and wellbeing of the destitute 
            children and women.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            SUDI is committed to reducing the vulnerability of the communities with the aim of maximizing their 
            potentiality of contributing to their own development.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Based on the wide-range social, economic and political limitations of country, areas our focuses include 
            peace building, Agriculture and food security, Environmental conservation rehabilitation and restoration, 
            education, health and nutrition projects, water sanitation and hygiene among other interventions that 
            have a positive impact on the lives of communities.
          </p>

          {/* Contact Button */}
          <div className="text-center pt-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center px-8 py-3 bg-[#45702D] hover:bg-[#385D23] 
                text-white rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              Want to speak to us?
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Simplified Contact Form */}
          {showForm && (
            <div className="mt-12 bg-white rounded-xl shadow-2xl p-8 transition-all duration-300 max-w-xl mx-auto">
              <h3 className="text-2xl font-semibold text-center mb-8">Get in Touch</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                      focus:ring-[#45702D] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                      focus:ring-[#45702D] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                      focus:ring-[#45702D] focus:border-transparent transition-all duration-300"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-[#45702D] hover:bg-[#385D23] 
                      text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 