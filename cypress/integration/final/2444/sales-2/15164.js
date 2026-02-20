/*
@author: Anurag Chaurasia
@master_project_id: 2444
@phase_id : 6618
@story_id: 15164
@story_name: inside sales user config
@path: final/Dump_Test_Automation
@test_case_name: inside_sales_user_config.js
@description : user config modal box in inside sales
@test_step: 
^test case of  user config modal box in inside sales
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/admin
- Go to other tab
- Select Inside sales
- Enter email id in search
- now click on action dropdown for that user
- select edit option
- Go to more tab and select user config
-  Inside sales user config modal box shown

@test_data: Login credential

@result: Inside sales user config modal box shown
*/

import { Navbar, login_username, login_password, LoginPage , AdminArea } from '../../../../page-objects/pages/index' 
describe("Inside sales user config", function() {
    it("Inside sales user config", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url)
        })
        cy.get('#others_tab').click();
        cy.get(".chapter-link").contains("Inside Sales").click({ force: true });
        cy.get('#search_text').type(login_username);
        cy.get('#search_guid_basis').click();
        cy.get('[data-cy="action_sales"]').click()
        LoginPage.visitOnClick('[data-cy="edit_opt"]');
        cy.wait(2000);
        cy.get('[data-cy="more_drop"]').click();
        cy.get('[data-cy=user_config_opt]').click();
    });
});