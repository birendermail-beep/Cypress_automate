/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11046
@story_name: Perform Knowledge Check
@path: final/6607/Student
@test_case_name: Perform Knowledge Check.js
@description: Perform Knowledge Check
@test_steps:
^next and previous button 
-open website http://ucertify.com/
-login my account and goto my library and search cloud fundations
-open this course and click chapter and lesson 
-and goto bottom and you can see the quiz player with 4 question and click on next button

@test_data: n/a
@result: scorl bar should not come in quiz player it should manage height automatically
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student area', function() {
    it('Perform Knowledge Check', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
            cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[2] + ',' + data.group_guid[3] + ',' + data.group_guid[4] + '&title=&player_setting')
            cy.questionNavigation()
            cy.contains('Connect the Idea').should('be.visible')
        })
    })
})