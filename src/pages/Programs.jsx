import { Link } from 'react-router-dom'

const Programs = () => {
  const programs = [
    {
      title: "Agriculture & Food Security",
      description: "Supporting sustainable farming practices and ensuring food security through modern agricultural techniques and training.",
      features: [
        "Drought-resistant crop varieties",
        "Modern irrigation systems",
        "Farmer training programs",
        "Post-harvest management",
        "Market linkage support"
      ],
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      path: "/services/agriculture"
    },
    {
      title: "Health & Nutrition",
      description: "Improving community health through comprehensive healthcare services and nutrition programs.",
      features: [
        "Mobile health clinics",
        "Maternal healthcare",
        "Child nutrition programs",
        "Health education",
        "Disease prevention"
      ],
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      path: "/services/nutrition"
    },
    {
      title: "Water & Sanitation",
      description: "Providing access to clean water and improving sanitation facilities for better community health.",
      features: [
        "Borehole drilling",
        "Water treatment systems",
        "Sanitation facilities",
        "Hygiene education",
        "Community maintenance training"
      ],
      icon: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
      path: "/services/water"
    },
    {
      title: "Youth Development",
      description: "Empowering young people through education, skills training, and leadership development.",
      features: [
        "Leadership training",
        "Digital skills",
        "Entrepreneurship",
        "Mentorship programs",
        "Community service"
      ],
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      path: "/services/youth"
    },
    {
      title: "Environmental Conservation",
      description: "Protecting our environment through sustainable practices and community engagement.",
      features: [
        "Tree planting",
        "Waste management",
        "Climate change education",
        "Conservation projects",
        "Environmental awareness"
      ],
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      path: "/services/environmental"
    },
    {
      title: "Vocational Training",
      description: "Building practical skills for sustainable livelihoods and economic empowerment.",
      features: [
        "Technical skills training",
        "Business development",
        "Career guidance",
        "Job placement",
        "Apprenticeship programs"
      ],
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      path: "/services/vocational"
    }
  ]

  return (
    <div className="pt-48 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through our comprehensive programs, we work to create sustainable solutions 
              that address the most pressing challenges facing our communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                {/* Program Header */}
                <div className="p-6 bg-green-50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={program.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {program.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {program.description}
                  </p>
                </div>

                {/* Program Features */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Program Footer */}
                <div className="px-6 pb-6">
                  <Link 
                    to={program.path}
                    className="block w-full py-3 px-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200 font-medium text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-green-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get Involved
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join us in making a difference. Whether you're interested in volunteering, 
              partnering, or supporting our programs, we welcome your participation.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs 