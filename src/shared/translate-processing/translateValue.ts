import { translatte } from '@/shared/translate/translate';
import { i18nConfig, Locale } from '@/locales/i18n-config';

type Props = (
  text: string | Record<string, any> | null,
  to: Locale
) => Promise<string | Record<string, any> | null>;

export const translateValue: Props = async (text, to) => {
  if (typeof text === 'string') {
    const translatedText = await translatte({
      text,
      to,
      from: i18nConfig.defaultLocale
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
