
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18591
@story_name: Pinned UI for the right pane
@path: final/6620/Livelab-2
@test_case_name: LB_UI_01
@description: Right panel ui has been changed now from previous
@test_steps:
^Pinned UI for the right pane
- Load the crn: AZ-lab-test.
- open any livelab item: for example: Creating a Document Using a Template
- compare the UI from the old for the right pane
- Reference Video screenshot: old: https://www.screencast.com/t/erk9AjgcgK, new: https://www.screencast.com/t/4kPdbe17u .
@test_data: crn=AZ-lab-test, snippet=Creating a Linux interface .
@result: New UI is showing with pinned option and tips and tricks video and autograded activity text.
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
            cy.get('#right_pane_pin_icon').should('exist');
        })
    })
})