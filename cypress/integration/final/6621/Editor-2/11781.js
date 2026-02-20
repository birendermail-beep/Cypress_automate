/*
@author: Anirudha Prata
@master_project_id: 6621
@phase_id: 
@story_id: 11781
@story_name: multiple choice
@path: final/6621
@test_case_name: multiple choice.js
@description: 
@test_steps:
^Open the editor area
-enter the url ucertify.com/editor/?action=new
-click any module to check editor area functionality

^click on seach icon and type multiple choice
-click on search icon
-Type multiple choice
-Click anywhere in the screen

^Now, click on multiple choice
-Now, click on multipe choice

@test_data: n/a
@result: Module will open
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
        })
    });
    it("give the title click on save", function() {
        cy.get(".multiple_choice").click();
        cy.get("#authoringDiv").click({ force: true });
    });
    
    it("click on preview to see the preview", function() {
        cy.get(".multiple_choice").click();
        cy.get("#edi_tabs > :nth-child(2) > a").click();
    });
    it("click on Remediation to see the Remediation for answer", function() {
        cy.get(".multiple_choice").click();
        cy.get("#userans-A").click({ force: true });
        cy.wait(2000);
        cy.get('#remediation').dblclick().rightclick();
        cy.get('#mceu_33-text').contains('Embed').click();
        cy.get('.jss177').click();
        cy.get('[data-value="seq"]').click();
        cy.get('#no').type('A');
        cy.get('.btn-secondary').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        
    });
    
    it("click on back to redirect the page", function() {
        cy.get(".multiple_choice").click();
        cy.get("#back_editor_button").click({ force: true });
    });

    it("click on tools", function() {
        cy.get(".multiple_choice").click();
        cy.get("#icon_menu")
            .contains("Tools")
            .click({ force: true });
    });

    it("click on tools and click on change view to change the view", function() {
        cy.get(".multiple_choice").click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('#desktop_btn').click();
        cy.wait(1000);
        cy.get('#tab_btn').click();
        cy.wait(1000);
        cy.get('#mobile_btn').click();
    });

    it("give the title click on save", function() {
        cy.get('.icomoon-search-2').click({ force: true })
        cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').click({force:true}).type('multiple choice')
        cy.get('body').click()
        cy.get('.multiple_choice').click({ force: true })
    });
});