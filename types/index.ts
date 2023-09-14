import type { z } from 'zod'

import type { loginSchema } from '~/schemas/auth'

/**
 * We use this file to define types that are used across the app,
 * we can extract them to a separate file if they become get bloated
 */

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

export interface User {
  readonly id: number
  name: string
  email: string
  readonly emailVerifiedAt: string
  readonly createdAt: string
  readonly updatedAt: string
}

/**
 * List of schemas types
 * @see '~/schemas'
 */
export type LoginCredentials = z.infer<typeof loginSchema>
