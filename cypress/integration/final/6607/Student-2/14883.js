/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 14883
@story_name: Item Nav
@path: final/6607/Student
@test_case_name: Item Nav
@description: N/A
@test_steps:

^item-nav-tabs
-go to ucertify.com and login.
-go to my library and search course LO CompTIA.
-click on manage and open desk copy.
-click on performance lab
-Click on Understanding USB versions lab
-Go to url https://www.ucertify.com/?func=navigate_items&item_sequence=1&test_view=split 

@test_data: n/a
@result: performance lab test item will display 
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    it('item-nav-tabs', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
            cy.get('[data-type="l"]').click()
            cy.visit(data.url + '/?func=navigate_items&item_sequence=1')
            cy.visit(data.url + '/?func=navigate_items&item_sequence=1&test_view=split')
        })
    })
})