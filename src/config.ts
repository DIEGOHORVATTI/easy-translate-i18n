import * as fs from 'fs';
import * as path from 'path';

import type { Config } from './types/Config';

const defaultConfig: Config = {
  defaultLocale: 'pt-BR',
  path: './src/locales/{{locale}}.json',
  locales: ['en']
};

function loadExternalConfig(): Partial<Config> {
  const configPaths = [
    'translate-i18n.config.js',
    'translate-i18n.config.json',
    '.translate-i18nrc',
    '.translate-i18nrc.json'
  ];

  for (const configPath of configPaths) {
    const fullPath = path.resolve(process.cwd(), configPath);
    if (fs.existsSync(fullPath)) {
      try {
        return require(fullPath);
      } catch (error) {
        console.warn(`Failed to load config from ${configPath}:`, error);
      }
    }
  }
  return {};
}

export const config: Config = {
  ...defaultConfig,
  ...loadExternalConfig()
};
