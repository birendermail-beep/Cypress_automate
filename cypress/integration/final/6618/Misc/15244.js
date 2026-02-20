/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15244
@story_name: college list
@path: final/Misc
@test_case_name: college list
@description: N/A   
@Test Steps: 
^college_list
-Go to the given url. https://www.ucertify.com/ext/pro_test/index.php?func=campus_report

@test_data: n/a
@result: college list for pro test
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Miscellaneous', function() {

    it('college_list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/ext/pro_test/index.php?func=campus_report')
        })
    })

})