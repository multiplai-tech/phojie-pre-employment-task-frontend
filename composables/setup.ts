export function useSetupPageHeader() {
  const appInfo = useAppInfo()
  const buildInfo = useBuildInfo()

  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      // description
      { name: 'description', content: appInfo.description },
      // open graph social image
      { property: 'og:title', content: appInfo.name },
      { property: 'og:description', content: appInfo.description },
      { property: 'og:site_name', content: appInfo.name },
      { property: 'og:image', content: appInfo.ogImageLink },
      { property: 'twitter:site', content: appInfo.twitterSite },
    ],
    titleTemplate: (title) => {
      let titleTemplate = title ?? ''

      if (titleTemplate.length)
        titleTemplate += ' | '

      titleTemplate += appInfo.name

      if (buildInfo.env !== 'release')
        titleTemplate += ` (${buildInfo.env})`

      // eg "Home | My App (dev)"
      return titleTemplate
    },
  })
}
