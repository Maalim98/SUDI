import { useState } from 'react'

const Governance = () => {
  const [activeTab, setActiveTab] = useState('structure')

  const tabs = [
    { id: 'structure', label: 'Structure & Leadership' },
    { id: 'policies', label: 'Policies & Standards' },
    { id: 'documents', label: 'Key Documents' }
  ]

  const boardMembers = [
    {
      role: "Board of Directors",
      description: "Strategic leadership and organizational oversight",
      members: [
        { 
          name: "Dr. Ahmed Hassan", 
          position: "Chairperson",
          expertise: "International Development",
          years: "15+ years experience"
        },
        { 
          name: "Mrs. Sarah Omar", 
          position: "Vice Chairperson",
          expertise: "Public Health",
          years: "12+ years experience"
        },
        { 
          name: "Mr. Ibrahim Ali", 
          position: "Secretary",
          expertise: "Community Development",
          years: "10+ years experience"
        },
        { 
          name: "Ms. Fatuma Mohamed", 
          position: "Treasurer",
          expertise: "Financial Management",
          years: "8+ years experience"
        }
      ]
    },
    {
      role: "Executive Leadership",
      description: "Day-to-day management and program implementation",
      members: [
        { 
          name: "Mr. Yusuf Abdi", 
          position: "Executive Director",
          expertise: "NGO Management",
          years: "20+ years experience"
        },
        { 
          name: "Dr. Amina Hussein", 
          position: "Programs Director",
          expertise: "Project Management",
          years: "10+ years experience"
        },
        { 
          name: "Mr. Omar Sheikh", 
          position: "Finance Director",
          expertise: "Non-profit Finance",
          years: "15+ years experience"
        },
        { 
          name: "Ms. Halima Adan", 
          position: "Operations Manager",
          expertise: "Operations & HR",
          years: "12+ years experience"
        }
      ]
    }
  ]

  const governancePillars = [
    {
      title: "Transparency",
      description: "Open communication and regular reporting",
      practices: [
        "Quarterly financial reports",
        "Annual performance reviews",
        "Stakeholder engagement",
        "Public disclosure policy"
      ],
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    {
      title: "Accountability",
      description: "Responsible management and effectiveness",
      practices: [
        "Independent audits",
        "Performance metrics",
        "Impact assessment",
        "Feedback mechanisms"
      ],
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    },
    {
      title: "Ethics & Integrity",
      description: "Strong moral principles in all operations",
      practices: [
        "Code of conduct",
        "Conflict resolution",
        "Anti-corruption policy",
        "Whistleblower protection"
      ],
      icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
    }
  ]

  const documents = [
    {
      title: "Annual Report 2023",
      description: "Comprehensive overview of our achievements and impact",
      type: "PDF",
      size: "2.4 MB",
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "Constitution",
      description: "Our foundational document and organizational framework",
      type: "PDF",
      size: "1.8 MB",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Strategic Plan",
      description: "Five-year roadmap for achieving our mission",
      type: "PDF",
      size: "3.2 MB",
      icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
    }
  ]

  return (
    <div className="pt-48 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Organizational Governance
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building trust through transparent leadership and ethical practices
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 space-x-1 bg-gray-100 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${
                    activeTab === tab.id
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  } px-6 py-3 rounded-lg font-medium transition-all duration-200`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Structure & Leadership */}
            <div className={activeTab === 'structure' ? 'block' : 'hidden'}>
              {boardMembers.map((board, index) => (
                <div 
                  key={index}
                  className="mb-12 last:mb-0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-1 bg-green-500 rounded-full"></div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{board.role}</h2>
                      <p className="text-gray-600">{board.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {board.members.map((member, idx) => (
                      <div 
                        key={idx}
                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                      >
                        <h3 className="font-semibold text-gray-800 text-lg mb-2">{member.name}</h3>
                        <p className="text-green-600 font-medium mb-3">{member.position}</p>
                        <p className="text-gray-600 text-sm mb-2">{member.expertise}</p>
                        <p className="text-gray-500 text-sm">{member.years}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Policies & Standards */}
            <div className={activeTab === 'policies' ? 'block' : 'hidden'}>
              <div className="grid md:grid-cols-3 gap-8">
                {governancePillars.map((pillar, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
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
                          d={pillar.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.practices.map((practice, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Documents */}
            <div className={activeTab === 'documents' ? 'block' : 'hidden'}>
              <div className="grid md:grid-cols-3 gap-8">
                {documents.map((doc, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
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
                            d={doc.icon}
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-200">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {doc.description}
                        </p>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-gray-500">{doc.type}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">{doc.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Governance 