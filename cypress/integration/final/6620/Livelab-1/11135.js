/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10395
@story_id:
@story_name: AZ User Creation
@path: final/LiveLab
@test_case_name: AZ User Creation.js
@decription: To check the azure lab is working or not
@test_steps:
^AZ User Creation
Follow the screenshot video
https://www.screencast.com/t/DzIWRj5C3GId

@test_data:
-course = Azure Labs
-item_sequence = 1

@result: Lab is loaded and able to login
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Multiple Autograding Server Support', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=AZ-lab-test&desk_copy=1');
        })
        cy.get('[data-cy=labs]').click();
        //cy.get('#adv_search').type('aws{enter}');
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=navigate_items&item_sequence=5');
        })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.wait(7000);
        cy.get('#console_session').should('exist');
    })
})

// rest of the steps will be performed manually