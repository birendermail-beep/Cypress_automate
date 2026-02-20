/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15192
@story_name: homepage_resources
@path: final/Website
@test_case_name: homepage_resources
@description:N/A
@test_steps: 
^homepage_resources vendors
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on vendors

^homepage_resources Certifications
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Certifications

^homepage_resources Sitemap
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Exams

^homepage_resources Sitemap
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Sitemap

^homepage_resources Catalog
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Catalog

^homepage_resources Chat
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Help

^homepage_resources  Accessibility
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on Accessibility

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
    it('Opening the vendors', function () {
        cy.get("ul.list-unstyled > li").contains("Vendors").click({ force: true });
    })
    it('Opening the Certifications', function () {
        cy.get("ul.list-unstyled > li").contains("Certifications").click({ force: true });
    })
    it('Opening the Exams', function () {
        cy.get("ul.list-unstyled > li").contains("Exams").click({ force: true });
    })
    it('Opening the Sitemap', function () {
        cy.get("ul.list-unstyled > li").contains("Sitemap").click({ force: true });
    })
    it('Opening the Catalog', function () {
        cy.get("ul.list-unstyled > li").contains("Catalog").click({ force: true });
    })
    it('Opening the Chat', function () {
        cy.get('#launcher').click({ force: true });
    })
    it('Opening the Accessibility', function () {
        cy.get('[data-url="https://www.jigyaasa.info/about/accessibility_ada.html"]').click();
    })
})