import therapist from './therapist'
import practice from './practice'
import qualification from './qualification'
import specialty from './specialty'
import treatmentApproach from './treatmentApproach'
import siteSettings from './siteSettings'
import navigation from './navigation'
import footerContent from './footerContent'
import socialLinks from './socialLinks'
import contentBlock from './contentBlock'

// Shared objects
import seo from './objects/seo'
import defaultSeo from './objects/defaultSeo'

// Page builder schemas
import page from './page'
import {
  heroBlock,
  pullQuoteBlock,
  whoIHelpBlock,
  theSpaceBlock,
  expressiveArtsBlock,
  meetBlock,
  feelingsCheckInBlock,
  faqBlock,
  feesBlock,
  ctaBlock,
  proseSectionBlock,
  spacerBlock,
  focusAreasBlock,
} from './pageBlocks'
import {
  homePageTemplate,
  aboutPageTemplate,
  servicesPageTemplate,
  contactPageTemplate,
} from './pageTemplates'

export const schemaTypes = [
  // Core documents
  therapist,
  practice,
  qualification,
  specialty,
  treatmentApproach,
  siteSettings,
  navigation,
  footerContent,
  socialLinks,
  contentBlock,

  // Shared objects
  seo,
  defaultSeo,

  // Page builder
  page,

  // Page blocks (objects used within pages)
  heroBlock,
  pullQuoteBlock,
  whoIHelpBlock,
  theSpaceBlock,
  expressiveArtsBlock,
  meetBlock,
  feelingsCheckInBlock,
  faqBlock,
  feesBlock,
  ctaBlock,
  proseSectionBlock,
  spacerBlock,
  focusAreasBlock,

  // Page templates (objects for template-based pages)
  homePageTemplate,
  aboutPageTemplate,
  servicesPageTemplate,
  contactPageTemplate,
]
