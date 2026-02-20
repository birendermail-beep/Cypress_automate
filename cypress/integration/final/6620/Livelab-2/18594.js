
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18594
@story_name: Tips and Tricks video
@path: final/6620/Livelab-2
@test_case_name: LB_UI_04
@description: Tips and tricks video for the livelab. If its seen for once then its text will be changed to Watched and for all livelab it will shown as watched.
@test_steps:
^Tips and Tricks video
- Follow the Test Case LB_UI_02 to load the lab.
- Click on the Tips and Tricks video icon.
- See the video and close the video modal. you can see the video percentage will be updated.
@test_data: crn=Microsoft ITC-CS1010, snippet= Creating a Document Using a Template .
@result: Video percentage will be updated and if the video is fully watched  then text will be changed to Watched and after navigating to the next item it will be shown as watched or what percentage you have watched.
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
            cy.wait(20000);
            cy.get('.ibox-content > .row').should('exist');
        })
    })
})