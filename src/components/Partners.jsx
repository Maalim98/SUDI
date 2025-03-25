import { useState } from 'react';

const Partners = () => {
  // Partner categories
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Partners' },
    { id: 'government', name: 'Government' },
    { id: 'ngo', name: 'NGOs' },
    { id: 'private', name: 'Private Sector' },
    { id: 'international', name: 'International' }
  ];
  
  // Partner data
  const partners = [
    {
      id: 1,
      name: 'Garissa County Government',
      logo: 'https://placehold.co/200x100/45702D/white?text=Garissa+County',
      description: 'Supporting local governance and community development initiatives.',
      category: 'government'
    },
    {
      id: 2,
      name: 'Kenya Red Cross',
      logo: 'https://placehold.co/200x100/f5f5f5/FF0000?text=Kenya+Red+Cross',
      description: 'Collaboration on emergency response and humanitarian aid projects.',
      category: 'ngo'
    },
    {
      id: 3,
      name: 'United Nations Development Programme',
      logo: 'https://placehold.co/200x100/0072BC/white?text=UNDP',
      description: 'Partnership on sustainable development goals and climate action initiatives.',
      category: 'international'
    },
    {
      id: 4,
      name: 'Safaricom Foundation',
      logo: 'https://placehold.co/200x100/4CBB17/white?text=Safaricom',
      description: 'Supporting digital inclusion and technology programs for youth.',
      category: 'private'
    },
    {
      id: 5,
      name: 'World Food Programme',
      logo: 'https://placehold.co/200x100/0072BC/white?text=WFP',
      description: 'Collaboration on food security and agricultural sustainability projects.',
      category: 'international'
    },
    {
      id: 6,
      name: 'Ministry of Environment',
      logo: 'https://placehold.co/200x100/45702D/white?text=Ministry+of+Environment',
      description: 'Partnership on environmental conservation and climate resilience initiatives.',
      category: 'government'
    },
    {
      id: 7,
      name: 'Kenya Community Development Foundation',
      logo: 'https://placehold.co/200x100/f5f5f5/45702D?text=KCDF',
      description: 'Collaboration on community-led development programs.',
      category: 'ngo'
    },
    {
      id: 8,
      name: 'Equity Bank Foundation',
      logo: 'https://placehold.co/200x100/1B7ECF/white?text=Equity',
      description: 'Supporting financial literacy and entrepreneurship training.',
      category: 'private'
    }
  ];
  
  // Filter partners based on active category
  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#45702D]">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Working together with organizations committed to sustainable development
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-[#45702D] border-b-2 border-[#45702D]'
                  : 'text-gray-600 hover:text-[#45702D]'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPartners.map(partner => (
            <div
              key={partner.id}
              className="group relative bg-white hover:bg-[#45702D]/5 transition-colors duration-300"
            >
              <div className="flex items-start gap-6 p-6">
                <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-lg">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#45702D] transition-colors duration-200">
                      {partner.name}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      partner.category === 'government' ? 'bg-blue-50 text-blue-700' :
                      partner.category === 'ngo' ? 'bg-green-50 text-green-700' :
                      partner.category === 'private' ? 'bg-purple-50 text-purple-700' :
                      'bg-orange-50 text-orange-700'
                    }`}>
                      {partner.category.charAt(0).toUpperCase() + partner.category.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <a 
            href="/contact"
            className="inline-flex items-center text-[#45702D] font-medium hover:text-[#385c25] transition-colors duration-200"
          >
            Become a Partner
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners; 