/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15015
@story_name: educator_practice_report
@path: final/Educator
@test_case_name: educator_practice_report.js
@description:
@test_steps:
^practice data show
-goto the link: https://demo.ucertify.com:9040/
-click on my library
-click on admin
-click on on dropdown and select the ucertify
-in search box give the email and click on search icon
-click on setting button
-click on track report
-click on practice

@test_data:
-email = pradeep.yadav@ucertify.com

@result: select the group and show the activity report
*/


import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("educator page testing", function() {
    it("Admin area in educator", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy=mylibrary]').click({ force: true })
            cy.get('[data-cy=admin_tab]').click({ force: true })
            cy.get('#org_id').select('00WwL', { force: true })
            cy.get('[data-cy=roster_link]').click()
            cy.wait(10000)
            cy.get('#roster_email').type(data.author_email[0], { force: true })
            cy.get('[data-cy=custom_btn]').click({ force: true })
            cy.visit(data.url + "/educator/admin.php?func=roster&my_user_email=" + data.author_email[0] + "&courses_list=014eW&org_id=00WwL&all_org=");
            cy.get('[data-cy=track_progress_cy]').click({ force: true })
        })
    });
});