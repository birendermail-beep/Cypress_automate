/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14988
@story_name: Merge Student Group
@path: final/6607/Student
@test_case_name: Merge Student Group
@description:
@test_steps:

^Merge Student Group
-Go to URL https://www.ucertify.com/?host=ocps.ucertify.com
-Go to my library click on user group and select my group or All group
-click on action drop down and select delete group

@test_data: n/a
@result: confirm modal for delete will open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('merge student group', function() {

    it('Opening merge student group page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/?func=get_user_groups");
        })
        cy.get('.dropdown > .btn').eq(1).click();
        cy.get('#delete_group_06m4l')
    })
})