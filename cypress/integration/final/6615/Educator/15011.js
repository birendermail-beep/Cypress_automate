/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10148
@story_id: 15011
@story_name: educator_move_to_new_teacher
@path: final/Educator
@test_case_name: educator_move_to_new_teacher.js
@description:
@test_steps:
^test case Instructor area
-goto the link
-click on admin
-click on manage
-click on section
-select the status All and click search
-click on settings icon
-click on roster
-click on setting icon
-click on set instructor
@test_data: n/a
@result: it is used to set the instructor
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
            cy.visit(data.url + '/educator/admin.php?func=roster&courses_list=03OXQ&section_list=03yAO&org_id=&all_orgs=1')
            cy.get(':nth-child(10) > .dropdown > [data-cy=admin_track_modal]').eq(0).click({ force: true })
            cy.contains('Set Instructor').click({ force: true })
        })
    });
});