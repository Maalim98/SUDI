import youthImage from '../../assets/images/youth.jpg'

const Youth = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Youth and Volunteer Development
        </h1>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={youthImage}
            alt="Youth Development" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            SUDI will honor and establish pool of volunteers from unskilled to skilled professional from professional background. SUDI undertakes skills, knowledge and capacities assessments evaluating.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Youth Leadership Academy
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Our comprehensive youth development program empowers young people through leadership training, community service, and skill development. We focus on creating confident, capable leaders who can drive positive change in their communities.
          </p>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">
              Core Programs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-orange-700 mb-2">Leadership Development</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Public Speaking</li>
                  <li>• Project Management</li>
                  <li>• Community Organizing</li>
                  <li>• Conflict Resolution</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-orange-700 mb-2">Volunteer Initiatives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Community Service</li>
                  <li>• Environmental Projects</li>
                  <li>• Peer Education</li>
                  <li>• Health Campaigns</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Skills Enhancement
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-medium">Digital Literacy:</span> Computer skills and online collaboration tools
            </li>
            <li>
              <span className="font-medium">Life Skills:</span> Financial literacy, communication, and time management
            </li>
            <li>
              <span className="font-medium">Career Development:</span> CV writing, interview preparation, and job search strategies
            </li>
            <li>
              <span className="font-medium">Entrepreneurship:</span> Business planning and startup mentorship
            </li>
          </ul>

          <div className="bg-amber-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">
              Youth Impact Stories
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our youth leadership program has trained 300 young leaders who have initiated 50 community projects, impacting over 10,000 community members in Garissa County.
              </p>
              <p className="text-gray-700">
                Through our volunteer network, youth have contributed 5,000+ hours to community service, leading environmental conservation efforts and health awareness campaigns.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Upcoming Youth Programs
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Leadership Workshops</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Youth Leadership Summit</li>
                  <li>• Community Project Planning</li>
                  <li>• Peer Mentorship Training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Volunteer Opportunities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Environmental Clean-ups</li>
                  <li>• Community Health Outreach</li>
                  <li>• Education Support Programs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Join Our Youth Network
            </h3>
            <p className="text-gray-700 mb-6">
              Are you passionate about making a difference in your community? Join our youth development program to enhance your leadership skills, gain valuable experience, and contribute to positive change in Garissa County. Open to youth aged 18-35 years.
            </p>

            {/* New Application Process Section */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-medium text-gray-800 mb-4">Application Process</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Requirements</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Age: 18-35 years</li>
                    <li>• Resident of Garissa County</li>
                    <li>• Commitment to community service</li>
                    <li>• Basic literacy and numeracy skills</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">How to Apply</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>1. Fill out application form</li>
                    <li>2. Submit required documents</li>
                    <li>3. Attend orientation session</li>
                    <li>4. Complete skills assessment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h5 className="font-medium text-gray-700">Required Documents</h5>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                  <li>• National ID/Passport copy</li>
                  <li>• Recent passport photo</li>
                  <li>• Academic certificates (if any)</li>
                  <li>• Reference letter</li>
                </ul>
              </div>

              <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                <h5 className="font-medium text-orange-800 mb-2">Next Intake</h5>
                <p className="text-gray-700">
                  Applications for our April 2025 intake are now open. Deadline: March 25, 2025
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#download-form" 
                  className="inline-flex items-center justify-center px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Download Application Form
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a 
                  href="mailto:youth@sudi.or.ke" 
                  className="inline-flex items-center justify-center px-6 py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Email Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youth 