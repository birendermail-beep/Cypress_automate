/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name: orderbook_admin_activity_time
@path: final/7761/orderbook
@test_case_name: orderbook_admin_activity_time.js
@description: 
@test_steps:
^Select the course to download Chapter Wise Time Activity and click on export button and select desired method
-Select course
-Click on export
-Select export as xls

^Select the course to download Chapter Wise Time Activity and click on export button and select desired format
-Select course
-Click on export
-Select export as csv

@test_data: n/a

@result: all details of this course should be downloaded in csv format / xls format
*/


import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url +"/admin/admin_activity_time.php");
        })
            cy.get("#course").select("000-731:DB2 DBA for Linux UNIX and Windows", {
                force: true
            });
            cy.get('[data-cy=download_list_dropdown]')
                .contains("Export")
                .click({ force: true });    
    });
    it("Select the course to download Chapter Wise Time Activity and click on export button and select desired method", function() {
        cy.get("#export_all").click();
    });
    it("Select the course to download Chapter Wise Time Activity and click on export button and select desired format", function() {
        cy.get("#export_all_csv").click();
    });
});