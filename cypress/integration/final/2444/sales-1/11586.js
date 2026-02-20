/*
    @author: Ankit Kumar
    @master_project_id: 2444
    @phase_id: NA
    @story_id: 11586
    @story_name: KPI Report
    @path: final\Admin\
    @test_case_name: KPI Report
    @description: It will login and test Sales Activity report.
    @test_steps: 
    
    ^Activity report
    - 1) Visit the website.
    - 2) See Summary of Sales team members calling and demo data 
    
    ^Zoom report integration with activity report
    - 1) Visit the website.
    - 2) open Kpi report dropdown 
    - 3) click on new activity report
    - 4) login with zoom credentials
    - 5) details of person wise will open up alongwith zoom call logs
    
    ^Inside Sales Activity Report
    - 1) Visit the website.
    - 2) Actitivty report for account managers will open Up
    
    ^Logged in user data should reflect first in the activity report
    - 1) Visit the website.
    - 2) Click on Kpi report dropdown
    - 3) Select account manager activity report
    - 4) Activity report will open up for you, your Id will be selected by default
    
    ^Meeting comment show
    - 1) Visit the website.
    - 2) Hover on Meeting/Extras column table row data, Details will be shown after retrieving data from the server

    @test_data:
    - N/A

    @result: It will test Sales Activity report.
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
        AdminArea.salesActivityReport()
    })
    it('Inside Sales Activity Report', () => {
        cy.get('.highcharts-background').should('be.visible')
    })

    it('Meeting comment show', () => {
        cy.viewport(1366, 768)
        cy.fixture('global').then(data => {
            cy.get('[data-cy="sdt_activity"]').focus().clear().type(data.focus.start)
            cy.get('[data-cy="mem_select"]').select(data.auditor_name[5], { force: true })
        })
        cy.get('[data-cy="activity_btn"]').click({ force: true });
        cy.wait(2000);
        cy.get('[data-cy=meeting_details_popup]').trigger('mouseover')
        cy.wait(2000);
        cy.get('.popover').should('be.visible')
    })
})