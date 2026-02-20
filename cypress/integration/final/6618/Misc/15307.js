/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 
@story_name: CSS style guide
@path: final/Dump_Test_Automation
@test_case_name: CSS style guide
@description : CSS style guide in style guide
@test_step: 
^test case of CSS style guide in style guide
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/utils
- Go to style guide(apps)
- Go to CSS tabs in right section
- CSS style guide will be shown 

@test_data: Login credential
@result: CSS style guide will be shown 
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('CSS style guide', function() {
    it('CSS style guide', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
            cy.get(':nth-child(6) > :nth-child(2)').click();
            cy.get('[data-cy="CSS_btn"]').click();
        })
    })
})