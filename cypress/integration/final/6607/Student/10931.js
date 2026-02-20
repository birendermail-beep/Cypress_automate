/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10931
@story_name: Keyboard Shortcut
@path: final/6607/Student
@test_case_name: Keyboard Shortcut
@description:N/A
@test_steps: 

^click on keyboard Shortcut
-click on keyboard Shortcut, to see the list of keyboard Shortcut

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
        cy.get('#fcs').click({ force: true })
        cy.wait(5000)
        cy.get('#ffr').select('uCertify Elegant', { force: true })
        cy.get("#fsr").select('Large', { force: true })
        cy.get('#bla').click({ force: true })
        cy.contains('Cancel').click({ force: true })
        cy.get('#kbd').click({ force: true })
        cy.contains('Cancel').click({ force: true })
        cy.get('#acs').click({ force: true })
        cy.get('.switch_btn').eq(0).click({ force: true })
        cy.get('.switch_btn').eq(1).click({ force: true })
        cy.get('.modal-header').should('be.visible')
    })
})