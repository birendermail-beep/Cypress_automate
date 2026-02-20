/*
@author: Anurag Chaurasia
@master_project_id: 6607
@phase_id : 6618
@story_id: 15314
@story_name: All Group
@path: final/student
@test_case_name: pe-user_group_report.js
@description : All Group
@test_steps:

^test open user group report
- open user group report 

^test case of open user group report  
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/?host=ocps.ucertify.com
- Go tho this link https://www.jigyaasa.info/?func=get_course_list&show=courses
- switch to user group tab
- click on all groups option
- click on open button corresponding to the group
- user group report will be shown

@test_data: Login credential, org permission

@result: open user group report
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('user group report', function() {
    beforeEach('user group report', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                cy.visit(data.url + "/?host=ocps.ucertify.com");
                cy.visit(data.url + "/?func=get_course_list&show=courses");
            })
        })
        //open user group report (9,13,98,160,172)
    it('Open user group report', function() {
        cy.get('[data-cy="user_groups"]').click();
        cy.get('[data-cy="all_groups"]').click();
        cy.get('[data-cy="open"]').first().click();
    })
})