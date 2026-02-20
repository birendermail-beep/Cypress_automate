/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15134
@story_name: vendors_list
@path: final/Website
@test_case_name: vendors_list
@description: N/A
@test_steps:

^courses
-Login to ucertify.com
-Open the following url:(https://www.ucertify.com/courses/?func=security&lookup=selected_course)


^test case of shows vendors list
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/?host=pearson.ucertify.com
- click on any tab for here click on microsoft tab
- vendor list page will be shown.

@test_data: n/a
@result: It will Open the vendors list page.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('vendors page', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('test the vendors list page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=security&lookup=selected_course");
        })
    })
    it('vendor List', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "?host=pearson.ucertify.com");
            cy.get('.nav-tabs > .nav > :nth-child(1) > .float-left').click();
        })
    })
})