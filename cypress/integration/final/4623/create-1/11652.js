/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10433
@story_id: 
@story_name: Glossary Mapping
@path: final/Create
@test_case_name: Glossary Mapping.js
@description: 
@test_steps: 
^Glossary Mapping
-Firstly, we need to go into "Navigation > Glossary Mapping".
-Click on "Glossary Mapping" button.
-Then a New page will open. Now paste glossary into left side "Glossary" textbox.
-In the chapter textbox paste a chapter & click "Map Glossary" button.

@test_data:
-Glossary content.

@result: Content must be converted.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('Author Area', function() {
    it('Visit the glossary mapping page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/project/epub");
        })
        cy.get('.icomoon-grid').click({ force: true });
        cy.get('.icomoon-grid').click({ force: true });
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/epub/glossary.php');
        })
    })
})