const Agriculture = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Agriculture and Food Security
        </h1>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/src/assets/images/foodsecurity.jpg" 
            alt="Agriculture and Food Security" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            To access food security is to have safe and nutritious food on a regular basis – physically, economically, culturally and socially.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Our Agricultural Programs
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            SUDI implements comprehensive agricultural programs designed to enhance food security and improve agricultural productivity in Garissa County. Our focus is on developing sustainable, climate-smart agricultural practices that are specifically adapted to the arid and semi-arid conditions of our region.
          </p>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Current Initiatives
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-700 mb-2">Drought-Resistant Farming</h4>
                <p className="text-gray-700">Introduction of drought-resistant crop varieties and modern irrigation techniques suitable for arid regions.</p>
              </div>
              <div>
                <h4 className="font-medium text-green-700 mb-2">Livestock Development</h4>
                <p className="text-gray-700">Supporting pastoral communities with veterinary services and sustainable grazing practices.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Key Focus Areas
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-medium">Sustainable Farming:</span> Training farmers on climate-smart agricultural practices, including water conservation and soil management
            </li>
            <li>
              <span className="font-medium">Food Security:</span> Implementing programs to ensure year-round access to nutritious food through improved storage and preservation methods
            </li>
            <li>
              <span className="font-medium">Irrigation Systems:</span> Developing efficient water management systems using solar-powered pumps and drip irrigation
            </li>
            <li>
              <span className="font-medium">Market Access:</span> Connecting farmers to markets and improving value chains through cooperative formations
            </li>
          </ul>

          <div className="bg-amber-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">
              Success Stories
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                In 2024, our irrigation project in the Balambala sub-county helped 200 farming households increase their crop yield by 40% through the introduction of drought-resistant crops and modern irrigation systems.
              </p>
              <p className="text-gray-700">
                Our livestock health program has supported over 1,000 pastoral families, reducing livestock mortality rates by 30% through regular veterinary services and training in animal health management.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Future Plans
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            We are expanding our programs to include greenhouse farming, aquaculture, and advanced agricultural technology training. These initiatives will help create more resilient and sustainable food systems in our community.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get Involved
            </h3>
            <p className="text-gray-700">
              Whether you're a farmer looking to improve your practices, a potential partner, or someone interested in supporting our agricultural initiatives, we welcome your participation in creating a food-secure future for Garissa County.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agriculture 