/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10048
@story_id: 11172
@story_name: Show Console
@path: final/LiveLab
@test_case_name: Show Console
@description: N/A
@test_steps: 

^Machine name in support
-Go to action column of devices list table
-If the machine state is on then 
-Click on Show console option dropdown
-It will redirect to new page where console of the machine will be shown

@test_data: N/A
@result: It will show the machine name in bug support for virtual lab bug
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('live_lab area', function() {

    it('vm_console', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
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
    })
})