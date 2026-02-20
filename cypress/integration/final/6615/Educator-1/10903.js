/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10903
@story_name: Define Gradebook
@path: final/6615
@test_case_name: Define Gradebook.js
@description: n/a
@test_steps:

^Define Gradebook
-Click on 'here' button to define gradebook in the Gradebook tab;       
-On the Design tab, set up the required grades;     
-Turn ON the Report button;      
-Click the Save button;

^Click here button to define gradebook
-Click on 'here' button to define gradebook in the Gradebook tab

@test_data: n/a
@result: Gradebook is defined  
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
    })
    it('Track tab, Export track report', function() {
            cy.get('[intro-id="track"] > a').click()
            cy.get('#edu_tab_block a[aria-label="Gradebook"]').click()
        })
        // Define gradebook from track area, [To run this test case make sure Grade book must not be defined]
    it('Define gradebook using click here', function() {
        cy.get('[intro-id="track"] > a').click()
        cy.get('#edu_tab_block a[aria-label="Gradebook"]').click()
        cy.get('[data-cy=gradebook__dropdown_cy]').click()
        cy.get('#define_gb').click({ force: true })
    })
});