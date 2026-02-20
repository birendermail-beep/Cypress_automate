
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18593
@story_name: Progressbar for the machine operation changed
@path: final/6620/Livelab-2
@test_case_name: LB_UI_03
@description: Progressbar UI has been changed from the old UI. In old long progressbar was showing but now its changed to circular with progress value in the center of the circle.
@test_steps:
^Progressbar for the machine operation changed
- Follow the Test Case LB_UI_02 to load the lab.
- Connect the machine.
- You can see the circular progressbar with the progress value in the center of the circle.
- Reference video screenshot: https://www.screencast.com/t/Kwru4xp6ba . 
@test_data:
@result: Circular progressbar with progress value in the center is showing.
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
            cy.get('.switch_device_dropdown').click();
            cy.get('[data-cy=status_machine]').click();
        })
    })
})