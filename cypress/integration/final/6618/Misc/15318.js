/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15318
@story_name: test output
@path: final\Dump_Test_Automation
@test_case_name: test output 
@description : show output result of searched TPL file
@test_steps:

^test case of output result of searched TPL file
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/util
- open Find TPL testing module
- enter a tpl file name in search box
- click on run button 
- Output result of searched TPL is shown


@test_data: Login credential, admin permission
@result: Output result of searched TPL is shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Output result of TPL file', function() {
    it('Output result of TPL file', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
            cy.get('[data-cy="utils_list"]').eq(38).click();
            cy.get('[data-cy="search_text"]').type('pe-course-list-portrait.tpl');
            cy.get('[data-cy="search_guid_basis"]').click();
            cy.get('[data-cy="multi_checkbox"]').click();
            cy.visit(data.url + '/utils/unittest/test_output.php?array_tpl_name=utils/unittest/UnitTestTplArrray.php');
        })
    })
})