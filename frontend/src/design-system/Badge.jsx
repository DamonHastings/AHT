import PropTypes from 'prop-types'

/**
 * Badge component for labels and tags
 */
export function Badge({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full'
  
  const variants = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    accent: 'bg-accent-coral-100 text-accent-coral-700',
    neutral: 'bg-neutral-200 text-wood-300',
    success: 'bg-natural-green-100 text-natural-green-700',
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  }
  
  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'neutral', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
}

export default Badge
