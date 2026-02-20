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
^pe-zendesk_bug
-Go to https://www.ucertify.com/zendesk/zendesk.php
-Select Start After date and Search Before date.
-Click Show ticket button.

@test_data: n/a
@result: ticket list will display
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Miscellaneous', function() {
    it('pe-zendesk_bug', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/zendesk/zendesk.php")
        })
        cy.get('#datepicker').clear({ force: true }).type('2020-02-05', { force: true })
        cy.get('#end_datepicker').clear({ force: true }).type('2020-02-25', { force: true })
        cy.get('#show_ticket').click()
    })
})