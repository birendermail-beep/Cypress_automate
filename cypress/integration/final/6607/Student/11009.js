/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11009
@story_name: WGU Dashboard
@path: final
@test_case_name: WGU Dashboard.js
@description:
@test_steps:
^User should not be able to load course or open any URL directly
-Open https:wgu.ucertify.com
-Login into website
-Open this course: https://wgu.ucertify.com/?func=load_course&course=wgu-sonarqube

^pe-book-cover-left
-go to wgu.ucertify.com
-login testbot@ucertify.com
-goto my library and select course Prescribing-Opioids

^pe-book-cover-menu
-go to wgu.ucertify.com
-go to my library and select course WGU-C783

@test_data: n/a
@result: WGU Dashboard Module will open 
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Wgu Course load and URL restriction when dashboard is not allowed', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.website[1])
            })
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        //dashboard_1,dashboard_2,dashboard_3,dashboard_4
    it('pe-book-cover-left', function() {
        cy.get('[data-cy=mylibrary]').click()
        cy.get('#search_course').clear({ force: true }).type('assessment', { force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.website[1] + '/?func=load_course&course=wgu-sonarqube')
            cy.get('.container > .alert').should('be.visible')
            cy.visit(data.website[1] + '/?func=load_course&course=Prescribing-Opioids')
        })
    })
    it('pe-book-cover-menu', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[1] + '/?func=load_course&course=WGU-C783')
        })
    })
})