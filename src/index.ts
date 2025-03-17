import { config } from '@/config';

import { createLanguageFile } from './shared/createLanguageFile';

export const start = async (): Promise<void> => {
  const totalLanguages = config.locales.length;

  for (let index = 0; index < totalLanguages; index++) {
    const value = config.locales[index];

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
