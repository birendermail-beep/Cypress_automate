/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10531
@story_id: 
@story_name: Content Diagnosis
@path: final/LiveLab
@test_case_name: Content Diagnosis.js
@description: N/A
@test_steps:
^Content Diagnosis 
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=diagnosis&action=content
-Click on Diagnosis tab. It will show the dropdown options
-Click on Content Diagnosis

^Advanced search functionality
-Follow the test case 1
-Click search button it will open the advanced search modal
-Click submit button

^Search record based on created on date
-Follow the test case 1
-Click search button it will open the advanced search modal
-Click submit button

^Search record based on content guid
-Follow the test case 1
-Click search button it will open the advanced search modal
-Click submit button

^Search record based on content snippet
-Follow the test case 1
-Click search button it will open the advanced search modal
-Click submit button

^Search record based on course
-Follow the test case 1
-Click search button it will open the advanced search modal
-Click submit button

^Export all records
-Follow the test case 1
-Click on Export All
-Note: If the Any records are selected from checkbox it will be disabled. Because here it is implemented for export all records but will work on advanced search filter condition. Only there should not necessary to check the records from check box (First column of table)

^Export as xls
-Follow the test case 1
-Click search button it will open the advanced search modal
-Click submit button
-After records are shown on page Click first header checkbox present left most of the table header 
-It will select all records
-Click Export as xls
-It will download the excelsheet and will shown left bottom corner. Open the file and see the records

@test_data: 
-advanced search
-limit = 30
-created on start time = 10 Dec 2019
-end time = 10 Dec 2019"
-content guid = 05q6y
-content snippet = Creating a Form
-course = A Practical Guide to Computer Forensics Investigations [comp-forensic-lab]
-export button = Export All
-export button = Export as xls

@result: Records for created on 10 Dec 2019 will be shown. And in created On Date will be shown, Record will be search for the content guid = 05q6y, Record will be search for the content snippet = https://www.screencast.com/t/MqIEEyO8E, Records will be searched for selected course = A Practical Guide to Computer Forensics Investigations [comp-forensic-lab], Records will be downloaded in excel sheet
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    //1st testcases covered in beforeEach
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        cy.get(':nth-child(4) > #diagnosis_button').click()
        cy.get('#content_diagnosis')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
    })
    it('Advanced search functionality', () => {
        cy.get('#adv_search_button').click();
    })
    it('Search record based on created on date', () => {
        //not in cypress scope
    })
    it('Search record based on content guid', () => {
        cy.get('#content_guid').type('05q6y');
        cy.get('#adv_search_button').click();
    })
    it('Search record based on content snippet', () => {
        cy.get('#snippet').type('Creating a Form');
        cy.get('#adv_search_button').click();
    })
    it('Search record based on course', () => {
        cy.get('.select2-selection__placeholder').click();
        cy.get('.select2-search__field').type('A Practical Guide to Computer Forensics Investigations [comp-forensic-lab]{enter}');
        cy.get('#adv_search_button').click();
    })
    it('Export all records', () => {
        cy.get('#adv_search_button').click();
        cy.get('[data-cy=export_btn]').click();
        cy.get('#download_all_xls').click();
    })
    it.only('Export as xls', () => {
        cy.get('#adv_search_button').click();
        cy.get('[data-cy=export_btn]').click();
        cy.get('#export_all').click();
    })
})