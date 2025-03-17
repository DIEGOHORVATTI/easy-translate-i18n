import { Locale } from '@/shared/translate/i18n-config';

type Props = {
  label: string;
  value: Locale;
  icon: string;
};

export const languageList: Array<Props> = [
  {
    label: 'Português Brasil',
    value: 'pt-BR',
    icon: 'circle-flags:br'
  },
  {
    label: 'Spanish',
    value: 'es',
    icon: 'circle-flags:es'
  },
  {
    label: 'English',
    value: 'en',
    icon: 'circle-flags:us'
  }
];
