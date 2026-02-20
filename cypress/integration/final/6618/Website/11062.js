/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11062
@story_name: homepage_footer_partners
@path: final/Website
@test_case_name: homepage_footer_partners.js
@description:
@test_steps: 
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Microsoft
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Oracle
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Cisco
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click CompTIA
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click CIW
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click PMI
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click ISC2
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Linux
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Zend
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click IC3
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Adobe
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click Axelos
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click get it on google play store
^homepage_footer_partners 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll to down and click on download on the play store
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
    it('Opening the Microsoft', function () {
        LoginPage.visitOnFooter('Microsoft')
    })
    it('Opening the Oracle', function () {
        LoginPage.visitOnFooter('Oracle')
    })
    it('Opening the Cisco', function () {
        LoginPage.visitOnFooter('Cisco')
    })
    it('Opening the CompTIA', function () {
        LoginPage.visitOnFooter('CompTIA')
    })
    it('Opening the CIW', function () {
        LoginPage.visitOnFooter('CIW')
    })
    it('Opening the PMI', function () {
        LoginPage.visitOnFooter('PMI')
    })
    it('Opening the ISC2', function () {
        LoginPage.visitOnFooter('ISC2')
    })
    it('Opening the Linux', function () {
        LoginPage.visitOnFooter('Linux')
    })
    it('Opening the Zend', function () {
        LoginPage.visitOnFooter('Zend')
    })
    it('Opening the IC3', function () {
        LoginPage.visitOnFooter('IC3')
    })
    it('Opening the Adobe', function () {
        LoginPage.visitOnFooter('Adobe')
    })
    it('Opening the Axelos', function () {
        LoginPage.visitOnFooter('Axelos')
    })
    it('Opening the Get it On google play store', function () {
        cy.get('.float-left > img').eq(0).click({ force: true })
    })
    it('Opening the dwonload on the app store', function () {
        cy.get('.float-left > img').eq(1).click({ force: true })
    })
})