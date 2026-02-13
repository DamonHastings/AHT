import PropTypes from 'prop-types';
import Button from './Button';

export default function FooterCTA({ 
  logo,
  practiceDescription,
  availability,
  contactInfo,
  consultationCTA,
  onConsultationClick,
  className = '' 
}) {
  return (
    <footer className={`bg-therapy-burgundy-800 text-white py-12 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Practice Description */}
          <div>
            {logo && (
              <div className="mb-4 text-3xl font-bold">
                {typeof logo === 'string' ? logo : logo}
              </div>
            )}
            {practiceDescription && (
              <p className="text-therapy-sand-100 text-sm leading-relaxed">
                {practiceDescription}
              </p>
            )}
          </div>

          {/* Availability & Contact */}
          <div className="space-y-4">
            {availability && (
              <div>
                <h3 className="font-semibold text-therapy-cream-100 mb-2 text-lg">
                  Availability
                </h3>
                <p className="text-therapy-sand-100 text-sm">{availability}</p>
              </div>
            )}
            
            {contactInfo && (
              <div>
                <h3 className="font-semibold text-therapy-cream-100 mb-2 text-lg">
                  Contact
                </h3>
                <div className="space-y-1 text-sm">
                  {contactInfo.phone && (
                    <p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-therapy-sand-100 hover:text-white transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </p>
                  )}
                  {contactInfo.email && (
                    <p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-therapy-sand-100 hover:text-white transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </p>
                  )}
                  {contactInfo.address && (
                    <p className="text-therapy-sand-100 mt-2">
                      {contactInfo.address}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Consultation CTA */}
          <div className="flex flex-col items-start md:items-end">
            {consultationCTA && (
              <div className="w-full md:w-auto">
                <h3 className="font-semibold text-therapy-cream-100 mb-3 text-lg">
                  {consultationCTA.title || 'Get Started'}
                </h3>
                <Button
                  variant="accent"
                  size="lg"
                  onClick={onConsultationClick}
                  className="w-full md:w-auto"
                >
                  {consultationCTA.buttonText || 'Book Consultation'}
                </Button>
                {consultationCTA.description && (
                  <p className="text-therapy-sand-100 text-sm mt-3">
                    {consultationCTA.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-therapy-burgundy-600 text-center">
          <p className="text-therapy-sand-200 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

FooterCTA.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  practiceDescription: PropTypes.string,
  availability: PropTypes.string,
  contactInfo: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
  }),
  consultationCTA: PropTypes.shape({
    title: PropTypes.string,
    buttonText: PropTypes.string,
    description: PropTypes.string,
  }),
  onConsultationClick: PropTypes.func,
  className: PropTypes.string,
};
