/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 
@story_name: career online sale
@path: final\Dump_Test_Automation\
@test_case_name: career online sale
@description : career form for online sale executive

^test career form for online sale executive
- shows career form for online sale executive

^test case of career form for online sale executive
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/
- fo to career link in footer
- click on Inside sale executive tab in career page  
- career form for online sale will be shown

@test_data: Login credential

@result: career form for online sale will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('career form for online sale', function() {
    it('career form for online sale', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url);
            cy.get('[data-cy="career_link"]').click();
            cy.get('[data-cy="sale_executive"]').click();
        })
    })
})