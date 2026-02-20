/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15196
@story_name: zendesk bug
@path: final/Misc
@test_case_name: zendesk bug
@description: N/A   
@Test Steps: 
^file_search
-Go to URL: https://www.ucertify.com/utils/
-Click Find TPL Module
-Click Folder dropdown 
-Click on PHP

^file_search1
-Go to URL: https://www.ucertify.com/utils/
-Click  Find TPL Module
-Click Folder dropdown 
-Click on  TPL
-Click on Files Exist In Pe-gold But Not In Created Array

^file_search2
-Go to URL: https://www.ucertify.com/utils/
-Find TPL Module
-Click Folder 
-Click on usages
-Click on TPL

@test_data: n/a
@result: ticket list will display
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Miscellaneous', function () {
    beforeEach('this is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
        })
    })
    it('file_search', function () {
        cy.get(':nth-child(39) > :nth-child(2) > .nh > .chapter-link').click()
        cy.get('#list_dropdown').click()
        cy.get('.show > :nth-child(1) > .dropdown-item').click()
    })
    it('file_search-2', function () {
        cy.get(':nth-child(39) > :nth-child(2) > .nh > .chapter-link').click()
        cy.get('#list_dropdown').click()
        cy.get('.show > :nth-child(2) > .dropdown-toggle').click()
        cy.get('.dropdown-submenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })
    })
    it('file_search-3', function () {
        cy.wait(3000)
        cy.get(':nth-child(39) > :nth-child(2) > .nh > .chapter-link').click()
        cy.get('#list_dropdown').click()
        cy.get('.show > :nth-child(3) > .dropdown-item').click()
    })
})