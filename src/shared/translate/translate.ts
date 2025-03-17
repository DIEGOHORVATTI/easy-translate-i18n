import axios from 'axios';

import { Locale } from '@/locales/i18n-config';

export type TranslationOptions = {
  text: string;
  from: Locale;
  to: Locale;
};

export const translatte = async ({ text, from, to }: TranslationOptions) =>
  axios
    .post<string>('translate-google-api-v1.vercel.app/translate', {
      text,
      from,
      to
    })
    .then((response) => {
      console.log(response?.data);

      return response.data;
    })
    .catch((error) => {
      console.log(JSON.stringify(error, null, 2));

      throw new Error(error);
    });
