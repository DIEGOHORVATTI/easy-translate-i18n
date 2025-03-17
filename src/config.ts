import { resolve } from 'node:path';
import { existsSync } from 'node:fs';

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

  const existingConfigPaths = configPaths.filter((configPath) => {
    const fullPath = resolve(process.cwd(), configPath);

    return existsSync(fullPath);
  });

  for (const configPath of existingConfigPaths) {
    const fullPath = resolve(process.cwd(), configPath);

    console.log(`Loading config from ${configPath}`);
    try {
      return require(fullPath);
    } catch (error) {
      console.warn(`Failed to load config from ${configPath}:`, error);
    }
  }

  return {};
}

export const config: Config = {
  ...defaultConfig,
  ...loadExternalConfig()
};
