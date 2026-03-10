import { useSiteSettings } from "../../hooks/useSiteSettings";
import { urlFor } from "../../utils/sanityClient";

export default function Footer() {
  const { siteSettings, loading } = useSiteSettings();

  if (loading) {
    return (
      <footer className="bg-wood-400 text-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Loading...</p>
          </div>
        </div>
      </footer>
    );
  }

  if (!siteSettings?.footer) {
    // Fallback to default footer if no CMS content
    return (
      <footer className="bg-wood-400 text-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Therapist Profile Website. All rights reserved.
            </p>
            <p className="text-sm">Licensed Marriage and Family Therapist in California</p>
          </div>
        </div>
      </footer>
    );
  }

  const footer = siteSettings.footer;
  const socialLinks = footer.socialLinks?.links || [];

  return (
    <footer className="bg-wood-400 text-neutral-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {footer.columns && footer.columns.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {footer.columns.map((column, index) => (
              <div key={index}>
                {column.title && <h3 className="text-white font-semibold mb-4">{column.title}</h3>}
                {column.content && (
                  <ul className="space-y-2">
                    {column.content.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.link ? (
                          <a href={item.link} className="hover:text-white transition-colors">
                            {item.text}
                          </a>
                        ) : (
                          <span>{item.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label={link.platform || "Social link"}
              >
                {link.platform === "facebook" && "📘"}
                {link.platform === "twitter" && "🐦"}
                {link.platform === "instagram" && "📷"}
                {link.platform === "linkedin" && "💼"}
                {link.platform === "youtube" && "📺"}
                {link.platform === "pinterest" && "📌"}
                {link.platform === "tiktok" && "🎵"}
                {link.platform === "psychologyToday" && "🧠"}
                {link.platform === "other" && "🔗"}
              </a>
            ))}
          </div>
        )}

        <div className="text-center border-t border-wood-300 pt-6">
          <p className="mb-2">
            &copy; {new Date().getFullYear()}{" "}
            {footer.copyrightText || "Therapist Profile Website. All rights reserved."}
          </p>
          {footer.licenseText && <p className="text-sm">{footer.licenseText}</p>}
        </div>
      </div>
    </footer>
  );
}
