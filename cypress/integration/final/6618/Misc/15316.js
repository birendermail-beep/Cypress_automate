/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15316
@story_name: PHP style guide
@path: cypress\integration\final\Dump_Test_Automation\php_style_guide.js
@test_case_name: php_style_guide.js
@description : PHP style guide in style guide

^test PHP style guide in style guide
- shows PHP style guide in style guide

^test case of PHP style guide in style guide
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/utils
- Go to style guide(apps)
- Go to PHP tabs in right section
- PHP style guide will be shown 

@test_data: Login credential

@result: PHP style guide will be shown 
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('PHP style guide', function() {
    it('PHP style guide', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
            cy.get(':nth-child(6) > :nth-child(2)').click();
            cy.get('[data-cy="php_btn"]').click();
        })
    })
})