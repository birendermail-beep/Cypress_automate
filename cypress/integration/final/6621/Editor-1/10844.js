/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: n/a
@story_id: 10844
@story_name: Evalpro
@path: final/6621
@test_case_name: Evalpro.js
@description: n/a
@test_steps: 
^editor attribute in eval
-Visit to website.
-Login to website.
-visit editor area
-Open Evalpro in editor
-Save XML
-refresh the page
-See the Value of Editor attribute should not changed

^evalpro Testcase
-Visit to website.
-Login to website.
-visit editor area
-Open Evalpro in Editor area
-Create a question and add atleast two testcases by pressing ADD Testcase button
-Give input/output value for testcase and save
-Now Goto preview and click on remidiation button to see the result
-in Result Screen all the testcase based result should be displayed.

^Input value of testcase in SQL language
-Open Evalpro area
-create a question
-Select SQL in Language 
-Save XML
-check the answer in preview 
-In result screen the value of Input should be removed.

^immprovement1
-open quiz player
-Write the correct code which is asked in the question 
-Press RUN button
-Press Submit button 
-check answer is correct/incorrect

^immprovement2
-open quiz player
-Write the correct code which is asked in the question 
-Press RUN button
-Press Submit button 
-check answer is correct/incorrect

^immprovement3
-open editor area
-Create a question in stem area.
-Select language from dropdown list - sql
-Select Direct from dropdown list - Right
-Select do you want to visible/invisible/editable the pre block from dropdown list
-Select do you want to visible/invisible/editable the pre block from dropdown list
-In Enable line testbox give line nymbers by seperating it with comma on which lines you want user to write code.
-Provide code in pre block, editor block and post block(If necessary)
-Select database from the dropdown list
-Click on Add test case button
-in first textbox provide inputs by seperating it with comma and in outputbox do the same as an sample for checking the test result of program (In sql You only need to provide output)
-Select the matchcase from selectbox like - case sensitive/partial matching/special char
-Click on submit button
-Click on save, you will get the guid created.

^immprovement4
-Open your new created guid in editor
-Write the necessary code according to the question 
-Press Run button to compile the code
-You will get the compiled output in output window

^immprovement5  
-Open any create table question in sql
-execute the command and press run button
-again execute the same query
-press the reset button to reset the database

^immprovement6
-open editor area
-Create a question in stem area.
-Select language from dropdown list - python
-Select Direct from dropdown list - Right
-Select do you want to visible/invisible/editable the pre block from dropdown list
-Select do you want to visible/invisible/editable the pre block from dropdown list
-In Enable line testbox give line nymbers by seperating it with comma on which lines you want user to write code.
-Provide code in pre block, editor block and post block(If necessary)
-Click on Add test case button and add sample testcases like sample input and output set according to question
-in first textbox provide inputs by seperating it with comma and in outputbox do the same as an sample for checking the test result of program (In sql You only need to provide output)
-Select the matchcase from selectbox like - case sensitive/partial matching/special char
-Click on submit button
-Click on save, you will get the guid created.
-preview the question and click on remidiation to check you answer

^immprovement7
-Open editor and open evalpro
-select language C#
-select pre,postand enable line according to your need
-write neccessary library related code in pre block
-Write necessary code in post block
-click on add testcase button
-add inputs by comma seperating
-add outputs by comma seperating
-click on submit button 
-click on preview
-write the answer in editor block and provide inputs in input block
-press the run button and see the output in output area
-click on remidiation button and check the pass/fail output

^immprovement8
-Open editor and open evalpro
-select language java
-select pre,postand enable line according to your need
-write neccessary library related code in pre block
-Write necessary code in post block
-click on add testcase button
-add inputs by comma seperating
-add outputs by comma seperating
-click on submit button 
-click on preview
-write the answer in editor block and provide inputs in input block
-press the run button and see the output in output area
-click on remidiation button and check the pass/fail output

