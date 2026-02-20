/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: 15146
@story_name: focus_report_grid
@path: final/Dump_Test_Automation
@Test_Case_Name: focus_report_grid.js
@description: Search person no phase assign
@test_steps: 
^Test case of QQ Form
- visit on website
- Go to the focus area
- visit on this link "/focus/index.php?func=reports"
-  Click on the "Choose" dropdown button.
- Open dialog box in "Select Report Type"
- Go to Report section and select "Reports".
- Go to second field and select the "Person No Phase".
@test_data:  
    Report : Project
    Person No phase
@result: Successfully show the data 
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('No phase in person', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus/index.php?func=reports');
        })
        cy.get('[data-cy=show_report_modal]').click({force:true});
        cy.get('#report_chosen').select('Projects',{force:true});
        cy.get('[data-cy=report_option_select]').select('Person no phase',{force:true});
        cy.get('[data-cy=go_btn]').click({force:true});
        
    })
})