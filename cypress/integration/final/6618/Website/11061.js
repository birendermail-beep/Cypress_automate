/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11061
@story_name: I Am Options
@path: final/Website
@test_case_name: I Am Options
@description:N/A
@test_steps: 

^test case of i_am_professional
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- Click I Am
- click professional

^test case of i_am_educator
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- Click I Am
- click Educator

^test case of i_am_publisher
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- Click I Am
- click publisher
- fill the form and submit

@test_data: n/a
@result: I Am Options
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('I Am', function () {
    beforeEach('this is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        Navbar.clickContinueOnWelcomePage();
    })
    it('i_am_professional', function () {
        cy.get('#i_am_li').trigger("mouseover").then(() => {
            cy.get('#i_am_li > ul > li:nth-child(1) > a').click({ force: true });
        })
    })
    it('Opening the i am educator page', function () {
        cy.get('#i_am_li').trigger("mouseover").then(() => {
            cy.get('#i_am_li > ul > li:nth-child(2) > a').click({ force: true });
        })
    })
    it('Opening the i am publisher page', function () {
        cy.get('#i_am_li > #course_categories > .text-uppercase').trigger("mouseover").then(() => {
            cy.get('#i_am_li > ul > li:nth-child(2) > a').click({ force: true });
        })
        cy.get('#my_name').type('testing')
        cy.get('#my_email').type('testbot@ucertify.com')
        cy.get('#subject').type('Automation Testing')
        cy.get('#message').type('testing is proper')
        cy.get('#submit_query').click({ force: true })
    })
})