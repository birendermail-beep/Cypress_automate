/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14873
@story_name: Case study
@path: final/6607/Student
@test_case_name: Case study
@description: case study in study planner
@test_steps:

^Case study
-Login to ucertify.com
-Open the following url.(https://www.ucertify.com/?func=get_case&content_guid=02s8i).

@test_data: n/a
@result: case study in study planner
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Study Planner livelab', function() {

    it('Opening the Study Planner livelab page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_case&content_guid=02s8i");
        })
        cy.get("#container").should('exist');
    })
})