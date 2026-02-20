/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15317
@story_name: Prepkit Review
@path: final\Dump_Test_Automation\
@test_case_name: prepkit review
@description : show thank you page for submit Support request and search a ticket 
@test_steps:

^test case title
- prepkit review

^test case of prepkit review
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/support.php
- click on submit button

@test_data: Login credential 
@result: prepkit review form is submitted
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Prepkit Review', function() {
    it('Prepkit Review', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/forms.php?func=prepkit_review");
            cy.get('button[data-cy="submit_prepkit_review_form"]').click();
        })
    })
})