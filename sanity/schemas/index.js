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
  ctaBlock,
  proseSectionBlock,
  spacerBlock,
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
  ctaBlock,
  proseSectionBlock,
  spacerBlock,

  // Page templates (objects for template-based pages)
  homePageTemplate,
  aboutPageTemplate,
  servicesPageTemplate,
  contactPageTemplate,
]
