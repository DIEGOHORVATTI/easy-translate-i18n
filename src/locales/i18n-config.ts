import { SupportedLanguage } from '@/shared/translate/language';

export const i18nConfig = {
  defaultLocale: 'pt-BR',
  locales: ['pt-BR', 'en', 'es'] satisfies Array<SupportedLanguage>
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];
