/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14894
@story_name: Nav Item
@path: final/6607/Student
@test_case_name: Nav Item
@description: N/A   
@test_steps:
^Nav Item
- Go to my library 
- Search course  Oracle Certified Associate Java SE 8 
-Open desk copy 
- Click on pre-assessment 
-Click on start button

^nav_item
- Visit to website.
- Login into website.
-Go to my  library
-search course ucertify test kit and click on manage and open desk copy
-Take pre-assessment test
-Click end test and go to result page
-Click any item list element

@test_data: n/a
@result: input hidden fields included
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    it('Nav Item', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy="mylibrary"]').click()
            cy.get('#search_course').clear({ force: true }).type('Oracle Certified Associate Java SE 8', { force: true })
            cy.get('[course_code="02hhS"]').contains('Manage').click({ force: true })
            cy.visit(data.url + '/?func=load_course&course=1Z0-808&class_code=05uGp')
        })
        cy.get('[intro-id="pre_asssement"]').click();
        StudentPage.terminatePreAssessment()
        cy.get('#test_mode').click()
        cy.get('#userans-A').click({ force: true })
        StudentPage.endTest()
        cy.contains('Given: class Triangle{ publ...le(); t.setAngle(90); } }').click({ force: true })
    })
})