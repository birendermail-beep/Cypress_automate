/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10944
@story_name: Order Multi Grid (Choose) 
@path: final/6621
@test_case_name: Order Multi Grid (Choose).js
@description: 
@test_steps:
^Title
-Click the Title text box
-Enter the title

^Add row
-Click the Add Row button.
-Row will be added

^Add column
-Click the Add Column button.
-Column will be added

^Delete Column
-Click the delete icon given in the column to delete column
-A confirmation dialog appears, Click Yes

^Delete Column
-Click the delete icon given in the column to delete column
-A confirmation dialog appears, Click No

^Delete Column
-Click the delete icon given in the column to delete column
-When only 2 column is left and you click on delete icon, a dialog box will appear prompting "You have reached the minimum number of columns you can delete."
-Click Cancel

^Delete Row
-Click the delete icon given in the row to delete row
-A confirmation dialog appears, Click Yes

^Delete Row
-Click the delete icon given in the row to delete row
-A confirmation dialog appears, Click No

^Delete Row
-Click the delete icon given in the row to delete row.
-When only 2 row is left and you click on delete icon, a dialog box will appear prompting "You have reached the minimum number of rows you can delete."
-Click Cancel

^Fix the cell
-Click on the checkbox given in any of the cell.
-Then the selected option will fixed you will not be able darg the item in the preview section

^edit options
-click on the options field and update the values
-In the preview area, drag and drop the cells in correct sequence

^edit options
-click on the options field and update the values
-In the preview area, drag and drop the cells in incorrect sequence

^add image
-Click on the image icon given in any of the cell.
-A dialog box will open, go the the gallery tab.
-Click on the 3 dots, select option Use Media
-Give the background alt and click Done
-Image will be added in the respective cell

^Remove image
-Click on the cross icon appeared in the cell in which the image is added
-Image should be removed

^go to the previous module
-Click on the Basic Module button
-A dialog box will appear, click Yes and it will convert the module into choose n reorder module

@test_data: n/a
@result: Order Multi Grid (Choose) module open 
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Order Multi Grid", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.icomoon-grid-5').click({ force: true })
                cy.wait(2000)
            })
        })
        /** By Selecting "Order Multi Grid (Choose)" */
    it('Order Multi Grid (Choose)', function() {
            EditorPage.writeTitle()
            cy.get('#headingCorrect').clear().type('Testing Multi grid', { force: true })
            cy.get('.mb-2').contains('Add Row').click({ force: true })
            cy.get('#delrow2').click({ force: true })
            cy.get('[type="button"] > span').contains('No').click({ force: true })
            cy.wait(5000)
            cy.get('#delrow2').click({ force: true })
            cy.get('#cdata').click({ force: true })
            cy.wait(5000)
            cy.get('#delrow1').click({ force: true })
            cy.contains('You have reached the minimum number of rows you can delete.').should('be.visible')
            cy.get('[type="button"] > span').contains('OK').click({ force: true })
            cy.get('.width125').contains('Add Column').click({ force: true })
            cy.get('#delcol3').click({ force: true })
            cy.get('#cdata').click({ force: true })
            cy.wait(5000)
            cy.get('#delcol2').click({ force: true })
            cy.get('[type="button"] > span').contains('No').click({ force: true })
            cy.wait(3000)
            cy.get('#delcol2').click({ force: true })
            cy.get('#cdata').click({ force: true })
            cy.wait(2000)
            cy.get('#delcol1').click({ force: true })
            cy.contains('You have reached the minimum number of columns you can delete.').should('be.visible')
            cy.get('[type="button"] > span').contains('OK').click({ force: true })
        })
        //fix the cell
    it('Order Multi Grid (Choose) with fix the cell', function() {
            cy.get('#headingCorrect').clear().type('Testing Multi grid', { force: true })
            cy.get('#authcheck3').click({ force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            cy.get('#3').should('have.css', 'background-color', 'rgb(65, 130, 185)', { force: true })
        })
        //Check for the correct answer
    it('Order Multi Grid (Choose) with Check for the correct answer', function() {
            cy.get('#headingCorrect').clear().type('Testing Multi grid', { force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            cy.get('#3 > div').contains('21.3.23.233').trigger('mousedown', { force: true })
                .trigger('mouseup', { force: true })
            cy.wait(3000)
            cy.get('#3 > div').contains('21.3.23.233').trigger('mousemove', { force: true })
            cy.wait(3000)
            cy.get('#4 > div').contains('128.1.1.1').trigger('mouseleave', { force: true })
            cy.wait(3000)
            cy.get('#3 > div').contains('21.3.23.233').trigger("mousedown", {
                which: 1
            });
            cy.wait(3000)
            cy.get('#3 > div').contains('21.3.23.233').trigger("mouseout", { force: true });
            cy.get('#4 > div').contains('128.1.1.1')
                .trigger("mousemove", { force: true })
                .trigger("mouseup", { force: true });
            cy.get('#4 > div').contains('128.1.1.1').should("be.visible");
            cy.contains('Review').click({ force: true })
            cy.get('.correct-ans').contains('Correct Answer').click({ force: true })
            cy.get('.correct-ans').should("have.class", "active")
            cy.get('.your-ans').click({ force: true })
            cy.get('.your-ans').should("have.class", "active")
        })
        //To add image and remove image
    it('Order Multi Grid (Choose)To add image', function() {
        cy.get('#td0 > .light-cyan-bg > .btn > .icomoon-images').click({ force: true })
        cy.get('#upload_img').click();
        cy.wait(3000);
        cy.get('#tab2').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click();
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click();
        cy.get('#MatchlistAlt').type('testing image');
        cy.get('#cdata').click();
    })
})