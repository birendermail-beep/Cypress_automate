/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11566
@story_name: orderbook_entity
@path: final/7761/orderbook
@test_case_name: orderbook_entity.js
@description: 
@test_steps:
^Search course based on vendor
-Go to the https://www.ucertify.com/admin/entity_group.php
-Click on search burtton
-Select vendor
-All vendor list will be displayed
-Click on any vendor list to check total courses, certifications and seo of that vendor

^Search certifications
-Go to the https://www.ucertify.com/admin/entity_group.php
-Click on search burtton
-Select certifications
-All certifications list will be displayed
-Click on any certifications list to check total courses and seo of that certifications 

^Display all bundle
-Go to the https://www.ucertify.com/admin/entity_group.php
-Click on search burtton
-Select bundle
-All bundle list will be displayed
-Click on any bundle list to check total courses and seo of that bundle

^Display all data of tag
-Go to the https://www.ucertify.com/admin/entity_group.php
-Click on search burtton
-Select tag
-All tag list will be displayed
-Click on any tag list to check total courses of that tag

^Display all data of original source
-Go to the https://www.ucertify.com/admin/entity_group.php
-Click on search burtton
-Select original source
-All original source list will be displayed
-Click on anyoriginal source list to check total courses of that list

^Display all data of flaxi group
-Go to the https://www.ucertify.com/admin/entity_group.php
-Click on search burtton
-Select flaxi group
-All  flaxi group list will be displayed
-Click on any  flaxi group list to check total courses of that list

^Display all data of extra job
-Go to the https://www.ucertify.com/admin/entity_group.php
-Click on search burtton
-Select extra job
-All extra job will be displayed
-Click on any catalog list to check total courses of that list

^Display all data of catalog
-Go to the https://www.ucertify.com/admin/entity_group.php
-Click on search burtton
-Select catalog
-All catalog list will be displayed
-Click on any catalog list to check total courses of that list

@test_data: n/a
@result: All courses  details will be display of that list
*/


import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url +"/admin/entity_group.php");
            cy.get('[data-cy="search"]').click({ force: true });
        })
    });
    it("Search course based on vendor", function() {
        cy.get('[data-cy="vendor"]')
            .contains("Vendor")
            .click({ force: true });
        cy.get('[data-cy="certification_tab"]')
            .contains("Certifications")
            .click({ force: true });
        cy.get('[data-cy="courses_tab"]')
            .contains("Courses")
            .click({ force: true });
        cy.get('[data-cy="seo_tab"]')
            .contains("SEO")
            .click({ force: true });
    });
    it("Search certifications", function() {
        cy.get('[data-cy="certification"]')
            .contains("Certification")
            .click({ force: true });
        cy.get('[data-cy="seo_tab"]')
            .contains("SEO")
            .click({ force: true });
        cy.get('[data-cy="courses_tab"]')
            .contains("Courses")
            .click({ force: true });
    });
    it("Search Bundle", function() {
        cy.get('[data-cy="bundle"]')
            .contains("Bundle")
            .click({ force: true });
        cy.get('[data-cy="seo_tab"]')
            .contains("SEO")
            .click({ force: true });
        cy.get('[data-cy="courses_tab"]')
            .contains("Courses")
            .click({ force: true });
    });
    it("Search Tag", function() {
        cy.get('[data-cy="tag"]')
            .contains("Tag")
            .click({ force: true });
    });
    it("Search Original Source", function() {
        cy.get('[data-cy="original_source"]')
            .contains("Original Source")
            .click({ force: true });
    });
    it("Search Flaxi Group", function() {
        cy.get('[data-cy="flaxi_txt"]')
            .contains("Flaxi Group")
            .click({ force: true });
    });
    it("Search Catalog", function() {
        cy.get('[data-cy="catalog"]')
            .contains("Catalog")
            .click({ force: true });
    });
    it("Search Extra job", function() {
        cy.get('[data-cy="extra_job"]')
            .contains("Extra job")
            .click({ force: true });
    });
});

