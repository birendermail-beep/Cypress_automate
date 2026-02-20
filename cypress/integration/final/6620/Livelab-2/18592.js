
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18592
@story_name: Unpinned with floating box of right panel
@path: final/6620/Livelab-2
@test_case_name: LB_UI_02
@description: Unpinned right panel with float, draggable and resizable box.
@test_steps:
^Unpinned with floating box of right panel.
- Follow the test case: LB_UI_01.
- Click on the pinned icon right top corner of the right panel.
- Reference Video screenshot: https://www.screencast.com/t/2n5Hmno5cwq . 
@test_data: crn=AZ-lab-test, snippet=Creating a Document Using a Template .
@result: Right panel is draggable, resizable.
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
            cy.get('#right_pane_pin_icon').click();
            cy.get('#right_pane_toggle_icon').click();
            cy.get('#ui-id-1').should('exist');
        })
    })
})