/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14980
@story_name: Locking Condition
@path: final/6607/Student
@test_case_name: Locking Condition
@description:
@test_steps:

^pe-locking-conditions_assignment
-go to my library search course compTIA lo-A
-click to open manage  and open instructor tool 
-click on assessments tab

@test_data: n/a
@result: dashboard will open with locking condition
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })
    it(' pe-locking-conditions_assignment', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/?func=class_edit&u_course_code=02pzx.04ehS')
        })
        cy.get('[intro-id="assessments"]').contains('Assessments').click({ force: true });
        cy.get('.alert > .btn').click();
        cy.contains('Any assessment you create will be available for scheduling across all your sections.').should('be.visible');
    })

})