export const i18nConfig = {
  defaultLocale: 'pt-BR',
  locales: ['pt-BR', 'en', 'es']
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];
