/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 15302
@story_name: Test Ebook page
@path: final/6607/Student
@test_case_name: Test Ebook page
@description: Opening the ebook slide page
@test_steps:
^test case of ebook slide
-visit the website
-login into page
-Open the my library.
-open my course
-open any chapter
-open any topics
-click on open slider checked open or not
-click on close slider checked close or not
-click on slider and scroll and open any chapter

@test_data:N/A  
@result: Ebook page open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Complete uCertify Testing', function() {

    /** This will test the eBook area */
    it('Test eBook Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy="mylibrary"]').click()
            cy.wait(1000)
            cy.visit(data.url + '/?func=load_course&course=app-training&class_code=' + data.class_code[1])
        })
        cy.get('[intro-id="chapters"]').click()
        cy.contains('HTML5: Now, Not 2022').click({ force: true })
            /** This check the sidebar is open or not */
        cy.get('#btntxt').click({ force: true })
        cy.wait(2000)
        cy.get('#ebook_toc').should('be.visible').should('have.css', 'left').and('match', /0px/)
        cy.get('#btntxt').click({ force: true })
        cy.wait(1000)
            /** This check the Previous button is disabled on first chaper or not */
        cy.get('#navpre').should('be.disabled')

        /** this click on the Chapter link, and Section form sidebar */
        cy.get('#btntxt').eq(0).click({ force: true })
        cy.wait(1000)
        cy.contains('Bootstrap').click({ force: true })
        cy.contains('JS/JQUERY').click({ force: true })
            /** This test the Previous and Next button are Working or not */
    })
});