/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 
@story_id: 10907
@story_name: Track Lessons - Quiz
@path: final/6615
@test_case_name: Track Lessons - Quiz
@description : na
@test_steps:
^Check the Student's score for Quiz in Lessons tab
-Click on the Student's score for Quiz in Lessons tab

^Check the Student's Quiz Result for a particular attempt in Lessons tab
-Click on the Student's score for Quiz in Lessons tab;      
- Click the Action button;     
-Select Result option;

^Check the Student's Quiz Review for a particular atempt in Lessons tab
-Click on the Student's score for Quiz in Lessons tab;      
-Click the Action button;     
-Select Review option;

^Check the working of Self grading by instructor for any question in Quiz 
-Click on the Student's score for Quiz in Lessons tab;      
-Click the Action button;     
-Select Review option;      
-Self-grade any question as correct or incorrect;

^Delete Student's Test History of Quiz 
-Click on the Student's score for Quiz in Lessons tab;       
-Click the Action button;     
-Select the Delete test option;      

@test_data: n/a
@result: Student's Quiz answers in Review for a particular attempt shows up
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                InstructorPage.visitCourseForQuiz();
            })
        })
        // Check the Students Quiz Result for a particular attempt in Lessons tab
        it('Check the Students Quiz Result for a particular attempt in Lessons tab', function() {
            cy.get('.header_2 > [chapter_guid="02eGC"][test_type="-3"]').click();
            cy.get(':nth-child(1) > :nth-child(5) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click({force:true})
        })
        // Check the Students Quiz Review for a particular attempt in Lessons tab
        it('Check the Students Quiz Review for a particular attempt in Lessons tab', function() {
            cy.get('.header_2 > [chapter_guid="02eGC"][test_type="-3"]').click();
            cy.get(':nth-child(1) > :nth-child(5) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click({force:true})
        })
        // Check the working of Self grading by instructor for any question in Quiz
        it('Check the working of delete test in Quiz', function() {
            cy.get('.header_2 > [chapter_guid="02eGC"][test_type="-3"]').click();
            cy.get(':nth-child(1) > :nth-child(5) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click({force:true})
        })
});