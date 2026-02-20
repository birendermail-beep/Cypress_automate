/*
@author: Anurag Chaurasia
@master_project_id: 6622
@phase_id : 6618
@story_id: 15148
@story_name: focus_user_detail
@path: final/Dump_Test_Automation
@test_case_name: focus_user_detail.js
@description : shows focus user list

^test shows focus user list
- shows shows focus user list 

^test case of shows focus user list
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/author
- switch to more tab
- Goto user option
- focus user list will be shown

@test_data: Login credential

@result: focus user list will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('focus user list', function() {
    it('focus user list', function(){
        cy.fixture('global').then(data => {
        cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/focus");
            cy.get('[data-cy="more_tab"]').click(); 
            cy.get('[data-cy="user_focus"]').click();  
        })
    })
})
