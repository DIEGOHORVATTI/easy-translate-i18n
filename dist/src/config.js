"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "config", {
    enumerable: true,
    get: function() {
        return config;
    }
});
const _nodepath = require("node:path");
const _nodefs = require("node:fs");
const defaultConfig = {
    defaultLocale: 'pt-BR',
    path: './src/locales/{{locale}}.json',
    locales: [
        'en'
    ]
};
function loadExternalConfig() {
    const configPaths = [
        'translate-i18n.config.js',
        'translate-i18n.config.json',
        '.translate-i18nrc',
        '.translate-i18nrc.json'
    ];
    for (const configPath of configPaths){
        const fullPath = (0, _nodepath.resolve)(process.cwd(), configPath);
        if ((0, _nodefs.existsSync)(fullPath)) {
            try {
                return require(fullPath);
            } catch (error) {
                console.warn(`Failed to load config from ${configPath}:`, error);
            }
        }
    }
    return {};
}
const config = {
    ...defaultConfig,
    ...loadExternalConfig()
};
