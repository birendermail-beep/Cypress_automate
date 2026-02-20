/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10478
@story_id: 11029
@story_name: Mark As Read
@path: final/6607/Student
@test_case_name: Mark As Read.js
@description: N/A   
@test_steps:

^(mark as read)
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on chapter and lesson and open chapter 2
-mark as read is coming from the right side in the topic  
-then topic will be green

^Download chapter
-Login to the ucertify.com
-Open the my library.
-Open any course.(https://www.ucertify.com/?func=load_course&course=app-training&class_code=03KoV).
-Click on the chapter and lesson
-Open any chapter.
-Add download_pdf=1 

@test_data: n/a
@result: https://screencast.com/t/VC2mDif1C8q
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will Test the eBook Area', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
            })
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        //mark as read
    it('mark as read', function() {
        cy.fixture('global').then(data => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[data-cy="chapters"]').click({ force: true }).then(() => {
            cy.get('#ebook_toc').should('exist')
        })
        cy.get('[data-cy="toc_chapters"]').eq(1).click({ force: true })
        cy.get('[data-original-title="Reading Indicator"]').eq(1).click({ force: true })
        cy.get('.dropdown > .dropdown-menu > .mb-0 > .text-dark').eq(1).click({ force: true })
    })
    it('Opening the Study Planner livelab page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course=app-training&class_code=03KoV");
            cy.get('[data-cy="chapters"]').click();
            cy.get('[data-cy="toc_chapters"]').eq(1).click({ force: true })
        })
    })
})