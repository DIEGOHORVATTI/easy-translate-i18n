"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "translateValue", {
    enumerable: true,
    get: function() {
        return translateValue;
    }
});
const _translate = require("@/services/translate");
const _config = require("@/config");
const translateValue = async (text, to)=>{
    if (typeof text === 'string') {
        const translatedText = await (0, _translate.translatte)({
            text,
            to,
            from: _config.config.defaultLocale
        });
        return translatedText;
    } else if (text !== null && typeof text === 'object') {
        const translatedObject = {};
        for (const key of Object.keys(text)){
            translatedObject[key] = await translateValue(text[key], to);
        }
        return translatedObject;
    }
    return text;
};
