import type { AppInfo } from '~/types'

/**
 * I prefer to keep the app info in a separate file so that it's easier to update.
 * This is also useful for displaying the app info across the app.
 */
export const APP_INFO: AppInfo = {
  name: 'GoTeam - Offshore Outsourcing Company in the Philippines',
  shortName: 'GoTeam',
  description: 'GoTeam is an offshore outsourcing company in the Philippines that provides exceptional services to help businesses achieve their goals.',
  ogImageLink: 'og.png',
  twitterSite: '@goteam',
}
