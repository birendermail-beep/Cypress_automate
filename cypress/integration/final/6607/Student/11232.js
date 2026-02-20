/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11232
@story_name: Share Certificate
@path: final/6607/Student
@test_case_name:Share Certificate.js 
@description: certificate will be displayed
@test_steps:
^click on share button if you have completed minimum requirement to get the certificate then this option will show  
-visit the website
-login into page
-Click on My Library and open the student Dashboard
-click on certificate completion button to open certificate 
-click on share button if you have completed minimum requirement to get the certificate then this option will show 

^click on facebook icon to share the certificate 
-visit the website
-login into page
-Click on My Library and open the student Dashboard
-click on certificate completion button to open certificate 
-click on facebook icon to share the certificate

^click on twitter icon to share the certificate 
-visit the website
-login into page
-Click on My Library and open the student Dashboard
-click on certificate completion button to open certificate 
-click on twitter icon to share the certificate

^click on google icon to share the certificate 
-visit the website
-login into page
-Click on My Library and open the student Dashboard
-click on certificate completion button to open certificate 
-click on google icon to share the certificate

@test_data: n/a
@result: certificate will be displayed
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Certificate of completion testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
    })

    it('click on Certificate of completion button to open certificate ', function() {
        cy.get('[data-cy=certificate_completion]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/my/certificate.php?certificate_guid=sample')
        })
        cy.get('.p-md > .text-center > a').click()
        cy.get('#planner_share').click()
        cy.get('.icomoon-facebook').click()
    })
    it('click on Certificate of completion button to open certificate ', function() {
        cy.get('[data-cy=certificate_completion]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/my/certificate.php?certificate_guid=sample')
        })
        cy.get('.p-md > .text-center > a').click()
        cy.get('#planner_share').click()
        cy.get('.icomoon-twitter').click()
    })
    it('click on Certificate of completion button to open certificate ', function() {
        cy.get('[data-cy=certificate_completion]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/my/certificate.php?certificate_guid=sample')
        })
        cy.get('.p-md > .text-center > a').click()
        cy.get('#planner_share').click()
        cy.get('.icomoon-linkedin').click()
    })
})