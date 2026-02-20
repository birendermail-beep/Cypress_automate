/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10845
@story_name: Fill in the blanks
@path: final/6621
@test_case_name: Fill in the blanks.js
@description: n/a
@test_steps: 
^Text box added
-Visit to website.
-Login to website.
-visit editor area
-Click on Add response
-Write a text for correct answer
-Choose the answer mode
-Click done button

^Text box not added
-Visit to website.
-Login to website.
-visit editor area
-Click on Add response
-Write a text for correct answer
-Choose the answer mode
-Click done button

^Text box added (only number)
-Visit to website.
-Login to website.
-visit editor area
-Click on Add response
-Write a text for correct answer
-Choose the answer mode
-Click done button

^Text box added (Code type)
-Visit to website.
-Login to website.
-visit editor area
-Click on Text box
-Write multiple text for correct answer
-Choose the answer mode
-Click done button

^Setting button
-Visit to website.
-Login to website.
-visit editor area
-Click on setting button

^Check for correct answer
-Visit to website.
-Login to website.
-visit editor area
-Click on setting button
-Select Multiple Correct Answer
-Click out of the modal box
-In Preview area Enter the any one of the correct answer
-Click on review

^Check for incorrect answer
-Visit to website.
-Login to website.
-visit editor area
-Click on setting button
-Select Answer setting
-Click out of the modal box
-In Preview area Enter any incorrect answer
-Click on review

^Check for correct answer with case sensitive
-Visit to website.
-Login to website.
-visit editor area
-Click on setting button
-Select Case Sensitive
-Click out of the modal box
-Enter the single text same as original text
-Click on review

^Check for incorrect answer with case sensitive
-Visit to website.
-Login to website.
-visit editor area
-Click on setting button 
-Select Case Sensitive 
-Click out of the modal box 
-In Preview area Enter the single text in upper case or capitalize 
-Click on review

^Check for correct answer with ignore special character
-Visit to website.
-Login to website.
-visit editor area
-Click on setting button 
-Select Ignore Special Character 
-Click out of the modal box 
-Enter the single text same as original text with any special symbols 
-Click on review

^Check for correct answer with Case Sensitive, Ignore Special Character, Multiple Correct Answer
-Visit to website.
-Login to website.
-visit editor area
-Click on setting button 
-Select Case Sensitive, Ignore Special Character, Multiple Correct Answer
-Click out of the modal box 
-In Preview area Enter the single text both of them same original text with any special symbols
-Click on review

^Check for correct answer with numeric 
-Visit to website.
-Login to website.
-visit editor area
-Click on Add response 
-Write a text for correct answer in numbers 
-Choose the answer mode: Numeric 
-Click done button
-In Preview area Enter you correct answer
-Click on review button

^check answer with dropdown options
-Visit to website.
-Login to website.
-Visit editor area
-Click on Add response 
-Click on dropdown
-Provide options and click on add options to add more
-Mark the correct answer and click on done
-go to preview and select the correct answer

^check answer with drag and drop options
-Visit to website.
-Login to website.
-Visit editor area
-Click on Add response 
-Click on Drag and drop
-Provide options and click on add options to add more
-Mark the correct answer and click on done
-go to preview and select the correct answer

^check answer with multiline
-Visit to website.
-Login to website.
-Visit editor area
-Click on Add response 
-Click on Multiline
-Provide default answer and correct answer
-Give the no. of rows and cols and mark done
-Go to preview and select the correct answer

^check answer with Mathmatical Equation
-Visit to website.
-Login to website.
-Visit editor area
-Click on Add response 
-Click on Mathmatical Equation
-Provide the equation and add user respnse
-Again open the box 
-Click on edit option to open the Equation Editor

