/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10961
@story_name: Loading Old Player Tags
@path: final/6621
@test_case_name: Loading Old Player Tags.js
@description: Loading Old Player Tags
@test_steps:
^Load 3d object player
-Load video player by clicking on Video tag showing left side and Modal box will be opened
-Click the Media and select the 3D Object option
-3D Object palyer will be loaded
-Fill provided data and click the submit button

@test_data: n/a
@result: Loading Old Player Tags
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    it('embed and player tag (knowledge check) with Load old player tags', function() {
        cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.multiple_choice').click({ force: true })
            })
            //Load old player tags
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
                cy.get('[type="button"]').contains('Ok').click({ force: true })
                cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
                cy.get('#stem_show > [sub_type="embed"] > player').click({ force: true })
            })
        })
    })
})