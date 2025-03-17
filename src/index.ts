import { i18nConfig } from '@/config';

import { createLanguageFile } from './createLanguageFile';

export const start = async (): Promise<void> => {
  const totalLanguages = i18nConfig.locales.length;

  for (let index = 0; index < totalLanguages; index++) {
    const value = i18nConfig.locales[index];

    console.log(`\n------------------------\nArquivo de output: ${value}`);

    await createLanguageFile(value, totalLanguages, index);
  }
};

start()
  .then(() => {
    console.log('\nTradução concluída!');
  })
  .catch((error) => {
    console.error('Ocorreu um erro:', error);
  });
