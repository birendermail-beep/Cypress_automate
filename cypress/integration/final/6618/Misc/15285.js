/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15285
@story_name: wikipedia_link
@path: final/Dump_Test_Automation
@Test_Case_Name: wikipedia_link.js
@description: Go to the utils and open the wikipedia link page
@test_steps: 
^Test case of wikipedia link page
-Visit the utils area
-After that visit the pdf wikipedia page 
@test_data: n/a
@result: Successfully open the wekipedia page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('utils', function() {

    it('wikipedia link page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils/pdf/index.php?func=open_wiki_link');
        })
    })
})