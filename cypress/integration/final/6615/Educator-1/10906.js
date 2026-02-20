/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id: 10858
@story_id: 10906
@story_name: Track Lessons - Flashcard
@path: final/6615
@test_case_name: Track Lessons - Flashcard
@description : na
@test_steps:
^Check the Student's score for Flashcards in Lessons tab
-Click on the Student's score for Flashcards in Lessons tab

^Check the Student's score for Flashcards that they have Bookmarked
-Click on the Student's score for Flashcards in Lessons tab;        
-Click the 3 dots;      
-Select the Bookmark option;

^Check the Student's score for Flashcards that they have added Confidence on
-Click on the Student's score for Flashcards in Lessons tab;        
-Click the 3 dots;      
-Select the Confidence option;

^Check the Student's score for Flashcards that they have added Notes on
-Click on the Student's score for Flashcards in Lessons tab;        
-Click the 3 dots;      
-Select the Notes option;

^Check the Student's score for Flashcards that they have attempted Correct
-Click on the Student's score for Flashcards in Lessons tab;        
-Select the Correct option;

^Check the Student's score for Flashcards that they have attempted Incorrect
-Click on the Student's score for Flashcards in Lessons tab;        
-Select the Incorrect option;

^Check the Student's score for Flashcards that they have left unattempted 
-Click on the Student's score for Flashcards in Lessons tab;       
-Select the Unattempted option;

@test_data: n/a
@result: Check the Student's score for Flashcards in Lessons tab
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitNewTagCourse()
        })
    })
    it('1.10.2.3 Check the Students score for Flashcards in Lessons tab', function() {
        InstructorPage.trackResult()
    })
    it('1.10.2.4 Check the Students score for Flashcards that they have Bookmarked', function() {
        InstructorPage.trackResult()
        cy.wait(300)
        cy.get('.drop-btn > .rating').click()
        cy.get('.icomoon-bookmark').click()
    })
    it('1.10.2.5 Check the Students score for Flashcards that they have added Confidence on', function() {
        InstructorPage.trackResult()
        cy.wait(300)
        cy.get('.drop-btn > .rating').click()
        cy.get('#rating > .dropdown-item > .pointer > .font-weight-normal').click()
    })
    it('1.10.2.6 Check the Students score for Flashcards that they have added Notes on', function() {
        InstructorPage.trackResult()
        cy.wait(300)
        cy.get('.drop-btn > .rating').click()
        cy.get('#notes > .dropdown-item > .pointer > .font-weight-normal').click()
    })
    it('1.10.2.7 Check the Students score for Flashcards that they have attempted Correct', function() {
        InstructorPage.trackResult()
        cy.wait(5000)
        cy.get('#correct > .d-none').click({ force: true })
    })
    it('1.10.2.8 Check the Students score for Flashcards that they have attempted InCorrect', function() {
        InstructorPage.trackResult()
        cy.wait(300)
        cy.get('#incorrect > .d-none').click()
    })
    it('1.10.2.9 Check the Students score for Flashcards that they have left unattempted ', function() {
        InstructorPage.trackResult()
        cy.wait(3000)
        cy.get('#unattempted > .d-none').click()
    })
});