import PropTypes from 'prop-types';

export default function PhilosophySection({ title = 'Philosophy', content, image, className = '' }) {
  return (
    <section className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="grid md:grid-cols-2 gap-0">
        {/* Content Side */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-therapy-burgundy-600 mb-6">
            {title}
          </h2>
          <div className="text-therapy-burgundy-500 leading-relaxed space-y-4">
            {Array.isArray(content) ? (
              content.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-base md:text-lg">{content}</p>
            )}
          </div>
        </div>

        {/* Image Side */}
        {image && (
          <div className="relative h-64 md:h-auto">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}

PhilosophySection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  image: PropTypes.string,
  className: PropTypes.string,
};
