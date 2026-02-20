/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10896
@story_name: Not required - Now changed
@path: final/6615
@test_case_name: Not required - Now changed.js
@description: n/a
@test_steps:
^Check the Copy button for Section Key
-Click the Copy button for Section Key

@test_data: n/a
@result:Section key gets copied.
 */

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.8.3 Check the Copy button for Section Key', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTestingTag()
        })
        cy.get('[data-clipboard-target="#mentor_section_key"]').contains('Copy Section Key').click({ force: true })
    })
});