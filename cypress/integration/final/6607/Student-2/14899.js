/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 14899
@story_name: pe-buy-now-modal
@path: final/6607/Student
@test_case_name: pe-buy-now-modal
@description: N/A   
@test_steps:
^pe-buy-now-modal
-go to my library 
-search course Certified Ethical Hacker Version 9 
-go to this url: https://www.ucertify.com/?action=cover&modal_buynow=1&upgrade_license=1

@test_data: n/a
@result: cart modal will open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Student Area', function() {

    it('pe-buy-now-modal', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy="mylibrary"]').click();
            cy.get('#search_course').clear({ force: true }).type('Certified Ethical Hacker Version 9', { force: true })
            cy.visit(data.url + '/?func=load_course&course=pearson-ceh-v9-complete')
            cy.visit(data.url + '/?action=cover&modal_buynow=1&upgrade_license=1')
        })
    })


})