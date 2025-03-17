# Easy-translate-i18n

Simple and fast internationalization (i18n) CLI tool for managing JSON translation files.

## Features

- 🚀 Fast compilation with SWC
- 📦 Easy configuration
- 🔄 Automatic missing translation detection
- 🌐 Multiple locale support
- ⚡ Command-line interface

## Installation

```bash
# npm
npm install translate-i18n

# yarn
yarn add translate-i18n

# pnpm
pnpm add translate-i18n
```

## Quick Start

1. Create a configuration file `translate-i18n.config.json`:

```json
{
  "defaultLocale": "pt-BR",
  "path": "./src/locales/{{locale}}.json",
  "locales": ["pt-BR", "en", "es"]
}
```

2. Run the translation tool:

```bash
npx translate-i18n
```

## Configuration

You can configure translate-i18n using any of these files:

- `translate-i18n.config.js`
- `translate-i18n.config.json`
- `.translate-i18nrc`
- `.translate-i18nrc.json`

### Configuration Options

| Option        | Type     | Default                         | Description                      |
| ------------- | -------- | ------------------------------- | -------------------------------- |
| defaultLocale | string   | 'pt-BR'                         | Source language for translations |
| path          | string   | './src/locales/{{locale}}.json' | Path template for locale files   |
| locales       | string[] | ['en']                          | List of target locales           |

## Usage Examples

### Basic Usage

```bash
# Generate translation files
npx translate-i18n

# Watch mode
npx translate-i18n --watch
```

### Project Structure

```
your-project/
├── src/
│   └── locales/
│       ├── pt-BR.json
│       ├── en.json
│       └── es.json
└── translate-i18n.config.json
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details
