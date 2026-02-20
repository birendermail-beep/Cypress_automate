/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10568
@story_id: 11582
@story_name: Campus Portal Dashbaoard
@path: final\7761\
@test_case_name: Campus Portal Dashbaoard
@description:
@test_steps:
^Load compus portal
-Use below URL to load it
-URL: https://www.ucertify.com/ext/pro_test/index.php?func=campus_report

^Search by access code
-Put Voucher code in Voucher code textbox 

^Search using Advance Search
-Put data in advance search filter

@test_data: N/A 
@result:
- View campus portal page.
 */


import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Campus Portal', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/ext/pro_test/index.php?func=campus_report')
        })
    })
    it('Campus portal load and Campus portal search', function() {
        cy.get('#voucher_code').type('P7DUFLUPXNLBMFMX')
        cy.get('#search_voucher').click()
    })
    it('Campus portal advance search', function() {
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('.input-group-append > .dropdown-menu > li > .dropdown-item').click()
        cy.get('#voucher_input').type('P7DUFLUPXNLBMFMX')
        cy.get('#search_btn').click()
    })
});