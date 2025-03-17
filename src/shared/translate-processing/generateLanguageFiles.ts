import { languageList } from '../../locales/shared/languageList';

import { createLanguageFile } from './createLanguageFile';

export const generateLanguageFiles = async (): Promise<void> => {
  const totalLanguages = languageList.length;

  for (let index = 0; index < totalLanguages; index++) {
    const currentLanguage = {
      ...languageList[index],
      value: languageList[index].value
    };

    console.log(`\nArquivo de output: ${currentLanguage.value}\n`);

    await createLanguageFile(currentLanguage, totalLanguages, index);
  }
};
