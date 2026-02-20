/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15190
@story_name: homepage_connect
@path: final/Website
@test_case_name: homepage_connect
@description:N/A    
@test_steps: 
^homepage_connect  about us
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on about us

^homepage_connect blog
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on blog

^homepage_connect contact us
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on contact us

^homepage_connect Careers
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Careers

^homepage_connect Partners
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Partners

^homepage_connect Products
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Our Products

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
    it('Opening the About us', function () {
        cy.get("ul.list-unstyled > li").contains("About Us").click({ force: true });
    })
    it('Opening the Blog', function () {
        cy.get("ul.list-unstyled > li").contains("Blog").click({ force: true });
    })
    it('Opening the Contact Us', function () {
        cy.get("ul.list-unstyled > li").contains("Contact Us").click({ force: true });
    })

    it('Opening the Careers', function () {
        cy.get("ul.list-unstyled > li").contains("Careers").click({ force: true });
    })
    it('Opening the Partners', function () {
        cy.get("ul.list-unstyled > li").contains("Partners").click({ force: true });
    })
    it('Opening the Our Products', function () {
        cy.get("ul.list-unstyled > li").contains("Platform").click({ force: true });
    })
})