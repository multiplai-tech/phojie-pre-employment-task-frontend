/* eslint-disable n/prefer-global/process */
import Git from 'simple-git'
import { isDevelopment } from 'std-env'

export { version } from '../package.json'

export const isPR = process.env.NUXT_ENV_VERCEL_GIT_COMMIT_REF?.startsWith('pull/') || false

export const gitBranch = process.env.NUXT_ENV_VERCEL_GIT_COMMIT_REF

export const isPreview = isPR || process.env.NUXT_ENV_VERCEL_ENV === 'preview' || process.env.NUXT_ENV_VERCEL_ENV === 'development'

const git = Git()

export async function getGitInfo() {
  const branch = gitBranch || await git.revparse(['--abbrev-ref', 'HEAD'])
  const commit = await git.revparse(['HEAD'])
  const shortCommit = await git.revparse(['--short=7', 'HEAD'])
  return { branch, commit, shortCommit }
}

export async function getEnv() {
  const { commit, shortCommit, branch } = await getGitInfo()
  const env = isDevelopment
    ? 'dev'
    : isPreview
      ? 'preview'
      : branch === 'main'
        ? 'canary'
        : 'release'
  return { commit, shortCommit, branch, env } as const
}
