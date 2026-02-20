
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18586
@story_name: Container Instance
@path: final/6620/Livelab-2
@test_case_name: LB_AZ_01
@description: There was no any task  on container instance in azure lab
@test_steps:
^Container Instance
- Load the crn: az-900.
- Search the Creating a Container Instance.
@test_data: crn= az-900, snippet=Creating a Container Instance
@result: Task added in the course.
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Container Instance', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=AZ-900-v2');
            cy.get('[data-cy=labs]').click();
            //cy.get('#adv_search').type('Creating a Container Instance');
            cy.wait(5000);
            cy.get('#cardItem05wyz').should('exist');
        })
    })
})