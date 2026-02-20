/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15129
@story_name: securitycode
@path: final/Website
@test_case_name: securitycode
@description: N/A
@test_steps:
^cart
-Login to ucertify.com
-Open the following url for adding item to cart:(https://www.ucertify.com/cart/?buy=1Z0-061).
-Click on the Proceed to Checkout.
-Click on the question mark icon of Security code input box.

@test_data: n/a
@result: It will Open the security code help modal.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('security code page', function () {
    Cypress.on('uncaught:exception', (error, runnable) => {
        return false;
    })

    it('test the security code page', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/cart/?buy=1Z0-063");
        })
        cy.get("#proceed").click();
        cy.get('[data-target="#modal_sec_code"]').click();
    })
})