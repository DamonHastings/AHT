// Icon library for focus area cards
// Minimalistic line illustrations
import React from "react";

const icons = {
  brain: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a9 9 0 0 0-9 9c0 3.5 2 6.5 5 8 0-3 1-5 4-5s4 2 4 5c3-1.5 5-4.5 5-8a9 9 0 0 0-9-9z" />
      <path d="M12 11c-1.5 0-2.5-1-2.5-2.5S10.5 6 12 6s2.5 1 2.5 2.5S13.5 11 12 11z" />
      <circle cx="9" cy="9" r="0.5" fill="currentColor" />
      <circle cx="15" cy="9" r="0.5" fill="currentColor" />
    </svg>
  ),
  heart: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  people: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  sun: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  shield: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  unlock: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
  sparkles: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 3l0.75 2.25L22 6l-2.25 0.75L19 9l-0.75-2.25L16 6l2.25-0.75L19 3z" />
      <path d="M19 16l0.75 2.25L22 19l-2.25 0.75L19 22l-0.75-2.25L16 19l2.25-0.75L19 16z" />
    </svg>
  ),
  plant: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-8" />
      <path d="M7 12c-1.5-3-1.5-7 0-9 0 0 3 1 4 3s3 3 3 3" />
      <path d="M17 12c1.5-3 1.5-7 0-9 0 0-3 1-4 3s-3 3-3 3" />
      <path d="M9 16c-1-1-2-3-2-5" />
      <path d="M15 16c1-1 2-3 2-5" />
    </svg>
  ),
  meditation: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8c-3 0-5 2-5 5v2" />
      <path d="M12 8c3 0 5 2 5 5v2" />
      <path d="M7 15c-2 1-3 3-3 5" />
      <path d="M17 15c2 1 3 3 3 5" />
      <line x1="12" y1="13" x2="12" y2="20" />
    </svg>
  ),
  wave: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12c0-2 1-4 3-4s3 2 3 4-1 4-3 4-3-2-3-4z" />
      <path d="M8 12c0-2 1-4 3-4s3 2 3 4-1 4-3 4-3-2-3-4z" />
      <path d="M14 12c0-2 1-4 3-4s3 2 3 4-1 4-3 4-3-2-3-4z" />
    </svg>
  ),
  compass: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        fill="currentColor"
        opacity="0.2"
      />
      <line x1="12" y1="2" x2="12" y2="6" />
    </svg>
  ),
  target: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  // Profile credentials
  graduation: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  license: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  book: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
    </svg>
  ),
};

// Icon name mapping for common use cases
const iconMap = {
  // Mental health
  anxiety: "brain",
  stress: "wave",
  depression: "sun",
  mental: "brain",

  // Emotional/Relationship
  trauma: "shield",
  ptsd: "shield",
  relationship: "people",
  relationships: "people",
  love: "heart",
  family: "people",

  // Growth/Development
  growth: "plant",
  "self-esteem": "sparkles",
  confidence: "sparkles",
  habit: "unlock",
  habits: "unlock",
  addiction: "unlock",

  // Wellness
  mindfulness: "meditation",
  meditation: "meditation",
  wellness: "meditation",
  balance: "wave",

  // General
  goal: "target",
  goals: "target",
  direction: "compass",
  purpose: "compass",
};

export { icons, iconMap };