^immprovement9
-Add test case in java question
-mark true to the checkbox of partial match
-Select special char from selectbox
-Run the code

^Error for parseLiner number
-Load this crn: CODE-EXAMPLES
-And Load the first lab
-Write this code and click on submit button test return (float (a % b))

^Error Number  for parseLiner number
-Load this crn: CODE-EXAMPLES
-And Load the first lab
-Write this code and click on submit button result = (float (a % b)

^Submit Output in output area
-Load this crn: CODE-EXAMPLES
-And Load the first lab
-Write this code and click on submit button return (float (a % b))

^Split View in three part with proper toolbar and navigation Improvement of UI 
-Load this crn: CODE-EXAMPLES
-And Load the first lab
-You can see the three blocks

^Compiler code release
-All the labs are running on compiler so you can test any labs (1-5) in the above crn.

^Security on compiler. Permission on db
-Load this crn: C995
-Load the 6th item snippet: Create Tables in MySQL
-If anything written remove all code and write this code show databases;
-It will show the database related to login user. You can verify by the user guid in database name

^Speed improvment for evalpro
-Visit to website.
-Login to website.
-visit editor area
-Load any lab and click on submit button only one ajax call will be send to the server
    
@test_data: n/a
@result: EvalPro module open in Editor Area
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Editor Testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.grid-item').contains("Evalpro").click({ force: true })
        })
    });

    it("editor preview in tablet, mobile and desktop mode", function() {
        cy.wait(2000);
        EditorPage.editorPreview()
    });

    it("change the enable line value", function() {
        cy.get("#enable-line").clear();
        cy.get("#enable-line").type("1");
    });

    it("click on add test cases and submit", function() {
        cy.get("#addTestCase").click();
        cy.get(".btn")
            .contains("Submit")
            .click();
    });

    it("click on add test cases and cancel", function() {
        cy.get("#addTestCase").click();
        cy.get(".btn.btn-light")
            .contains("Cancel")
            .click();
    });
    it("click on Remediation to see the Remediation for correct answer", function() {
        cy.wait(2000);
        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        cy.get("#answerCheck").click();
    });

    it("click on xml to done", function() {
        cy.get('#icon_menu').click();
        cy.get("#xml").click();
        cy.get("#xmlDone").click();
    });

    it("click on xml to cancel", function() {
        cy.get('#icon_menu').click();
        cy.get("#xml").click();
        cy.get('.jss228 > :nth-child(1)').click();
    });

    it("click on back to redirect the page", function() {
        cy.get("#back_editor_button > span")
            .click({ force: true });
    });

    it("click on back to redirect the page cancel", function() {
        cy.wait(2000);
        cy.get("#back_editor_button > span")
            .click({ force: true });
    });

    it("click on help video to open video", function() {
        cy.get('#helpButton').click();
        cy.get('div.show > .dropdown-menu > :nth-child(1) > :nth-child(1)').click();
        cy.wait(3000)
        cy.get('video').should('exist')
    });
    it("click on diagnostic", function() {
        cy.get('#icon_menu').click();
        cy.get('#diagnostic').click();
    });
    it("click on Keyboard Shortcut", function() {
        cy.get('#helpButton').click();
        cy.get('.icomoon-accessibility').click();
        cy.get('.editor_modal_content').should('exist')
    });

    // newly added from here
    it("click on add test cases and submit", function() {
        cy.get("#addTestCase").click();
        cy.get('.jss80 > .jss123').click();
        cy.get(':nth-child(4) > .p-3 > .mr-md').clear().type('10,-4');
        cy.get(':nth-child(4) > .p-3 > .ml-md').clear().type('6');
        cy.get(".btn")
            .contains("Submit")
            .click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('#answerCheck').click();
    });

    it("Input value of testcase in SQL language", function() {
        cy.get('.language_select_button').click()
        cy.wait(3000);
        cy.get(':nth-child(13)').contains('Sql').click({force:true});
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('#evalProRunCode').click();
    });
});