export interface BuildInfo {
  version: string
  commit: string
  shortCommit: string
  time: number
  branch: string
  env: 'preview' | 'canary' | 'dev' | 'release'
}

export interface AppInfo {
  name: string
  shortName: string
  description: string
  ogImageLink: string
  twitterSite: string
}
