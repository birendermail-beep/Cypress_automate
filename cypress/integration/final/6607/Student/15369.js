/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 15369
@story_name: LO-Aplus-complete course
@path: final/6607/Student
@test_case_name: LO-Aplus-complete course
@test_steps:

^Opening Toc Area
-visit the website
-Login into website
-Click on My Library
-search LO-Aplus-complete  course 
-click open the dashboard 

@test_data: n/a
@result: Dashboard of Student Area
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    it('LO-Aplus-complete course dashboard', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.openStudentDashboard()
        LoginPage.visitOnClick('.span13 > .btn-outline-primary')
    })
})