@test_data: n/a
@result: fill in the blanks module open in Editor Area
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('[data-keywords="textbox"]').click({ force: true })
            cy.get('#fillAuthor').click()
            cy.get('#fillAuthor').clear().type('Honesty is the best policy', { force: true })
            cy.wait(3000)
        })
    })
    it("write a question", function() {
        cy.get('#fillAuthor').type('{selectall}').rightclick({ force: true })
    });

    it("Select the type of mode code type", function() {
        EditorPage.editorAddResponse();
        cy.get('#fillAuthor').rightclick({ force: true })
        cy.get('#addToken-text').click()
        cy.get('#input1').type('best', { force: true })
        cy.get('#codetype').check()
        cy.get('.jss217 > .text-white').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('.fillintheblank').clear().type('best');
    });

    it("Select the type of mode code type and numeric", function() {
        EditorPage.editorAddResponse();
        cy.get('#input1').type('best', { force: true })
        cy.get('#codetype').check({ force: true })
        cy.get('#numeric').check({ force: true })
        cy.get('.jss217 > :nth-child(2)').click();
        cy.get('.jss133 > .jss176').should('be.visible')
    });

    it("Select the type of mode numeric and provide only number", function() {
        EditorPage.editorAddResponse();
        cy.get('#fillAuthor').rightclick({ force: true })
        cy.wait(2000);
        cy.get('#addToken-text').click()
        cy.get('#numeric').check()
        cy.get('#input1').type('12', { force: true })
        cy.get('.jss217 > .text-white').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('.fillintheblank').clear().type('12');
    });

    it("multiple text for correct answer", function() {
        EditorPage.editorAddResponse();
        cy.get('#fillAuthor').rightclick({ force: true })
        cy.get('#addToken-text').click()
        cy.get('#input1').type('Honesty, Best', { force: true })
        cy.get('#codetype').check({ force: true })
        cy.get('.jss217 > :nth-child(2)').click({ force: true });
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('.fillintheblank').clear().type('Honesty, Best');
    });

    it("click on setting button", function() {
        cy.get('.icomoon-new-24px-gear-1').click()
    });

    it("Select multiple Answer", function() {
        cy.get('.icomoon-new-24px-gear-1').click()
        cy.get(':nth-child(3) > .jss204 > .jss105 > .jss122 > .jss216').check({ force: true })
        cy.get('.jss217 > .jss105').click();
    });

    //newly added
    it("dropdown option", function() {
        EditorPage.editorAddResponse();
        cy.get('#fillAuthor').rightclick({ force: true })
        cy.get('#addToken-text').click();
        cy.get('.btn-group > [value="2"]').click();
        cy.get('#dropDown0').type('first');
        cy.get('.float-left > .jss105').click();
        cy.get('#dropDown1').type('second');
        cy.get('.float-left > .jss105').click();
        cy.get('#dropDown2').type('third');
        cy.get('#correct1').click();
        cy.get('.jss217 > .text-white').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('.fillintheblank').select('second');
    })

    it("drag and drop option", function() {
        EditorPage.editorAddResponse();
        cy.get('#fillAuthor').rightclick({ force: true })
        cy.get('#addToken-text').click();
        cy.get('.btn-group > [value="3"]').click();
        cy.get('#dragDrop0').type('first');
        cy.get('.mt-3 > .jss105').click();
        cy.get('#dragDrop1').type('second');
        cy.get('.jss217 > .text-white').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('.dragArea').should('exist');
    });

    it("multiline", function() {
        EditorPage.editorAddResponse();
        cy.get('#fillAuthor').rightclick({ force: true })
        cy.wait(3000);
        cy.get('#addToken-text').click();
        cy.get('.btn-group > [value="5"]').click();
        cy.get('#defaultMultiAns').type('Write the correct answer');
        cy.get('#rows').type('5');
        cy.get('#cols').type('10');
        cy.get('#multiLineCorrect').type('This is the correct answer');
        cy.get('.jss217 > .text-white').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('.textarea').type('This is the correct answer');
    });

    it("Mathmatical Equation", function() {
        EditorPage.editorAddResponse();
        cy.get('#fillAuthor').rightclick({ force: true })
        cy.wait(3000);
        cy.get('#addToken-text').click();
        cy.get('.btn-group > [value="6"]').click();
        cy.get('#input0').type('10');
        cy.get('.jss217 > .text-white').click();
        cy.get('#latexSpan2').click();
        cy.get('#latexEdit0').click();
        cy.contains('Equation Editor').should('exist');
    });
});