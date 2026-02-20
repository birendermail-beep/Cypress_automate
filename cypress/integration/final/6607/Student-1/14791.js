/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14791
@story_name: setting course content
@path: final/6607/Student
@test_case_name: setting_course_content
@description: Setting user course content
@test_steps:

^setting course content
-visit the website
-login into page ocps page
-Open library select my group from user group tab.
-Click on the Open button from right side. 
-Select the course then select group then click on submit.
-Click on action button then click on setting dropdown.

@test_data:n/a
@result: user group open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('My group', function() {

    it('setting course content', function() {
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

        cy.get('[data-cy="open"]').eq(0).click().then(() => {
            cy.get('[data-cy="user_course_code1"]').select("APP-Training", { force: true });
            cy.get('[data-cy="class_group_code"]').select("sachin_03_12_2018", { force: true });
            cy.get('[data-cy="showClassGroupData"]').click();
        })
        cy.get('[data-cy="setting_icon"]').eq(0).click()
    })
})