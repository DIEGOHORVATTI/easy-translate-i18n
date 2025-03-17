export function logProgress(
  index: number,
  totalTranslations: number,
  i: number,
  total: number
): void {
  const processedIndex = index * totalTranslations + i + 1;
  const totalTranslationsSquared = total * totalTranslations;

  const percentage = (
    (processedIndex / totalTranslationsSquared) *
    100
  ).toFixed(2);
  console.log(
    `Progresso: ${processedIndex}/${totalTranslationsSquared} (${percentage}%)`
  );
}
