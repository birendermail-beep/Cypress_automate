/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10962
@story_name: Loading Link Content
@path: final/6621
@test_case_name: Loading Link Content.js
@description: Loading Link Content
@test_steps:
^Load link content
-Go to editor area
-Click the Plus icon then side panel will be opened
-Click the Embed option
-Click the Knowledge check (Quiz player tag)
-Quiz Player tag will be added
-Click that added player tag
-Click the List Contents button. All quiz data will be shown in table and search text box will be opened
-Click any row and that row guid will be added in Item Id text box
-Click the Submit button

@test_data: n/a
@result: Editor area will be loaded
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('embed and player tag (knowledge check) with Load link content', function() {
        cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.multiple_choice').click({ force: true })
            })
            //Load link content
        cy.wait(5000)
        cy.get('#title').click({ force: true }).then(() => {
            cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
            cy.get('#searchText').type('embed', { force: true }).then(() => {
                cy.get('#embed').click({ force: true })
                cy.get('.item_labelClass').contains('Knowledge Check').click({ force: true })
                cy.wait(2000)
                cy.get('#items_list').click({ force: true })
                cy.get('#stem').click()
                cy.get('[aria-label="Source code"]').eq(0).click({ force: true })
                cy.get('#mceu_69').clear().type('<player type="quiz" nofeedback="0" asset="01KJW" title="Quiz"></<player>', { force: true })
                cy.get('[type="button"]').contains('Ok').click({ force: true })
                cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
                cy.get('[type="ebook-item"] > player').eq(0).click({ force: true })
                // cy.get('#guid_list > :nth-child(1) > .btn').click({ force: true })
            })
        })
    })
})