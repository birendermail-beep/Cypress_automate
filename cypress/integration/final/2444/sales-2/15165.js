/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 15165
@story_name: inside sales user org list
@path: final/Dump_Test_Automation
@Test_Case_Name: inside_sales_user_org_list.js
@description: open product and replace course
@test_steps: 
^Test case of change product course
- visit on website
- Go to the admin area
- Click on the "Others" tab.
- Click on the "Inside sales".
- Type email and click on the search icon button.
- Click on the "Move to org" button.
- Move to org page successfully  open
- Go to first field and select the "uCertify".
- And second field type a email id one or multiple.
- After that click on the "Next" button.
@test_data: 
-Move to org : uCertify
-Email : testbot@ucertify.com
@result: Successfully show the details of org list
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside Sales Page Open', function() {

    it('Inside sales move org list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
        })
        cy.get('#others_tab').click({force:true});
        cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
        cy.get('[data-cy=text_area_sales]').type('testbot@ucertify.com',{force:true});
        cy.get('[data-cy=search_btn_append]').click({force:true});
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/admin/inside_sales/instructor_portal.php?func=move_org')
        })
        cy.get('#org_id').select('01LjT',{force:true});
        cy.get('#search').type('testbot@ucertify.com',{force:true});
        cy.get('#search_btn').click({force:true});
    })
})