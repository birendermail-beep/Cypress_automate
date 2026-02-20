/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: n/a
@story_id: 15147
@story_name: focus_user_container
@path: final/Dump_Test_Automation
@test_case_name: focus_user_container.js
@description:
-@test_steps: 
^test case of user listing in focus area
-Visit to website.
-Login to ucertify.com.
-visit the focus area
-Click on the More tab
-Click on the User option.
-Successfully show the user listing.
-Successfully open image upload page.
@test_data: n/a
@result: Successfully open the user listing details
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('Showing User List', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/focus");
        })
            cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
            cy.get('.show > :nth-child(2) > .dropdown-item').click({force:true});
    })
})