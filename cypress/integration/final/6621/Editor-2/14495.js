/*
@author: Anirudh Pratap
@master_project_id: 6621
@phase_id: 11003
@story_id: 
@story_name: Latex Equation
@path: final/6621
@test_case_name: Latex Equation.js
@description: 
@test_steps:
^Preview latex equation when we write in equation editor
-open fill in the blanks module
-click on f(x)
-write some text or equation
-see the latex equation in the below box.

^Copy latex equation to paste whereever required
-open fill in the blanks module
-click on f(x)
-write some text or equation
-see the latex equation in the below box.
-click on copy button to copy it.

@test_data: n/a
@result: Latex equation is visible
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
            EditorPage.writeTitle();
        })
    })
    it("Preview latex equation when we write in equation editor", function() {
        cy.get('#fillAuthor').click().type('something{selectall}')
        cy.wait(5000);
        cy.contains('f(x)').click({force:true});
    });
});