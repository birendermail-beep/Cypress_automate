/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10887
@story_name: Invite & Enroll - Invite
@path: final\6615
@test_case_name: Invite & Enroll - Invite.js
@description: n/a
@test_steps:
^Invite option of Invite tab
-Click on Invite tab;       
-Select the Invite option from the drop-down

@test_data: n/a
@result: Invite option of Invite tab
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.9.1.1 Invite option of Invite tab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTestingTag()
        })
        cy.get('[aria-label="Invite"]').click({ force: true })
    })
});