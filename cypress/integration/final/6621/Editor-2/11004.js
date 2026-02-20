/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10231
@story_id: 11004
@story_name: Step Algo
@path: final/6621
@test_case_name: Step Algo.js
@test_steps:
^how to create question
-visit on given url and then visit on editor and click on given image.(https://www.screencast.com/t/VtwVtYyN).
-go to the authoring area and click on '+' icon button with sky background-color to add another step.
-click delete button for delete the added step. 
-inside new step field write your definition.
-click on save button to save the definition.
-for fill math equation click on new step field then click on function button that will appear with bold, italic,underline toolbar button.
-write your equation click on insert button and then click on save button before adding add response as suggested below.
-to take input from user for math equation click on math alert button and wrap the option you want to be filled by user inside curly brace if it is not wrapped and place cursor before open curly brace and click on add Response button then click on done button.
-To add textbox right click on new step field click on add response then select Fill in the blanks (with text box) write the text for fill, check numeric checkbox for numeric data to accept otherwise leave it and click on done button.
-click on save button for save the data in written step field.

^use of Fix answer, Go next, no validation checkbox and plain text and interactive
-If Fix answer will check then if data will not filled then after click on next button it will filled but at last after submit it will show incorrect. Means user must fill it for correct answer.
-If Go next will check then after finding interactive field it will allow to go next step and it will highlighted the step field as success or danger according to answer fill otherwise it will not allow to go next step.
-If no validation check it will not validated it. Means ignore it to fill automatically or highlight it. Its effect is seen when go next is check.

^use of algorithamic
-check the algorithamic checkbox.
-for create variable click on create variable button.
-click on '+' icon button  to add variable write variable name at the place of var in left field and value in right side at the place of '0'. You can use built in function for generate value using help button. Related suggestion is written with that function.
-Click on save variables to save the variable.
-in case of delete a variable click on delete box icon, click on done, click on save variables button.
-to use variable use var:varName and click save button if it is enable otherwise write any character instep field if it is not required then remove it after add it. Then click on solve button to find value of variable.
-Click on analyze button to check possible value. and list of variable name at the header part.

^Delete steps in Module.
-Click on the Delete Button.

^Delete steps in Module.
-Click on the Delete Button.
-When 2 steps are left it should give a warning message

^Add new steps in Module.
-Click on the + icon to add steps

^Text box of the steps.
-Clear the first step instruction and write different text.
-Click on save button.

^Fix Answer and Go Next.
-Check both the checkbox of Fix Answer and Go Next.
-Click on the Next button (https://www.screencast.com/t/Qx41FVRifrA1).

^Use Variable
-Click on tools button
-Select show algorithem
-Click on the Use Variable Button.
-Click on '+' icon button to add variable.
-Change the name of the variable in left field.
-In right field you can use built in function for generate value using help button.
-You can use the var by the format(var:varname).
-Click on save button.
-Check variable value by clicking on Solve button.

@test_data: 
-Successfull:
-(i) fill '1' for numeric, 'text' for non numeric.
-(ii) fill 'b' in math equation.
-Steps
-Fix Answer Checkbox.
-Go Next Chcekbox
-Steps
-Variable

@result: Open Step Algo Module
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Step Algo").click({force: true})
        })
    })

    //** Delete Steps. */ 
    it('Delete Steps', function() {
        cy.get(':nth-child(1) > .view_checkbox > .buttons > .mr > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .view_checkbox > .buttons > .mr > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .view_checkbox > .buttons > .mr > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .view_checkbox > .buttons > .mr > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .view_checkbox > .buttons > .mr > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .view_checkbox > .buttons > .mr > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .view_checkbox > .buttons > .mr > .btn').click().then(() => {
            cy.wait(2000)
            cy.get('.sweet-alert').should("contain", "You have atleast 2 steps.")
        })
    })
    //** Add Steps. */ 
    it('Add Steps', function() {
        cy.get('.row > .jss105').click({force: true}).then(() => {
            cy.wait(2000)
            cy.get('#fillAuthor_8').should("contain", "New Step")
        })
    })
    
    //** check Text Box. */ 
    it('Text Box', function() {
        cy.get('#fillAuthor_0').clear()
        cy.wait(2000)
        cy.get('#fillAuthor_0').type('Point P is (4,3) and point Q is (5,8) What is the slope of line PQ?')
        cy.get('#save_step_0').click().then(() => {
            cy.wait(2000)
            cy.get('.inNativeStyle > .bt-pd > #s0 > #data-block_0').should("contain", "Point P is (4,3) and point Q is (5,8) What is the slope of line PQ?")
        })
    })
    
    //** Fix Answer and Go Next Checkbox. */
    it('Fix Answer and Go Next Checkbox', function() {
        cy.get('#fixedans_checkbox').click()
        cy.wait(2000)
        cy.get('#go_next').click()
    })
    
    //** Create variable. */
    it('Variable', function() {
        cy.get('#icon_menu').click()
        cy.wait(2000);
        cy.get('[role="menuitem"]').contains('Show Algorithmic').click({force: true})
        cy.wait(2000);
        cy.get('[style="padding: 5px 10px; width: inherit; height: 100%;"] > .jss105 > .jss80 > .jss123').click()
        cy.wait(1000)
        cy.get('#var_name_5').clear().type('var6')
        cy.wait(2000)
        cy.get('#var_value_5').click()
        cy.wait(1000)
        cy.get('#var_value_5').clear()
        cy.wait(700)
        cy.get('#var_value_5').type("algo_current('var2')")
        cy.wait(700)
        cy.get('button').contains('Save Variables').click()
        cy.get('#fillAuthor_0').type('var:var6')
        cy.wait(500)
        cy.get('#save_step_0').click()
        cy.wait(500)
        cy.get('#icon_menu').click()
        cy.get('#solve_algo').click()
        cy.wait(5000)
        cy.get('.inNativeStyle > .bt-pd > #s0 > #data-block_0 > div').should('contain', "Point P is (2,3) and point Q is (5,9) What is the slope of line PQ?5")
    })

    //** use of algorithamic. */
    it('algorithamic', function() {
        cy.get('#icon_menu').click()
        cy.wait(2000);
        cy.get('[role="menuitem"]').contains('Show Algorithmic').click({force: true})
        cy.wait(2000);
        cy.get('[style="padding: 5px 10px; width: inherit; height: 100%;"] > .jss105 > .jss80 > .jss123').click({force:true})
        cy.wait(1000)
        cy.get('#var_name_5').clear().type('var6')
        cy.wait(2000)
        cy.get('#var_value_5').click()
        cy.wait(1000)
        cy.get('[style="padding: 5px 10px; width: inherit; height: 100%;"] > .icomoon-help').click()
        cy.get(':nth-child(2) > .algo_function').click()
        cy.get('button').contains('Save Variables').click()
        cy.get('#fillAuthor_0').type('var:var6')
        cy.wait(500)
        cy.get('#save_step_0').click()
        cy.wait(500)
        cy.get('#icon_menu').click()
        cy.get('#edi_tabs > :nth-child(2) > a').click({force: true})
        cy.get('#solve_algo').click()
        cy.get('#analyze_algo').click()
    })

    //** create your question. */
    it('create your question', function() {
        cy.get('.row > .jss105').click({force: true}).then(() => {
            cy.wait(2000)
            cy.get('#fillAuthor_8').should("contain", "New Step")
            cy.get(':nth-child(9) > .view_checkbox > .buttons > .mr > .btn').click({ force: true })
            cy.get('.row > .jss105').click({force: true})
            cy.get('#fillAuthor_8').clear().type('this is step algo')
            cy.get('#save_step_8').click()
            cy.get('#fillAuthor_0').click()
            cy.get('#mceu_8-body > #mceu_3').contains('f(x)').click({force:true});
            cy.wait(5000)
            //cy.get('#mceu_12 > button').click()
            // some code pending due to server error 500
        })
    })

    //** use of Fix answer, Go next, no validation checkbox and plain text and interactive. */
    it('Variable', function() {
        cy.get('#go_next').check()
        cy.get('#fixedans_checkbox').check()
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
        cy.get('#xml_show > :nth-child(1) > :nth-child(1) > :nth-child(4) > :nth-child(3) > .btn').click()
    })
});    
