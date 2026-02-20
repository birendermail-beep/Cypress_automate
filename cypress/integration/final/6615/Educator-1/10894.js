/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10894
@story_name: Upload Resource
@path: final/6615
@test_case_name: Upload Resource.js
@description: n/a
@test_steps:
^Resources Tab/ Upload Student resources
-Click on Resources tab;        
-Click on Upload button for the required Resource;     
-Select the required file and click open; 

^Resources Tab/ Upload Student resources/Edit
-Click on Settings button;      
-Select Edit option;     
-Add Title & Description;     
-Click on Save button;     

^Resources Tab/ Upload Student resources/Delete
-Click on Settings button;      
-Select Delete option;     
-Click on OK button twice;         

@test_data: n/a
@result:Upload Resource.
 */
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.13.2.1 Resources Tab/ Upload Student resources', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/?func=class_edit&u_course_code=04Kst.05M7I')
        })
        cy.get('[intro-id="resources"] > .nav-link > .ml').click()
        cy.get('#fileUploadSelector').click({ force: true })
        cy.get('.icomoon-24px-download-1').eq(0).click()
    })
});