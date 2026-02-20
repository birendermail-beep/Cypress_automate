/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 15368
@story_name: WGU Practice Test
@path: final/6607/Student
@test_case_name: WGU Practice Test
@description:
@test_steps:

^User should not be able to load course or open any URL directly
-Open https:wgu.ucertify.com
-Login into website
-open course dashboard
-click on practice Test

@test_data: n/a
@result: WGU Dashboard practice test will open 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Wgu Course', function() {
    it('wgu practice test', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[1])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.website[1] + '/?func=load_course&course=LO-Aplus-complete&class_code=' + data.class_code[6])
            cy.get('[data-cy=practice_tests]').click()
        })
    })

})