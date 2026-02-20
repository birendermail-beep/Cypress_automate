/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10478
@story_id: 11040
@story_name: Dashboard Permission
@path: final/6607/Student
@test_case_name: Dashboard Permission.js
@description: if you have voucher so you can give the test
@test_steps:

^some course have not permission to allow to view dashboard
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search python course OR open this link https://www.ucertify.com/?func=load_course&course=python
-and you do not have permission to view the dashboard

@test_data: n/a
@result: test.ucertify.com will open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('test history page', function() {
    //dashboard permission
    it('some course have not permisssion to allow to view dashboard', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=python')
            if (cy.get('.container > .alert')) {
                cy.contains('You do not have permission to view this page.').should('be.visible')
            }
        })
    })
})