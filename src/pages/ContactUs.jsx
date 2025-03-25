import { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our sustainability initiatives? We're here to help!
            Our team is ready to assist with any inquiries you may have.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {formSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-700">Thank you for your message. We'll get back to you soon!</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#45702D] focus:border-[#45702D] transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#45702D] focus:border-[#45702D] transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#45702D] focus:border-[#45702D] transition-all"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#45702D] focus:border-[#45702D] transition-all"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#45702D] text-white py-4 px-6 rounded-xl hover:bg-[#304D1F] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-8">
                {/* Phone Card */}
                <div className="flex items-start gap-6 group">
                  <div className="bg-[#45702D]/10 p-4 rounded-xl group-hover:bg-[#45702D]/20 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-500 mb-4">Mon-Fri from 8am to 5pm</p>
                    <a href="tel:+254722407034" className="text-lg font-medium text-[#45702D] hover:text-[#304D1F] transition-colors">
                      +254 722 407 034
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-6 group">
                  <div className="bg-[#45702D]/10 p-4 rounded-xl group-hover:bg-[#45702D]/20 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-500 mb-4">We'll respond within 24 hours</p>
                    <a href="mailto:supremeinitiative@yahoo.com" className="text-lg font-medium text-[#45702D] hover:text-[#304D1F] transition-colors break-all">
                      supremeinitiative@yahoo.com
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex items-start gap-6 group">
                  <div className="bg-[#45702D]/10 p-4 rounded-xl group-hover:bg-[#45702D]/20 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-500 mb-4">Our office location</p>
                    <p className="text-lg font-medium text-[#45702D]">
                      P.O. BOX: 70100 – 341 GARISSA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#45702D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Find Us Here
                </h2>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d39.59088354326617!3d-0.45271266871890945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829d298b02c9d8d%3A0xa54c9ee09ca953b5!2sGarissa!5e0!3m2!1sen!2ske!4v1700412546027!5m2!1sen!2ske" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs 