/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10902
@story_name: Export - Attendance
@path: final/6615
@test_case_name: Export - Attendance.js
@description: n/a
@test_steps:

^Track tab/Export/Attendance
-Click on Export;     
-Select Attendance;       
-Select the required Start & End date to be downloaded;       
-Click Get;        
-Click Download;

@test_data: n/a
@result: Attendance report is downloaded  
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('Track tab, Export track report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
        cy.get('[intro-id="track"] > a').click()
        cy.get('#edu_export_block a[aria-label="Export"]').click()
        cy.get('#export_attendance_modal').click()
        cy.get('#download_attendance').click()
    })
});