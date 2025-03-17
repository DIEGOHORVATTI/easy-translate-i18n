import path from 'node:path';
import { i18nConfig } from '@/config';

export function getLocalePath(locale: string): string {
  const pattern = i18nConfig.path;
  const localePattern = '{{locale}}';

  const relativePath = pattern.replace(localePattern, locale);
  return path.resolve(process.cwd(), relativePath);
}
