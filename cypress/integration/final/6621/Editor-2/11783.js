/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id:
@story_name: Plot Polygon
@path: final/6621
@test_case_name: Plot Polygon.js
@description: Plot Polygon
@test_steps:
^Try to delete polygon without completing it
-Go to the editor area 
-In search bar type plot and open the Polygon.
-In authoring area remove the default drawn polygon and draw the desired polygon.
-Do not complete the polygon and try to delete it by clicking it on its end point.
-Negative warning will be seen.

@test_data:N/A
@result: Plot Polygon module open
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("embed (knowledge check) testing", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.icomoon-polygon').click({ force: true })
                cy.wait(5000);
            })
        })
        //plot all edit
    it('Plot Polygon for edit.', function() {
            cy.get('.icomoon-24px-edit-1').click({ force: true })
            cy.get('#graph-width').clear().type('500', { force: true })
            cy.get('#graph-height').clear().type('500', { force: true })
            cy.get('#graph-type').select('Circle Graph', { force: true })
            cy.get('#xaxis').clear().type('8', { force: true })
            cy.get('#yaxis').clear().type('8', { force: true })
            cy.get('#xtickdistance').clear().type('2', { force: true })
            cy.get('#ytickdistance').clear().type('2', { force: true })
            cy.get('[type="button"]').contains('OK').click({ force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            cy.get('#ID0Preview_foreignObj').click({ force: true })
            EditorPage.plotReview()
        })
        //plot polygon edit
    it('plot Polygon for edit', function() {
        cy.get('.icomoon-24px-edit-1').click({ force: true })
        cy.get('#graph-width').clear().type('500', { force: true })
        cy.get('#graph-height').clear().type('500', { force: true })
        cy.get('#graph-type').select('Polygon Graph', { force: true })
        cy.get('#polygon_type').select('X', { force: true })
        cy.get('#xaxis').clear().type('8', { force: true })
        cy.get('#yaxis').clear().type('8', { force: true })
        cy.get('#xtickdistance').clear().type('2', { force: true })
        cy.get('#ytickdistance').clear().type('2', { force: true })
        cy.get('[type="button"]').contains('OK').click({ force: true })
        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        cy.get('#ID0Preview_foreignObj').click({ force: true })
        EditorPage.plotReview()
    })

    //plot with delete
    it('plot for delete', function() {
        cy.get('#ID0_foreignObj').click()
        cy.get('#deleteElm > .btn').click()
        cy.wait(5000);
        cy.get('.confirm').click({ force: true })
        cy.get('#ID0_foreignObj').click()
    })
        //plot\ check answer
    it('plot for answer', function() {
        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        cy.get('#ID0Preview_foreignObj').click({ force: true })
    })
})