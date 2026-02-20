/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15137
@story_name: download_new
@path: final/Website
@test_case_name: download_new
@description: N/A
@test_steps:
^download
-Login to ucertify.com
-Open the following url:(https://www.ucertify.com/courses/download_new.php)
-Select the course:(101-400-complete:LPIC-1 Exam 1 - Linux Server Professional Certification V4.0  (Course & Labs)).
-Select PDF.
-Click on the Export button

^download1
-Login to ucertify.com
-Open the following url:(https://www.ucertify.com/courses/download_new.php)
-Select the course:(101-400-complete:LPIC-1 Exam 1 - Linux Server Professional Certification V4.0  (Course & Labs)).
-Select DOC.
-Click on the Export button

@test_data: n/a
@result: It will Open the download_new page.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Download page', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/courses/download_new.php");
        })
    })
    it('test the vendors list page', function() {
        cy.get('#course').select("XK0-004:CompTIA Linux+ (XK0-004)", { force: true });
        cy.get("#format").select("PDF", { force: true });
        cy.get("button").contains("Export").click();
    })
    it('test the download page', function() {
        cy.get('#course').select("101-400-complete:LPIC-1 Exam 1 - Linux Server Professional Certification V4.0  (Course & Labs)", { force: true });
        cy.get("#format").select("DOC", { force: true });
        cy.get("button").contains("Export").click();
    })
})