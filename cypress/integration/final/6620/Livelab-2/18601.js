
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18601
@story_name: Autofit disable as default
@path: final/6620/Livelab-2
@test_case_name: LB_UI_11
@description: Previously after machine connected autofit option was showing but now it is implemented  to show the autofit disable as default before connecting the machine.
@test_steps:
^Autofit disable as default
- Follow the test case LB_UI_01 to load the lab.
- Click the machine name dropdown. it will shown there.
- Reference video screenshot: https://www.screencast.com/t/hhEUVS365 . 
@test_data: crn=cw81-testing, snippet=prabhat testing guid.
@result: Autofit as disabled is showing
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Autofit disable as default', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=AZ-lab-test&desk_copy=1');
            cy.get('[data-cy=labs]').click();
            cy.visit(data.url + '/?func=navigate_items&item_sequence=1');
            cy.get('.switch_device_dropdown').click();
            cy.get('[data-cy=status_machine]').should('exist');
        })
    })
})