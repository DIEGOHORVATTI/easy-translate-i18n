"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "start", {
    enumerable: true,
    get: function() {
        return start;
    }
});
const _config = require("@/config");
const _createLanguageFile = require("./shared/createLanguageFile");
const start = async ()=>{
    const totalLanguages = _config.config.locales.length;
    for(let index = 0; index < totalLanguages; index++){
        const value = _config.config.locales[index];
        console.log(`\n------------------------\nArquivo de output: ${value}`);
        await (0, _createLanguageFile.createLanguageFile)(value, totalLanguages, index);
    }
};
start().then(()=>{
    console.log('\nTradução concluída!');
}).catch((error)=>{
    console.error('Ocorreu um erro:', error);
});
