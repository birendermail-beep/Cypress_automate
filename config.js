const login_username = process.env.CYPRESS_USERNAME || ''
const login_password = process.env.CYPRESS_PASSWORD || ''

module.exports = { login_username, login_password }
