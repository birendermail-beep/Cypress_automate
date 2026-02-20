/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id:15007
@story_name: Support Minimum 
@path: final/6607/Student
@test_case_name:Support Minimum 
@description: N/A
@test_steps:
^pe-support-minimum-requirements
-go to the URL:  ucertify.com
-click on question mark icon and click suport
-scroll down 

@test_data: n/a
@result: support-minimum-requirements section will appear
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Student Area', function() {

    it('pe-support-minimum-requirements', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('.icomoon-help-new-1').trigger('mouseover')
            cy.visit(data.url + '/support.php')
        })
        cy.scrollTo("25%", "25%")
    })

})