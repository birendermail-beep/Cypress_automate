/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15313
@story_name: term accept
@path: final\Dump_Test_Automation
@test_case_name: term accept
@description : show agreement modal bo
@test_steps:

^test case title
- accept terms

^test case of accept terms
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/terms/index.php?func=accept-terms
- click on Terms and Conditions Text
- agreement modal box will be shown


@test_data: Login credential
@result: agreement modal box will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('accept terms', function() {
    it('pe-term-accept', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/terms/index.php?func=accept-terms");
            cy.get('a[data-cy="modal_agreement"]').click();
        })
    })
})