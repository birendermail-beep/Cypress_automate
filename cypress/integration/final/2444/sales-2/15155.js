/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: 
@Story_Id: 15155
@story_name: inside_sales_advance_search
@path: final/Dump_Test_Automation
@Test_Case_Name: inside_sales_advance_search.js
@description: Upload image then click annotated
@test_steps: 
^Inside sales advance search
-Click on this link: https://www.jigyaasa.info/admin
-Successfully open the admin area.
-Click on the ""Others"" tab.
-Click on the ""Start"" button in ""Inside Sales"".
-Click on the ""My List"" dropdown button.
-Select the ""Advance Search"" option.
-Successfully open the ""Advance Search"" dialogbox.

@test_data: N/A
@result: Advance search dialogbox should be open in tha inside sales area.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {

    it('Inside sales advance search', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(3000);
            cy.visit(data.url+'/admin');
        });
        cy.get('[data-cy=other_tab]').click({force:true});
        cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
        cy.get('[data-cy=list_drop]').click({force:true});
        cy.get('[data-cy=advance_search]').click({force:true});

    }) 
})