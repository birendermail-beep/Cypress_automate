/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11058
@story_name: Request Demo
@path: final/Website
@test_case_name: Request Demo
@description:
@test_steps: 
^Request Demo
-Open the home page.
-click on the Request demo button. Add test case:
-Request the Demo All currect but not captcha
-Request the Demo Wrong Name
-Request the Demo Wrong Number

@test_data: n/a
@result: home page open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Request demo', function () {
    beforeEach('this is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        Navbar.clickContinueOnWelcomePage();
        cy.get('#i_am_li > #course_categories > .text-uppercase').trigger("mouseover").then(() => {
            cy.contains('Request Demo').click({ force: true });
        })
    })
    it('Request the Demo All currect but not captcha', function () {
        cy.fixture('global').then(data => {
            cy.get('#demo_request_org_school').type('ucertify')
            cy.get('#demo_request_url').type(data.url)
            cy.get('#demo_request_name').type('Ankit')
            cy.get('#demo_request_job_title').type('Instructor')
            cy.get('#demo_request_phone').type('9598606465')
            cy.get('#demo_request_email').type(data.auditor_email[0])
        })
        cy.get('#demo_request_time_to_call').type('08:00 AM - 05:00 PM')
        cy.get('#demo_request_list_titles').type('Testing')
        cy.get('button[value="Submit"]').contains('Submit').click()
    })
    it('Request the Demo Wrong Name', function () {
        cy.fixture('global').then(data => {
            cy.get('#demo_request_org_school').type('ucertify')
            cy.get('#demo_request_url').type(data.url)
            cy.get('#demo_request_name').type('!@12#%&75')
            cy.get('#demo_request_job_title').type('Instructor')
            cy.get('#demo_request_phone').type('9598606465')
            cy.get('#demo_request_email').type(data.auditor_email[0])
        })
        cy.get('#demo_request_time_to_call').type('08:00 AM - 05:00 PM')
        cy.get('#demo_request_list_titles').type('Testing')
        cy.get('button[value="Submit"]').contains('Submit').click()
        cy.log('Name should Not Number and Symbols')
    })
    it('Request the Demo Wrong Number', function () {
        cy.fixture('global').then(data => {
            cy.get('#demo_request_org_school').type('ucertify')
            cy.get('#demo_request_url').type(data.url)
            cy.get('#demo_request_name').type('Ankit')
            cy.get('#demo_request_job_title').type('Instructor')
            cy.get('#demo_request_phone').type('skjdhfhsdg')
            cy.get('#demo_request_email').type(data.auditor_email[0])
        })
        cy.get('#demo_request_time_to_call').type('08:00 AM - 05:00 PM')
        cy.get('#demo_request_list_titles').type('Testing')
        cy.get('button[value="Submit"]').contains('Submit').click()
        cy.wait(2000)
        cy.log('Wrong mobile number but not error')
        cy.get('#demo_request_phone').should('have.css', 'border-color')
    })
})