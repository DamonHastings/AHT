import PropTypes from "prop-types";

export default function PhilosophySection({ title, content, image, className = "" }) {
  return (
    <section className={` overflow-hidden ${className}`}>
      <div className="grid md:grid-cols-1 gap-0">
        {/* Content Side */}
        <div className="p-8 md:p-10 flex flex-col justify-center align-center">
          {title && (
            <h2 className="text-md font-bold uppercase text-center text-therapy-burgundy-600 mb-6">
              {title}
            </h2>
          )}
          <div className="text-therapy-burgundy-500 leading-relaxed space-y-4 max-w-2xl mx-auto">
            {Array.isArray(content) ? (
              content.map((paragraph, index) => (
                <p key={index} className="text-base md:text-xl">
                  {paragraph}
                </p>
              ))
            ) : typeof content === "string" ? (
              <p className="text-base md:text-xl">{content}</p>
            ) : (
              <div className="text-base md:text-xl">{content}</div>
            )}
          </div>
        </div>

        {/* Image Side */}
        {image && (
          <div className="relative h-64 md:h-auto">
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
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
    PropTypes.node,
  ]).isRequired,
  image: PropTypes.string,
  className: PropTypes.string,
};
