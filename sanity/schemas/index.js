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
  heroComponent,
  identityQuoteComponent,
  philosophySectionComponent,
  focusAreasComponent,
  headshotProfileComponent,
  personalStatementComponent,
  textContentComponent,
  ctaButtonComponent,
  imageGalleryComponent,
  spacerComponent,
  previewScrollComponent,
  profileSectionComponent,
  consultationFormComponent,
  consultationFormWideComponent,
} from './pageComponents'
import {
  heroV3Component,
  pullQuoteV3Component,
  whoIHelpV3Component,
  theSpaceV3Component,
  expressiveV3Component,
  meetV3Component,
  feelingsCheckInV3Component,
  ctaV3Component,
} from './v3PageComponents'
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

  // Page components (objects used within pages)
  heroComponent,
  identityQuoteComponent,
  philosophySectionComponent,
  focusAreasComponent,
  headshotProfileComponent,
  personalStatementComponent,
  textContentComponent,
  ctaButtonComponent,
  imageGalleryComponent,
  spacerComponent,
  previewScrollComponent,
  profileSectionComponent,
  consultationFormComponent,
  consultationFormWideComponent,

  // V3 design system components
  heroV3Component,
  pullQuoteV3Component,
  whoIHelpV3Component,
  theSpaceV3Component,
  expressiveV3Component,
  meetV3Component,
  feelingsCheckInV3Component,
  ctaV3Component,

  // Page templates (objects for template-based pages)
  homePageTemplate,
  aboutPageTemplate,
  servicesPageTemplate,
  contactPageTemplate,
]
