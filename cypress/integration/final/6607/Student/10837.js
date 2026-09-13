/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10837
@story_name: Download Certificate
@path: final/6607/Student
@test_case_name:Download Certificate.js 
@description: certificate will be displayed
@test_steps:
    
^click on download pdf if you have completed minimum requirement to get the certificate then this option will show  
-visit the website
-login into page
-Click on My Library and open the student Dashboard
-click on certificate completion button to open certificate 
-click on download pdf if you have completed minimum requirement to get the certificate then this option will show 

^click on pdf icon to download in pdf format 
-visit the website
-login into page
-Click on My Library and open the student Dashboard
-click on certificate completion button to open certificate 
-click on pdf icon to download in pdf format

^click on image icon to download in image 
-visit the website
-login into page
-Click on My Library and open the student Dashboard
-click on certificate completion button to open certificate 
-click on image icon to download in image

@test_data: n/a
@result: certificate will be displayed
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Certificate of completion testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })

    it('click on Certificate of completion button to open certificate ', function() {
        cy.fixture('global').then(data => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.contains('a:visible, button:visible, [role="button"]:visible', /Certificate of Completion/i)
            .should('be.visible').click()
    })
})