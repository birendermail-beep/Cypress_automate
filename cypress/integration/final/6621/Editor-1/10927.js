/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: n/a
@story_id: 10927
@story_name: Linux Terminal
@path: final/6621
@test_case_name: Linux Terminal.js
@description:
@test_steps: 

^open module
-Go to the URL : https://www.ucertify.com/editor/?action=new 
-Click on search icon and search Linux
-Open the Linux terminal"

^Add command
-write command ifconfig
-Press Enter
-Click on the preview area, write the same command ""dir"".
-Click review"

^Select match option
select match option

^Check reset
-write command ifconfig
-Press Enter
-Click on reset button "

^Check zoom in and zoom out
-Click on Zoom in (+) icon -> the size of the text will be increased
-Click on Zoom out (-) icon -> the size of the text will be decreased"

^Check speaker
-Click on speaker icon

@test_data: n/a
@result: Linux terminal tested
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Linux terminal", function() {
    beforeEach('This is login/open module', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.icomoon-linux').click({ force: true })
        })
    })

    it('Add command', function() {
        cy.get('#authorTerminal > .cmd').type('ifconfig{enter}');
        cy.wait(2000);
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('#previewTerminal > .cmd').type('dir{enter}');
        cy.wait(2000);
        cy.contains('Review').click();
    });

    it('select match option', function() {
        cy.get('#authorTerminal > .cmd').type('ifconfig{enter}');
        cy.wait(2000);
        cy.get('.jss133').click();
        cy.get('[data-value="2"]').contains('Exact match').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.get('#previewTerminal > .cmd').type('dir{enter}');
        cy.wait(2000);
        cy.contains('Review').click();
    })

    it('Reset option', function() {
        cy.get('#authorTerminal > .cmd').type('ifconfig{enter}');
        cy.wait(2000);
        cy.get('#authorReset').click();
    });

    it('check zoom in and out and speaker icon', function() {
        cy.get('#authorTerminal > .cmd').type('ifconfig{enter}');
        cy.wait(2000);
        cy.get('#authorTerminal > #terminal_font > .icomoon-plus').click({force:true});
        cy.wait(2000);
        cy.get('#authorTerminal > #terminal_font > .icomoon-minus').click({force:true});
        cy.wait(2000);
        cy.get('#voice_icon').click({force:true});
        cy.wait(2000);
    })
})