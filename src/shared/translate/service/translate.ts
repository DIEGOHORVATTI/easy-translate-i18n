import axios from 'axios';

import { Locale } from '@/shared/translate/config/i18n';

export type TranslationOptions = {
  text: string;
  from: Locale;
  to: Locale;
};

export const translatte = async ({ text, from, to }: TranslationOptions) =>
  fetch(`https://translate-google-api-v1.vercel.app/translate`, {
    method: 'POST',
    body: JSON.stringify({
      text,
      from,
      to
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
