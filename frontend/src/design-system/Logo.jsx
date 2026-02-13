import PropTypes from 'prop-types';

export default function Logo({ variant = 'default', size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
  };

  const variantClasses = {
    default: 'text-therapy-burgundy-600',
    light: 'text-white',
    dark: 'text-therapy-burgundy-800',
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      <span className="tracking-tight">Logo</span>
    </div>
  );
}

Logo.propTypes = {
  variant: PropTypes.oneOf(['default', 'light', 'dark']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};
