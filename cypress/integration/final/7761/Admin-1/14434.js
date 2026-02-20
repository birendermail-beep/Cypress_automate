/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 10418
@story_id: 14434
@story_name: Create Proctored Test
@path: final/7761/orderbook
@test_case_name: Create Proctored Test
@description: N/A
@test_steps:

^Create proctored test
(1) Click the Actions button
(2) Click the Create Proctered Test

^Create proctored test
Fill required fields and click the Create button

@test_data: N/A 
@result: - Create proctored test modal open.
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
    it('Campus portal create proctored test modal', function() {
        cy.get('#actions_btn').click()
        cy.get('#create_modal').click()
    })
    it('Campus portal create proctored test', function() {
        cy.get('#actions_btn').click()
        cy.get('#create_modal').click()
        cy.get('#assignment_code').select('939264', { force: true })
        cy.get('#issued_to_org_id').select('04Dxg', { force: true })
        cy.get('#status').select('a', { force: true })
        cy.get('#expiry_date').click()
        cy.get('.table-condensed > tbody > :nth-child(5) > :nth-child(4)').click({ force: true })
        cy.get('#seat_max').click({force:true}).clear().type('4', { force: true })
        cy.get('#comments').type('Automation testing')
        cy.get('#create_voucher_btn').click()
    })
});