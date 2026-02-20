/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@Story_Id: 15069
@story_name: admin user course edit
@path: final/2444
@Test_Case_Name: admin user course edit
@description: Go to any course in inside sales and then edit
@test_steps: 
^Test case of Edit option in product tab
-visit on admin area
- Click on the "others" tab.
- After that click on the "Start" button in "Inside sales".
- Successfully open the "Inside sales" tab.
- Go to the search tab and type any email and click on the search icon button.
- Show the details and click on the setting icon and choose the "Edit" option.
- And go to the "Product" tab.
- Choose any course and go to "Action" click on the setting icon and select "Edit" option.
- Successfully show the page for edit the details.

@test_data: Search = testbot@ucertify.com
@result: Successfully open the user edit course page
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Inside Sales Page Open', function() {

    it('Admin User Course Edit', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            AdminArea.visitOrderbookOtherTab();
            cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({ force: true });
            cy.get('[data-cy=text_area_sales]').clear({ force: true }).type('testbot@ucertify.com', { force: true });
            cy.get('[data-cy=search_btn_append]').click({ force: true });
            cy.get('[data-cy=action_sales]').click({ force: true });
            //cy.get('[data-cy=edit_opt]').click({force:true});// open new tab because these line should be comment
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?grid=1&action=grid_view&page=1&search_user_guid=06OEg&selected_tab=');
            cy.get('[data-cy=product_tab_upper] > .d-md-block').click({ force: true });
            cy.get('[data-cy=product_tab_upper] > .d-md-block').click({ force: true });
            cy.wait(20000)
            cy.get('[data-cy=action_product]').eq(0).click({ force: true });
            cy.get(' :nth-child(10) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').eq(0).click({ force: true });
        })
    })
})