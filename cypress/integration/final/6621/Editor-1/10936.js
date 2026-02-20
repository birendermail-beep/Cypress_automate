/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10936
@story_name: Match List (with Image)
@path: final/6621
@test_case_name: Match List (with Image).js
@description: 
@test_steps:
^change the setting
-normal for match using arrow. 
-Drag and Drop for drag and drop for matching.

^add another option
-Go to the authoring area. 
-check the algorithmic checkbox having black background. 
-then add item will be generated on each element click on add item button to add another option for that question. 
-it's effect will be seen when first algorithmic checkbox is checked that have white background.
-to see the effect click on solve button on preview area.

^add image for match
-Go to the authoring area. 
-click on add image button. 
-inside modal box write image name and alt attribute's value. 
-otherwise click on upload image button. 
-then click on + upload Files button. 
-select the image file. 
-click on open button. 
-then write alt value. 
-click on ok button

^delete item or sub-item
-Go to the authoring area. 
-click on delete icon button.

^suffle the question and answer
-Go to the preview area. 
-click on 'Click here to suffle' text.

@test_data: n/a
@result: Module will open
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Linux terminal", function() {
    beforeEach("Match List (Runtime arrow)", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.icomoon-match-image').click({ force: true })
        })
    })
    //Drag and Drop
    it('change the setting',function() {
        cy.get('#isDragDrop').click();
    })
    it('add another option',function() {
        cy.get('#isalgo').click();
        cy.get(':nth-child(1) > .d-inline-block > .clear-both > .float-left > .px-1').click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .pull-left > #matchList1').should('exist');
    })
    it('Add image for match', function() {
        cy.get(':nth-child(1) > .pointer > .pull-right.d-flex > .pull-right > .btn').click();
        cy.wait(2000);
        cy.get('.imageDialog > .row > :nth-child(3) > .btn').click();
        cy.wait(5000);
        cy.get('#tab2').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click();
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click();
        cy.get('#MatchlistAlt').type('testing image');
        cy.get('#cdata').click();
    })
    it('delete icon' , function() {
        cy.get(':nth-child(1) > .width1 > a > .icomoon').click({force:true});
        cy.wait(2000);
        cy.contains('Confirmation').should('exist');
    })
    it('swap list', function() {
        cy.wait(4000);
        cy.get('#isSwap').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.wait(2000);
        cy.get('#shuffleArea').should('exist');
    })
})