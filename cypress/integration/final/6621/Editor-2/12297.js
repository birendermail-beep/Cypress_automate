/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10539
@story_id: 
@story_name: Shadded Grid
@path: final/6621
@test_case_name: Shadded Grid.js
@test_steps:
^Change the grids size, row and Column
-Change the row count & col count with the required validation (under min and max value)
-Change the width and height of the cell, whatever you write it will be multiple of 40px 
-VALIDATION
-If you select value less than the minimum value (isuppose 0) then, you will get a alert saying you min value should be 1. Same for max value, you can't enter value more than the max value of the input type number. And by this, min and max value will get set as field value 
-Rest for the empty field, you will get a alert of ""Field value can not be emply"". As you can not have rows (0) or width (0)"

^Shade the Author cells
-Shade whatever cell you want to shade to get those cells by default shded on preview side

^Lock the Author shaded cells
-Once you have shaded the cells, you can lock the.cells.
-For locking the cell, the cells needs to be part of the correct ANswer
-also, lock will not work when no cells are shaded.

^Add Correct Ans by Location
-Initially set correct location is selected 
-Shade the grids you want to be the correct answer
-This will be updated in XML

^Add Correct answe by Count
-from the method dropdown change the options to set cprrect count
-Enter the correct number of count
-This will be updated in XML

@test_data: 
-Authroing grids
-XML
-Preview Grids
-Authroing grids
-XML
-Preview Grids
-Authroing grids
-XML
-Preview Grids
-XML
-XML

@result: Open Shaded Grid Module
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.grid-item').contains("Shaded Grid").click({ force: true })
                cy.wait(4000);
            })
        })
        //Change the grids size, row and Column
    it('Change the grids size, row and Column', function() {
            cy.get('#rowCount').clear().type('3', { force: true })
            cy.get('#colCount').clear().type('2', { force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            cy.get('#grid0_0').click({ force: true })
            cy.contains('Review').click({ force: true })
            EditorPage.editorTools()
            cy.get('#xml').click({ force: true })
            cy.contains('44').should('exist')
        })
        //Lock the Author shaded cells
    it('Lock the Author shaded cells', function() {
            cy.get('#rowCount').clear().type('3', { force: true })
            cy.get('#colCount').clear().type('2', { force: true })
            cy.get('#grid0_0').click({ force: true })
            cy.get('#lock_author_cell').click({ force: true })
            cy.wait(5000);
            cy.get('h2').contains('To Lock author shaded cells, it should be part of correct answer')
            cy.get('.confirm').click({ force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            cy.wait(5000);
            cy.contains('Review').click({ force: true })
            EditorPage.editorTools()
            cy.get('#xml').click({ force: true })
            cy.contains('XML').should('exist')
        })
        //Add Correct Ans by Location
    it('Add Correct Ans by Location', function() {
        cy.get('#grid0_0').click({ force: true })
        cy.wait(2000);
        cy.get('#lock_author_cell').click({ force: true })
        cy.wait(2000);
        cy.get('h2').contains('To Lock author shaded cells, it should be part of correct answer')
        cy.get('.confirm').click({ force: true })
        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        cy.contains('Review').click({ force: true })
        EditorPage.editorTools()
        cy.get('#xml').click({ force: true })
        cy.contains('44').should('exist')
    })
})