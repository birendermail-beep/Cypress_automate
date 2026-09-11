# uCertify Cypress Automation

End-to-end automation tests for the uCertify application.

## Runtime

- Node.js 22 (see `.nvmrc`)
- Cypress 15

## Install

```bash
npm install
```

## Run interactively

```bash
npm run cy:open
```

## Run headlessly in Chrome

```bash
npm test
```

## Migration status

This repository originated on Cypress 4.8. The framework configuration has been migrated to the modern Cypress E2E runner while deliberately keeping `cypress/integration/**/*.js` as the spec location. This allows the existing uCertify tests to be repaired incrementally instead of moving hundreds of legacy specs at once.

The next migration phase is application-level repair: update obsolete uCertify selectors, URLs, authentication/navigation steps, waits, and assertions module by module.

Do not commit usernames, passwords, tokens, or other production credentials. Supply environment-specific values outside source control.
