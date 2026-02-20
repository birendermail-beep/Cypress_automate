/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@story_id: 15157
@story_name: inside_sales_change_product
@path: final/Dump_Test_Automation
@Test_Case_Name: inside_sales_change_product.js
@description: open product and replace course
@test_steps: 
^Change Product
"-Click on this link
https://www.jigyaasa.info/admin
-Click on the others tab.
-After that click on the inside sales.
-Successfuly open inside sales page.
-Go to text filed and type email id then press the search button.
-After that show the details and go to the action.
-Click on the edit option.
-After go to the product tab.
-Select any course and go to the action.
-Click on the ""Change Product"" page.
-Successfully open the page.
-Select any one course in first field and also select course the second field.
-Then click on the ""Compare"" button.
-Successfully comparing the details between two courses."

@test_data:
-email :testbot@ucertify.com

@result: Two courses should be compare.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Admin', function() {

    it('Open inside sales and go to the product tab then edit', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(3000);
            AdminArea.visitAdminArea(data.url);
            AdminArea.visitProductArea();
            //cy.get('[data-cy=action_sales]').eq(0).click({force:true});       
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=06OEg&selected_tab=');
            cy.get('[data-cy=product_tab_upper]').click({ force: true });
            cy.get('[data-cy=product_tab_upper]').click({ force: true });
            cy.wait(10000)
            cy.get(':nth-child(10) > .dropdown > [data-cy=action_product]').eq(0).click({ force: true });
            cy.get('.dropdown > .dropdown-menu > :nth-child(10) > .action_change_course').eq(9).click({ force: true });
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?func=change_user_product&student_guid=testbot@ucertify.com&student_course=067Y0');
            cy.get('#student_course').select('9A0-077 Adobe FrameMaker 8.0 ACE', { force: true });
            cy.get('#course_to_compare_open').click({ force: true })
            cy.wait(10000)
            cy.get('#selectOthers').select('Project List', { force: true });
            cy.get('#search_course').click({ force: true });
            cy.get('.col-md-9 > .col-lg-3 > .col-2 > .checkbox').eq(0).click({ force: true });
            cy.get('#select_course').click({ force: true });
            cy.get('#submit_button_new').click({ force: true });
        })
    })
})