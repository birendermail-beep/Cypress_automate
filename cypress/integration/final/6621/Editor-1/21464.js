
/*
@author: Sundaram Tripathi
@master_project_id: 6621
@phase_id: 11355
@story_id: 21464
@story_name: GriddedSvelte
@path: 6621/Editor-1/21464.js
@test_case_name: Gridded.svelte
@description: Gridded module
@test_steps:n/a

    ^gridded firstRow'
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each sidebar items
    - There are two input area.
    - First is number of column abd number of rows
    - Plus/Minus checkbox
    - Slash checkbox
    - Decimal fraction


    ^Add Question
    - Apply with enter key.
    - Login to website.
    - visit editor area
    - click each sidebar items
    - Select the "Gridded Module".
    - Click on the plus icon and And select plus icon and select paragraph.
    - Write your question.
    - After that select your answer according to your question.
    - After that click on the "save" button.

@test_data: N/A
@result: Successfully show the gridded sheet according to choose options.

*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Web Module Test Case", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)

        })
    })

    it('gridded firstRow', function() {
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
            cy.get('[data-cy=item76]').click({force:true});
            cy.wait(3000);
            cy.get('#td0').click({force: true});
            cy.get('#td0').type('0');
            cy.get('#td1').click({force: true});
            cy.get('#td1').type('1');
            cy.get('#td2').click({force: true});
            cy.get('#td2').type('2');
            cy.get('#td3').click({force:true})
            cy.get('#td3').type('3');
            cy.get('#edi_tabs > :nth-child(2) > a').click({force:true});
            cy.get('#t0').click({force: true});
            cy.get('#t0').type('0');
            cy.get('#t1').click({force: true});
            cy.get('#t1').type('1')
            cy.get('#t2').click({force: true});
            cy.get('#t2').type('2');
            cy.get('#t3').click({force: true});
            cy.get('#t3').type('3');

            //cy.get('#tb00').tab({shift:true});
        })
    })

    it('Apply with enter key', function() {
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
            cy.get('[data-cy=item76]').click({force:true});
            cy.wait(3000);
            cy.get('[key="row1"] > :nth-child(1) > #td0-30').click({force:true});
            cy.get('[key="row2"] > :nth-child(2) > #td1-31').click({force: true});
            cy.get('[key="row0"] > :nth-child(3) > #td2-32').click({force: true});
            cy.get('[key="row3"] > :nth-child(4) > #td3-33').click({force: true});
            cy.wait(3000);
            cy.get('#edi_tabs > :nth-child(2) > a').click({force:true});
            cy.get('[key="row1"] > :nth-child(1) > #t0-30').click({force:true});
            cy.get('[key="row2"] > :nth-child(2) > #t1-31').click({force: true});
            cy.get('[key="row0"] > :nth-child(3) > #t2-32').click({force: true});
            cy.get('[key="row3"] > :nth-child(4) > #t3-33').click({force: true});
            cy.get('.form-check-label').click({force: true});


            //cy.get('#tb00').tab({shift:true});
        })
    })
});