/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: N/A
@story_id: 15141
@story_name: focus_checklist_demo
@path: final/Dump_Test_Automation
@test_case_name: focus_checklist_demo.js
@description: Edit user and save both contact primary and other
@test_steps: 
^test case of last demo meeting
-Visit to website
-Login to ucertify.com
-Visit the focus area
-Go to the last five demo meeting area.
-Select any one demo meeting and click on the setting icon and choose the "view details" option
@test_data: - N/A
@result: Successfully open the Daily Status Meeting
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("Focus Area", function() {
    it("Demo meeting", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/focus");
            cy.get('[data-cy=last_demo]').eq(0).click({force:true});
            cy.get('.view_demo_details').eq(0).click({force:true});
            cy.visit(data.url+'/focus/index.php?func=reports&action=getDemoDetails&demo_id=606165');
        })
    })
})