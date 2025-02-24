const Environmental = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Environmental Protection and Conservation
        </h1>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/src/assets/images/environment.jpg" 
            alt="Environmental Conservation" 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            SUDI through its different project will integrate programmes that seek to restore the environment to its natural state through mitigating degradation forces and population pressure exerted.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Our Environmental Initiatives
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Through our comprehensive environmental programs, we focus on tree planting initiatives, soil conservation, and sustainable land management practices. Our projects aim to combat desertification and promote climate-resilient agricultural techniques in Garissa County.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            We work closely with local communities to implement sustainable resource management strategies, including the establishment of community tree nurseries, promotion of agroforestry, and education on environmental conservation practices.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            Key Focus Areas
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-medium">Reforestation Programs:</span> Implementing large-scale tree planting initiatives to combat deforestation and soil erosion.
            </li>
            <li>
              <span className="font-medium">Sustainable Agriculture:</span> Promoting environmentally friendly farming practices that conserve soil and water resources.
            </li>
            <li>
              <span className="font-medium">Community Education:</span> Raising awareness about environmental conservation and climate change adaptation strategies.
            </li>
            <li>
              <span className="font-medium">Natural Resource Management:</span> Supporting communities in sustainable management of natural resources and biodiversity conservation.
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Our environmental protection initiatives are designed to create lasting impact through community participation and sustainable practices, ensuring the preservation of natural resources for future generations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Environmental 