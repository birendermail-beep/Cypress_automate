/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15193
@story_name: homepage_social
@path: final/Website
@test_case_name: homepage_social
@description: N/A
@test_steps: 
    ^homepage_social facebook 
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on facebook

    ^homepage_social twitter
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on twitter

    ^homepage_social youtube
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on youtube
    
    ^homepage_social instragram
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on instragram

    ^homepage_social linkedin
    - Visit to website.
    - Login to ucertify.com.
    - Click the home Page icon.
    - scroll down and click on linkedin
    
@test_data: n/a
@result: home page footer open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('homepage footer testing', function () {
    beforeEach('this is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        Navbar.clickContinueOnWelcomePage();
    })
    it('Opening the facebook', function () {
        cy.get('.icomoon-facebook').click({ force: true });
    })
    it('Opening the twitter', function () {
        cy.get('.icomoon-twitter').click({ force: true });
    })
    it('Opening the youtube', function () {
        cy.get('.icomoon-youtube').click({ force: true });
    })
    it('Opening the instragram', function () {
        cy.get('.icomoon-instagram').click({ force: true });
    })
    it('Opening the Linkedin', function () {
        cy.get('.icomoon-linkedin').click({ force: true });
    })
})