import PropTypes from 'prop-types';

export default function HeadshotProfile({ 
  image, 
  name, 
  alt, 
  size = 'md',
  shape = 'rounded',
  className = '' 
}) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80',
  };

  const shapeClasses = {
    rounded: 'rounded-lg',
    circle: 'rounded-full',
    square: 'rounded-none',
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={image}
        alt={alt || name || 'Profile'}
        className={`${sizeClasses[size]} ${shapeClasses[shape]} object-cover shadow-lg border-4 border-therapy-cream-100`}
      />
      {name && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-therapy-burgundy-600">{name}</p>
        </div>
      )}
    </div>
  );
}

HeadshotProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  shape: PropTypes.oneOf(['rounded', 'circle', 'square']),
  className: PropTypes.string,
};
