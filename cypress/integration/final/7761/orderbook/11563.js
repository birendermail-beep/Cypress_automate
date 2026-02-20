/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11563
@story_name: Orderbook Dashbaord
@path: final/7761/orderbook
@test_case_name: Orderbook Dashbaord.js
@description: N/A
@test_steps:
^Search button
-Click on search button
-select report
- Click on advance search
- Select monitoring room
-Select permision
-Select course status
-Enter pay refrence
-Select Organization
-Enter Source
-Select product search
-Select how many data you want to display
-Clcik on search button

^action column re-send activation button
-Click on resend activation button
-Click on send button

^Advance search, Put wrong comma separated user guid or one user guid in one line in text area"
-Switch to Guid tab
-Select Search based on User Guid radio button
-Put wrong comma separated user guid or one user guid in one line in text area
-Click on Search button

^Advance search, Put comma separated user guid or one user guid in one line in text area
-Switch to Guid tab
-Select Search based on User Guid radio button
-Put comma separated user guid or one user guid in one line in text area
-Click on Search button

^Advance search, Put wrong comma separated Course Code or one Course Code in one line in text area
-Switch to Guid tab
-Select Search based on Course Code radio button
-Put wrong comma separated Course Code or one Course Code in one line in text area
-Click on Search button

^Advance search, Put comma separated course code or one course code in one line in text area
-Switch to Guid tab
-Select Search based on Course code radio button
-Put comma separated course code or one course code in one line in text area
-Click on Search button

@test_data: 
-Report: Enrollment report
-License Type: Lab, lesson
-Mentoring Room: Adobe chat room
-Permission: student
-Course Status: Active
-Organization: 3aaa
-Source: 3aaa
-Product Search: vendor
-02Cij , 03oiL
-03Yfv , 05tzy
-03Yfv , 05tzy
-02Cij , 03oiL


@result: invoice detail of user will  be open
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/dashboard.php");
        })
    });
    //search_btn_advance_search.1
    it("To search data based on report, enrollment, permission etc", function() {
        cy.get("#dashboard_advance_search").click({ force: true });
        cy.get("#report").select("Enrollment Report", { force: true });
        cy.get('.col-sm-9 > .pt > :nth-child(3) > .style_check > .d-inline-block > .icomoon-lesson-sm').click({ force: true })
        cy.get('.col-sm-9 > .pt > :nth-child(5) > .style_check > .d-inline-block > .icomoon-lab-sm').click({ force: true })
        cy.get("#mentoring_room").select("Adobe Chat Room", { force: true });
        cy.get("#product_permission").select("Student", { force: true });
        cy.get('#org_id').select('3aaa', { force: true })
        cy.get('#content_from_org_id').select('3aaa', { force: true })
        cy.get('#limit_on').select('Vendor', { force: true })
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
    });
    //re-send_activation_btn.1
    it("Use to resend the activation link", function() {
        cy.get(".reactivation.dropdown-item")
            .contains("Re-Send Activation")
            .click({ force: true });
        cy.get("#send").click();
    });
    //advance search of search tab
    it("search_based_on_correct_invoice_guid", function() {
        InstructorPage.advSearch()
        cy.get('#invoice_guid_value').type("016V2");
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
    });
    it("search_based_on_incorrect_invoice_guid", function() {
        InstructorPage.advSearch()
        cy.get('#invoice_guid_value').type("016V3");
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
    });
    it("search_based_on_login_counter", function() {
        InstructorPage.advSearch()
        cy.get('#login_counter_data').select('=', { force: true });
        cy.get('#login_counter_value').type('3');
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
    });
    it("Put wrong comma separated user guid or one user guid in one line in text area", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="guid_cy"]').click();
        cy.get('#guids_data').click();
        cy.get('#guid_course_code').type("02Cij,03oiL");
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
        cy.get('.alert > .mb-0').should('be.visible')
    });
    it("Put comma separated user guid or one user guid in one line in text area", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="guid_cy"]').click();
        cy.get('#guids_data').click();
        cy.get('#guid_course_code').type("05csT,05n5e,06ngd");
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
        cy.get('#mytable').should('be.visible')
    });
    it("Put wrong comma separated Course Code or one Course Code in one line in text area", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="guid_cy"]').click();
        cy.get('#course_code_based').click();
        cy.get('#guid_course_code').type('03Yfv,05tzy');
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
        cy.get('.alert > .mb-0').should('be.visible')
    });
    it("Put comma separated course code or one course code in one line in text area", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="guid_cy"]').click();
        cy.get('#course_code_based').click();
        cy.get('#guid_course_code').type('03tMc,04Z3O,04EXl');
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
        cy.get('#mytable').should('be.visible')
    });
    it("Search base on product search", function() {
        InstructorPage.advSearch()
        cy.get('#limit_on').select('Bundle', { force: true });
        cy.get('[data-cy="submit_form_cy"]').click({ force: true })
    });
});