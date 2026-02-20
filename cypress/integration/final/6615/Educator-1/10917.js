/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10917
@story_name: Track Prepengine - Student View
@path: final/6615
@test_case_name: Track Prepengine - Student View
@test_steps:
^Prepengine tab/Student view
-Click on Prepengine tab;     
-Select Student view;   

^Check the Prep-engine for the required student by selecting their name
-Click on Prepengine tab;     
-Select Student view;       
-Select the required Student name;

^Check the Outcome in Student view of Prep-engine
-Click on Prepengine tab;     
-Select Student view;       
-Select the required Student name;    
-Select Outcome option;

^Check the Item analysis in Student view of Prep-engine
-Click on Prepengine tab;     
-Select Student view;       
-Select the required Student name;    
-Select Items option;

^Check the Session analysis in Student view of Prep-engine
-Click on Prepengine tab;     
-Select Student view;       
-Select the required Student name;    
-Select Sessions option;

@test_data: na

@result: The Outcome for each testcases shows up
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
            InstructorPage.prepengineStudentView()
        })
    })
    it('Check the Prep-engine for the required student by selecting their name Prepengine tab', function() {
        cy.wait(3000)
        cy.get('.list-group-item').eq(1).click()
    })
    it('Check the Outcome in Student view of Prep-engine', function() {
        cy.wait(3000)
        cy.get('.list-group-item').eq(1).click()
        cy.wait(3000)
        cy.get('[intro-id="outcomes"]').click()
    })
    it('Check the Item analysis in Student view of Prep-engine', function() {
        cy.wait(3000);
        cy.get('.list-group > .active').click()
        cy.wait(3000)
        cy.get('[intro-id="items"]').contains('Items').click()
    })
    it('Check the Session analysis in Student view of Prep-engine', function() {
        cy.wait(3000);
        cy.get('.list-group > .active').click()
        cy.wait(3000)
        cy.get('[href="#sessions"]').contains('Sessions').click()
    })
});