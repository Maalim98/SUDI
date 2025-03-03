import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoSudi from '../assets/images/logo-sudi.png'

// Only keep MobileNavLink
const MobileNavLink = ({ to, children, className = '' }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `block py-2 text-lg ${
      isActive ? 'text-[#45702D] font-semibold' : 'text-gray-600'
    } ${className}`}
  >
    {children}
  </NavLink>
)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const aboutUsLinks = [
    { name: 'VISION', path: '/vision' },
    { name: 'MISSION', path: '/mission' },
    { name: 'PRIMARY FOCUS AREAS', path: '/focus-areas' },
    { name: 'CORE VALUES', path: '/core-values' },
    { name: 'OBJECTIVES', path: '/objectives' }
  ]

  const mainNavLinks = [
    { name: 'OUR PROGRAMS', path: '/programs' },
    { name: 'GOVERNANCE', path: '/governance' }
  ]

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  // Handle dropdown toggle
  const handleDropdownToggle = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdownName)
    }
  }

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav className={`bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSudi} alt="SUDI Logo" className="h-10 w-auto" />
              <div className="flex flex-col border-l border-[#45702D] pl-2">
                <span className="text-xs sm:text-sm font-semibold text-gray-800">Supreme</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">Development</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">Initiative</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink to="/" className={({ isActive }) => 
                `text-sm font-medium ${isActive ? 'text-[#45702D]' : 'text-gray-600 hover:text-[#45702D]'}`
              }>
                HOME
              </NavLink>
              
              {/* About Us Dropdown */}
              <div className="relative group">
                <div className="text-sm font-medium text-gray-600 hover:text-[#45702D] flex items-center cursor-pointer">
                  ABOUT US
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {aboutUsLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive 
                            ? 'text-[#45702D] bg-green-50' 
                            : 'text-gray-700 hover:bg-green-50 hover:text-[#45702D]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {mainNavLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-sm font-medium ${isActive ? 'text-[#45702D]' : 'text-gray-600 hover:text-[#45702D]'}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#45702D] hover:bg-green-50 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Compact Mobile Menu - Side panel that slides from right */}
        <div 
          className={`fixed inset-y-0 right-0 w-[250px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-xl`}
          style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-gray-800">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-green-50 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 my-2 text-lg font-medium ${
                    isActive ? 'text-[#45702D] bg-green-50' : 'text-gray-700 hover:bg-green-50 hover:text-[#45702D]'
                  }`
                }
              >
                HOME
              </NavLink>
              
              <div className="px-4 py-2">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-[#45702D] hover:bg-green-50 py-3 px-0 my-2 rounded"
                >
                  ABOUT US
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      activeDropdown === 'about' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`mt-2 space-y-3 ${activeDropdown === 'about' ? 'block' : 'hidden'}`}>
                  {aboutUsLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block pl-4 py-3 text-lg ${
                          isActive 
                            ? 'text-[#45702D] bg-green-50' 
                            : 'text-gray-600 hover:bg-green-50 hover:text-[#45702D]'
                        } rounded-md`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {mainNavLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 my-2 text-lg font-medium ${
                      isActive ? 'text-[#45702D] bg-green-50' : 'text-gray-700 hover:bg-green-50 hover:text-[#45702D]'
                    } rounded-md`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Contact info in mobile menu */}
            <div className="border-t p-4 bg-gray-50">
              <div className="space-y-3 text-base text-gray-600">
                <a href="tel:+254722407034" className="flex items-center py-2">
                  <svg className="w-5 h-5 mr-3 text-[#45702D]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.21-.502l4.435.74a1 1 0 01.684.949V19a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +254 722407034
                </a>
                <a href="mailto:info@sudi.or.ke" className="flex items-center py-2">
                  <svg className="w-5 h-5 mr-3 text-[#45702D]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@sudi.or.ke
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Semi-transparent overlay that allows scrolling */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 lg:hidden z-40"
            onClick={() => setIsMenuOpen(false)}
            style={{ pointerEvents: 'auto' }}
          />
        )}
      </nav>
    </header>
  )
}

// Only keep DropdownLink
const DropdownLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-[#45702D] border-b border-gray-100 last:border-b-0"
  >
    {children}
  </Link>
)

export default Navbar 