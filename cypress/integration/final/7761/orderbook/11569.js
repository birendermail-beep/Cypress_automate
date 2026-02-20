/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name: orderbook_course_info
@path: final/7761/orderbook
@test_case_name: orderbook_course_info.js
@description: 
@test_steps:
^Select course from course list to display diagnostic
-Go to the https://www.ucertify.com/utils/download_course_info.php
-Select normal from dropdown
-Click on search button

^Select course from course list to display diagnostic
-Go to the https://www.ucertify.com/utils/download_course_info.php
-Select extended from dropdown
-Select course and videos in chckboxes
-Click on search button

^to download diagnostic report click on download button
-Go to the https://www.ucertify.com/utils/download_course_info.php
-Select extended from dropdown
-Select course and videos in chckboxes
-Click on search button
-Click on download button

@test_data:
-Select course  Adobe Illustrator CS4 Exam
-Select course  Adobe Illustrator CS4 Exam
-click on checkbox as in screenshot

@result: course diagnostic report will be display. 
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url +"/utils/download_course_info.php");
        })
    });
    it("Select course from course list to display diagnostic", function() {
        cy.get("#course_code").select("9A0-088 : Adobe Illustrator CS4 Exam", {
            force: true
        });
        cy.get("#report_type").select("Normal", { force: true });
        cy.get('[data-cy="search_btn"]').click({force:true});
    });
    it("Select course from course list to display diagnostic with screenshots", function() {
        cy.get("#course_code").select("9A0-088 : Adobe Illustrator CS4 Exam", {
            force: true
        });
        cy.get("#report_type").select("Extended", { force: true });
        cy.get("#courses").check({force:true});
        cy.get('[data-cy="search_btn"]').click({force:true});
    });
    it("to download diagnostic report click on download button", function() {
        cy.get("#course_code").select("9A0-088 : Adobe Illustrator CS4 Exam", {
            force: true
        });
        cy.get("#report_type").select("Extended", { force: true });
        cy.get("#courses").check();
        cy.get('[data-cy="search_btn"]').click({force:true});
        cy.get('[data-cy="download"]')
            .contains("Download")
            .click({ force: true });
    });
});