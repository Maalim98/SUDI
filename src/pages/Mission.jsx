const Mission = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Mission
        </h1>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/src/assets/images/supportmission.jpg"
            alt="SUDI Mission" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-green-50 p-8 rounded-xl shadow-sm">
            <p className="text-xl text-green-800 font-medium text-center">
              To empower communities through sustainable development initiatives that promote self-reliance, environmental conservation, and social equity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Implement sustainable development projects</li>
                <li>• Provide education and training</li>
                <li>• Support community initiatives</li>
                <li>• Facilitate resource management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How We Work</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Community-driven approach</li>
                <li>• Sustainable practices</li>
                <li>• Collaborative partnerships</li>
                <li>• Innovative solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission 