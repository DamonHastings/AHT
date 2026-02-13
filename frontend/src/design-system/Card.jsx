import PropTypes from 'prop-types'

/**
 * Card component for content containers
 */
export function Card({ 
  children, 
  variant = 'default',
  padding = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'rounded-lg shadow-md'
  
  const variants = {
    default: 'bg-white border border-neutral-200',
    elevated: 'bg-white border border-neutral-200 shadow-lg',
    outlined: 'bg-transparent border-2 border-neutral-300',
    filled: 'bg-neutral-50 border border-neutral-200',
  }
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined', 'filled']),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  className: PropTypes.string,
}

export default Card
