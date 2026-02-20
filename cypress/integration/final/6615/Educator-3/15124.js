/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15124
@story_name: entity_group_searchbar
@path: final/Dump_Test_Automation
@Test_Case_Name: entity_group_searchbar.js
@description: 
@test_steps: 
^Go to tha admin area and open the manage tag
-Click on this link: https://www.jigyaasa.info/admin/
- Successfully open the admin page.
- Click on the ""Start"" button in ""Entities"" tab.
- Successfully open the ""Tag"" page.

@test_data:

@result: Tag page data will be show.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Admin Area', function() {

    it('Tag page in Entites', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.wait(3000);
            cy.visit(data.url + '/admin');
            cy.get('#entities_tab').click({ force: true });
            cy.get('#entities_info > #taglist > tbody > :nth-child(3) > :nth-child(3) > .btn').click({ force: true });
        });

    })
})