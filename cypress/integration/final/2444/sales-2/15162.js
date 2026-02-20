/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 15162
@story_name: inside sales move org
@path: final/Dump_Test_Automation
@Test_Case_Name: inside_sales_move_org.js
@description: open product and replace course
@test_steps: 
^Test case of change product course
- visit on website
- Go to the admin area
- Click on the "Others" tab.
- Click on the "Inside sales".
- Type email and click on the search icon button.
- Click on the "Move to org" button.
- Move to org page successfully  open
@test_data: email id
@result:
- Successfully open the move org page
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('Inside sales move org', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        AdminArea.visitProductArea2();
        cy.get('[href="instructor_portal.php?func=move_org"]').click({force:true});
    })
})