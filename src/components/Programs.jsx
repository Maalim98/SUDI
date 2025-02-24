import { Link } from 'react-router-dom'

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Agriculture and Food security",
      description: "To access food security is to have safe and nutritious food on a regular basis – physically, economically, culturally and socially.",
      image: "/src/assets/images/foodsecurity.jpg",
      bgColor: "bg-[#826F47]/95",
      link: "/services/agriculture"
    },
    {
      id: 2,
      title: "Health, Nutrition and HIV/AIDS Services",
      description: "Medical outreaches, nutrition intervention, rehabilitation and Construction of dispensaries, first aid and emergency response during disasters.",
      image: "/src/assets/images/nutrition.jpg",
      bgColor: "bg-[#2E6B3E]/95",
      link: "/services/nutrition"
    },
    {
      id: 3,
      title: "Technical and Vocational Education and Training",
      description: "SUDI shall connect with the Private and Public Institutions and Employers in linking the trainees in and from the Technical and Vocational Education.",
      image: "/src/assets/images/vocational.jpg",
      bgColor: "bg-[#1B4D3E]/95",
      link: "/services/vocational"
    },
    {
      id: 4,
      title: "Environmental protection and conservation",
      description: "SUDI through its different project will integrate programmes that seek to restore the environment to its natural state through mitigating degradation forces and population pressure exerted.",
      image: "/src/assets/images/environment.jpg",
      bgColor: "bg-[#3B5C3B]",
      buttonBg: "bg-[#F0F4F0]/10",
      link: "/services/environmental"
    },
    {
      id: 5,
      title: "Water, Sanitation and Hygiene (WASH)",
      description: "Through provision of improved water, sanitation and hygiene (WASH) facilities and services, and increased knowledge and capacities SUDI projects will reduce the vulnerability of those households.",
      image: "/src/assets/images/sanitation.jpg",
      bgColor: "bg-[#1E4D6B]/95",
      buttonBg: "bg-[#FFF]/10",
      link: "/services/water"
    },
    {
      id: 6,
      title: "Youth and Volunteer Development",
      description: "SUDI will honor and establish pool of volunteers from unskilled to skilled professional from professional background. SUDI undertakes skills, knowledge and capacities assessments evaluating",
      image: "/src/assets/images/youth.jpg",
      bgColor: "bg-[#D4813B]/95",
      buttonBg: "bg-[#FFF]/10",
      link: "/services/youth"
    }
  ];

  return (
    <section className="py-20 bg-[#F8F9F6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1F2937]">
          OUR PROGRAMS
        </h2>
        <div className="w-20 h-1 bg-[#3B5C3B] mx-auto mb-12"></div>
        
        <p className="text-center max-w-4xl mx-auto mb-16 text-[#374151] leading-relaxed">
          <span className="text-[#3B5C3B] font-semibold">SUDI</span> Project/interventions aim to cover the numerous aspects of humanitarian responses and development initiatives 
          through a multidisciplinary approach which consider and adopt local context, in the following areas:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="group relative overflow-hidden shadow-lg flex flex-col bg-white rounded-lg">
              <div className="relative h-[280px] overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className={`${program.bgColor} p-8 flex-1 flex flex-col`}>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {program.title}
                </h3>
                <p className="text-base mb-6 text-white/90 leading-relaxed flex-1">
                  {program.description}
                </p>
                <Link 
                  to={program.link}
                  className="inline-flex items-center justify-center group/btn mx-auto
                    text-white text-sm font-medium transition-all duration-300"
                >
                  <span className="border-b border-transparent group-hover/btn:border-white">
                    Read More
                  </span>
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#services" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium
              text-white bg-[#D4813B] hover:bg-[#B36B2D] 
              transition-all duration-300 rounded-full group/explore
              hover:shadow-lg hover:-translate-y-0.5 mx-auto"
          >
            <span>EXPLORE MORE SERVICES</span>
            <svg 
              className="w-5 h-5 ml-2 transform transition-transform group-hover/explore:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs; 