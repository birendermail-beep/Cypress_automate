/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11511
@story_name: Fill Daily Status
@path: final/Focus
@test_case_name: Fill Daily Status
@description: N/A
@test_steps:

^daily_status_new
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on goal/project tab
-Click daily status 

^daily_status_new-define
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on goal/project tab
-Click daily status 

@test_data: n/a
@result: daily status form will open
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {
    it('daily_status_new and daily_status_new-define', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
        })
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.nav-item.show > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })
    })
})