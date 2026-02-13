import { urlFor } from '../../utils/sanityClient'
import { useSiteSettings } from '../../hooks/useSiteSettings'

export default function Header({ therapist }) {
  const { siteSettings } = useSiteSettings()
  const navigation = siteSettings?.navigation

  if (!therapist) return null

  const getNavLink = (item) => {
    if (item.linkType === 'anchor') {
      return item.anchor || `#${item.label.toLowerCase()}`
    } else if (item.linkType === 'internal') {
      return `/${item.internalPage}`
    } else if (item.linkType === 'external') {
      return item.externalUrl
    }
    return '#'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {therapist.profileImage && (
              <img
                src={urlFor(therapist.profileImage).width(60).height(60).url()}
                alt={therapist.name}
                className="rounded-full w-15 h-15 object-cover border-2 border-white/20"
              />
            )}
            <div>
              <h1 className="text-2xl font-semibold text-white drop-shadow-lg">
                {therapist.name}
              </h1>
              <p className="text-sm text-white/80 drop-shadow">{therapist.credentials}</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navigation?.items ? (
              navigation.items.map((item, index) => (
                <a
                  key={index}
                  href={getNavLink(item)}
                  className="text-white/90 hover:text-white transition-colors font-medium drop-shadow"
                  {...(item.linkType === 'external' && item.openInNewTab
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </a>
              ))
            ) : (
              // Fallback navigation
              <>
                <a href="#about" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                  About
                </a>
                <a href="#practice" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                  Practice
                </a>
                <a href="#specialties" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                  Specialties
                </a>
                <a href="#contact" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                  Contact
                </a>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
