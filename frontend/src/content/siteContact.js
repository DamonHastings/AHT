/**
 * Canonical practice contact details. Used as fallbacks when Sanity siteSettings
 * still has seed/placeholder values (e.g. San Francisco, (555) 123-4567).
 */
export const SITE_CONTACT = {
  city: "Davis",
  state: "CA",
  phone: "(510) 692-9926",
  email: "therapy@arielleraehastings.com",
};

function isPlaceholderPhone(phone) {
  if (!phone) return true;
  return /555/.test(phone);
}

function isPlaceholderEmail(email) {
  if (!email) return true;
  return /@example\.com$/i.test(email);
}

function isPlaceholderAddress(address) {
  if (!address?.city) return true;
  const city = address.city.toLowerCase();
  return (
    city === "san francisco" ||
    city === "your city" ||
    address.street === "123 Main Street"
  );
}

/** Merge Sanity siteSettings with canonical contact when CMS data is missing or placeholder. */
export function mergeSiteContactDefaults(siteSettings) {
  if (!siteSettings) return null;

  const address = isPlaceholderAddress(siteSettings.address)
    ? {
        ...siteSettings.address,
        city: SITE_CONTACT.city,
        state: SITE_CONTACT.state,
        street: siteSettings.address?.street?.includes("123 Main")
          ? undefined
          : siteSettings.address?.street,
        zipCode: siteSettings.address?.zipCode === "94102"
          ? undefined
          : siteSettings.address?.zipCode,
      }
    : siteSettings.address;

  return {
    ...siteSettings,
    contactPhone: isPlaceholderPhone(siteSettings.contactPhone)
      ? SITE_CONTACT.phone
      : siteSettings.contactPhone,
    contactEmail: isPlaceholderEmail(siteSettings.contactEmail)
      ? SITE_CONTACT.email
      : siteSettings.contactEmail,
    address,
  };
}

export function formatCityState(address) {
  if (!address?.city) {
    return `${SITE_CONTACT.city}, ${SITE_CONTACT.state}`;
  }
  return address.state ? `${address.city}, ${address.state}` : address.city;
}
