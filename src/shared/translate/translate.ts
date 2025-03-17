import axios from 'axios';

import { Locale } from '@/shared/translate/i18n-config';

export type TranslationOptions = {
  text: string;
  from: Locale;
  to: Locale;
};

export const translatte = async ({ text, from, to }: TranslationOptions) =>
  axios
    .post<string>('https://translate-google-api-v1.vercel.app/translate', {
      text,
      from,
      to
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
