/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14803
@story_name:gradebook planner
@path: final/6607/Student
@test_case_name: gradebook planner
@description:Opening the gradebook of a course 
@test_steps:

^gradebook planner
-visit the website
-login into page
-Open the my library.
-Open any course.
-Open the gradebook planner from following link. "url + /?func=gradebook_planner"

@test_data:n/a
@result:Opening the gradebook of a course
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Gradebook planner', function() {
    it('pe-gradebook_planner_thead', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course_code=04FV3&class_code=05t1s')
            cy.visit(data.url + '/?func=gradebook_planner')
        })    
    })
})