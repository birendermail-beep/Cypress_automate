/*
@author: Ankit Kumar
@master_project_id: 2444
@phase_id: NA
@story_id: 14859
@story_name: smart_search
@path: final/Admin
@test_case_name: smart_search.js
@description: It will login and test smart search functionality.
@test_steps: 
^Show Post in Smart Search
-Visit the website.
-Type "Ajeet Chauhan" in the search name text box
-Click on the search
-You will see a list of contacts below now,
-It will include posts as well

@test_data:
-Name : Ajeet Chauhan

@result: It will test smart search functionality.
 */
import { Navbar, login_username, login_password, LoginPage, SalesArea } from '../../../../page-objects/pages/index' 
describe('Sales Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        SalesArea.visitSmartSearch()
    })
    it('Show Post in Smart Search', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="text_smart_srch"]').type(data.auditor_name[1])
        })
        cy.get('[data-cy="srch_btn_smart"]').click()
        cy.get(8000)
        cy.get('[data-cy="smart_srch_table"]').should('be.visible')
    })
    })
