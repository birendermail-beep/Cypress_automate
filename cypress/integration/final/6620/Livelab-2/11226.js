/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 
@story_name: Live Lab Timer
@path: final/LiveLab
@test_case_name: Live Lab Timer
@description: n/a
@test_steps:

^timer_alert
-Go to ucertify.com
-Go to my library
-Search course  MCSA/MCSE - Querying Microsoft SQL Server 2012/2014
-Click on manage
-Open desk copy
-Click on performance lab
-Open live lab (deleteing a table)
-Click on win16 button
-Click on timer watch

@test_data: n/a
@result: modal will open for time extend
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('live_lab area', function() {

    it('timer_alert', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses')
            cy.get('#search_course').clear({ force: true }).type('ucertify', { force: true })
            cy.get('[course_code="055Jj"]').contains('Manage').click({ force: true })
            cy.visit(data.url + '/?func=load_course&course=items&class_code=055Jj')
            cy.get('[data-cy=labs]').click()
            cy.visit(data.url + '/?func=navigate_items&item_sequence=4')
        })
        cy.get('.pl-3').click({ force: true });
        cy.get('#capability0 > li:first-child').then(($text) => {
            if ($text.text().includes('On')) {
                cy.get('[data-cy=status_machine]').click();
            } else {
                cy.get('[data-cy=status_machine]').click();
            }
        })
        cy.wait(9000)
        cy.get('#tmr_btn').click({ force: true })
        cy.get('body')
    })

})