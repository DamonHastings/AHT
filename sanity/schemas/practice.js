export default {
  name: "practice",
  title: "Practice Details",
  type: "document",
  fields: [
    {
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        {
          name: "address",
          title: "Address",
          type: "string",
        },
        {
          name: "city",
          title: "City",
          type: "string",
        },
        {
          name: "state",
          title: "State",
          type: "string",
        },
        {
          name: "zipCode",
          title: "Zip Code",
          type: "string",
        },
      ],
    },
    {
      name: "inPerson",
      title: "In-Person Sessions",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "telehealth",
      title: "Telehealth Sessions",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "fees",
      title: "Session Fees",
      type: "object",
      fields: [
        {
          name: "individual",
          title: "Individual Session Fee",
          type: "number",
          description: "Fee in USD",
        },
        {
          name: "couple",
          title: "Couple Session Fee",
          type: "number",
          description: "Fee in USD",
        },
        {
          name: "family",
          title: "Family Session Fee",
          type: "number",
          description: "Fee in USD",
        },
      ],
    },
    {
      name: "paymentMethods",
      title: "Payment Methods",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Cash", value: "cash" },
          { title: "Check", value: "check" },
          { title: "Venmo", value: "venmo" },
          { title: "Zelle", value: "zelle" },
          { title: "Visa", value: "visa" },
          { title: "Mastercard", value: "mastercard" },
          { title: "American Express", value: "amex" },
          { title: "Discover", value: "discover" },
          { title: "Ivy Pay", value: "ivyPay" },
        ],
      },
    },
    {
      name: "insuranceInfo",
      title: "Insurance Information",
      type: "text",
      description: "Information about insurance, superbills, sliding scale, etc.",
    },
    {
      name: "consultationOffer",
      title: "Free Consultation Offered",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "consultationDuration",
      title: "Consultation Duration (minutes)",
      type: "number",
      initialValue: 15,
    },
    {
      name: "heroBackgroundImage",
      title: "Hero Background Image",
      type: "image",
      description: "Background image for the hero section",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heroBackgroundColor",
      title: "Hero Background Color",
      type: "string",
      description: "Background color for the hero section (used when no image is set)",
      options: {
        list: [
          // Neutrals
          { title: "Neutral 50 (Light Cream)", value: "neutral-50" },
          { title: "Neutral 100 (Warm Off-White)", value: "neutral-100" },
          { title: "Neutral 200 (Light Beige)", value: "neutral-200" },
          { title: "Neutral 300 (Medium Beige)", value: "neutral-300" },
          // Wood Tones
          { title: "Wood 50 (Saddle Brown)", value: "wood-50" },
          { title: "Wood 100 (Sienna)", value: "wood-100" },
          { title: "Wood 200 (Rosy Brown)", value: "wood-200" },
          { title: "Wood 300 (Charcoal)", value: "wood-300" },
          // Primary (Rust/Reddish-brown)
          { title: "Primary 50 (Light Pink)", value: "primary-50" },
          { title: "Primary 100 (Pale Red)", value: "primary-100" },
          { title: "Primary 200 (Light Coral)", value: "primary-200" },
          { title: "Primary 300 (Coral)", value: "primary-300" },
          { title: "Primary 400 (Medium Rust)", value: "primary-400" },
          { title: "Primary 500 (Rust)", value: "primary-500" },
          { title: "Primary 600 (Deep Rust)", value: "primary-600" },
          // Secondary (Teal/Aqua)
          { title: "Secondary 50 (Light Teal)", value: "secondary-50" },
          { title: "Secondary 100 (Pale Teal)", value: "secondary-100" },
          { title: "Secondary 200 (Light Aqua)", value: "secondary-200" },
          { title: "Secondary 300 (Aqua)", value: "secondary-300" },
          { title: "Secondary 400 (Cyan)", value: "secondary-400" },
          { title: "Secondary 500 (Teal)", value: "secondary-500" },
          { title: "Secondary 600 (Medium Teal)", value: "secondary-600" },
          // Accent Colors
          { title: "Accent Navy 500 (Deep Navy)", value: "accent-navy-500" },
          { title: "Accent Coral 500 (Coral)", value: "accent-coral-500" },
          { title: "Accent Burgundy 500 (Dusty Rose)", value: "accent-burgundy-500" },
          { title: "Accent Gold 500 (Gold)", value: "accent-gold-500" },
          // Artwork Colors
          { title: "Artwork Blue 200 (Light Blue)", value: "artwork-blue-200" },
          { title: "Artwork Blue 500 (Blue)", value: "artwork-blue-500" },
          { title: "Artwork Teal 200 (Teal)", value: "artwork-teal-200" },
          { title: "Artwork Teal 500 (Deep Teal)", value: "artwork-teal-500" },
          // Natural
          { title: "Natural Green 500 (Forest Green)", value: "natural-green-500" },
        ],
      },
      initialValue: "neutral-50",
    },
  ],
  preview: {
    select: {
      city: "location.city",
      state: "location.state",
    },
    prepare({ city, state }) {
      return {
        title: "Practice Details",
        subtitle: city && state ? `${city}, ${state}` : "Practice Information",
      };
    },
  },
};
