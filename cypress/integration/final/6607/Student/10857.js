import { startPracticeLearn } from '../../../../support/student-practice'
/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10857
@story_name: Action on Test History
@path: final/6607
@test_case_name: Action on Test History.js
@description: n/a
@test_steps:
^Action button
-visit the website
-login into page
-Perform any test.
-click on setting button to open settings 

^See result from action button
-visit the website
-login into page
-Perform any test.
-click on result option to see the result of this test  

^See review from action button
-visit the website
-login into page
-Perform any test.
-click on review option to review the test 

^Retest all from action button
-visit the website
-login into page
-Perform any test.
-click on re-test all to take the all test again 

^Retest wrong from action button
-visit the website
-login into page
-Perform any test.
-click on re-test wrong to take the all wrong test again 

@test_data: n/a
@result: Open test history page
*/


import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
import { visitDemoCourse } from '../../../../support/student-auth'
describe('Test history testing area', function() {
    //test.history2,test.history2.1,test.history2.2,test.history2.3,test.history2.4
    it('click on setting button to open settings', function() {
        visitDemoCourse()
        startPracticeLearn()
        StudentPage.endTest()
        StudentPage.goTotest()
        cy.contains('Result').eq(0).click()
        StudentPage.goTotest()
        cy.contains('Review').eq(0).click({ force: true })
        cy.get('.icomoon-new-24px-gear-1').eq(0).click({ force: true })
        cy.contains('Retest All').eq(0).click({ force: true })
        StudentPage.endTest()
        StudentPage.goTotest()
        cy.contains('Retest Wrong').click({ force: true })
        StudentPage.endTest()
    })
})
