import PropTypes from 'prop-types'

/**
 * Typography component for consistent text styling
 * Using Playfair Display for headings and Roboto for body text
 */
export function Heading({ level = 1, children, className = '', ...props }) {
  const baseStyles = 'font-heading font-normal text-wood-300'
  
  const styles = {
    1: 'text-5xl md:text-6xl leading-tight',
    2: 'text-4xl md:text-5xl leading-tight',
    3: 'text-3xl md:text-4xl leading-snug',
    4: 'text-2xl md:text-3xl leading-snug',
    5: 'text-xl md:text-2xl leading-normal',
    6: 'text-lg md:text-xl leading-normal',
  }
  
  const Tag = `h${level}`
  
  return (
    <Tag className={`${baseStyles} ${styles[level]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export function Text({ 
  variant = 'body', 
  children, 
  className = '', 
  as: Component = 'p',
  ...props 
}) {
  const baseStyles = 'font-body text-wood-300'
  
  const variants = {
    body: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed',
    large: 'text-lg leading-relaxed',
    lead: 'text-xl md:text-2xl leading-relaxed text-neutral-400',
    muted: 'text-sm leading-relaxed text-neutral-300',
  }
  
  return (
    <Component className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  )
}

Text.propTypes = {
  variant: PropTypes.oneOf(['body', 'small', 'large', 'lead', 'muted']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
}

export default { Heading, Text }
