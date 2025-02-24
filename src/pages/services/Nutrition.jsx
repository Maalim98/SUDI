import { useState } from 'react'

const Nutrition = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    supportType: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      supportType: '',
      message: ''
    })
    alert('Thank you for your interest! We will contact you soon.')
  }

  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Health, Nutrition and HIV/AIDS Services
        </h1>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/src/assets/images/nutrition.jpg" 
            alt="Health and Nutrition Services" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Medical outreaches, nutrition intervention, rehabilitation and Construction of dispensaries, first aid and emergency response during disasters.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Healthcare Initiatives
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Our comprehensive health programs focus on delivering accessible healthcare services to remote communities in Garissa County. We emphasize preventive care, maternal health, and HIV/AIDS support through mobile clinics and community health workers.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Current Programs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Mobile Health Clinics</h4>
                <p className="text-gray-700">Regular medical outreach services to remote villages, providing basic healthcare and maternal services.</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Nutrition Support</h4>
                <p className="text-gray-700">Therapeutic feeding programs for malnourished children and nutrition education for mothers.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Key Services
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-medium">Medical Outreach:</span> Monthly health camps providing vaccinations, health screenings, and basic treatments
            </li>
            <li>
              <span className="font-medium">Maternal Care:</span> Prenatal care, safe delivery services, and postnatal support through trained community midwives
            </li>
            <li>
              <span className="font-medium">HIV/AIDS Programs:</span> Comprehensive testing, counseling, and antiretroviral therapy support services
            </li>
            <li>
              <span className="font-medium">Emergency Response:</span> Rapid deployment medical teams for disaster response and epidemic outbreaks
            </li>
          </ul>

          <div className="bg-rose-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-rose-800 mb-4">
              Impact Stories
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our mobile clinic program reached over 200 individuals in 2024, providing essential healthcare services to 8 remote villages. Maternal health checkups increased by 40% in these areas.
              </p>
              <p className="text-gray-700">
                Through our nutrition program, we've successfully treated 45 cases of severe malnutrition in children under 5, with a recovery rate of 95%. Our community education initiatives have led to improved feeding practices in 85% of participating households.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Upcoming Initiatives
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            We're expanding our services to include telemedicine facilities, mental health support, and specialized care for chronic conditions. New dispensaries are planned in three sub-counties to improve healthcare accessibility.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Support Our Work
            </h3>
            <p className="text-gray-700">
              Join us in improving healthcare access in Garissa County. Whether through volunteering medical expertise, supporting our mobile clinics, or contributing to our nutrition programs, your involvement makes a difference in saving lives.
            </p>
          </div>

          {/* Support Form Section */}
          <div className="bg-rose-50/50 p-8 rounded-xl shadow-sm mt-16">
            <h3 className="text-2xl font-semibold text-rose-800 mb-8 text-center">
              Support Our Health & Nutrition Programs
            </h3>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-rose-500 bg-white/80"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-rose-500 bg-white/80"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-rose-500 bg-white/80"
                  placeholder="+254 722 XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="supportType" className="block text-sm font-medium text-gray-700 mb-2">
                  How would you like to help?*
                </label>
                <select
                  id="supportType"
                  name="supportType"
                  value={formData.supportType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-rose-500 bg-white/80"
                >
                  <option value="">Select an option</option>
                  <option value="volunteer">Medical Volunteer</option>
                  <option value="donate">Make a Donation</option>
                  <option value="partner">Partnership Opportunity</option>
                  <option value="other">Other Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2.5 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-rose-500 bg-white/80"
                  placeholder="Tell us about your interest in supporting our health programs..."
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center font-medium shadow-sm hover:shadow"
                >
                  Send Message
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
  )
}

export default Nutrition 