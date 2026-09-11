// Global support file for the modern Cypress E2E runner.
// Existing custom commands are intentionally retained so legacy specs can
// continue to run while uCertify selectors and workflows are migrated.
import './commands'

// uCertify pages can contain application-level exceptions that are unrelated
// to the assertion currently under test. Do not globally suppress them here;
// each known exception should be handled explicitly in the relevant spec.
