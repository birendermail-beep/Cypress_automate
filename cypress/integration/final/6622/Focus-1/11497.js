/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 11497
@story_name: Project Master
@path: final/Focus
@test_case_name: Project Master
@description: N/A
@test_steps:

^project_master
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on goal/project tab
-Click on My project
-Click on Any project
-Click on setting on right top
-Click on update button

^get_project_details
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on goal/project tab
-Click on My project
-Click on report
-Click on advance search
-Select status 2nd audit progress
-Click on search
-Click on first row
-Click on any master id
-Click on any row

^prj_content
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on goal/project tab
-Click on My project
-Click on report
-Click on advance search
-Click on with group
-Click on search button
-Click on report
-Click on open projects
-Click on report
-Click on Audit-2 projects

@test_data: n/a
@result: project stage updated successfully from project master and  project detail will display
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('project_master', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/index.php?func=project_master&project_id=10330')
        })
        cy.wait(8000)
        cy.get('.tablesorter-childRow').click()
        cy.wait(2000)
        cy.get('.icomoon-new-24px-gear-1').click()
        cy.wait(2000)
        cy.get('.edit_row').click({ force: true })
        cy.wait(8000)
        cy.get('#save').click()
        cy.get('#reason').clear({ force: true }).type('testing', { force: true })
        cy.get('#reason_modal_confirmation').click({ force: true })
        cy.wait(5000)
        cy.get('.icomoon-new-24px-gear-1').click({ force: true })
        cy.wait(8000)
        cy.get('.edit_row').click({ force: true })
        cy.wait(10000)
        cy.get('#save').click({ force: true })
        cy.get('#reason').clear({ force: true }).type('testing', { force: true })
        cy.get('#reason_modal_confirmation').click({ force: true })
    })
    it('get_project_details', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/index.php')
            cy.get(':nth-child(2) > .nav-link').click()
            cy.wait(2000)
            cy.get('.dropdown-menu > :nth-child(3) > .changeURL').click({ force: true })
            cy.wait(5000)
            cy.get('#exception_report > .btn').click()
            cy.wait(5000)
            cy.get('li.search_records > .noact').click({ force: true })
            cy.wait(5000)
            cy.get('#prjadvance_search > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            cy.wait(5000)
            cy.visit(data.url + '/focus/index.php?func=project_master&project_id=4623')
        })
        cy.wait(5000)
        cy.get(':nth-child(9) > :nth-child(3)').click()
    })
    it('prj_content', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/focus/index.php')
        })
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.dropdown-menu > :nth-child(3) > .changeURL').click({ force: true })
        cy.wait(5000)
        cy.get('#exception_report > .btn').click()
        cy.wait(5000)
        cy.get('li.search_records > .noact').click({ force: true })
        cy.wait(5000)
        cy.get('#nogrp_layout > :nth-child(1)').click()
        cy.wait(5000)
        cy.get('#prjadvance_search > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#exception_report > .btn').click({ force: true })
        cy.wait(5000)
        cy.get(':nth-child(6) > .noact').click()
        cy.wait(5000)
        cy.get('#exception_report > .btn').click({ force: true })
        cy.wait(10000)
        cy.get(':nth-child(5) > .noact').click()
        cy.wait(5000)
    })
})