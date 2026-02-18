import PropTypes from 'prop-types'

/**
 * Button component for the design system
 * Supports multiple variants, sizes, and states
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-therapy-burgundy-600 text-white hover:bg-therapy-burgundy-700 focus:ring-therapy-burgundy-500',
    secondary: 'bg-therapy-teal-500 text-white hover:bg-therapy-teal-600 focus:ring-therapy-teal-400',
    outline: 'border-2 border-therapy-burgundy-600 text-therapy-burgundy-600 hover:bg-therapy-burgundy-50 focus:ring-therapy-burgundy-500',
    ghost: 'text-therapy-burgundy-600 hover:bg-therapy-burgundy-50 focus:ring-therapy-burgundy-500',
    accent: 'bg-therapy-teal-500 text-white hover:bg-therapy-teal-600 focus:ring-therapy-teal-400 shadow-lg',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const disabledStyles = 'opacity-50 cursor-not-allowed'
  
  const widthStyles = fullWidth ? 'w-full' : ''
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ''} ${widthStyles} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'accent']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
}

export default Button
