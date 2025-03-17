import { Locale } from '@/shared/translate/config/i18n';

import { translateValue } from './translateValue';

type Props = (
  existingObj: Record<string, any>,
  newObj: Record<string, any>,
  value: Locale
) => Promise<void>;

export const updateNestedKeys: Props = async (existingObj, newObj, value) => {
  for (const key in newObj) {
    if (Object.prototype.hasOwnProperty.call(newObj, key)) {
      // Se a chave não existir em existingObj, adiciona
      if (!(key in existingObj)) {
        if (typeof newObj[key] === 'object' && newObj[key] !== null) {
          // Se for um objeto, cria um novo objeto vazio no existingObj
          existingObj[key] = {};
          await updateNestedKeys(existingObj[key], newObj[key], value);
        } else {
          // Se não for um objeto, traduz e adiciona
          existingObj[key] = await translateValue(newObj[key], value);
        }
      } else if (typeof newObj[key] === 'object' && newObj[key] !== null) {
        // Se a chave já existe e é um objeto, verifica aninhados
        await updateNestedKeys(existingObj[key], newObj[key], value);
      }
    }
  }
};
