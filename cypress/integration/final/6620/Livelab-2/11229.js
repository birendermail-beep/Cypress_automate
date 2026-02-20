/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11229
@story_name: LIve Lab Machine Connect
@path: final/LiveLab
@test_case_name: LIve Lab Machine Connect
@description: n/a
@test_steps:

^ajax_virtual_lab
-Go to ucertify.com
-Go to my library 
-Search course  ucertify test kit
-Click on manage
-Open desk copy
-Click on performance lab 
-Open live lab (connecting to a database)
-Click to ON button in the left bottom bar

@test_data: n/a
@result: lab task will open
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('live_lab area', function() {

    it('ajax_virtual_lab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=items&class_code=055Jj')
            cy.get('[data-cy=labs]').click()
            cy.visit(data.url + '/?func=navigate_items&item_sequence=1')
        })
        cy.get('.pl-3').click({ force: true })
        cy.get('#capability0 > li:first-child').then(($text) => {
            if ($text.text().includes('On')) {
                cy.get('[data-cy=status_machine]').click();
            } else {
                cy.get('[data-cy=status_machine]').click();
            }
        })
    })
})