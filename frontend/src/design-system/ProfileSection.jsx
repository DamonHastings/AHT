import PropTypes from "prop-types";
import { Button } from "./Button";
import { icons } from "./icons.jsx";

export default function ProfileSection({
  image,
  imageAlt = "Profile image",
  subtitle,
  heading,
  subheading,
  tags = [],
  content,
  buttonText = "Learn more about me",
  buttonLink = "#",
  credentials,
  imageOnLeft = true,
  className = "",
}) {
  const ImageSection = () => (
    <div className="w-full md:w-1/3 flex-shrink-0">
      <div className="relative aspect-[2/2] bg-therapy-sand-200 rounded-xl overflow-hidden ring-1 ring-therapy-burgundy-100 ring-offset-2 ring-offset-white shadow-sm">
        {image ? (
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-therapy-sand-400">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  const CredentialIcon = ({ name }) => {
    const icon = icons[name] || icons.book;
    return <div className="w-8 h-8 text-slate-400 flex-shrink-0">{icon}</div>;
  };

  const ContentSection = () => (
    <div className="w-full md:w-2/3 flex flex-col justify-center space-y-6">
      {subtitle && (
        <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">{subtitle}</p>
      )}
      {(heading || subheading) && (
        <div>
          {heading && (
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-heading">
              {heading}
            </h2>
          )}
          {subheading && <p className="text-lg text-slate-500 mt-1">{subheading}</p>}
        </div>
      )}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {content && (
        <div className="prose prose-lg max-w-none">
          {typeof content === "string" ? (
            <p className="text-slate-600 leading-relaxed">{content}</p>
          ) : (
            <div className="text-slate-600 leading-relaxed">{content}</div>
          )}
        </div>
      )}
      {buttonText && (
        <button
          type="button"
          onClick={() => {
            if (buttonLink.startsWith("#")) {
              document.querySelector(buttonLink)?.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = buttonLink;
            }
          }}
          className="inline-flex items-center gap-2 text-therapy-burgundy-600 hover:text-therapy-burgundy-700 font-semibold transition-colors text-base"
        >
          {buttonText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      {credentials?.items?.length > 0 && (
        <div className="pt-6 border-t border-slate-200">
          {credentials.title && (
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-4">
              {credentials.title}
            </p>
          )}
          <ul className="space-y-4">
            {credentials.items.map((item, i) => (
              <li key={i} className="flex gap-4">
                <CredentialIcon name={item.icon} />
                <div>
                  <p className="font-semibold text-slate-800 text-sm uppercase tracking-wide">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-slate-500 text-sm mt-0.5">{item.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${className}`}>
      {imageOnLeft ? (
        <>
          <ImageSection />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImageSection />
        </>
      )}
    </div>
  );
}

ProfileSection.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  credentials: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ),
  }),
  imageOnLeft: PropTypes.bool,
  className: PropTypes.string,
};
