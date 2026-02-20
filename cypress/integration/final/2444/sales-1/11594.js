/*
@author: Ankit Kumar
@master_project_id: 2444
@phase_id: 10360
@story_id: 11594
@story_name: Inside Sales Leaderboard Report
@path: final/Admin
@test_case_name: Inside Sales Leaderboard Report.js
@description: 
@test_steps: 
^Inside sales report 1 
-Open https://www.jigyaasa.info/admin/sales_leaderboard.php?func=sales_leaderboard
-Inside sales report will open up

^Inside sales report 2
-Open https://www.jigyaasa.info/admin/sales_leaderboard.php?func=sales_leaderboard
-Inside sales report will open up
-Select multiple team members 
-click on search

^Inside sales report 3
-Open https://www.jigyaasa.info/admin/sales_leaderboard.php?func=sales_leaderboard
-Inside sales report will open up
-change date 
-click on search

@test_data:
-shivani, abhishek
-start date : 15 oct
-end  date : 30 oct"


@result: Inside sales Leaderboard Report will open.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside sales leader board view', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Inside sales leader board view', function() {
        AdminArea.leaderboardDash()
    })
    it('Multiple team member data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/admin/inside_sales/kpi.php')
        })
        cy.get('[data-cy="search_team_select"]').select('2', { force: true })
        cy.get('#user_guid').select(['05DBu', '05MFI'], { force: true })
        cy.get('[data-cy=show_btn]').click()
    })
    it('Inside sales data according to the new date', function() {
        AdminArea.leaderboardDash()
        cy.fixture('global').then(data => {
        cy.get('[data-cy="str_date"]').focus().clear().type(data.focus.start)
        cy.get('[data-cy="end_date"]').focus().clear().type(data.focus.end)
        cy.get('[data-cy="show_btn"]').focus().click()
        cy.get('[data-cy="date_range"]').should('have.text',"("+data.focus.Leaderboard+" To "+data.focus.Leaderboard+")")
        })
    })
});