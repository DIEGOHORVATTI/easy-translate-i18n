import { Locale } from '@/locales/i18n-config';

import es from '../es.json';
import ptBR from '../pt-BR.json';
import en from '../en.json';

/**
 * @description Aqui é onde é feito a importação dos arquivos de tradução
 * @tutorial ATENÇÃO: Se algum desses arquivos estiverem com erro é porque tem que rodar o comando
 * `yarn translate´ assim ele gera as traduções para todos os idiomas com base no arquivo pt-BR.json
 */
export const langResources: Record<
  Locale,
  Record<'translations', typeof ptBR>
> = {
  es: { translations: es },
  'pt-BR': { translations: ptBR },
  en: { translations: en }
};
