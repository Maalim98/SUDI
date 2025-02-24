import { useState } from 'react'

const Water = () => {
  // Form state
  const [formData, setFormData] = useState({
    organization: '',
    type: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  })

  // Error state
  const [errors, setErrors] = useState({})

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required'
    }
    
    if (!formData.type) {
      newErrors.type = 'Please select organization type'
    }
    
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.partnershipType) {
      newErrors.partnershipType = 'Please select partnership type'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit
      console.log('Form submitted:', formData)
      // Reset form
      setFormData({
        organization: '',
        type: '',
        contactPerson: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: ''
      })
      alert('Thank you for your interest! We will contact you soon.')
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Water, Sanitation and Hygiene (WASH)
        </h1>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/src/assets/images/sanitation.jpg" 
            alt="Water and Sanitation" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Through provision of improved water, sanitation and hygiene (WASH) facilities and services, and increased knowledge and capacities SUDI projects will reduce the vulnerability of those households.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            WASH Infrastructure Development
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Our comprehensive WASH program focuses on sustainable water solutions and improved sanitation facilities across Garissa County. We work closely with communities to ensure long-term maintenance and management of these vital resources.
          </p>

          <div className="bg-cyan-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-800 mb-4">
              Current Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-cyan-700 mb-2">Water Access</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Borehole Drilling</li>
                  <li>• Water Kiosk Construction</li>
                  <li>• Pipeline Extensions</li>
                  <li>• Solar-Powered Systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-cyan-700 mb-2">Sanitation Facilities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Community Toilets</li>
                  <li>• School WASH Facilities</li>
                  <li>• Waste Management</li>
                  <li>• Drainage Systems</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Community Engagement
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-medium">Water Committees:</span> Training local committees in facility management and maintenance
            </li>
            <li>
              <span className="font-medium">Hygiene Education:</span> School and community-based hygiene promotion programs
            </li>
            <li>
              <span className="font-medium">Technical Training:</span> Local technicians trained in repairs and maintenance
            </li>
            <li>
              <span className="font-medium">Environmental Care:</span> Water source protection and environmental conservation
            </li>
          </ul>

          <div className="bg-teal-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">
              Project Impact
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                In 2023, we completed 15 water projects serving over 25,000 people. Water-borne diseases reduced by 60% in communities with our WASH facilities.
              </p>
              <p className="text-gray-700">
                Our school WASH program has benefited 20 schools, improving attendance rates by 35%, particularly among female students. 100 community members trained in facility maintenance.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Upcoming Projects
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Phase 1 (April 2025)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 5 New Boreholes</li>
                  <li>• 10 School WASH Facilities</li>
                  <li>• 3 Community Water Kiosks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Phase 2 (August 2025)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pipeline Network Extension</li>
                  <li>• Waste Management System</li>
                  <li>• Solar Water Pumps Installation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Partner With Us
            </h3>
            <p className="text-gray-700 mb-6">
              Support our WASH initiatives through community participation, technical expertise, or resource contribution. Together, we can ensure sustainable access to clean water and improved sanitation for all communities in Garissa County.
            </p>

            {/* Partnership Form - Redesigned */}
            <div className="border-t border-green-100 pt-6">
              <h4 className="font-medium text-green-800 mb-6 text-xl">Partnership Application Form</h4>
              <form onSubmit={handleSubmit} className="space-y-6 bg-green-50/50 p-8 rounded-xl border border-green-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-green-800 mb-2">
                      Organization Name*
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border-2 focus:ring-0 focus:border-green-600 transition-colors
                        ${errors.organization ? 'border-red-400' : 'border-green-200'}`}
                      placeholder="Enter organization name"
                    />
                    {errors.organization && (
                      <p className="mt-1 text-sm text-red-500">{errors.organization}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-green-800 mb-2">
                      Organization Type*
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border-2 focus:ring-0 focus:border-green-600 transition-colors
                        ${errors.type ? 'border-red-400' : 'border-green-200'}`}
                    >
                      <option value="">Select Type</option>
                      <option value="ngo">NGO</option>
                      <option value="private">Private Company</option>
                      <option value="government">Government Agency</option>
                      <option value="community">Community Organization</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.type && (
                      <p className="mt-1 text-sm text-red-500">{errors.type}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-green-800 mb-2">
                      Contact Person*
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border-2 focus:ring-0 focus:border-green-600 transition-colors
                        ${errors.contactPerson ? 'border-red-400' : 'border-green-200'}`}
                      placeholder="Enter contact person name"
                    />
                    {errors.contactPerson && (
                      <p className="mt-1 text-sm text-red-500">{errors.contactPerson}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border-2 focus:ring-0 focus:border-green-600 transition-colors
                        ${errors.email ? 'border-red-400' : 'border-green-200'}`}
                      placeholder="Enter email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-green-800 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border-2 focus:ring-0 focus:border-green-600 transition-colors
                      ${errors.phone ? 'border-red-400' : 'border-green-200'}`}
                    placeholder="+254 XXX XXX XXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-green-800 mb-2">
                    Type of Partnership Interest*
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border-2 focus:ring-0 focus:border-green-600 transition-colors
                      ${errors.partnershipType ? 'border-red-400' : 'border-green-200'}`}
                  >
                    <option value="">Select Partnership Type</option>
                    <option value="technical">Technical Support</option>
                    <option value="funding">Financial Support</option>
                    <option value="implementation">Project Implementation</option>
                    <option value="community">Community Mobilization</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.partnershipType && (
                    <p className="mt-1 text-sm text-red-500">{errors.partnershipType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-2">
                    Partnership Proposal/Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border-2 focus:ring-0 focus:border-green-600 transition-colors
                      ${errors.message ? 'border-red-400' : 'border-green-200'}`}
                    placeholder="Describe your partnership proposal..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setFormData({
                      organization: '',
                      type: '',
                      contactPerson: '',
                      email: '',
                      phone: '',
                      partnershipType: '',
                      message: ''
                    })}
                    className="px-6 py-2.5 border-2 border-green-600 text-green-700 rounded-lg hover:bg-green-50 transition-colors font-medium"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center font-medium"
                  >
                    Submit Application
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Water 