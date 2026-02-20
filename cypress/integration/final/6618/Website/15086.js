/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_Id: 15086
@story_name: chief_technical_officer
@path: final/Dump_Test_Automation
@Test_Case_Name: chief_technical_officer.js
@description: Go to the about page and open the chief technical officer
@test_steps: 
^Test case of hiring page
- visit on website
- visit on this click "/about/index.php?page=chief_technical_officer"
@test_data: N/A
@result: 
- Successfully open the chief technical officer page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website', function() {

    it('chief technical officer page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/about/index.php?page=chief_technical_officer');
        })

    })
})