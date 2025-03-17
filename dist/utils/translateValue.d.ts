import type { SupportedLanguage } from './languages';
type Props = (text: string | Record<string, any> | null, to: SupportedLanguage) => Promise<string | Record<string, any> | null>;
export declare const translateValue: Props;
export {};
