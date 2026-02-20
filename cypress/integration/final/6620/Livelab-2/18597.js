
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18597
@story_name: Upload my work from machine console
@path: final/6620/Livelab-2
@test_case_name: LB_UI_07
@description: Some class changed for the upload my work.
@test_steps:
^Upload my work from machine console
- Follow the test case LB_UI_01 to load the lab.
- Connect the machine and click on the upload my work from machine.
- Check the UI. It should look good.
- Reference video screenshot: https://www.screencast.com/t/to0oNlbtWCa . 
@test_data: crn=Microsoft ITC-CS1010, snippet=Creating a Document Using a Template .
@result: Upload my working properly.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
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
            //rest of the steps must be performed manually
        })
    })
})