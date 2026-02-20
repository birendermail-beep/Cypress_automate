/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Epub Glossary Mapping
@path: final/Create
@test_case_name: Epub Glossary Mapping.js
@description: 
@test_steps: 
^To test "Glossary Mapping" button in grid view icon
-Follow steps 1 to 6 as given in test case 1.
-Click in grid view icon
-Click on Glossary Mapping icon button

@test_data: 
-Uploaded File: Chapter2.html

@result: Should redirect to Glossary Mapping page with Glossary and chapter preview.
*/

import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index' 
describe('Author Area', function() {

    beforeEach(function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/project/epub");
        })
        cy.get('.icomoon-grid').click({ force: true });
        cy.get('.icomoon-grid').click({ force: true });
    })

    it('Click the glossary mapping', function() {
        cy.get('#glossary_mapping_btn > div').click({ force: true });
    })

    it('Visit the glossary mapping page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/epub');
        })
    })
})