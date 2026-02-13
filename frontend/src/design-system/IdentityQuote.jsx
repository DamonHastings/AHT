import PropTypes from 'prop-types';

export default function IdentityQuote({ quote, author, className = '' }) {
  return (
    <div className={`bg-therapy-sand-100 border-l-4 border-therapy-teal-500 p-6 rounded-r-lg ${className}`}>
      <blockquote className="space-y-2">
        <p className="text-lg md:text-xl text-therapy-burgundy-600 italic leading-relaxed">
          "{quote}"
        </p>
        {author && (
          <footer className="text-sm md:text-base text-therapy-burgundy-400 font-medium">
            — {author}
          </footer>
        )}
      </blockquote>
    </div>
  );
}

IdentityQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
  className: PropTypes.string,
};
