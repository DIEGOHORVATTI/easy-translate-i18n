import { Config } from './types/Config';

export const i18nConfig: Config = {
  defaultLocale: 'pt-BR',
  path: './src/locales/{{locale}}.json',
  locales: ['pt-BR', 'en', 'es']
};
