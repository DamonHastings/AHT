import { Link } from 'react-router-dom'
import { urlFor } from '../../utils/sanityClient'
import { useSiteSettings } from '../../hooks/useSiteSettings'
import Button from '../../design-system/Button'

export default function Header({ therapist }) {
  const { siteSettings } = useSiteSettings()
  const navigation = siteSettings?.navigation

  if (!therapist) return null

  const getNavLink = (item) => {
    if (item.linkType === 'anchor') {
      return item.anchor || `#${item.label.toLowerCase()}`
    } else if (item.linkType === 'internal') {
      // Special case: if internalPage is 'home', use root path
      const page = item.internalPage || ''
      if (page === 'home') {
        return '/'
      }
      return page ? `/${page}` : '/'
    } else if (item.linkType === 'external') {
      return item.externalUrl
    }
    return '#'
  }

  const renderNavItem = (item, index) => {
    const link = getNavLink(item)
    const commonClasses = "font-medium"
    
    // Skip "Home" link
    if (item.label === 'Home' || link === '/') {
      return null
    }
    
    // External links
    if (item.linkType === 'external') {
      return (
        <a
          key={index}
          href={link}
          className={commonClasses}
          target={item.openInNewTab ? '_blank' : undefined}
          rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
        >
          {item.label}
        </a>
      )
    }
    
    // Anchor links (for same-page navigation)
    if (item.linkType === 'anchor') {
      return (
        <a
          key={index}
          href={link}
          className={commonClasses}
        >
          {item.label}
        </a>
      )
    }
    
    // Internal page links (use React Router Link)
    return (
      <Link
        key={index}
        to={link}
        className={commonClasses}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[80%]">
      <div className="bg-white/80 backdrop-blur-sm rounded-b-[30px] shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link to="/" className="flex items-center space-x-3">
              {therapist.profileImage && (
                <img
                  src={urlFor(therapist.profileImage).width(50).height(50).url()}
                  alt={therapist.name}
                  className="rounded-full w-12 h-12 object-cover border-2 border-therapy-burgundy-200"
                />
              )}
              <div>
                <h1 className="text-xl font-semibold ">
                  {therapist.name}
                </h1>
                <p className="text-xs ">{therapist.credentials}</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation?.items ? (
                navigation.items.map((item, index) => renderNavItem(item, index))
              ) : (
                // Fallback navigation with page links (excluding Home)
                <>
                  <Link to="/about" className="font-medium">
                    About
                  </Link>
                  <Link to="/services" className="font-medium">
                    Services
                  </Link>
                  <a href="#contact" className="font-medium">
                    Contact
                  </a>
                </>
              )}
              
              {/* Book Consultation CTA */}
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => {
                  // Scroll to contact or navigate to booking
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Book Consultation
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
