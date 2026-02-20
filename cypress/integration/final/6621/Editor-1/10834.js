/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10858
@story_id: 10834
@story_name: Choice Matrix
@path: final/6621
@test_case_name: Choice Matrix.js
@test_steps:
^Add Stem.
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix

^Add Row.
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Click Add Row button
-The Row should be added.

^Add Column.
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Click Add Column button
-The column should be added.

^Add row or column until the warning message comes.
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Click the Add Row button for more than 6 times or Click the Add Column button for more than 4 time.
-Warning dialog should appear.

^Add Stem and Delete Stem.
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Click the Add Column button.
-Click the Delete button of the inserted column.

^Delete default column.
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Click the deleted button of the default columns given.
-An alert message should come and the column should not be deleted

^Add Option and Delete Option.
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Click the Add Row Button on the screen.
-Click the Delete Button of the inserted row.

^Delete default row.
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Click the deleted button of the default rows given.
-An alert message should come and the row should not be deleted
-Note: Minimum 2 rows and 2 columns are required

^Theme
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Select Theme from the select box.
-Theme should be changed in the preview section

^Table width
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Type width less than 500px or more than 1000 px
-An alert message should appear


^specail_entity
-visit the website
-Login into website
-go to editor area
-Type Choice Matrix and click on choice Matrix
-Type width less than 500px or more than 1000 px
-An alert message should appear

@test_data: n/a
@result: Open Bar Chart Module
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Choice Mattrix Test Case", function () {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.grid-item').contains("Choice Matrix").click({ force: true })
        })
    })

    it('Add and Delete Row', function () {
        cy.get(".testmode_table  tbody > tr").its("length").should("eq", 2)
        cy.wait(1000)
        cy.get("button").contains("Add row").click().then(() => {
            cy.get(".testmode_table  tbody > tr").its("length").should("eq", 3)
        })
        cy.get("td").find(".icomoon-new-24px-delete-1").eq(1).click().then(() => {
            cy.get(".testmode_table  tbody > tr").its("length").should("eq", 2)
        })
        cy.get("td").find(".icomoon-new-24px-delete-1").eq(1).click().then(() => {
            cy.get(".testmode_table  tbody > tr").its("length").should("eq", 2)
        })
    })

    it.only('Add Row and column', function () {
        // To Add Column
        cy.get(".testmode_table  thead > tr > th").its("length").should("eq", 3)
        cy.get("button").contains("Add column").click()
        cy.wait(500)
        cy.get("button").contains("Add column").click().then(() => {
            cy.get(".testmode_table  thead > tr > th").its("length").should("eq", 5)
        })
        // To Delete Default Column
        cy.get(":nth-child(1) > .min_width_200 > .pointer > .icomoon-new-24px-delete-1").click();
        cy.wait(7000)
        //cy.get('.sweet-alert').should('exist')
        //cy.get('.confirm').should("contain", "OK").click({force:true})
        // To Delete Column
        cy.get('.o3 > .pointer > .icomoon-new-24px-delete-1').click({ force: true }).then(() => {
            cy.get(".testmode_table  tbody > tr").its("length").should("eq", 2)
        })
        // All Column Until Warning
        cy.wait(5000)
        cy.get("button").contains("Add column").click()
        cy.wait(5000)
        cy.get("button").contains("Add column").click().then(() => {
            cy.get('[data-cy=errormsg]').should("contain", "Maximum possible value of columns are 4.")
        })

        // To Delete Default Row
        cy.get('.t1 > .pointer > .icomoon-new-24px-delete-1').click()
        //cy.get('.sweet-alert').should("contain", "You must have at least two rows.")
        cy.wait(7000)
        cy.get('.confirm').click();

        // To Add Row
        cy.get(".testmode_table  tbody > tr").its("length").should("eq", 2)
        cy.get("button").contains("Add row").click()
        cy.wait(5000)
        cy.get("button").contains("Add row").click().then(() => {
            cy.get(".testmode_table  tbody > tr").its("length").should("eq", 4)
        })
        // To Delete Row
        cy.get('.t1 > .pointer > .icomoon-new-24px-delete-1').click().then(() => {
            cy.get(".testmode_table  tbody > tr").its("length").should("eq", 3)
        })
        // Add Row Until Warning
        cy.wait(1000)
        cy.get("button").contains("Add row").click()
        cy.wait(1000)
        cy.get("button").contains("Add row").click()
        cy.wait(1000)
        cy.get("button").contains("Add row").click()
        cy.wait(1000)
        cy.get("button").contains("Add row").click().then(() => {
            cy.get('[data-cy=errormsg]').should("contain", "Maximum possible value of rows are 6.")
        })
    })

    it('Test for theme', function () {
        /** This will test the theme */
        cy.get('#select_themes').eq(0).should('have.value', 'theme1').then(() => {
            cy.get('#test_table > thead > tr > th').should('have.css', 'background-color', 'rgb(91, 155, 213)')
        })
        cy.get('#select_themes').eq(0).select('theme2').should('have.value', 'theme2').then(() => {
            cy.get('#test_table > thead > tr > th').should('have.css', 'background-color', 'rgb(59, 103, 188)')
        })
        cy.get('#select_themes').eq(0).select('theme3').should('have.value', 'theme3').then(() => {
            cy.get('#test_table > thead > tr > th').should('have.css', 'background-color', 'rgb(246, 195, 162)')
        })
        cy.get('#select_themes').eq(0).select('theme4').should('have.value', 'theme4').then(() => {
            cy.get('#test_table > thead > tr > th').should('have.css', 'background-color', 'rgb(112, 173, 71)')
        })
        cy.get('#select_themes').eq(0).select('theme5').should('have.value', 'theme5').then(() => {
            cy.get('#test_table > thead > tr > th').should('have.css', 'background-color', 'rgb(116, 89, 152)')
        })
    })
    /** This will test width of table */
    it('This will edit the Table texts', function () {
        cy.get('#customWidth').clear().type('450')
        //cy.get('.sweet-alert').should('contain', 'Width should not be less than 500px')
        cy.wait(5000);
        cy.get('.confirm').click()
        cy.get('#customWidth').clear().type('1050')
        cy.wait(2000);
        cy.get('.sweet-alert').should('contain', 'Width should not be greater than 1000px')
    })

    it('Choice Matrix With specail entity', function() {
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
            cy.get('[data-cy=item63]').click({force:true});
            cy.wait(3000);
            cy.get('#t1').type(' ');
            cy.get('#t1').type('uCertify #cm In Prayagraj');
            cy.wait(2000);
            cy.get('#edi_tabs > :nth-child(2) > a').click({force: true});

            //cy.get('#tb00').tab({shift:true});
        })
    })
    it('choiceMatrix chooseAnswer tab ', function() {
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
            cy.get('[data-cy=item63]').click({force:true});
            cy.wait(3000);
            cy.get('#edi_tabs > :nth-child(2) > a').click({force: true});
            cy.get('#tb00 > .label_choice').click({force: true});
            cy.get('#tb11 > .label_choice').click({force:true});
            cy.get('#tb20 > .label_choice').click({force: true});
            cy.get('.form-check-label').click({force:true});
            cy.get('.correct-ans').click({force: true});
            cy.get('.your-ans').click({force:true});
            //cy.get('#tb00').tab({shift:true});
        })
    })
    
});