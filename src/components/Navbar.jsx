import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logoSudi from '../assets/images/logo-sudi.png'

// Only keep MobileNavLink
const MobileNavLink = ({ to, children, className = '' }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `block py-2 text-lg ${
      isActive ? 'text-green-600 font-semibold' : 'text-gray-600'
    } ${className}`}
  >
    {children}
  </NavLink>
)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#45702D] text-white py-1 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@sudi.or.ke" className="hover:text-gray-200 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden md:inline">info@sudi.or.ke</span>
            </a>
            <a href="tel:+254722407034" className="hover:text-gray-200 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.21-.502l4.435.74a1 1 0 01.684.949V19a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden md:inline">+254 722407034</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mon-Fri: 8:00 - 17:00
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSudi} alt="SUDI Logo" className="h-12 w-auto" />
              <div className="hidden md:flex flex-col border-l border-[#45702D] pl-2">
                <span className="text-sm font-semibold text-gray-800">Supreme</span>
                <span className="text-sm font-semibold text-gray-800">Development</span>
                <span className="text-sm font-semibold text-gray-800">Initiative</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-sm font-medium ${isActive ? 'text-[#45702D]' : 'text-gray-600 hover:text-[#45702D]'}`
                }
              >
                HOME
              </NavLink>
              {/* About Us Dropdown - adjusted sizes */}
              <div className="relative group">
                <button 
                  className="text-sm font-medium text-gray-700 hover:text-green-600 flex items-center px-2"
                >
                  ABOUT US
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-1 w-44 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {aboutUsLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-xs ${
                          isActive 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Main nav links */}
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
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#45702D] hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide from right */}
        <div 
          className={`fixed inset-y-0 right-0 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-[#45702D]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Link to="/" onClick={handleLinkClick}>
                <img src={logoSudi} alt="SUDI Logo" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="space-y-3">
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium ${
                    isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`
                }
              >
                HOME
              </NavLink>
              {/* Mobile About Us Dropdown */}
              <div>
                <button 
                  onClick={() => handleDropdownToggle('about')}
                  className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  ABOUT US
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`pl-4 space-y-2 ${activeDropdown === 'about' ? 'block' : 'hidden'}`}>
                  {aboutUsLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                      className={({ isActive }) =>
                        `block py-2 text-sm font-medium ${
                          isActive 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
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
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-medium ${
                      isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
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
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-red-600 border-b border-gray-100 last:border-b-0"
  >
    {children}
  </Link>
)

export default Navbar 