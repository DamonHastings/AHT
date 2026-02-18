// Custom desk structure for better organization in Sanity Studio

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Pages section
      S.listItem()
        .title('Pages')
        .icon(() => '📄')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('All Pages')
                .icon(() => '📋')
                .child(
                  S.documentTypeList('page')
                    .title('All Pages')
                    .filter('_type == "page"')
                ),
              S.divider(),
              S.listItem()
                .title('Published Pages')
                .icon(() => '✅')
                .child(
                  S.documentList()
                    .title('Published Pages')
                    .filter('_type == "page" && published == true')
                ),
              S.listItem()
                .title('Draft Pages')
                .icon(() => '📝')
                .child(
                  S.documentList()
                    .title('Draft Pages')
                    .filter('_type == "page" && published != true')
                ),
            ])
        ),

      S.divider(),

      // Site Configuration
      S.listItem()
        .title('Site Configuration')
        .icon(() => '⚙️')
        .child(
          S.list()
            .title('Site Configuration')
            .items([
              S.listItem()
                .title('Site Settings')
                .icon(() => '🔧')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('Navigation')
                .icon(() => '🧭')
                .child(
                  S.document()
                    .schemaType('navigation')
                    .documentId('navigation')
                ),
              S.listItem()
                .title('Footer Content')
                .icon(() => '🦶')
                .child(
                  S.document()
                    .schemaType('footerContent')
                    .documentId('footerContent')
                ),
            ])
        ),

      S.divider(),

      // Profile & Practice
      S.listItem()
        .title('Profile & Practice')
        .icon(() => '👤')
        .child(
          S.list()
            .title('Profile & Practice')
            .items([
              S.listItem()
                .title('Therapist Profile')
                .icon(() => '👨‍⚕️')
                .child(
                  S.documentTypeList('therapist')
                    .title('Therapist Profiles')
                ),
              S.listItem()
                .title('Practice Details')
                .icon(() => '🏢')
                .child(
                  S.document()
                    .schemaType('practice')
                    .documentId('practice')
                ),
              S.listItem()
                .title('Qualifications')
                .icon(() => '🎓')
                .child(
                  S.documentTypeList('qualification')
                    .title('Qualifications')
                ),
              S.listItem()
                .title('Specialties')
                .icon(() => '🎯')
                .child(
                  S.documentTypeList('specialty')
                    .title('Specialties')
                ),
              S.listItem()
                .title('Treatment Approaches')
                .icon(() => '💚')
                .child(
                  S.documentTypeList('treatmentApproach')
                    .title('Treatment Approaches')
                ),
            ])
        ),

      S.divider(),

      // Content Blocks
      S.listItem()
        .title('Content Blocks')
        .icon(() => '🧩')
        .child(
          S.documentTypeList('contentBlock')
            .title('Content Blocks')
        ),

      S.divider(),

      // Social Links
      S.listItem()
        .title('Social Links')
        .icon(() => '🔗')
        .child(
          S.documentTypeList('socialLinks')
            .title('Social Links')
        ),
    ])

export default deskStructure
