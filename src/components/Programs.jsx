import { Link } from 'react-router-dom'
import agricultureImg from '/src/assets/images/agriculture.jpg'
import nutritionImg from '/src/assets/images/nutrition.jpg'
import waterImg from '/src/assets/images/sanitation.jpg'
import youthImg from '/src/assets/images/youth.jpg'
import vocationalImg from '/src/assets/images/vocational.jpg'
import environmentalImg from '/src/assets/images/environment.jpg'

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Agriculture & Food Security",
      description: "Supporting sustainable farming practices and ensuring food security through modern agricultural techniques.",
      image: agricultureImg,
      bgColor: "bg-[#826F47]/95",
      link: "/services/agriculture"
    },
    {
      id: 2,
      title: "Health & Nutrition",
      description: "Improving community health through comprehensive healthcare services and nutrition programs.",
      image: nutritionImg,
      bgColor: "bg-[#2E6B3E]/95",
      link: "/services/nutrition"
    },
    {
      id: 3,
      title: "Water & Sanitation",
      description: "Providing access to clean water and promoting proper sanitation practices.",
      image: waterImg,
      bgColor: "bg-[#1E4D6B]/95",
      buttonBg: "bg-[#FFF]/10",
      link: "/services/water"
    },
    {
      id: 4,
      title: "Youth Development",
      description: "Empowering youth through education, skills training, and leadership programs.",
      image: youthImg,
      bgColor: "bg-[#D4813B]/95",
      buttonBg: "bg-[#FFF]/10",
      link: "/services/youth"
    },
    {
      id: 5,
      title: "Vocational Training",
      description: "Building practical skills and creating employment opportunities.",
      image: vocationalImg,
      bgColor: "bg-[#1B4D3E]/95",
      link: "/services/vocational"
    },
    {
      id: 6,
      title: "Environmental Conservation",
      description: "Protecting natural resources and promoting sustainable environmental practices.",
      image: environmentalImg,
      bgColor: "bg-[#3B5C3B]",
      buttonBg: "bg-[#F0F4F0]/10",
      link: "/services/environmental"
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