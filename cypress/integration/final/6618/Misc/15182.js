/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15182
@story_name: server log
@path: cypress\integration\final\Dump_Test_Automation\lti_logs.js
@test_case_name: server_log.js
@description : show lti logs, raw data for lti and advance search modal box
@test_steps:

^test show LTI error log in server error log
- show raw data for lti log 
- advance search modal box in lti error log

^test case of raw data for lti log 
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/util
- open server log 
- switch to LTI error log tab
- click on action dropdown corresponding to the LTI logs 
- select raw option
- modal box for raw data will be shown

^test case of advance search modal box in lti error log
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/util
- open server log 
- switch to LTI error log tab
- click on search dropdown and select advance search
- modal box for advance search will be shown.

@test_data: Login credential, admin permission

@result: modal box for RAW LTI data and advance search will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('LTI error log', function () {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
            cy.get('[data-cy="utils_list"]').eq(37).click();
            cy.wait(6000);
        })
    })
    it('raw data for lti log', function () {
        cy.get('[data-cy="lti_log"]').click();
        cy.get('[data-cy="lti_dropdown"]').eq(0).click();
        cy.get('[data-cy="lti_raw"]').eq(0).click();
    })
    it('advance search modal box in lti error log', function () {
        cy.get('[data-cy="lti_log"]').click();
        cy.get('[data-cy="search_btn"]').click();
        cy.get('[data-cy="adv_search"]').click();
    })
})