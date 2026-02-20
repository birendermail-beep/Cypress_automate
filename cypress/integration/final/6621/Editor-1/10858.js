/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10628
@story_id: 10858
@story_name: gridded
@path: final/6621
@test_case_name: gridded.js
@description:n/a
@test_steps: 
    ^UI Layout
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each sidebar items
    - There are two input area.
    - First is number of column abd number of rows
    - Plus/Minus checkbox
    - Slash checkbox
    - Decimal fraction

    ^Perform_row_column
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each sidebar items
    - Search "Gridded Module".
    - Successfully open gridded module.
    - Number of column increase
    - Number of Rows Increase

    ^Perform_plus_minus
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each sidebar items
    - Search "Gridded Module".
    - Successfully open gridded module.
    - Number of column increase
    - Number of Rows Increase
    - Check a plus/minus symbol

    ^Perform_slash_decimal
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each sidebar items
    - Search "Gridded Module".
    - Successfully open gridded module.
    - Number of column increase
    - Number of Rows Increase
    - Check the slash checkbox and fraction decimal checkbox

    ^Load_xml
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each sidebar items
    - Search "Gridded Module".
    - Successfully open gridded module.
    - Number of column increase
    - Number of Rows Increase
    - Check the slash checkbox and fraction decimal checkbox
    - Click on the xml button.
    - Successfully show the xml according to your changes.

    ^open quiz
    - Click on this link(url + /quiz_player.php?player_id=undefined_1&group_guid=05RYT&title=&player_setting)
    - Successfully open item in quiz
    
    ^Check ADA
    - click on this link(url + /quiz_player.php?player_id=undefined_1&group_guid=05RYT&title=&player_setting)
    - Using the tab in the gridded sheet

    ^Add Question
    - Visit to website.
    - Login to website.
    - visit editor area
    - click each sidebar items
    - Select the "Gridded Module".
    - Click on the plus icon and And select plus icon and select paragraph.
    - Write your question.
    - After that select your answer according to your question.
    - After that click on the "save" button.

@test_data:n/a
@result: gridded  area
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("gridded item testing", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('[data-subtype="56"] > :nth-child(1) > #itemLogo > .icomoon-pencil-4').click({ force: true })
        })
    })

    //** UI features */
    it('UI features ', function() {
        cy.get('#panel1a-header').click()
        cy.get('#plus_minus_checkbox').click()
        cy.get('#fraction_slash_checkbox').click()
        cy.get('#fixed_decimal_checkbox').click()
        cy.get('#floating_decimal_checkbox').click()

    })

    //** Check the xml according to authoring file */
    it('Check the xml according to authoring file ', function() {
            cy.get('#panel1a-header').click()
            cy.get('#plus_minus_checkbox').click()
            cy.get('#fraction_slash_checkbox').click()
            cy.get('#fixed_decimal_checkbox').click()
            cy.get('#floating_decimal_checkbox').click()
            cy.get('#icon_menu').click()
            cy.get('#xml').click()
        })
        //UI features with correct answer
    it('UI features with correct', function() {
            cy.get('#td1').type('2', { force: true })
            cy.get('#td3').type('2', { force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            EditorPage.viewOrderReview()
        })
        //UI features with inccorect answer
    it('UI features with incoorect answer', function() {
            cy.get('#td0').type('2', { force: true })
            cy.get('#td2').type('1', { force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            EditorPage.viewOrderReview()
        })
        //Layout functionality row and column and Layout functionality plus and minus
    it('Layout functionality row and column and Layout functionality plus and minus', function() {
            cy.contains('Layout Options').click({ force: true })
            cy.get(':nth-child(1) > :nth-child(2) > #col_range').clear({ force: true }).type('5', { force: true })
            cy.get(':nth-child(2) > :nth-child(2) > #col_range').clear({ force: true }).type('5', { force: true })
            cy.get('#plus_minus_checkbox').click({ force: true })
            cy.wait(2000);
            cy.contains('Layout Options').click({ force: true })
            cy.get('#plus_minus_tab').should('be.visible');
        })
        //Layout functionality slash and fraction decimal
    it('Layout functionality slash and fraction decimal', function() {
            cy.contains('Layout Options').click({ force: true })
            cy.get(':nth-child(1) > :nth-child(2) > #col_range').clear({ force: true }).type('5', { force: true })
            cy.get(':nth-child(2) > :nth-child(2) > #col_range').clear({ force: true }).type('5', { force: true })
            cy.get('#fraction_slash_checkbox').click({ force: true })
            cy.contains('Layout Options').click({ force: true })
            cy.get('#slash_tab').should('be.visible');
        })
        //Layout functionality fixed decimal
    it('Layout functionality fixed decimal', function() {
            cy.contains('Layout Options').click({ force: true })
            cy.get(':nth-child(1) > :nth-child(2) > #col_range').clear({ force: true }).type('5', { force: true })
            cy.get(':nth-child(2) > :nth-child(2) > #col_range').clear({ force: true }).type('5', { force: true })
            cy.get('#fixed_decimal_checkbox').click({ force: true })
            cy.wait(2000);
            cy.get('#Fixed_decimal_column').type('3',{force:true});
            cy.contains('Layout Options').click({ force: true })
        })
        //Layout functionality floating decimal
    it('Layout functionality floating decimal', function() {
        cy.contains('Layout Options').click({ force: true })
        cy.get(':nth-child(1) > :nth-child(2) > #col_range').clear({ force: true }).type('5', { force: true })
        cy.get(':nth-child(2) > :nth-child(2) > #col_range').clear({ force: true }).type('5', { force: true })
        cy.get('#floating_decimal_checkbox').click({ force: true })
        cy.contains('Layout Options').click({ force: true })
        cy.get('#authoringLoadComponent').should('be.visible');
    })

    it('Add paragraph', function() {
        cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
        cy.wait(2000);
        cy.get('#text').click();
        cy.wait(3000);
        cy.get('#Paragraph').click();
        cy.wait(3000);
    });
})