/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 10418
@story_id: 
@story_name: Campus Portal
@path: final/7761/orderbook
@test_case_name: Campus Portal.js
@description: 
@test_steps:

^Check actions button option
(1) Click the Actions button in table row

^Clone
(1) Click the clone option
(2) A modal box will open
(3) Fill required details and click the Save As button

^Disable
(1) Click the disable option
(2) A confirmation modal box will be open
(3) Click ok button

^Delete
(1) Click the delete option
(2) A confirmation modal box will be open
(3) Click ok button

^Analytic Report
Click the Analytic Report option

^Analytic Report
(1) Click Search button
(2) Click Advance Search option
(3) Fill required details

^See Result
(1) Click the setting button
(2) Result option will be visible
(3) Click the result option

^Delete student
(1) Click the setting button
(2) Delete option will be visible
(3) Click the Delete option
(4) Confirmation modal box will be open
(5) Click the Ok button

@test_data: N/A 
@result: Campus Portal will open.
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Campus Portal', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/ext/pro_test/index.php?func=campus_report')
        })
    })
    it('Campus portal action button table row', function() {
            cy.get('#search_tbody > tr > .span1 > .dropdown > .btn').eq(0).click({ force: true })
        })
        //discuss with shashank sir then it running
        //    it('Campus portal voucher cloning', function() {
        //         cy.get('#search_tbody > tr > .span1 > .dropdown > .btn').eq(0).click({ force: true })
        //         cy.get('#clone_modal').click()
        //         cy.get('#status').select('a', { force: true })
        //         cy.get('#expiry_date').click()
        //         cy.get('.table-condensed > tbody > :nth-child(5) > :nth-child(4)').click({ force: true })
        //         cy.get('#seat_max').clear().type('2', { force: true })
        //         cy.get('#comments').type('Automation testing for cloning')
        //         cy.get('#create_voucher_btn').click()
        //     })
        //     it('Campus portal voucher Disabled', function() {
        //         cy.get('#search_tbody > tr > .span1 > .dropdown > .btn').eq(0).click({ force: true })
        //         cy.get('#search_tbody > tr > .span1 > .dropdown > .dropdown-menu > :nth-child(2) > .pointer').eq(0).click({ force: true })
        //         cy.get('#btn-confirmed').click()
        //         cy.wait(2000)
        //         cy.get('.msg').contains('Voucher status is changed successfully!')
        //     })
        //     it('Campus portal voucher Deleted', function() {
        //         // Do not run this test case on other's voucher
        //         cy.get('#search_tbody > tr > .span1 > .dropdown > .btn').eq(0).click({ force: true })
        //         cy.get('#search_tbody > tr > .span1 > .dropdown > .dropdown-menu > :nth-child(3) > .pointer').eq(0).click({ force: true })
        //         cy.get('#btn-confirmed').click()
        //         cy.wait(2000)
        //         cy.get('.msg').contains('Voucher deleted successfully!')
        //     })
    it('Campus portal Analytic report', function() {
        cy.get('#voucher_code').type('6LAHXLNUHZ9UVPYN')
        cy.get('#search_voucher').click()
        cy.get('#search_tbody > tr > .span1 > .dropdown > .btn').eq(0).click({ force: true })
        cy.get('#search_tbody > tr > .span1 > .dropdown > .dropdown-menu > :nth-child(3) > .pointer').eq(0).click({ force: true })
    })
    it('Campus portal Analytic report Advance search', function() {
        cy.get('#voucher_code').type('6LAHXLNUHZ9UVPYN')
        cy.get('#search_voucher').click()
        cy.get('#search_tbody > tr > .span1 > .dropdown > .btn').eq(0).click({ force: true })
        cy.get('#search_tbody > tr > .span1 > .dropdown > .dropdown-menu > :nth-child(3) > .pointer').eq(0).click({ force: true })
    })
});