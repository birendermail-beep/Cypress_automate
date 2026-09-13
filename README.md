# Jigyaasa Cypress Automation

End-to-end automation tests for the Jigyaasa application.

## Runtime

- Node.js 22 (see `.nvmrc`)
- Cypress 15

## Install

```bash
npm install
```

## Environment

The default application under test is Jigyaasa. You can override it for another approved test environment without changing source code:

```bash
CYPRESS_BASE_URL=https://www.jigyaasa.info
```

Authenticated specs read credentials from environment variables instead of hard-coded source:

```bash
CYPRESS_USERNAME=<test-user>
CYPRESS_PASSWORD=<test-password>
```

Do not commit real usernames, passwords, access keys, tokens, or production credentials.

## Run interactively

```bash
npm run cy:open
```

## Run headlessly in Chrome

```bash
npm test
```

## Run only the public smoke checks

```bash
npx cypress run --e2e --spec "cypress/integration/smoke/public-site.smoke.js" --browser chrome
```

## Migration status

This repository originated on Cypress 4.8. The framework configuration has been migrated to the modern Cypress E2E runner while deliberately keeping `cypress/integration/**/*.js` as the spec location. This allows the existing Jigyaasa tests to be repaired incrementally instead of moving hundreds of legacy specs at once.

The legacy `cypress.json` configuration and stale Cypress 4 package lock have been removed. Run `npm install` with Node 22 to generate dependencies for the modern framework.

The next migration phase is application-level repair: update obsolete Jigyaasa selectors, authentication/navigation steps, fixed waits, course data, and assertions module by module.

## Check legacy suite structure

Run `npm run check:suite` to check JavaScript syntax, relative import paths, and accidental focused tests without application credentials. This does not validate live selectors or application behavior.

The ongoing application repairs are on `modernize-cypress-2026`; `main` still contains the original Cypress 4 suite.

## Read-only execution scope

`npm test` and `npm run test:reports` run only `cypress/integration/read-only/**/*.js`. These reviewed checks open Sales opportunity filters and the Admin inside-sales leaderboard summary. They do not submit edits or click record actions. Login requires an account with report access; an access failure must not be bypassed.

Other legacy specs remain in the repository for repair but are not included in this default run. Do not run the entire legacy suite: it contains create, edit, delete, and other data-changing flows. Interactive Cypress still displays those specs. Review each spec and its helpers before adding it to the read-only run.
