/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10929
@story_name: Manage Setting - Options
@path: final/6607/Student
@test_case_name: Manage Setting - Options
@description:N/A
@test_steps: 

^3 options should be visible
-Open dashboard
-Open any lesson
-In the bottom toolbar, click on setting icon, it should give 3 option

@test_data:N/A
@result: ebook area open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('manage settings options in ebook area testing', function() {
    //bottom.toolbar.settings, bottom.toolbar.settings1, bottom.toolbar.settings2, bottom.toolbar.settings3
    it('3 options should be visible', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[intro-id="chapters"]').click()
        cy.contains('Operating System Fundamentals').click({ force: true })
        cy.get('#manage_settg').click({ force: true })
        cy.get('#fcs').should('be.visible')
    })
})