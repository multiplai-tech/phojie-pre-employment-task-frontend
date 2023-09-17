import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetUna from '@una-ui/preset'

export default {
  safelist: [
    'badge-solid-error',
  ],
  shortcuts: [
    /**
     * We override the `una-ui` config here.
     * @param root0
     * @param root0."0"
     * @param root0."1"
     * @param root0."2"
     */
    {
      'indicator-center-left': 'left-0 !top-1.8 !ml-1.2em',

      'nav-link': 'leading-6 justify-start px-4 gap-x-3 text-$c-gray-600 rounded-md font-light',
    },
    [/^nav-link-active-text(-(\S+))?$/, ([, , c = 'primary']) => `bg-gray-200/70 dark:bg-gray-900/70 font-medium text-${c}-600 dark:text-${c}-500`],
    [/^nav-link-inactive-text(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-600 dark:text-${c}-300`],
    [/^nav-link-text(-(\S+))?$/, ([, , c = 'primary']) => `hover:bg-gray-200/70 hover:dark:bg-gray-900/70 hover:text-${c}-600 dark:hover:text-${c}-500`],

    [/^badge-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-500 dark:bg-${c}-600 n-${c}-100 dark:n-${c}-50`],
  ],
  preflight: false,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetUna(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
}
