import missionImage from '../assets/images/supportmission.jpg';

const Mission = () => {
  return (
    <div className="pt-48 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#45702D]">Mission</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering communities through sustainable development initiatives that create lasting impact
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={missionImage}
              alt="SUDI Mission" 
              className="w-full h-[500px] object-cover object-center"
            />
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#45702D]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission Statement</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                To empower communities through sustainable development initiatives that promote self-reliance, 
                environmental conservation, and social equity.
              </p>
            </div>
          </div>

          {/* Approach Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#45702D]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">What We Do</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Implement sustainable development projects',
                  'Provide education and training programs',
                  'Support community-led initiatives',
                  'Facilitate resource management',
                  'Promote environmental conservation',
                  'Advocate for social equity'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#45702D]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">How We Work</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Community-driven approach',
                  'Sustainable practices',
                  'Collaborative partnerships',
                  'Innovative solutions',
                  'Evidence-based programs',
                  'Transparent operations'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#45702D] text-white 
                rounded-full font-medium hover:bg-[#385c25] transition-colors duration-200"
            >
              Join Our Mission
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission 