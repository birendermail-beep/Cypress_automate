/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11050
@story_name: Support Form
@path: final/6607/Student
@test_case_name: Support Form.js
@description: Support Form
@test_steps:

^pe-message
-go to ucertify.com
-click on question mark on top right side
-click on support
-fill the form
-name: avinash
-email: avinash.pandey@ucertify.com
-role: instructor
-category: request for information
-discription: abcd

@test_data: n/a
@result: request send successfully
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {

    it('pe-message', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('.icomoon-help-new-1').trigger('mouseover')
            cy.visit(data.url + '/support.php')
            cy.get('.circle-multiline').click()
        })
        cy.get('#my_name').scrollIntoView()
        cy.get('#my_name').clear({ force: true }).type('testbot', { force: true })
        cy.get('#my_email').clear({ force: true }).type(login_username, { force: true })
        cy.get('#customer_role').select('Instructor', { force: true })
            //cy.get('#category').select('Request for information (please provide details in the Description box)', { force: true })
        cy.get('#subject').clear({ force: true }).type('testbot', { force: true })
        cy.get('#message').clear({ force: true }).type('abcd', { force: true })
    })

})