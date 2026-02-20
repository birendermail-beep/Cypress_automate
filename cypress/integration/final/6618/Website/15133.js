/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15133
@story_name: shopping_options
@path: final/Website
@test_case_name: shopping_options
@description: N/A
@test_steps:
^cart
-Login to ucertify.com
-Open the following url for adding item to cart:(https://www.ucertify.com/courses/).
-Click on the Add to cart button of "CCNA Cyber Ops SECOPS 210-255 Official Cert Guide" course

@test_data: n/a
@result: It will Open the shopping options page.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('shopping options page', function() {
    it('test the shopping options page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/courses");
        })
        cy.get('[crn="1Z0-063"]').scrollIntoView().click();
    })
})