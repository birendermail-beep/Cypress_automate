/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14885
@story_name: Lab list
@path: final/6607/Student
@test_case_name: Lab list
@description:
@test_steps:
^Lab list view.
-Login on the uCertify.
-Open the my library.
-search flvs course, and open it.
-Click on the performance labs.

@test_data: n/a
@result: It will open the performance labs.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Lab isotope listview', function() {

    it('Opening Lab isotope listview page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
            cy.get('#search_course').clear().type("flvs");
            cy.get(".course_open_btn.open_course").contains("Open");
            cy.visit(data.url + "/?func=load_course&course=FLVS-MOS-2013");
        })
        cy.get('[intro-id="labs"]').click();
    })
})