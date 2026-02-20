/*
@author: Anurag Chaurasia
@master_project_id: 2444
@phase_id : 6618
@story_id: 14865
@story_name: email compose
@path: cypress\integration\final\Admin\email_compose.js
@test_case_name: email_compose.js
@description : Email compose modal box in admin area

^test case of Email compose modal box in admin area
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/admin
- Go to others tab.
- GO to inside sales option.
- type user email in the search box
- then click search icon 
- now click on action dropdown corresponding to a user
- now select send follow up email
- Email compose modal box in admin area will be shown.

@test_data: Login credential

@result: Email compose modal box in admin area will be shown.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("Email compose modal box", function() {
    it("Email compose modal box", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get('[data-cy="other_tab"]').click();
        cy.get('[data-cy="other_start"]').eq(0).click();
        cy.get('[data-cy="text_area_sales"]').type(login_username);
        cy.get('[data-cy="search_btn_append"]').click();
        cy.get('[data-cy="action_sales"]').eq(0).click();
        cy.get('[data-cy="send_followup_email"]').click();
    });
});

