/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15156
@story_name: inside_sales_change_product_replace_course
@path: final/Dump_Test_Automation
@Test_Case_Name: inside_sales_change_product_replace_course.js
@description: open product and replace course
@test_steps: 
^Test case of change product course
- visit on website
- Go to the admin area
- Click on the "Others" tab.
- Click on the "Inside sales".
- Type email and click on the search icon button.
- Show record and click on the "edit" option.
- After that go to the "Product" tab.
- show details and go to the action area and click on the "change product" and licence type "student".
- open compare page and select course on those field.
- Then click on the compare button.
- After that click on the "Replace" button.
- Open "Replace Course" dialo gbox.
@test_data:
-Email  "testbot@ucertify.com"
-Original course  "WGU-C700 Secure Network Design"
-Select course change with  "CHFI v8 - Computer Hacking Forensic Investigator"
@result: Successfully open the course dailog box
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Inside Sales Page Open', function () {

    it('Opening inside sales pages', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        AdminArea.visitProductArea();
        LoginPage.visitOnClick('[data-cy=edit_opt]');
        cy.wait(3000);
        cy.get('[data-cy=product_tab_upper]').click();
        // cy.get('[data-cy=product_tab_upper]').click();
        cy.wait(6000);
        cy.get('[data-cy=action_product]').eq(0).click()
        LoginPage.visitOnClick(':nth-child(10) > .dropdown > .dropdown-menu > :nth-child(10) > .action_change_course');
        cy.get('#student_course_open').click();
        cy.wait(6000);
        cy.get('#search_course').click();
        cy.get('.col-md-9 > .col-lg-3 > .col-2 > .checkbox').eq(0).click();
        cy.get('#select_course').click();
        cy.get('#course_to_compare_open').click();
        cy.get('#search_course').click();
        cy.get('.col-md-9 > .col-lg-3 > .col-2 > .checkbox').eq(1).click();
        cy.get('#select_course').click();
        cy.get('#submit_button_new').click();
        cy.get('#replace_button_new').click();
    })
})