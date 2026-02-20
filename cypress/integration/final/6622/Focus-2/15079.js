/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@Story_Id: 15079
@story_name: bug_preview
@path: final/Dump_Test_Automation
@Test_Case_Name: bug_preview.js
@description: Go to the bug list and open bug preview form
@test_steps: 
^Test case of bug preview
- visit on website
- Go to the Focus area
- Open the "More" tab.
- Select the "Bug List" option.
- Go the bug section and click.
@test_data: N/A
@result: - Successfully open the bug preview modal
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus area', function() {

    it('Bug Preview Dialog box', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus');
            cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
            cy.get('[data-cy=bug_list_data]').click({force:true});
            cy.get('.span2 > .pointer').eq(3).click({force:true});
        })
    })
})