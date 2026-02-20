/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 14900
@story_name: welcome message
@path: final/6607/Student
@test_case_name: welcome message
@description: N/A   
@test_steps:

^pe-welcome-message
-go to my library 
-search course CompTIA LO-Aplus-complete
-click to manage button
-click open

^pe-profile_update_warning
-go to ucertify.com
-login from given account and welcome page will be open

@test_data: n/a
@result: welcome message will open
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
    
    it('pe-welcome-message', function() {
        cy.fixture('global').then(data => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })
    })

    /** Welcome Page Testing */
    it('Welcome Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/myprofile.php?func=myprofile')
            cy.get('[href="#personal_info"]').contains('User Details')
            cy.visit(data.url + '/?func=welcome')
        })
        cy.get('[data-cy=mylibrary]').contains('My Library')
    })
})