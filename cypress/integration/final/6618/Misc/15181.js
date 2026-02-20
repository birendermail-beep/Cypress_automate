/*
    @author: Anurag Chaurasia
    @master_project_id: 6618
    @phase_id : 6618
    @story_id: 15181
    @story_name: log_reports_tab
    @path: final/Dump_Test_Automation
    @test_case_name: log_reports_tab.js
    @description : show apache error log, slow query error log tab
    @test_steps:

    ^test show server error log tab
    - show apache error log tab 
    - slow query error log tab

    ^test case of show apache error log tab  
    - Login In ucertify portal
    - Go tho this link https://www.jigyaasa.info/util
    - open server log 
    - switch to PHP error log tab
    - apache error log will be shown

    ^test case of slow query error log tab
    - Login In ucertify portal
    - Go tho this link https://www.jigyaasa.info/util
    - open server log 
    - switch to PHP error log tab
    - slow query error log will be shown

    @test_data: Login credential, admin permission

    @result: Apache error log, slow query error log will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Server error log tabs', function () {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
            cy.get(':nth-child(38) > :nth-child(2) > .nh > .chapter-link').click();
            cy.wait(6000);
        })
    })
    it('Apache error log tab', function () {
        cy.get('[data-cy="PHP_error_log"]').eq(0).click();
    })
    it('Slow query error log', function () {
        cy.get('[data-cy="SQL_error"]').click();
    })
})