"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createLanguageFile", {
    enumerable: true,
    get: function() {
        return createLanguageFile;
    }
});
const _nodefs = /*#__PURE__*/ _interop_require_default(require("node:fs"));
const _nodepath = /*#__PURE__*/ _interop_require_default(require("node:path"));
const _config = require("@/config");
const _getLocalePath = require("../utils/getLocalePath");
const _updateNestedKeys = require("../utils/updateNestedKeys");
const _translateValue = require("../utils/translateValue");
const _logProgress = require("../utils/logProgress");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ptBrFilePath = (0, _getLocalePath.getLocalePath)(_config.config.defaultLocale);
const translations = JSON.parse(_nodefs.default.readFileSync(ptBrFilePath, 'utf-8'));
const createLanguageFile = async (value, total, index)=>{
    const filePath = (0, _getLocalePath.getLocalePath)(value);
    const directory = _nodepath.default.dirname(filePath);
    if (!_nodefs.default.existsSync(directory)) {
        _nodefs.default.mkdirSync(directory, {
            recursive: true
        });
    }
    const existingContent = _nodefs.default.existsSync(filePath) ? JSON.parse(_nodefs.default.readFileSync(filePath, 'utf-8')) : {};
    const totalTranslations = Object.keys(translations).length;
    for(let i = 0; i < totalTranslations; i++){
        const key = Object.keys(translations)[i];
        const ptBrValue = translations[key];
        if (key in existingContent) {
            if (typeof existingContent[key] === 'object' && existingContent[key] !== null) {
                await (0, _updateNestedKeys.updateNestedKeys)(existingContent[key], translations[key], value);
            } else {
                (0, _logProgress.logProgress)(index, totalTranslations, i, total);
            }
        } else {
            existingContent[key] = await (0, _translateValue.translateValue)(ptBrValue, value);
        }
        _nodefs.default.writeFileSync(filePath, JSON.stringify(existingContent, null, 2));
        (0, _logProgress.logProgress)(index, totalTranslations, i, total);
    }
};
