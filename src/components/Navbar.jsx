import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''
      }`}>
      {/* Top contact bar */}
      <div className={`bg-green-800 text-white py-2 px-4 hidden sm:block transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : ''
        }`}>
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="mailto:info@sudi.or.ke" className="hover:text-gray-200 transition-colors duration-300 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden md:inline">info@sudi.or.ke</span>
            </a>
            <a href="tel:+254722407034" className="hover:text-gray-200 transition-colors duration-300 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden md:inline">+254 722407034</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
              </svg>
              Mon-Fri: 8:00 - 17:00
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-lg transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="flex items-center">
                  <span className="text-2xl font-extrabold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent">
                    SUDI
                  </span>
                  <div className="hidden md:flex flex-col ml-2 border-l-2 border-green-700 pl-2">
                    <span className="text-xs text-gray-600 font-medium">Supreme</span>
                    <span className="text-xs text-gray-600 font-medium">Development</span>
                    <span className="text-xs text-gray-600 font-medium">Initiative</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/about-us">ABOUT US</NavLink>
              <NavLink to="#">CORE VALUES</NavLink>
              <NavLink to="#">OBJECTIVES</NavLink>
              <NavLink to="#">OUR PROGRAMS</NavLink>
              <NavLink to="#">GOVERNANCE</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-button"
                aria-label="Toggle menu"
              >
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t border-gray-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/">HOME</MobileNavLink>
            <MobileNavLink to="/about-us">ABOUT US</MobileNavLink>
            <MobileNavLink to="#">CORE VALUES</MobileNavLink>
            <MobileNavLink to="#">OBJECTIVES</MobileNavLink>
            <MobileNavLink to="#">OUR PROGRAMS</MobileNavLink>
            <MobileNavLink to="#">GOVERNANCE</MobileNavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

// Reusable components for navigation links
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-800 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors duration-300"
  >
    {children}
  </Link>
)

const DropdownLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
  >
    {children}
  </a>
)

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50"
  >
    {children}
  </Link>
)

export default Navbar 