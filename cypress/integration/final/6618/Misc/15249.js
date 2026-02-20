/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15249
@story_name: padf wgu download
@path: final/Misc
@test_case_name: padf wgu download
@description: N/A   
@Test Steps: 
^padf wgu download
-Go to the url: https://www.ucertify.com/admin/user_login.php 
-Enter email
-Click on login button
-Go to https://www.ucertify.com/ext/padf/index.php
-Press Next 6 times
-Click Download PDF for Submission
-Click on ok

@test_data: n/a
@result: Download successfully
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Miscellaneous', function() {
    it('padf_wgu_download', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/user_login.php")
            cy.get('#user').clear({ force: true }).type(data.student_email, { force: true })
            cy.get('.col-2 > .btn').click()
            cy.wait(6000)
            cy.visit(data.url + '/ext/padf/index.php')
        })
        cy.wait(3000)
        cy.get('#skip_directions_btn > .hidden-xs').click({ force: true })
        cy.wait(1000)
        cy.get('#general_btn > .hidden-xs').click({ force: true })
        cy.wait(1000)
        cy.get('#section_1_next_btn > .hidden-xs').click({ force: true })
        cy.wait(1000)
        cy.get('#section_2_next_btn > .hidden-xs').click({ force: true })
        cy.wait(1000)
        cy.get('#section_3_next_btn > .hidden-xs').click({ force: true })
        cy.wait(1000)
        cy.get('#section_4_next_btn > .hidden-xs').click({ force: true })
        cy.wait(1000)
        cy.get('#save_download > .hidden-xs').click({ force: true })
    })
})