/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: stylesheet
@Test_Case_Name: stylesheet.js
@description: Go to the utils and open the stylesheet page
@test_steps: 
^Test case of stylesheet page
- Visit the website
- Go to the utils area.
- Click on the "Start" button in style sheet.

@test_data: N/A
@result:
    -Successfully open the style sheet page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("utils", function() {
    it("stylesheet page", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");

        })
        cy.get(':nth-child(4) > :nth-child(3) > .btn').click({ force: true });
    })
})