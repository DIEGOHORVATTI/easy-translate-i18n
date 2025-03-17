import { SupportedLanguage } from './languages';
type Props = (existingObj: Record<string, any>, newObj: Record<string, any>, value: SupportedLanguage) => Promise<void>;
export declare const updateNestedKeys: Props;
export {};
