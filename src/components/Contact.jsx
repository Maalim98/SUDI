const Contact = () => {
  return (
    <section className="relative py-20">
      {/* Background overlay with conference image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(31, 41, 55, 0.97), rgba(31, 41, 55, 0.97)), url("/src/assets/images/conference.jpg")',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          GET CONNECTED WITH US
        </h2>

        <div className="max-w-3xl mx-auto space-y-8 bg-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/10">
          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6 text-[#FF5733]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a 
              href="tel:+254722407034" 
              className="hover:text-[#FF5733] transition-colors text-lg"
            >
              +254 722407034
            </a>
          </div>

          {/* Email with icon */}
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6 text-[#FF5733]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a 
              href="mailto:supremeinitiative@yahoo.com" 
              className="hover:text-[#FF5733] transition-colors text-lg"
            >
              supremeinitiative@yahoo.com
            </a>
          </div>

          {/* Address with icon */}
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6 text-[#FF5733]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-lg">P.O. BOX: 70100 – 341 GARISSA</span>
          </div>

          {/* Contact Button */}
          <div className="pt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3
                bg-[#FF5733] hover:bg-[#E64A2E] text-white
                text-base font-medium transition-all duration-300 rounded-full
                hover:shadow-lg hover:-translate-y-0.5"
            >
              CONTACT US
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
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 