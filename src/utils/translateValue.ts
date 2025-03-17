import { translatte } from '@/services/translate';
import { config } from '@/config';

import type { SupportedLanguage } from './languages';

type Props = (
  text: string | Record<string, any> | null,
  to: SupportedLanguage
) => Promise<string | Record<string, any> | null>;

export const translateValue: Props = async (text, to) => {
  if (typeof text === 'string') {
    const translatedText = await translatte({
      text,
      to,
      from: config.defaultLocale
    });

    return translatedText;
  } else if (text !== null && typeof text === 'object') {
    const translatedObject: Record<string, any> = {};

    for (const key of Object.keys(text)) {
      translatedObject[key] = await translateValue(text[key], to);
    }

    return translatedObject;
  }

  return text;
};
