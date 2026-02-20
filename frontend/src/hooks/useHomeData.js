import { useState, useEffect } from 'react';
import sanityClient from '../utils/sanityClient';

/**
 * Fetches all data needed for the homepage wireframe: therapist, specialties (for services carousel), and site settings.
 */
export function useHomeData() {
  const [therapist, setTherapist] = useState(null);
  const [specialties, setSpecialties] = useState([]);
  const [siteSettings, setSiteSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        setLoading(true);
        setError(null);

        const [therapistRes, specialtiesRes, siteRes] = await Promise.all([
          sanityClient.fetch(
            `*[_type == "therapist"][0]{
              _id,
              name,
              credentials,
              profileImage,
              welcomeMessage,
              philosophy,
              bio
            }`
          ),
          sanityClient.fetch(
            `*[_type == "specialty"] | order(category asc){
              _id,
              name,
              description
            }`
          ),
          sanityClient.fetch(
            `*[_type == "siteSettings"][0]{
              _id,
              title,
              businessName,
              copyrightText,
              "footer": footer->{
                _id,
                copyrightText,
                licenseText,
                columns,
                "socialLinks": socialLinks->{ links }
              },
              "navigation": navigation->{
                _id,
                items
              }
            }`
          ),
        ]);

        setTherapist(therapistRes);
        setSpecialties(specialtiesRes || []);
        setSiteSettings(siteRes);
      } catch (err) {
        console.error('Home data fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  /** Map specialties to PreviewScroll items: { title, description, icon } */
  const serviceItems =
    specialties.length > 0
      ? specialties.map((s) => ({
        title: s.name,
        description: s.description || '',
        icon: undefined,
      }))
      : [
        {
          title: 'Anxiety & Stress',
          description:
            'Learn effective strategies to manage anxiety, reduce stress, and develop healthy coping mechanisms for daily challenges.',
          icon: undefined,
        },
        {
          title: 'Trauma & PTSD',
          description:
            'Heal from traumatic experiences through compassionate, trauma-informed therapeutic approaches.',
          icon: undefined,
        },
        {
          title: 'Relationship Issues',
          description:
            'Improve communication, build healthier connections, and navigate relationship challenges.',
          icon: undefined,
        },
      ];

  return { therapist, specialties, siteSettings, serviceItems, loading, error };
}
