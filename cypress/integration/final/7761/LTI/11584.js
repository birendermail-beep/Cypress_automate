/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id : 10568
@story_id: 11584
@story_name: LTI catalog 
@path: final/7761/LTI
@test_case_name: LTI catalog.js
@description : 
@test_steps:
^Hide catalog from home page
-Goto org config area
-In config tab, Enable hide catalog area

^Open Advance search modal
-Go to catalog area
-Click the search button
-Advance Search option will appear
-Click Advance Search option

^Load coming soon project
-Select Coming Soon option from report drop down
-Click the Load button
-Coming will be selected in status drop down
-Start date will be filled for today and end date will be filled for nex 11 days for  Released On
-Click the Search button

^Load default report
-Select Default Report option from report drop down
-Click the Load button
-All input fields will be in initial state
-Click the Search button

@test_data: n/a
@result: LTI Catalog will open.
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Catalog area advance search default', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/catalog.php')
        })
    })
    it('Load lti page hide catalog', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/admin/admin_org_config_new.php?func=config&org_id=04nkM')
        })
        cy.get('#hide_catalog').check({ force: true })
        cy.get('#save_org_config_btn').click()
        cy.get('.msg').contains('Saved Successfully.')
    })
    it('Catalog area advance search default project', function() {
        cy.get('[data-cy="course_catalog"]').click()
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="adv_search"]').click()
        cy.get('#catalog_report_type').select('2', { force: true })
        cy.get('#load_report_type').click()
        cy.get('[data-cy="search_cy"]').click()
    })
    it('Catalog area advance search coming soon project', function() {
        cy.get('[data-cy="course_catalog"]').click()
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="adv_search"]').click()
        cy.get('#catalog_report_type').select('2', { force: true })
        cy.get('#load_report_type').click()
        cy.get('[data-cy="search_cy"]').click()
    })
    it('Catalog area advance search', function() {
        cy.get('[data-cy="course_catalog"]').click()
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="adv_search"]').click()
    })
});