const login_username = Cypress.env('login_username') || ''
const login_password = Cypress.env('login_password') || ''

module.exports = { login_username, login_password }
