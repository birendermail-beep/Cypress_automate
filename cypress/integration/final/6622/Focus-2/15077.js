/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@Story_Id: 15077
@story_name: browser_downloads
@path: final/Dump_Test_Automation
@Test_Case_Name: browser_downloads.js
@description: Go to focus area and download browser
@test_steps: 
^Test case of is eval on search
- visit on admin focus area
- Successfully open the focus area
- Click on the "Form" tab.
- Choose the "uCertify Browser downloads page" option.
- Successfully open the browser variants .
@test_data: N/A
@result: Successfully open the browser availability page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    beforeEach('Showing User List', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/focus");
        })
        cy.get('[data-cy=form_tab] > .nav-link').click({force:true});
    })
    it('Download Browser Button',function(){
        cy.get(':nth-child(16) > .dropdown-item').click({force:true});
    })
    it('Show the version of browsers',function(){
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/focus/browser_downloads.php')
        })
    })
})