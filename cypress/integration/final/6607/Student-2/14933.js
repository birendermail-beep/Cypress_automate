/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id:
@story_name: certificate confirm modal
@path: final/6607/Student
@test_case_name: certificate confirm modal
@description: N/A   
@test_steps:

^pe-certificate_confirm_modal
-go to ucertify.com
-go to my library search any course which have try button
-click on try button

@test_data: n/a
@result: certificate will open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    it('pe-certificate_cofirm_modal', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy=mylibrary]').click()
            cy.get('#search_course').clear({ force: true }).type('dev', { force: true })
            cy.contains('Try').eq(0).click({ force: true })
            cy.get('[data-cy=certificate_completion]').click()
            cy.visit(data.url + '/my/certificate.php?certificate_guid=sample')
        })    
    })
})