"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getLocalePath", {
    enumerable: true,
    get: function() {
        return getLocalePath;
    }
});
const _nodepath = /*#__PURE__*/ _interop_require_default(require("node:path"));
const _config = require("@/config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getLocalePath(locale) {
    const pattern = _config.config.path;
    const localePattern = '{{locale}}';
    const relativePath = pattern.replace(localePattern, locale);
    return _nodepath.default.resolve(process.cwd(), relativePath);
}
