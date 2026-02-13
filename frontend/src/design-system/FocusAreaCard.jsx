import PropTypes from 'prop-types';

export default function FocusAreaCard({ title, description, icon, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-therapy-sand-200 ${className}`}>
      {icon && (
        <div className="mb-4 text-therapy-teal-500">
          {typeof icon === 'string' ? (
            <div className="text-4xl">{icon}</div>
          ) : (
            icon
          )}
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-therapy-burgundy-600 mb-3">
        {title}
      </h3>
      <p className="text-therapy-burgundy-500 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

FocusAreaCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};
