/*
@author: Anurag Chaurasia
@master_project_id: 6622
@phase_id: 
@story_id: 11512
@story_name: Focus Start Demo
@path: final/Focus
@test_case_name: Focus Start Demo
@description: N/A
@test_steps:

^focus_ticklers_multiple_persons
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on more
-Click start demo
-Select main representative
-select additional representative
-Select main auditor
-Click on start demo button
-Click on yes, continue button
-Click on bug report
-Click on view 
-Click on end demo top right side
-Click on ok button

^check_list_continue
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on more
-Click start demo
-Select main representative
-Select main auditor
-Click on start demo button
-Click on yes, continue button
-Go to url https://www.ucertify.com/focus/checklist/

^checklist
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on more
-Click start demo
-Select main representative
-Select main auditor
-Click on start demo button
-Click on yes, continue button
-Click on end demo top right side
-Click on ok button

^focus_ticklers_multiple_persons
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on more
-Click start demo
-Select main representative
-Select main auditor
-Click on start demo button
-Click on yes, continue button
-Click on weekly goals & ticklers
-Click on view ticklers

@test_data: n/a
@result: confirmation message will display
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
        })
    })
    it('check_list_continue', function() {
        cy.fixture('global').then(data => {
            cy.get(':nth-child(6) > .nav-link').click()
            cy.visit(data.url + '/focus/checklist/')
            cy.get('#main_representative').select('Ratnesh Srivastava', { force: true })
            cy.wait(2000)
            cy.get('#main_auditor').select('Archana Singh', { force: true })
            cy.wait(2000)
            cy.get('.icomoon-play-4').click({ force: true })
            cy.wait(3000)
            cy.get('.confirm').contains('Yes, Continue').click()
            cy.wait(5000)
            cy.visit(data.url + '/focus/checklist/')
        })
        cy.contains('Last demo was not completed. Do you want to continue?').should('be.visible')
        cy.wait(5000)
        cy.get('#open_test_session').then(($text) => {
            if ($text.text().includes('Last demo was not completed. Do you want to continue?')) {
                cy.get('#terminate_demo').click()
                cy.get('.terminate_current_demo').click({ force: true })
            }
        })
    })
    it('checklist', function() {
        cy.fixture('global').then(data => {
            cy.get(':nth-child(6) > .nav-link').click()
            cy.visit(data.url + '/focus/checklist/')
            cy.get('#main_representative').select('Archana Singh', { force: true })
            cy.wait(2000)
            cy.get('#main_auditor').select('Vikas Shukla', { force: true })
            cy.wait(2000)
            cy.get('.icomoon-play-4').click({ force: true })
            cy.wait(3000)
            cy.get('.confirm').contains('Yes, Continue').click()
            cy.wait(5000)
            cy.get('#end_demo').click()
            cy.get('.confirm').click()
            cy.wait(5000)
            cy.visit(data.url + '/focus/checklist/')
        })
        cy.contains('Last demo was not completed. Do you want to continue?').should('be.visible')
        cy.wait(5000)
        cy.get('#open_test_session').then(($text) => {
            if ($text.text().includes('Last demo was not completed. Do you want to continue?')) {
                cy.get('#terminate_demo').click()
                cy.get('.terminate_current_demo').click()
            }
        })
    })
    it('focus_bugs_multiple_persons', function() {
        cy.fixture('global').then(data => {
            cy.get(':nth-child(6) > .nav-link').click()
            cy.visit(data.url + '/focus/checklist/')
        })
        cy.get('#main_representative').select('Akansha Elisha George', { force: true })
        cy.wait(2000)
        cy.get('#additional_representative').select('Archana Singh', { force: true })
        cy.wait(2000)
        cy.get('#main_auditor').select('Vikas Shukla', { force: true })
        cy.wait(2000)
        cy.get('.icomoon-play-4').click({ force: true })
        cy.wait(3000)
        cy.get('.confirm').contains('Yes, Continue').click()
        cy.wait(5000)
        cy.get('#main_section2 > .checklist_head > .float-right > .navigation_checklist > .checklist_state_icon').click({ force: true })
        cy.wait(2000)
        cy.get('#main_section2 > .checklist_content > :nth-child(1) > h5 > .ml-sm').click({ force: true })
        cy.wait(5000)
        cy.get('#end_demo').click()
        cy.wait(2000)
        cy.get('.confirm').click()
        cy.wait(2000)
    })
    it('focus_ticklers_multiple_persons', function() {
        cy.fixture('global').then(data => {
            cy.get(':nth-child(6) > .nav-link').click()
            cy.visit(data.url + '/focus/checklist/')
        })
        cy.get('#main_representative').select('Ratnesh Srivastava', { force: true })
        cy.wait(2000)
        cy.get('#main_auditor').select('Archana Singh', { force: true })
        cy.wait(2000)
        cy.get('.icomoon-play-4').click({ force: true })
        cy.wait(3000)
        cy.get('.confirm').contains('Yes, Continue').click()
        cy.wait(5000)
        cy.get('#main_section6 > .checklist_head').click()
        cy.get('#main_section6 > .checklist_content > :nth-child(3) > .demo_links').click({ force: true })
        cy.get('#end_demo').click()
        cy.wait(2000)
        cy.get('.confirm').click()
        cy.wait(5000)
    })
})