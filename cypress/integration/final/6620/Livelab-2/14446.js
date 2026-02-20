/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 14446
@story_name: Practice IT Diagnosis
@path: final/LiveLab
@test_case_name: Practice IT Diagnosis
@description: n/a
@test_steps:

^pe-practiceit_diagnosis
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on diagnosis 
-Click on practice it diagnosis
-Write testbot@ucertify.com in search bar
-Click on search icon.
-Select user login in select task
-Click on submit
-Click on setting button in any course list 
-click get devices and exercise

@test_data: n/a
@result: practice It Diagnosis report will display
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('pe-practiceit_diagnosis', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
            cy.get('#diagnosis_button').click()
            cy.visit(data.url + '/custom/docker/practiceit_diagnosis.php')
        })
        cy.get('#user_email').clear().type(login_username, { force: true })
        cy.get('.icomoon-search').click()
        cy.wait(6000)
        cy.get('#task_select').select('User Login', { force: true })
        cy.wait(6000)
        cy.get('#perform_action').click({ force: true })
        cy.wait(6000)
        cy.get(':nth-child(1) > :nth-child(8) > .dropdown > .btn').eq(0).click()
        cy.wait(3000)
        cy.get(':nth-child(8) > .dropdown > .dropdown-menu > li > .dropdown-item').eq(0).click({ force: true })
    })
})