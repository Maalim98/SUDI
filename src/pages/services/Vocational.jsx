const Vocational = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Technical and Vocational Education and Training
        </h1>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/src/assets/images/vocational.jpg" 
            alt="Vocational Training" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            SUDI shall connect with the Private and Public Institutions and Employers in linking the trainees in and from the Technical and Vocational Education.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Skills Development Programs
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Our vocational training center offers industry-relevant courses designed to meet local market demands. We combine practical skills training with entrepreneurship education to create self-reliant professionals in Garissa County.
          </p>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Featured Training Programs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-indigo-700 mb-2">Technical Training</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Automotive Mechanics</li>
                  <li>• Electrical Installation</li>
                  <li>• Building & Construction</li>
                  <li>• Welding & Metalwork</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-indigo-700 mb-2">Digital Skills</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Computer Applications</li>
                  <li>• Web Development</li>
                  <li>• Digital Marketing</li>
                  <li>• Graphic Design</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Program Components
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-medium">Hands-on Training:</span> State-of-the-art workshops and practical training facilities
            </li>
            <li>
              <span className="font-medium">Industry Partnerships:</span> Internship placements with leading companies in Garissa
            </li>
            <li>
              <span className="font-medium">Business Skills:</span> Entrepreneurship training and business startup support
            </li>
            <li>
              <span className="font-medium">Career Guidance:</span> Job placement assistance and career counseling services
            </li>
          </ul>

          <div className="bg-purple-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              Success Stories
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                In 2023, our vocational center trained 150 youth in various technical skills, with an 85% employment rate within six months of graduation. 30% of our graduates have started their own successful businesses.
              </p>
              <p className="text-gray-700">
                Our digital skills program has enabled 200 young people to access online work opportunities, generating an average monthly income of KES 25,000 per graduate.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            2024 Training Calendar
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">April 2025 Intake</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Electrical Installation</li>
                  <li>• Web Development</li>
                  <li>• Automotive Mechanics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">August 2025 Intake</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Building & Construction</li>
                  <li>• Digital Marketing</li>
                  <li>• Welding & Metalwork</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Enroll Today
            </h3>
            <p className="text-gray-700">
              Take the first step towards a rewarding career. Our training programs are accessible to all, with flexible payment plans and scholarship opportunities for deserving candidates. Contact us to learn more about our upcoming intakes and admission requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vocational 