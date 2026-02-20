/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10395
@story_id:
@story_name: AWS User Creation
@path: final/LiveLab
@test_case_name: AWS User Creation.js
@decription:
@test_steps:
^AWS User Creation
-Open this url: https://www.jigyaasa.info?func=navigate_items&item_sequence=1
-https://www.ucertify.com/?func=navigate_items&item_sequence=1
-See are you able to access the lab and go to aws page

@test_data:
-course = Certified SysOps Administrator Associate
-item_sequence = 1

@result: Lab is loaded and able to login
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Multiple Autograding Server Support', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=SOA-C01-v2&desk_copy=1');
        })
        cy.get('[data-cy=labs]').click();
        cy.get('#adv_search').type('aws{enter}');
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=navigate_items&item_sequence=3');
        })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.get('#console_session').should('exist');
    })
})

// rest of the steps will be performed manually