/**
 * Default FAQ items for the home page. Kept in its own module (not the Faq
 * component file) so both the component and the FAQPage JSON-LD builder can
 * import it without tripping react-refresh's component-only-export rule.
 */
export const DEFAULT_FAQ_ITEMS = [
  {
    q: "What happens in a free consultation?",
    a: "It's a short (about 15-minute) phone call, no commitment. We talk about what's bringing you in and what you're hoping for, and you get a feel for me. If it seems like a fit, we schedule a first session; if not, I'm glad to point you toward someone who may be a better match.",
  },
  {
    q: "How much do sessions cost?",
    a: "Current rates are shared during your free consultation (and listed in the Fees section if posted). The consultation itself is free, and there's no obligation to continue.",
  },
  {
    q: "Do you take insurance?",
    a: "I'm an out-of-network provider, which means I don't bill insurance directly. I can provide a monthly superbill — a detailed receipt — that you can submit to your insurance for possible partial reimbursement if your plan includes out-of-network mental health benefits.",
  },
  {
    q: "What if cost is a barrier?",
    a: "A limited number of reduced-fee / sliding-scale spots are available. If cost is a concern, please mention it when you reach out and we can talk it through.",
  },
  {
    q: "Do you meet in person or by telehealth?",
    a: "Both, when available — in person in Davis, CA, and secure telehealth for clients in California. You can note your preference when you request a consultation.",
  },
  {
    q: "Do I need to be “good at art” for expressive arts therapy?",
    a: "Not at all. Expressive arts therapy isn't about skill or making something beautiful — it's about using drawing, movement, metaphor, or play as another way in when words alone are hard. We can also simply talk. Everything is an invitation, never a requirement.",
  },
];
