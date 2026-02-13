import PropTypes from 'prop-types';

export default function PersonalStatement({ 
  statement, 
  showFullBioLink = true, 
  onFullBioClick,
  className = '' 
}) {
  return (
    <div className={`bg-therapy-sand-50 rounded-lg p-6 md:p-8 shadow-md ${className}`}>
      <div className="prose prose-lg max-w-none">
        <p className="text-therapy-burgundy-600 leading-relaxed text-base md:text-lg">
          {statement}
        </p>
      </div>
      
      {showFullBioLink && (
        <div className="mt-6 pt-4 border-t border-therapy-sand-200">
          <button
            onClick={onFullBioClick}
            className="text-therapy-teal-600 hover:text-therapy-teal-700 font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <span>Read Full Biography</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

PersonalStatement.propTypes = {
  statement: PropTypes.string.isRequired,
  showFullBioLink: PropTypes.bool,
  onFullBioClick: PropTypes.func,
  className: PropTypes.string,
};
