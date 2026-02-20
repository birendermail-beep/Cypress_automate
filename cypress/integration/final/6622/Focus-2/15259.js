/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: 15259
@Test_Case_Name: spreadsheet new templates
@description: Go to focus and open the templates
@test_steps: 
^Test case of focus templates in focus area
- Visit the website
- Open the focus area
- Click on the "Forms" tab.
- And select the "Templates" option

@test_data: N/A
@result:
    - Successfully open the templates
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    beforeEach('Templates', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/focus");
        })
        cy.get(':nth-child(5) > .nav-link').click({ force: true })
    })

    it('Click on the templates option', function() {
        cy.get('.show > :nth-child(1) > .dropdown-item').click({ force: true });
    })
})