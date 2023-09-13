import type { AppInfo, BuildInfo } from '~~/types'
import { APP_INFO } from '~/constants/index'

export function useBuildInfo() {
  return useAppConfig().buildInfo as BuildInfo
}

export function useAppInfo() {
  return APP_INFO as AppInfo
}
