import PropTypes from "prop-types";
import { icons, iconMap } from "./icons.jsx";

export default function FocusAreaCard({ title, description, icon, className = "" }) {
  // Determine which icon to render
  const renderIcon = () => {
    // If no icon provided, return null
    if (!icon) return null;

    // If icon is already a React node, render it
    if (typeof icon !== "string") {
      return icon;
    }

    // If icon is a single emoji character, render it
    if (icon.length <= 2) {
      return <div className="text-4xl">{icon}</div>;
    }

    // Try to map the icon string to a line illustration
    const iconKey = icon.toLowerCase();
    const mappedIcon = iconMap[iconKey] || iconKey;
    const lineIcon = icons[mappedIcon];

    if (lineIcon) {
      return <div className="w-12 h-12">{lineIcon}</div>;
    }

    // Fallback: render as text/emoji
    return <div className="text-4xl">{icon}</div>;
  };

  return (
    <div
      className={`bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col ${className}`}
    >
      {icon && (
        <div className="mb-4 text-therapy-teal-500 flex justify-center shrink-0">
          {renderIcon()}
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-therapy-burgundy-600 mb-3 shrink-0">
        {title}
      </h3>
      <p className="text-slate-500 text-sm md:text-base leading-relaxed flex-1 min-h-0">
        {description}
      </p>
    </div>
  );
}

FocusAreaCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};
