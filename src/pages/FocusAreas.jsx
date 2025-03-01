const FocusAreas = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Primary Focus Areas
        </h1>

        {/* Hero Image */}
        {/* <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={focusImage}
            alt="SUDI Focus Areas" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div> */}

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Agriculture & Food Security</h3>
              <p className="text-gray-700">
                Supporting sustainable farming practices and ensuring food security through modern agricultural techniques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Health & Nutrition</h3>
              <p className="text-gray-700">
                Improving access to healthcare services and promoting better nutrition practices in communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Water & Sanitation</h3>
              <p className="text-gray-700">
                Developing sustainable water solutions and improving sanitation facilities in rural areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Youth Development</h3>
              <p className="text-gray-700">
                Empowering youth through education, skills training, and entrepreneurship programs.
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Our Approach</h3>
            <p className="text-gray-700 mb-4">
              We implement our programs through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Community participation and ownership</li>
              <li>Sustainable and environmentally friendly practices</li>
              <li>Partnership with local and international organizations</li>
              <li>Capacity building and knowledge transfer</li>
              <li>Monitoring and evaluation for continuous improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FocusAreas 