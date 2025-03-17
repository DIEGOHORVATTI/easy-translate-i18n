import path from 'node:path';
import { config } from '@/config';

export function getLocalePath(locale: string): string {
  const pattern = config.path;
  const localePattern = '{{locale}}';

  const relativePath = pattern.replace(localePattern, locale);
  return path.resolve(process.cwd(), relativePath);
}
