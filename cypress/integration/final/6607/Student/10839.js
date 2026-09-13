import { startPracticeLearn } from '../../../../support/student-practice'
/*
@author:Anirudha pratap
@master_project_id: 6607
@phase_id:9327(10478)
@story_id: 10839
@story_name: Download Result
@path: final/6607/Student
@test_case_name: Download Result.js
@description: 
@test_steps:

^click on download the result 
-visit the website
-login into page
-open any course
-Perform any test.
-Click End test.
-Result page will appear, on result page, click the Click here to download pdf button.
-Result will be downloaded

@test_data:n/a
@result:Download result in pdf
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Download testing area', function() {
    //in result area download the pdf
    it('click on download the result', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        startPracticeLearn()
        cy.get('#next').click({ force: true })
        StudentPage.endTest()
        cy.get('.icomoon-24px-download-2').click({ force: true })
    })
})