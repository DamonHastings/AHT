import { defineDocuments, defineLocations } from 'sanity/presentation'

/** Maps page documents to frontend routes for the Presentation tool */
export const locations = {
  page: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => ({
      locations: [
        {
          title: doc.title,
          href: doc.slug === 'home' ? '/' : `/${doc.slug}`,
        },
      ],
    }),
  }),
}

/** Documents to open when Presentation navigates to a URL */
export const mainDocuments = defineDocuments([
  { route: '/', filter: `_type == "page" && slug.current == "home"` },
  { route: '/about', filter: `_type == "page" && slug.current == "about"` },
  { route: '/services', filter: `_type == "page" && slug.current == "services"` },
  { route: '/contact', filter: `_type == "page" && slug.current == "contact"` },
])
