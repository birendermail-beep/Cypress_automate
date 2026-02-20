/*
@author: Sundaram Tripathi
@master_project_id: 6607
@phase_id: 
@story_id: 15178
@story_name: lab isotope gridview
@path: final/Dump_Test_Automation
@test_case_name: lab isotope gridview
@description: Open lab
@test_steps: 

^test case of lab in student area
-Visit to website
-Login to ucertify.com
-Visit library
-select any course only lab.
-Click on the "Manage" button
-Click on the "Open" button

@test_data: N/A
@result: Successfully show lab
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Student area', function() {

    it('lab isotope gridview', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");

        })
        cy.get('[data-cy=searchbox]').type('CompTIA IT Fundamentals LABS', { force: true });
        cy.get('[crn=FC0-U51-lab]').contains('Manage').click({ force: true });
        LoginPage.visitOnClick('.span13 > .btn-outline-primary');
    })
})