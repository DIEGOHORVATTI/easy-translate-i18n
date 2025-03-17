import fs from 'node:fs';
import path from 'node:path';

import { i18nConfig } from '@/config';

import { updateNestedKeys } from './utils/updateNestedKeys';
import { translateValue } from './utils/translateValue';
import { logProgress } from './utils/logProgress';

import type { SupportedLanguage } from '@/utils/languages';

const ptBrFilePath = path.resolve(
  __dirname,
  `./locales/${i18nConfig.defaultLocale}.json`
);

const translations: Record<string, any> = JSON.parse(
  fs.readFileSync(ptBrFilePath, 'utf-8')
);

export const createLanguageFile = async (
  value: SupportedLanguage,
  total: number,
  index: number
): Promise<void> => {
  const filePath = path.resolve(__dirname, `./locales/${value}.json`);

  const existingContent: Record<string, any> = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : {};

  const totalTranslations = Object.keys(translations).length;

  for (let i = 0; i < totalTranslations; i++) {
    const key = Object.keys(translations)[i];
    const ptBrValue = translations[key];

    // Se a chave já existe, faça a verificação
    if (key in existingContent) {
      // Se o valor existente for um objeto, verifique chaves aninhadas
      if (
        typeof existingContent[key] === 'object' &&
        existingContent[key] !== null
      ) {
        // Atualiza chaves aninhadas
        await updateNestedKeys(existingContent[key], translations[key], value);
      } else {
        // Caso contrário, apenas registre o progresso
        logProgress(index, totalTranslations, i, total);
      }
    } else {
      // Se a chave não existir, traduza
      existingContent[key] = await translateValue(ptBrValue, value);
    }

    // Escreve no arquivo as linhas novas
    fs.writeFileSync(filePath, JSON.stringify(existingContent, null, 2));
    logProgress(index, totalTranslations, i, total);
  }
};
