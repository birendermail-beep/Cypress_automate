/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 
@story_id: 11494
@story_name: Dashboard
@path: final/Focus
@test_case_name: Dashboard
@description: N/A
@test_steps:

^focus_dashboard and focus_left_sidebar
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php

@test_data: n/a
@result: focus dashboard will open
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {

    it(' focus_left_sidebar and focus_dashboard', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
        })
    })

})