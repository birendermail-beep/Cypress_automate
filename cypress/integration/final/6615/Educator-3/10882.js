/*
@author: Anirudha Pratap 
@master_project_id: 6615
@phase_id: 
@story_id: 10882
@story_name: Deep Linking
@path: final/6615
@test_case_name: Deep Linking.js
@description: n/a
@test_steps:
^Design tab/ LTI help button/ Deep linking
-On Design tab, click on drop-down button next to LTI help button;       
-Select the Deep linking option from the drop down list;       
-Select the required module to get the required LTI link;         
-Click on Export Cartridge button;

@test_data: n/a
@result: Design tab LTI help button Deep linking
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    it('1.12.1.3.2 Design tab/ LTI help button/ Deep linking', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitCourseSupport()
        })
        cy.get('[intro-id="design"] > [data-cy=educator_design]').click()
        cy.wait(2000);
        cy.get('.load_lti_help').click()
        cy.wait(6000)
        cy.contains('LMS Links').click({ force: true })
        cy.get('#export_cartridge').click({ force: true })
    })
});