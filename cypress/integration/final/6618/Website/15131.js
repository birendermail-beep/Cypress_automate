/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15131
@story_name: payment_table
@path: final/Website
@test_case_name: payment_table
@description: N/A
@test_steps:
^cart
-Login to ucertify.com
-Open the following url for adding item to cart:(https://www.ucertify.com/cart/?buy=1Z0-063).
-Click on the update button.
-Update modal will apear click on the update button.

@test_data: n/a
@result: It will Open the payment table page.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('security code page', function () {
    it('test the security code page', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/cart/?buy=1Z0-063");
        })
        cy.get('[intro-id="update"]').click().then(() => {
            cy.wait(3000);
            cy.get("#continue").click();
        })
    })
})