/*
@author: Anirudha Pratap
@last_updated_on: 
@master_project_id: 6621
@phase_id: 
@story_id: 10933
@story_name: Match List (Default arrow)
@path: final/6621
@test_case_name: Match List (Default arrow).js
@description: 
@test_steps:
^open module
-Open url https://www.ucertify.com/editor/?action=new
-Click search and type match list
-Open Match List (Default arrow)

^create heading for list1 and list 2
-click on heading for list1 field and write the text for list1 heading
-click on heading for list2 field and write the text for list2 heading

^Add another field
- click on plus icon button to add node

^Check maxnode1
-Add more than 6 options by using add node button
-A dialog box or warning will appear and Click OK

^Check maxnode2
-Add more than 6 options by using add node button
-A dialog box or warning will appear and Click Don't show this message again
-Again click on Add node button

^delete item or sub-item
-Go to the authoring area. 
-click on delete icon button.

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

^add another option
-Go to the authoring ar-
-Check the algorithmi-heckbox
-then add item will - generated on each element click on add item button to add another option for that question. 

^change the setting
-Click on settings icon
-Select Normal
-In preview you can see that the output is changed to Match List (Runtime arrow)

^change the setting
-Click on settings icon
-Select Swap List
-In preview you can see that the options are swapped

^suffle the question and answer
-Go to the preview area
-Click on 'Click here to shuffle' text.

@test_data: n/a
@result: Module will open
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Linux terminal", function() {
    beforeEach(" Match List (Default arrow)", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.icomoon-match-multi').click({ force: true })
        })
    })

    it('create heading for list1 and list 2', function() {
        cy.get('#listheading1').clear().type('Questions');
        cy.get('#listheading2').clear().type('Matches'); 
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get(':nth-child(1) > .heading').should('contain','Questions');
        cy.get(':nth-child(3) > .heading').should('contain','Matches');

    });

    it('Check maxnode1 and Check maxnode2', function() {
        cy.get('#add_node').click();
        cy.wait(2000);
        cy.get('#add_node').click();
        cy.wait(1000);
        cy.get('#add_node').click();
        cy.wait(2000);
        cy.contains("Warning").should('exist');
        cy.get('.jss216 > :nth-child(2)').click();
        cy.wait(2000);
        cy.get('#add_node').click();
    })

    it('delete icon' , function() {
        cy.get(':nth-child(1) > .width1 > a > .icomoon').click({force:true});
        cy.wait(2000);
        //cy.get('.jss249 > .text-white').click();
        cy.contains('Confirmation').should('exist');
    })

    it('Add image for match', function() {
        cy.get(':nth-child(1) > .pointer > .pull-right.d-flex > .pull-right > .btn').click();
        cy.wait(2000);
        cy.get('.imageDialog > .row > :nth-child(3) > .btn').click();
        cy.wait(2000);
        cy.get('#tab2').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click();
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click();
        cy.get('#MatchlistAlt').type('testing image');
        cy.get('#cdata').click();
    })

    it('add another option', function() {
        cy.get('#isalgo').click();
        cy.get(':nth-child(1) > .d-inline-block > .clear-both > .float-left > .px-1').click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .pull-left > #matchList1').should('exist');
    })

    it('swap list', function() {
        cy.get('#isSwap').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.wait(2000);
        cy.get('#shuffleArea').should('exist');
    })

    it('Select Answer Enter Button', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item36]').click({force:true});
            cy.wait(3000);
            cy.get('#edi_tabs > :nth-child(2) > a').click({force: true});
            cy.get('[data-cy=idA]').type('{enter}');
            cy.get(':nth-child(3) > [data-cy=id1]').type('{enter}');
            cy.get('[data-cy=idB]').type('{enter}');
            cy.get(':nth-child(3) > [data-cy=id2]').type('{enter}');
            cy.get('[data-cy=idC]').type('{enter}');
            cy.get(':nth-child(3) > [data-cy=id3]').type('{enter}');
            cy.get('[data-cy=idD]').type('{enter}');
            cy.get(':nth-child(3) > [data-cy=id4]').type('{enter}');
            cy.wait(3000);
            cy.get('#remedToggle > .form-check > .form-check-label').click({force:true});

            //cy.get('#tb00').tab({shift:true});
        })
    })
})