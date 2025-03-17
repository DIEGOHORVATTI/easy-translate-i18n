"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "logProgress", {
    enumerable: true,
    get: function() {
        return logProgress;
    }
});
function logProgress(index, totalTranslations, i, total) {
    const processedIndex = index * totalTranslations + i + 1;
    const totalTranslationsSquared = total * totalTranslations;
    const percentage = (processedIndex / totalTranslationsSquared * 100).toFixed(2);
    console.log(`Progresso: ${processedIndex}/${totalTranslationsSquared} (${percentage}%)`);
}
