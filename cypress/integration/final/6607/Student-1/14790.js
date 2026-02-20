/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14790
@story_name: my group
@path: final/6607/Student-1
@test_case_name: my group
@description: User group in my group tab.
@test_steps:

^test case of user group
-visit the website
-login into page ocps page
-Open the library.
-Click on the My group.

@test_data:n/a
@result:User group page open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('My group', function() {

    it('test the my group page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.fixture('global').then(data => {
            cy.visit(data.website[0] + '/?func=get_course_list&show=courses&host=' + data.website_value[0])
        })
        cy.get('[data-cy="user_groups"]').click().then(() => {
            cy.get('[data-cy="my_groups"]').click()
        })
    })
})