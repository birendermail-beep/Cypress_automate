/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 15027
@story_name:preview page
@path: final/6607/Student
@test_case_name: preview page
@description:Opening the preview page
@test_steps:

^test case of preview page
- Visit to website.
- Login into website.
- Open the following url:(url + /preview.php?content_guid=05j99&action=new).and all url

@test_data:n/a
@result:Opening the preview page
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('preview page', function() {

    it('Opening the preview page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/preview.php?content_guid=05zwn&action=new");
        })
    })
})