/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 14877
@story_name: deal
@path: final/6607/Student
@test_case_name: deal   
@description: N/A   
@test_steps: 

^sale on home page
-Login to ucertify.com
-Open the following url.(https://ciw.ucertify.com/?show_deal=1).

@test_data: N/A 
@result: Opening home page when sale
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Sale page', function() {
    Cypress.on('uncaught:exception', (error, runnable) => {
        return false;
    })

    it('Opening the prepengine header page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[3])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.website[3] + "/?show_deal=1");
        })
    })
})