# easy-translate-i18n

Lightweight CLI tool that automatically translates your JSON i18n files using Google Translate. It detects missing keys across locales and fills them in — preserving existing translations and nested structures.

## Features

- Automatic detection and translation of missing keys
- Supports 200+ languages via Google Translate
- Handles nested JSON objects recursively
- Preserves interpolation variables (e.g., `{{count}}`)
- Smart merging — never overwrites existing translations
- Auto-creates directories and locale files as needed
- Real-time progress tracking
- Fast compilation with SWC

## Installation

```bash
npm install easy-translate-i18n
# or
yarn add easy-translate-i18n
# or
pnpm add easy-translate-i18n
```

## Quick Start

1. Create your source locale file (e.g., `src/locales/pt-BR.json`):

```json
{
  "greeting": "Olá",
  "save": "Salvar",
  "countEmails": "Quantidade de emails: {{count}}",
  "settings": {
    "theme": "Tema",
    "language": "Idioma"
  }
}
```

2. Create a config file `translate-i18n.config.json` in your project root:

```json
{
  "defaultLocale": "pt-BR",
  "path": "./src/locales/{{locale}}.json",
  "locales": ["pt-BR", "en", "es", "fr"]
}
```

3. Run:

```bash
npx easy-translate-i18n
```

The tool reads the source locale, detects missing keys in each target locale, translates them, and writes the updated files.

## Configuration

Supported config file formats (loaded in priority order):

| File | Format |
| --- | --- |
| `translate-i18n.config.js` | CommonJS module |
| `translate-i18n.config.json` | JSON |
| `.translate-i18nrc` | JSON |
| `.translate-i18nrc.json` | JSON |

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultLocale` | `string` | `'pt-BR'` | Source language code used as the base for translations |
| `path` | `string` | `'./src/locales/{{locale}}.json'` | File path template — `{{locale}}` is replaced with the locale code |
| `locales` | `string[]` | `['en']` | Target locale codes to generate translations for |

### JavaScript config example

```js
// translate-i18n.config.js
module.exports = {
  defaultLocale: 'en',
  path: './locales/{{locale}}.json',
  locales: ['pt-BR', 'es', 'fr', 'de', 'ja', 'zh-CN']
};
```

## How It Works

1. Reads the source locale file (`defaultLocale`)
2. For each target locale:
   - Loads the existing target file (or creates a new one)
   - Compares keys with the source file
   - Translates only the missing keys via Google Translate
   - Preserves all existing translations untouched
   - Writes the updated file to disk

Nested objects are handled recursively — new nested keys are translated while existing ones are preserved.

## Example Output

**Source** (`pt-BR.json`):
```json
{
  "name": "Nome",
  "email": "Email",
  "countEmails": "Quantidade de emails: {{count}}"
}
```

**Generated** (`en.json`):
```json
{
  "name": "Name",
  "email": "E-mail",
  "countEmails": "Number of emails: {{count}}"
}
```

## Supported Languages

200+ languages including: `en`, `es`, `fr`, `de`, `it`, `ja`, `ko`, `zh-CN`, `zh-TW`, `pt-BR`, `pt-PT`, `ar`, `hi`, `ru`, `tr`, `nl`, `pl`, `sv`, `da`, `fi`, `no`, `cs`, `ro`, `hu`, `el`, `th`, `vi`, `id`, `ms`, `uk`, `he`, `bg`, `hr`, `sk`, `sl`, `sr`, `lt`, `lv`, `et`, and many more.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT — see the [LICENSE](LICENSE) file for details.
