/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@Story_Id: 15061
@story_name: add_tickler
@path: final/6622
@Test_Case_Name: add_tickler
@description: Click on the add button and open the tickler dailog box 
@test_steps: 
^Test case of focus area.
-Visit the focus area
-Open the dashboard area.
-Click on the "More" option. And select the "Tickler Master" option.
-Show the tickler page and Click on the "New" button.
-Successfully open the Tickler dialog box.

@test_data: n/a
@result: Fill the details and successfully add tickler
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Tickler Master', function() {
    it('Open dialog box add tickler. ', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            FocusArea.myFocus(data.url);
        })
        cy.get(':nth-child(6) > .nav-link').click({ force: true });
        cy.get('.show > :nth-child(5) > .dropdown-item').click({ force: true });
        cy.get('[data-cy=tickler_new]').click({ force: true });
    })
})