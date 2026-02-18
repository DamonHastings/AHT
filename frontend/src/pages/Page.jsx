import { usePage } from '../hooks/usePage';
import PageRenderer from '../components/PageRenderer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useTherapistData } from '../hooks/useTherapistData';

/**
 * Generic page component that fetches and renders Sanity pages
 */
export default function Page({ slug }) {
  const { page, loading, error } = usePage(slug);
  const { therapist } = useTherapistData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-therapy-sand-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-therapy-burgundy-600 mx-auto mb-4"></div>
          <p className="text-therapy-burgundy-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-therapy-sand-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-therapy-burgundy-600 mb-4">Error Loading Page</h1>
          <p className="text-therapy-burgundy-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-therapy-sand-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-therapy-burgundy-600 mb-4">404</h1>
          <p className="text-therapy-burgundy-500 mb-6">Page not found</p>
          <a 
            href="/"
            className="inline-block bg-therapy-burgundy-600 text-white px-6 py-3 rounded-md hover:bg-therapy-burgundy-700 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-therapy-sand-50">
      {(page.showHeader !== false) && <Header therapist={therapist} />}
      <PageRenderer pageData={page} />
      {(page.showFooter !== false) && <Footer />}
    </div>
  );
}
