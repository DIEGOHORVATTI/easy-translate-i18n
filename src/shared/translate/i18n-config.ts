import es from '@/locales/es.json';
import ptBR from '@/locales/pt-BR.json';
import en from '@/locales/en.json';

import { SupportedLanguage } from '@/shared/translate/language';

export const i18nConfig = {
  defaultLocale: 'pt-BR',
  locales: ['pt-BR', 'en', 'es'] satisfies Array<SupportedLanguage>
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];

type Resources = Record<Locale, Record<'translations', typeof ptBR>>;
/**
 * @description Aqui é onde é feito a importação dos arquivos de tradução
 * @tutorial ATENÇÃO: Se algum desses arquivos estiverem com erro é porque tem que rodar o comando
 * `yarn translate´ assim ele gera as traduções para todos os idiomas com base no arquivo pt-BR.json
 */
export const langResources: Resources = {
  es: {
    translations: es
  },
  'pt-BR': {
    translations: ptBR
  },
  en: {
    translations: en
  }
};
