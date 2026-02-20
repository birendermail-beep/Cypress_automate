/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 
@story_name: career content writer
@path: final/Dump_Test_Automation
@test_case_name: career content writer
@description : career form for content writer

^test career form for content writer
- shows career form for content writer

^test case of career form for content writer
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/
- fo to career link in footer
- click on Technical writer tab in career page  
- career form for Technical writer will be shown

@test_data: Login credential
@result: career form for Technical writer will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('career form for Technical writer', function() {
    it('career form for Technical writer', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url);
            cy.get('[data-cy="career_link"]').click();
            cy.get('[data-cy="technical_writer"]').click();
        })
    })
})