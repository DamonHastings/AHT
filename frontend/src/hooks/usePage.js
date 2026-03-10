import { useState, useEffect } from 'react';
import client, { isPreview } from '../utils/sanityClient';

/**
 * Hook to fetch a page from Sanity by slug
 * In preview mode, fetches draft content for visual editing
 * @param {string} slug - The page slug (e.g., 'about', 'home')
 * @returns {Object} - { page, loading, error }
 */
export function usePage(slug) {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setPage(null);
      setLoading(false);
      return;
    }

    const fetchPage = async () => {
      try {
        setLoading(true);
        setError(null);

        const publishedFilter = isPreview() ? '' : '&& published == true';
        const query = `*[_type == "page" && slug.current == $slug ${publishedFilter}][0]{
          _id,
          title,
          slug,
          metaTitle,
          metaDescription,
          template,
          components[]{
            ...,
            _type,
            _key
          },
          showHeader,
          showFooter,
          published,
          publishedAt
        }`;

        const fetchOptions = isPreview() ? { perspective: 'previewDrafts' } : {};
        const params = { slug };
        const result = await client.fetch(query, params, fetchOptions);

        setPage(result);

        // In preview/Presentation mode, subscribe to live updates for this page
        if (isPreview()) {
          const subscription = client
            .listen(
              '*[_type == "page" && slug.current == $slug][0]',
              params,
              {
                visibility: 'query',
                // We only need to know that something changed; we re-fetch below.
                includeResult: false,
              },
            )
            .subscribe(() => {
              client
                .fetch(query, params, fetchOptions)
                .then((next) => setPage(next))
                .catch((err) => {
                  console.error('Error refetching page after live update:', err);
                  setError(err.message);
                });
            });

          return () => {
            subscription.unsubscribe();
          };
        }
      } catch (err) {
        console.error('Error fetching page:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const maybeCleanup = fetchPage();

    return () => {
      if (typeof maybeCleanup === 'function') {
        maybeCleanup();
      }
    };
  }, [slug]);

  return { page, loading, error };
}

/**
 * Hook to fetch all published pages from Sanity
 * @returns {Object} - { pages, loading, error }
 */
export function usePages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        setLoading(true);
        setError(null);

        const query = `*[_type == "page" && published == true] | order(publishedAt desc){
          _id,
          title,
          slug,
          metaTitle,
          metaDescription,
          publishedAt
        }`;

        const result = await client.fetch(query);

        setPages(result);
      } catch (err) {
        console.error('Error fetching pages:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  return { pages, loading, error };
}
