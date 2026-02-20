/*
@author: Ankit Kumar
@master_project_id: 2444
@phase_id: 10360
@story_id: 11590
@story_name: New KPI report
@path: final/Admin
@test_case_name: New KPI report.js
@description: 
@test_steps: 
^KPI new report
-Open https://www.jigyaasa.info/admin/kpi.php
-open Kpi report dropdown 
-click on new KPI report
-click on search > advance search
-Select team > sales
-select start date & end date
-click on search

@test_data: 
-team : sales
-start date : 10 nov 19
-end date : 14 nov 19

@result: KPI report should show up
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Sales Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbookOtherTab()
        AdminArea.visitInsideSales()
    })
    it('New KPI Report Dashboard', () => {
        cy.get('[data-cy="kpi_report"]').click()
        cy.get('[data-cy="new_kpi_report"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="search_team_select"]').select('2', { force: true })
        cy.get('[data-cy="show_btn"]').click()
        cy.wait(5000)
        cy.get('[data-cy="table_checklist_manage"]').should('be.visible')
    })
})