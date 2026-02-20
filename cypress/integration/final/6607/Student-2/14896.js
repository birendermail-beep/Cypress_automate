/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 14896
@story_name: CRN Courses
@path: final/6607/Student
@test_case_name: CRN Courses
@description: N/A   
@test_steps:
^pe-book-cover-left-course_code=01Amc
-go to my library
-select course CompTIA A-220-1001
-click open

@test_data: n/a
@result: student dash board will open 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Student Area', function() {
    beforeEach(function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })

    it('ebook cover right 2', function() {
        cy.get('[data-cy=mylibrary]').click()
        cy.get('[data-cy="searchbox"]').clear({ force: true }).type('CompTIA A-220-1001', { force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=A-220-1001')
        })
    })
    
    it('pe-book-cover-left-course_code=01Amc', function() {
        cy.get('[data-cy=mylibrary]').click()
        cy.get('[data-cy="searchbox"]').clear({ force: true }).type('MCSA', { force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course_code=01Amc')
        })
    })
})