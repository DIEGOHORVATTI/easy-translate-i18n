import { SupportedLanguage } from '@/utils/languages';

export type Config = {
  path: string;
  defaultLocale: SupportedLanguage;
  locales: Array<SupportedLanguage>;
};
