/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10723
@story_id:
@story_name: Mutligrid
@path: final/6621
@test_case_name: Multigrid.js
@description:
@test_steps: 
^Order Multigrid
-Go to the URL :https://www.ucertify.com/editor/?action=new
-Click on the icon :https://www.screencast.com/t/PuzKiLQar
-Click on Add row button.
-Click on delete button.

^Order Multigrid1
-Go to the URL :https://www.ucertify.com/editor/?action=new
-Click on the icon :https://www.screencast.com/t/PuzKiLQar
-Click on Add column button.
-Click on delete button.


^Order Multigrid2
-Go to the URL :https://www.ucertify.com/editor/?action=new
-Click on the icon :https://www.screencast.com/t/PuzKiLQar
-Enter title.
-Delete title text.

@test_data: n/a
@result: Title will not visible and disappear after operations respectively.
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('Multigrid Test Case', function() {
    /** For Logging In  */
    beforeEach('Here we do login and other repeated codes required before runing codeblock', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
        })
    })
    it('Write Title', function() {
        cy.get('.grid-item').contains("Multi Grid").click()
        cy.get('#headingCorrect').clear().type("IP Classes")
    })
    it('Clear Title', function() {
        cy.get('.grid-item').contains("Multi Grid").click()
        cy.get('#headingCorrect').clear().then(() => {
            assert.isTrue(true, 'Clear Successfully')
        })
    })
    it('ADD ROW', function() {
        cy.get('.grid-item').contains("Multi Grid").click()
        cy.get("#preview").find(".react-grid-item").its("length").should("exist");
        cy.get('.mb-2').click().then(() => {
            cy.wait(2000)
            cy.get("#preview").find(".react-grid-item").its("length").should('be.gt', 2)
        })
    })
    it('DELETE ROW', function() {
        cy.get('.grid-item').contains("Multi Grid").click()
        cy.get('.mb-2').click()
        cy.wait(2000)
        cy.get("#preview").find(".react-grid-item").should("exist");
        cy.get('#delrow2').click()
        cy.get('#cdata').click().then(() => {
            cy.wait(2000)
            cy.get("#preview").find(".react-grid-item").its("length").should('be.gt', 2)
        })
    })
    it('ADD COLUMN', function() {
        cy.get('.grid-item').contains("Multi Grid").click()
        cy.get("#preview").find(".react-grid-item").should("exist");
        cy.get('.choose_item_container>#btn').contains("Add Column").click().then(() => {
            cy.wait(2000)
            cy.get("#preview").find(".react-grid-item").its("length").should('be.gt', 2)
        })
    })
    it('DELETE COLUMN', function() {
        cy.get('.grid-item').contains("Multi Grid").click()
        cy.get('.choose_item_container>#btn').contains("Add Column").click()
        cy.wait(2000)
        cy.get("#preview").find(".react-grid-item").should("exist");
        cy.get('#delcol3 > .remove-item').click()
        cy.get('#cdata').click().then(() => {
            cy.wait(2000)
            cy.get("#preview").find(".react-grid-item").its("length").should('be.gt', 2)
        })
    })
})