/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id:15236
@story_name: qq search bar
@path: final/Dump_Test_Automation
@Test_Case_Name: qq search bar
@description: Go to the focus and open the My QQ
@test_steps: 
^Test case qq search
- visit on website
- Go to the focus
- Click on the "Goal Project" tab
- Click on the "My QQ" option
- Open the QQ page and click on the advance search button
- Open dialog box and click on the "search" button

@test_data: N/A
@result:
- Successfully open the qq details 
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("Focus Area", function() {
    it("Show the qq details", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/focus");
        })
        cy.get('[data-cy=goal_tab] > .nav-link').click({ force: true });
        cy.get('[data-cy=qq_opt]').click({ force: true });
        cy.get('#searchbut').click({ force: true });
        cy.get('.select2-selection__choice__remove').click({ force: true });
        cy.wait(3000);
        cy.get('.btn-primary').click({ force: true });
    })
})