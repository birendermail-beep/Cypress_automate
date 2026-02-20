/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10901
@story_name: Export - Track Report
@path: final/6615
@test_case_name: Export - Track Report.js
@description: n/a
@test_steps:

^Track tab/Export/Track Report
-Click on Export;     
-Select Track Report

^Track tab/Export/Track Report/Download Zip format
-Click on Export;     
-Select Track Report ;       
-Select the required components that needs to be downloaded;       
-Select Download in Zip format;        
-Click Download;

^Track tab/Export/Track Report/Download Excel format
-Click on Export;     
-Select Track Report ;       
-Select the required components that needs to be downloaded;       
-Select Download in Excel format;        
-Click Download;

^Track tab/Export/Track Report/Download CSV format
-Click on Export;     
-Select Track Report ;       
-Select the required components that needs to be downloaded;       
-Select Download in CSV format;        
-Click Download;

@test_data: n/a
@result: Track tab/Export  
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
    })
    it('Track tab, Export gradebook track report', function() {
        cy.get('[data-cy=track]').click()
        cy.get('#edu_export_block a[aria-label="Export"]').click()
        cy.get('#download_gradebook').click()
    })
    it('Track tab, Export zip track report', function() {
        InstructorPage.trackExport()
        cy.get('#download_zip').click()
        cy.get('#download').click()
    })
    it('Track tab, Export excel track report', function() {
        InstructorPage.trackExport()
        cy.get('#download_excel').click()
        cy.get('#download').click()
    })
    it('Track tab, Export csv track report', function() {
        InstructorPage.trackExport()
        cy.get('#download_csv').click()
        cy.get('#download').click()
    })
});