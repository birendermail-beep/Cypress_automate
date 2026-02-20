/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: N/A
@story_id: 15110
@story_name: educator_admin_reports_enrollment
@path: final/Dump_Test_Automation
@test_case_name: educator_admin_reports_enrollment.js
@description: 
@test_steps: 
^enrollments in inside sale product tab
-Click on this link: https://www.jigyaasa.info/admin
- Click on the ''Others"" tab
- After that click on the ""start"" button in the ""Inside Sales"" option
- Successfully show the inside sales page.
- Go to serach text box and type user email address then click on the search icon button.
- Show the details on that email address.
- Go to actions area and click on the setting icon.
- Select the ""Edit"" option.
- Successfully open the page and clcik on the ""product"" page.
- Afte that open the product page.

@test_data: N/A

@result: Enrollments report should be open
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside sales', function() {

    it('Educator admin enrollment report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            cy.get('[data-cy=other_tab]').click({force:true});
            cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
            cy.get('[data-cy=text_area_sales]').type('testbot@ucertify.com',{force:true});
            cy.get('[data-cy=search_btn_append]').click({force:true});
            cy.get('[data-cy=action_sales]').click({force:true});
            //cy.get('[data-cy=edit_opt]').click({force:true});
            cy.visit(data.url+'/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=06OEg&selected_tab=')
            cy.get('[data-cy=product_tab_upper] > .d-md-block').click({force:true});
            cy.get('[data-cy=product_tab_upper] > .d-md-block').click({force:true});
        })
    })
})