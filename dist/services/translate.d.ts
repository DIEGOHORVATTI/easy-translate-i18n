import { SupportedLanguage } from '@/utils/languages';
export type TranslationOptions = {
    text: string;
    from: SupportedLanguage;
    to: SupportedLanguage;
};
export declare const translatte: ({ text, from, to }: TranslationOptions) => Promise<any>;
