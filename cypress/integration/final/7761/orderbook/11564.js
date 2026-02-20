/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11564
@story_name: Orderbook Coupon
@path: final/7761/orderbook
@test_case_name: Orderbook Coupon.js
@description: N/A
@test_steps:
^add in coupon 
-Open https://www.ucertify.com/admin/admin_coupon.php
-Click on add button
-Coupon management page will be open
-Enter title
-Select type
- Select visibility
-Enter coupon code
-Enter value
-Select Include Crn
-Select Include Org ID
- Select status
-Enter start and end date
-Enter max and min value
-Enter use counter
-Enter max count
-Enter No Less Limit
-select Exclude Crn
-Exclude Org ID
-Enter vendor courses
-Click on save

^edit in coupon
-Click on action menu
-Select edit option
-Enter data in which you want to change the data

^delete coupon
-Click on action menu
-Select delete option
-A confirmation msg will appear
-Click ok to delete

^Search coupon
-Enter correct coupon code
-select visibility if applicable
-Click on submit

^advance search of search tab
-Enter incorrect coupon code 
-select visibility if applicable 
-Click on submit

^advance search of search tab
-Enter correct invoice guid
-Click on search

^advance search of search tab
-Enter incorrect invoice guid
-Click on search

^advance search of guid  tab
-Enter login counter
-Select = from option list
-Click on search

^advance search of guid  tab
-Click on guid tab
-Select search data based o guid radio button
-Enter multiple guid with comma saperated

@test_data: n/a
@result: invoice detail of user will  be open
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index'
describe("orderbook page testing", function () {
    beforeEach("This will run before each", function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin");
            cy.get('[data-cy=other_tab]').click({ force: true })
            cy.get('#others_info > #taglist > tbody > :nth-child(4) > :nth-child(2) > .nh > .chapter-link').contains('Manage Coupon').click({ force: true })
        })
    })
    //add_coupon.1
    it("To add another coupon click on add button", function () {
        cy.get(".btn")
            .contains("Add")
            .click();
        cy.wait(8000);
        cy.get("#title").type("testing");
        cy.get("#coupon_type").select("Discount Coupon", { force: true });
        cy.get("#visibility").select("Project", { force: true });
        cy.get("#coupon_code").type("123456");
        cy.get("#value").type("12%");
        cy.get("#for_crn").select("HTML5-CSS3 Beginning HTML5 and CSS3", {
            force: true
        });
        cy.get("#include_org").select("uCertifyTest", { force: true });
        cy.get("#status").select("Active", { force: true });
        cy.get("#max").type("5");
        cy.get("#min").type("1");
        cy.get("#Use_Counter").type("2");
        cy.get("#exclude_crn").select("HTML5-CSS3 Beginning HTML5 and CSS3", {
            force: true
        });
        cy.get("#exclude_org").select("01LjT", { force: true });
        cy.get("#coupon_desc").type("2");
        cy.get("#start_date").click();
        cy.get(":nth-child(3) > :nth-child(3)").click();
        cy.get("#expiry").click();
        cy.get(":nth-child(3) > :nth-child(5)").click();
        cy.get(".btn").contains("Save").click({ force: true });
    });
    //edit_coupan.1
    it("To edit in coupon details click on edit option", function () {
        cy.get(".dropdown-item").contains("Edit").click({ force: true });
    });
    //edit_coupan.1
    it("To edit in coupon details click on edit option2", function () {
        cy.get(".dropdown-item").contains("Edit");
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_coupon.php?action=edit&coupon_code=123456");
        })
        cy.wait(9000);
        cy.get("#title").type("testing edit");
        cy.get('.float-right > .btn-primary').click({ force: true });
    });
    //delete_coupon.1
    it("Delete coupon from database", function () {
        cy.get('.btn > .icomoon-new-24px-gear-1').eq(0).click({ force: true })
        cy.get(".delete.dropdown-item")
            .contains("Delete")
            .click({ force: true });
        cy.get("#btn-confirmed").click({ force: true });
    });
    //Search coupon based on visibility
    it("Search coupon based on visibility", function () {
        cy.get("#code").type("2131243");
        cy.get(".btn")
            .contains("Submit")
            .click();
    });
    //Search uncorrect coupon based on visibility
    it("Search uncorrect coupon based on visibility", function () {
        cy.get("#code").type("2131233");
        cy.get(".btn")
            .contains("Submit")
            .click();
    });
});