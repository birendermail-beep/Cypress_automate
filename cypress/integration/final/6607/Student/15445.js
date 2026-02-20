/*
@author: Sundaram Tripathi
@master_project_id: 6607
@phase_id: 
@Story_Id: 15445
@story_name: 3d diagnostic
@path: final/6607/Student
@Test_Case_Name: 3d_diagnostic.js
@description: Go to utils and open the 3d diognostic
@test_steps:

^Test case of utils area
-visit the utils
-Successfully open the utils list page.
-Click on the "Start" button on the "3d Diagnostic".
-Successfully open the 3d diagnostic page.

@test_data: n/a
@result: open all tabs and export of educator page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Student Aea', function() {
    it('3d diagnostic', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(2) > :nth-child(3) > .btn').click({ force: true });
    })
})