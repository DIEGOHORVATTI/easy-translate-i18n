import { generateLanguageFiles } from './utils/generateLanguageFiles';

generateLanguageFiles()
  .then(() => console.log('Processo concluído.'))
  .catch((error) => console.error('Erro ao gerar arquivos de idiomas:', error));
