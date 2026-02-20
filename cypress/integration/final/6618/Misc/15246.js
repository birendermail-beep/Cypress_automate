/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15246
@story_name: style guide
@path: final/Misc
@test_case_name: style guide
@description: N/A   
@Test Steps: 
^style_guide
-Go to URL: https://www.ucertify.com/utils/
-Click on style guide

@test_data: n/a
@result: Ui style guide page will open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Miscellaneous', function() {
    it('style_guide', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
        })
        cy.wait(3000)
        cy.get(':nth-child(5) > :nth-child(2) > .nh > .chapter-link').click()
    })

})