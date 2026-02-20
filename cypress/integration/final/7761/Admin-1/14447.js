/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10568
@story_id: 14447
@story_name: LTI config
@path: final\7761
@test_case_name: LTI config.js
@description: N/A
@test_steps:

^Load LTI Config using
Load LTI config using below URL
https://www.ucertify.com/admin/admin_org_config_new.php?func=config&org_id=04nkM

^License Available
-Click the Add course button
-Add course modal box will be opened
-Select course and click the save button

^License Available
-Select license by clicking on the icons
-Click the save button
-Go to LTI module and enroll using this course crn

^License Available
-Select duration
-Click the save button
-Go to LTI module and enroll using this course crn

^License Available
-Check checkbox of restrict license
-Click the save button
-Go to LTI module and enroll using this course crn

^License Available
-Goto admin area and select demo_testing org
-Go to enroll tab
-Fill data and enroll the user

@test_data: n/a
@result: The Training Room org will be loaded
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('LTI Config', function () {
    beforeEach('this is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/admin_org_config_new.php?func=config&org_id=04nkM')
        })
    })
    it('Load lti & Add course', function () {
        cy.get('.lti_config_tab').click()
        cy.get('#add_lic').click()
        cy.wait(10000)
        cy.get('#search').type('tech-support', { force: true })
        cy.wait(2000)
        cy.get('#search_course').click()
        cy.wait(2000)
        cy.get('#_181').click()
        cy.get('#select_course').click()
        cy.get('#save_org_config_btn').click()
        cy.get('.msg').contains('Saved Successfully.')
    })
    it('Load lti & Customize Ristrict license', function () {
        cy.get('.lti_config_tab').click()
        cy.get('#restrict_lic').dblclick({ force: true })
        cy.get('#save_org_config_btn').click()
        cy.get('.msg').contains('Saved Successfully.')
    })
    it('Load lti & Customize Duration', function () {
        cy.get('.lti_config_tab').click()
        cy.get('#select2-duration_312-49-v8-container').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('1 Week{enter}');
        cy.get('#save_org_config_btn').click()
        cy.get('.msg').contains('Saved Successfully.')
    })
    // it('Load lti & Customize license', function() {
    //     cy.get('.lti_config_tab').click()
    //     cy.get('.icomoon-video-sm').click({ force: true })
    //     cy.get('[name="lti_config[lic_available][tech-support][b]"] + [data-cy="icon_lic"]').click({ force: true })
    //     cy.get('[name="lti_config[lic_available][tech-support][p]"] + [data-cy="icon_lic"]').click({ force: true })
    //     cy.get('#save_org_config_btn').click()
    //     cy.get('.msg').contains('Saved Successfully.')
    // })
});