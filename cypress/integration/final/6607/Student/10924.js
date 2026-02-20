/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 10924
@story_name: Link with Instructor with Section Key
@path: final/6607/Student
@test_case_name: Link with Instructor with Section Key
@description : na
@test_steps:
^Leave the section key blank
-Open dashboard of prepkit
-Click the Link with Instructor button
-A dialog box will appear
-Leave the section key blank and click Add
-The textbox should be highlighted with red color

^Enter any invalid section key 
-Open dashboard of prepkit
-Click the Link with Instructor button
-A dialog box will appear
-Enter any invalid section key and click Add
-A message should appear saying invalid section key

^Enter valid section key
-Open dashboard of prepkit
-Click the Link with Instructor button
-A dialog box will appear
-Enter valid section key and click Add
-A message should appear saying added successfully

@test_data: n/a
@result: The textbox should be highlighted with red color and message should appear saying invalid section key and a message should appear saying added successfully
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Link With Instructor', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Link with Instructor without section key', function() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('CIW 1D0-671')
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=1D0-671&theme_view=classic')
        })
        cy.get('[data-cy=setup_tab]').click()
        cy.get('.radio-b').click()
        cy.get('#code').clear({ force: true })
        cy.get('#add').click()
    })
    it('Link with Instructor with invalid section key', function() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('CIW 1D0-671')
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=1D0-671&theme_view=classic')
        })
        cy.get('[data-cy=setup_tab]').click()
        cy.get('.radio-b').click()
        cy.get('#code').type('K-WJJP-JNX9-000')
        cy.get('#add').click()
        cy.get('.msg').contains('Invalid Section Key.')
    })
    it('Link with Instructor with valid section key', function() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('CIW 1D0-671')
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=1D0-671&theme_view=classic')
        })
        cy.get('[data-cy=setup_tab]').click()
        cy.get('.radio-b').click()
        cy.get('#code').type('K-WJJP-JNX9-B39X')
        cy.get('#add').click()
    })
});