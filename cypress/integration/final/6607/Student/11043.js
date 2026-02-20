/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11043
@story_name: Graded Assessment in Sustainability Course
@path: final/6607/Student
@test_case_name: Graded Assessment in Sustainability Course.js
@description: Graded Assessment in Sustainability Course
@test_steps:
^sustainability course
-open website http://ucertify.com/
-login my account and goto my library and search sustainability
-open this course and click on assessment 

@test_data: n/a
@result:sustainability course open
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Graded Assessment in Sustainability Course', function() {
    it('sustainability course', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy=mylibrary]').click();
            cy.get('[data-cy=searchbox]').type("Introduction to Sustainability");
            cy.visit(data.url + "/?func=load_course&course=sustainability&theme_view=classic");
        });
    });
})