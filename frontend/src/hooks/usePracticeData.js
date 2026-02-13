import { useState, useEffect } from "react";
import sanityClient from "../utils/sanityClient";

export function usePracticeData() {
  const [practice, setPractice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPractice() {
      try {
        const query = `*[_type == "practice"][0]{
          _id,
          location,
          inPerson,
          telehealth,
          fees,
          paymentMethods,
          insuranceInfo,
          consultationOffer,
          consultationDuration,
          heroBackgroundImage,
          heroBackgroundColor
        }`;

        const data = await sanityClient.fetch(query);
        setPractice(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchPractice();
  }, []);

  return { practice, loading, error };
}
