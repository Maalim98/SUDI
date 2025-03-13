import visionImage from '../assets/images/vision.jpg';

const Vision = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Vision
        </h1>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={visionImage} 
            alt="SUDI Vision" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 p-8 rounded-xl shadow-sm mb-8">
            <p className="text-2xl text-green-800 font-medium text-center italic">
              "A world where everyone can count on a better future."
            </p>
          </div>

          <div className="space-y-6 text-lg text-gray-700">
            <p>
              At SUDI, we envision a world where every individual has access to the resources, opportunities, and support they need to build a better future for themselves and their communities.
            </p>
            <p>
              Our vision encompasses a society where:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Communities are empowered and self-reliant</li>
              <li>Resources are sustainably managed and equitably distributed</li>
              <li>Every person has access to quality education and healthcare</li>
              <li>Economic opportunities are available to all</li>
              <li>Environmental conservation is prioritized</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision 