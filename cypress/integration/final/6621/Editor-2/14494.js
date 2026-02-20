/*
@author: Anirudh Pratap
@master_project_id: 6621
@phase_id: 11003
@story_id: 
@story_name: Adding Equation
@path: final/6621
@test_case_name: Adding Equation.js
@description: 
@test_steps:
^Added Text selection functionality from authoring section
-open fill in the blanks module
-write some text in the authoring section. 
-Then select some text via mouse cursor
-Then clcik on f(x) button.
-See the selection in the modal box.
-you can edit or insert equation in the selected area."

^Added Text selection functionality from stem section
-open fill in the blanks module
-write some text in the Stem section. 
-Then select some text via mouse cursor. if equation already exist then you can select it by putting cursor over it 
-Then clcik on f(x) button.
-See the selection in the modal box.
-you can edit or insert equation in the selected area.

^Added Text selection functionality from authoring remediation section
-open fill in the blanks module
-write some text in the remediation section. 
-Then select some text via mouse cursor. if equation already exist then you can select it by putting cursor over it 
-Then clcik on f(-button.
-See the selection in the modal box.
-you can edit or insert equation in the selected area.

@test_data: n/a
@result: equation should be inserted in the math form.
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
    it("Added Text selection functionality from authoring section", function() {
        cy.get('#fillAuthor').click().type('something{selectall}')
        cy.wait(5000);
        cy.contains('f(x)').click({force:true});
    });
    it("Added Text selection functionality from stem section", function() {
        cy.get('#stem > .ebook_item_text').clear().type('Testing{selectall}', { force: true })
        cy.wait(5000)
        cy.contains('f(x)').click({force:true});
    });
    it("Added Text selection functionality from authoring remediation section", function() {
        cy.get('#remediation').type('Testing Remedeation')
        cy.wait(5000)
        cy.contains('f(x)').click({force:true});
    });
})