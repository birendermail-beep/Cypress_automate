/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15191
@story_name: homepage_footer
@path: final/Website
@test_case_name: homepage_footer
@description: N/A   
@test_steps: 
^test case of home page Footer 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- Click I Am

@test_data: n/a
@result: home page open
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
    it('Opening the partners page', function () {
        cy.contains("Partners").click({ force: true }).then(() => {
            cy.get("h1").contains("MEET OUR PARTNERS").should("be.visible");
        })
    })
    it('Opening the vendors page', function () {
        cy.contains("Vendors").click({ force: true }).then(() => {
            cy.contains("Vendors").should("be.visible");
        })
    })
    it('Opening the certification page', function () {
        cy.contains("Certifications").click({ force: true }).then(() => {
            cy.contains("Certifications").should("be.visible");
        })
    })
    it('Opening the i am publisher page', function () {
        cy.get('#i_am_li > #course_categories > .text-uppercase').trigger("mouseover").then(() => {
            cy.get('#i_am_li > ul > li:nth-child(2) > a').click({ force: true });
        })
    })
    it('Opening the live lab item page.', function () {
        cy.get('#uc_technology').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/products/labs.html")
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(1) > .py-2').click({ force: true })
    })
    it('Opening the all product details page', function () {
        cy.contains("About Us").click({ force: true })
        cy.contains("Products").should('be.visible');
    })
    it('Opening the all customer feedback page', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=05O8Y");
        })
        cy.get('.icomoon-help-new-1').trigger("mouseover", { force: true }).then(() => {
            cy.get("#course_testimonial").invoke("attr", "target", "_self");
            cy.get("#course_testimonial").click({ force: true });
        })
    })
    it('Opening the 3d avatar simulation page', function () {
        cy.get('#uc_technology').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/products/labs.html")
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(4) > .py-2').click({ force: true })
    })
    it('Opening the coding lab item page', function () {
        cy.get('#uc_technology').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/products/labs.html")
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(2) > .py-2').click({ force: true })
    })
    it('Opening the simulation item page.', function () {
        cy.get('#uc_technology').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/products/labs.html")
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(3) > .py-2').click({ force: true })
    })
    it('Opening the object lab item page.', function () {
        cy.get('#uc_technology').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/products/labs.html")
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(5) > .py-2').click({ force: true })
    })
    it('Opening the all customer comment page', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=05O8Y");
        })
        cy.get('.icomoon-help-new-1').trigger("mouseover", { force: true }).then(() => {
            cy.get("#course_testimonial").invoke("attr", "target", "_self");
            cy.get("#course_testimonial").click({ force: true });
        })
    })
    it('Opening the test error page', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/login.php?func=social");
        })
        cy.get("a").contains("Click here to login").should("be.visible");
    })
    it('Opening the test error page', function () {
        cy.contains("Contact Us").click({ force: true });
    })
    it('Opening the contactus new page', function () {
        cy.get("span").contains("Terms & Conditions").click();
    })
})