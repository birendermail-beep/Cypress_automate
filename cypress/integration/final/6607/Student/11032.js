/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10478
@story_id: 11032
@story_name: Saving Annotation
@path: final/6607/Student
@test_case_name: Saving Annotation.js
@description: select the text and save the annotation
@test_steps:
^annotation
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on chapter and lesson and open chapter 2
-select the text and hold for a second then popup will be come and and click on annotate button 
-and write a comment and you can fill the link and media title and then click on save button 
-then text will be highlighted 

@test_data: n/a
@result: Ebook-TOC will open
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will Test the eBook Area', function() {
    //select the text and save the annotation
    it('select the text and save the annotation', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy="chapters"]').click({ force: true }).then(() => {
            cy.get('#ebook_toc').should('exist')
        })
        cy.get('[data-cy="toc_chapters"]').eq(1).click({ force: true })
        cy.scrollTo("5%", "5%")
        StudentPage.setSelectionText('#factbodydiv02OEK')
        cy.get(':nth-child(4) > .elm_annottor > .icomoon-bubble-12').click({ force: true })
        cy.get('#annotator-field-0').type('testing', { force: true })
        cy.get('.annotator-invert-y > .annotator-widget > .annotator-controls > .annotator-save').click({ force: true })
        cy.scrollTo("5%", "5%")
        cy.get('#factbodydiv02OEK > .annotator-hl.color0.annotator-share').should('be.visible')
    })
})