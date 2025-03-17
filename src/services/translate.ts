import { SupportedLanguage } from '@/utils/languages';

export type TranslationOptions = {
  text: string;
  from: SupportedLanguage;
  to: SupportedLanguage;
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
