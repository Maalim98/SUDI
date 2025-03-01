const Objectives = () => {
  const objectives = [
    {
      text: "Promote disaster risk reduction measures, prevention and disaster preparedness plans, deliver timely relief to disaster affected communities and help them for their rehabilitation and early recovery. Disasters include both man made and natural calamities including road related accidents.",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Warning icon
    },
    {
      text: "Promote sustainable peace in the horn of Africa communities through a collaborative institutional framework between governments, non-governmental organizations and communities in the region and to create environment conducive for proper conflict management, transformation and post conflict reconciliation and to establish early warning mechanisms on social conflicts and to effectively counter violent extremism.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" // Globe icon
    },
    {
      text: "Promotion of education with special focuses on girls and disadvantaged children and provides opportunities for learning in order to advance educational equity.",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" // Education icon
    },
    {
      text: "Provision of accessible, clean and safe drinking water and quality sanitation facilities.",
      icon: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" // Water icon
    },
    {
      text: "To eliminate discrimination and build a community that respects and promotes human rights and equal opportunity through human rights awareness, advocacy and empowerment among the general public.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" // Community icon
    },
    {
      text: "Promote environmental conservation and combat climate change issues by employing proper conservation activities and building strong partnership with the communities we work with and educate them on how they can contribute towards sustainable environmental management.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Environment icon
    },
    {
      text: "Improving the health status of the communities and delivering quality healthcare services.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" // Health icon
    },
    {
      text: "Promote sustainable agricultural and food products, ensuring supply sufficiency, high quality farming and production operations.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Agriculture icon
    }
  ]

  return (
    <div className="pt-48 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Objectives
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Working together to create lasting positive change in our communities through focused and sustainable initiatives.
            </p>
          </div>

          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-700 rounded-full font-bold text-xl">
                      {index + 1}
                    </div>
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={objective.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {objective.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 italic">
              "Together we can make a difference in creating a better, more sustainable future for all."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objectives 