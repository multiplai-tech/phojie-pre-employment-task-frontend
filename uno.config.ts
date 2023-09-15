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
      'nav-link': 'leading-6 justify-start px-4 gap-x-3 rounded-md',
    },
    [/^nav-link-active-text(-(\S+))?$/, ([, , c = 'primary']) => `bg-gray-200/90 dark:bg-gray-900/90 text-${c}-600 dark:text-${c}-500`],
    [/^nav-link-inactive-text(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-800 dark:text-${c}-100`],
    [/^nav-link-text(-(\S+))?$/, ([, , c = 'primary']) => `hover:bg-gray-200/90 hover:dark:bg-gray-900/90 hover:text-${c}-600 dark:hover:text-${c}-500`],

    [/^badge-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-400 dark:bg-${c}-600 n-${c}-100 dark:n-${c}-50`],
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
