/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15149
@story_name: form_structure.js
@path: final/Dump_Test_Automation
@test_case_name: form_structure.js
@description : show output result of searched TPL file
@test_steps:

^test form structure in utils
- show form structure in utils

^test case of form structure in utils
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/util
- open Form structure
- Form structure guidelines will be shown

@test_data: Login credential, admin permission

@result: Form structure guidelines will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Form structure guidelines', function() {
    it('Form structure guidelines', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
            cy.get('[data-cy="utils_list"]').eq(4).click();
        })
    })
})