/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15153
@story_name: html_style_guide
@path: final/Dump_Test_Automation
@test_case_name: html_style_guide.js
@description : HTML style guide in style guide

^test HTML style guide in style guide
- shows HTML style guide in style guide

^test case of HTML style guide in style guide
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/utils
- Go to style guide(apps)
- Go to HTML tabs in right section
- HTML style guide will be shown 

@test_data: Login credential

@result: HTML style guide will be shown 
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('HTML style guide', function() {
    it('HTML style guide', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
            cy.get(':nth-child(6) > :nth-child(2)').click();
            cy.get('[data-cy="HTML_btn"]').click();
        })
    })
})