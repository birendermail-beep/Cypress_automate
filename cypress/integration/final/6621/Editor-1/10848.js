/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10164
@story_id: 10848
@story_name: Fill in the blanks (with mathematical equations)
@path: final/6621
@test_case_name: Fill in the blanks (with mathematical equations).js
@description:
@test_steps: 
    ^Open module
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)

    ^Write content
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - Go to authoring area .
    - write some content if required.
    
    ^Check modal open on f(x)
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - click on 'f(x) ' at navigation bar.

    ^Write equation and insert
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - Write your desire equation.
    - click on insert button.

    ^Add response
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - click on math alert box.
    - to which you want to add manualy place cursor before curly brace in which value is assign if curly brace is not defined then firstly wrap the value inside curly brace then place your cursor just before brace and click on add user response. 


    ^Check Edit Equation
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - click on edit the equation.
    
    ^Adding another equation
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - click on '+' button to add another equation the equation.
    - click on edit to edit and create the equation.

    ^Set the settings
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - click on setting button
    - Select the setting for answer

    ^Check for correct answer
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - Go to authoring area .
    - write some content if required.
    - click on 'f(x) ' at navigation bar.
    - perform your desire equation.
    - click on insert button.
    - click on math alert box.
    - to which you want to add manualy place cursor before curly brace in which value is assign if curly brace is not defined then firstly wrap the value inside curly brace then place your cursor just before brace and click on add user response. 
    - click on edit the equation.
    - click on '+' button to add another equation the equation.
    - click on edit to edit and create the equation.
    - click place the cursor before the curly brace and click on add user response button.(but it will reflect the previous equation so create separate equation for each).
    - click on done button.
    - for case sensitive click on setting button and check csae sensitive checkbox.
    - on preview area write your answer.
    - click on remediation button for result.
    - click on preview label for expand the screen.

    ^Check for incorrect answer
    - Visit to website.
    - Login to website.
    - visit editor area
    - click on fill in the blanks (mathematical equations)
    - Same as above
    
@test_data: n/a 
@result: open the fill in the blanks (mathematical equations) page open
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("To test Fill In the Blanks", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('#itemLogo > .icomoon-insert-template').eq(2).click({ force: true })
                cy.wait(3000)
            })
        })
        /** By Selecting "fill in the blanks (mathematical equations)" */
    it('fill in the blanks (mathematical equations) for click on f(x)', function() {
        EditorPage.writeTitle()
            //click on f(x)
        cy.get('[aria-label="Equation editor"]').eq(0).click({ force: true })
    })
    it('fill in the blanks (mathematical equations) with correct answer', function() {
        //EditorPage.writeTitle()
        EditorPage.editorAddResponse()
        cy.get('#fillAuthor').rightclick({ force: true })
        cy.get('#addToken-text').click()
        cy.get('#input0').type('a*b', { force: true })
        cy.get('.text-white > span').contains('Done').click({ force: true })
        cy.get('[latex="a+b"]').click({ force: true })
        cy.get('.text-white > span').contains('Done').click({ force: true })
        EditorPage.editorPreview()
        EditorPage.viewReview()
    })
})