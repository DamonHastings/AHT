import PropTypes from 'prop-types';
import Logo from './Logo';
import Button from './Button';

export default function SiteHeader({ 
  logo,
  onConsultationClick,
  consultationText = 'Book Consultation',
  showConsultation = true,
  className = '' 
}) {
  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            {typeof logo === 'string' ? (
              <Logo variant="default" size="md" />
            ) : (
              logo || <Logo variant="default" size="md" />
            )}
          </div>

          {/* CTA Button */}
          {showConsultation && (
            <Button
              variant="accent"
              size="md"
              onClick={onConsultationClick}
            >
              {consultationText}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

SiteHeader.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onConsultationClick: PropTypes.func,
  consultationText: PropTypes.string,
  showConsultation: PropTypes.bool,
  className: PropTypes.string,
};
