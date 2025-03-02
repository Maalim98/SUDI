import { Link } from 'react-router-dom'
import susDevImg from '/src/assets/images/sus-dev.jpg'
import './Hero.css' // Import the CSS file

const Hero = () => {
  return (
    <>
      {/* Hero section with CSS-based responsiveness */}
      <section className="hero-section">
        {/* Background Image */}
        <div className="hero-background" style={{ backgroundImage: `url(${susDevImg})` }}>
          <div className="hero-overlay"></div>
        </div>

        {/* Content container */}
        <div className="hero-content">
          <div className="hero-content-inner">
            {/* Heading */}
            <h1 className="hero-title">
              <div className="hero-title-main">EMPOWERING</div>
              <div className="hero-title-highlight">COMMUNITIES</div>
            </h1>
            
            {/* Description */}
            <p className="hero-description">
              Building a better tomorrow through sustainable development and peace initiatives in Garissa County
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <Link to="/about-us" className="hero-button primary-button">
                Learn More
              </Link>
              <Link to="/contact" className="hero-button secondary-button">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About section with CSS-based responsiveness */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">
            About <span className="about-title-highlight">SUDI</span>
          </h2>
          <div className="about-content">
            <p className="about-text">
              SUDI is a local non-governmental, non-profit organization with its headquarter in Garissa County. 
              SUDI was registered as an NGO in July 2013 by the Government of Kenya under the NGO Coordination Act 1990.
            </p>
            <p className="about-text">
              SUDI values the local existing potential and resources from the communities and aims at strengthening peace 
              while alleviating poverty among the rural poor, through the use of local resources.
            </p>
            <div className="about-cta">
              <Link to="/about-us" className="about-button">
                About Us
                <svg className="about-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero 