
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18596
@story_name: Send Text UI
@path: final/6620/Livelab-2
@test_case_name: LB_UI_06
@description: Send Text UI have been improved.
@test_steps:
^Send Text UI
- Follow the test case LB_UI_01 to load the lab.
- Connect the machine and check send text and keyboards.
- New UI implemented.
- Reference video screenshot: https://www.screencast.com/t/c2l28qgu, https://www.screencast.com/t/l5K49pp0bFxc
@test_data: crn=Microsoft ITC-CS1010, snippet=Creating a Document Using a Template.
@result: New UI for the send text must be shown.
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Container Instance', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=AZ-lab-test&desk_copy=1');
            cy.get('[data-cy=labs]').click();
            cy.visit(data.url + '/?func=navigate_items&item_sequence=1');
            //cy.get('#right_pane_pin_icon').should('exist');
            cy.get('.switch_device_dropdown').click();
            cy.get('[data-cy=status_machine]').click();
            cy.wait(20000);
            // rest steps must be performed manually
        })
    })
})