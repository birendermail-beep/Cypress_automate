/*
@author: irfan ahmad
@master_project_id: 6621
@phase_id: 
@story_id: 15240
@story_name: editor_order_arrange_add
@path: final\6621\editor_order_arrange_add.js
@test_case_name: editor_order_arrange_add.js
@description:
@test_steps:
^test case Editor area
- Visit the Editor area
- Click on Search button
- Type Arrange in search box
- Back to the search result
- Click on Order (Arrange) card
- Module will be open

^test case Editor area
- Visit the Editor area
- Click on Search button
- Type Arrange in search box
- Back to the search result
- Click on Order (Arrange) card
- Module will be open
- Click on Add button
- Type the name if you want
- Click on preview to see the changes

^test case Editor area
- Visit the Editor area
- Click on Search button
- Type Arrange in search box
- Back to the search result
- Click on Order (Arrange) card
- Module will be open
- Check desired checkboxes & see the preview

^test case Editor area
- Visit the Editor area
- Click on Search button
- Type Arrange in search box
- Back to the search result
- Click on Order (Arrange) card
- Module will be open
- Attempt the questions
- Click on the preview
- Click on the review 
- Click on the Correct answer

^test case Editor area
- Visit the Editor area
- Click on Search button
- Type Arrange in search box
- Back to the search result
- Click on Order (Arrange) card
- Module will be open
- Click on delete icon button
- Click on Cancel
- Content will not be deleted

^test case Editor area
- Visit the Editor area
- Click on Search button
- Type Arrange in search box
- Back to the search result
- Click on Order (Arrange) card
- Module will be open
- Click on delete icon button
- Content will be deleted

^test case Editor area
- Visit the Editor area
- Click on Search button
- Type Arrange in search box
- Back to the search result
- Click on Order (Arrange) card
- Module will be open
- Attempt the questions
- Click on the preview
- Click on the review 
- Click on the your answer

@test_data: N/A     
@result:
- Added new option in the module.
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Editor Area", function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
        })
    })
    it('Order Arrange module Add Option', function() {
        cy.fixture('global').then(data => {
            cy.get('.icomoon-search-2').click({ force: true })
            cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('Arrange', { force: true })
            cy.get('.icomoon-arrow-left-4').click()
            cy.get('[data-keywords="reorder"]').click({ force: true })
            cy.visit(data.url + '/editor/?action=new&content_subtype=6&content_type=q&content_icon=1&react_content=1')
            cy.get('#add-item').click()
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        })
    })
    it('Order Arrange module checkboxes', function() {
        cy.fixture('global').then(data => {
            cy.get('.icomoon-search-2').click({ force: true })
            cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('Arrange', { force: true })
            cy.get('.icomoon-arrow-left-4').click()
            cy.get('[data-keywords="reorder"]').click({ force: true })
            cy.visit(data.url + '/editor/?action=new&content_subtype=6&content_type=q&content_icon=1&react_content=1')
            cy.get('#isSentence').check({ force: true })
            cy.get('#isParagraph').check({ force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        })
    })
    it('Order Arrange Correct Answer', function() {
        cy.fixture('global').then(data => {
            cy.get('.icomoon-search-2').click({ force: true })
            cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('Arrange', { force: true })
            cy.get('.icomoon-arrow-left-4').click()
            cy.get('[data-keywords="reorder"]').click({ force: true })
            cy.visit(data.url + '/editor/?action=new&content_subtype=6&content_type=q&content_icon=1&react_content=1')
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            cy.get('#remedToggle [type="checkbox"]').check({ force: true })
            cy.get('#show_ans_group .correct-ans').click({ force: true })
        })
    })
    it('Order Arrange module Delete Option', function() {
        cy.fixture('global').then(data => {
            cy.get('.icomoon-search-2').click({ force: true })
            cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('Arrange', { force: true })
            cy.get('.icomoon-arrow-left-4').click()
            cy.get('[data-keywords="reorder"]').click({ force: true })
            cy.visit(data.url + '/editor/?action=new&content_subtype=6&content_type=q&content_icon=1&react_content=1')
            cy.get(':nth-child(1) > .col-md-12 > .remove-item').click({ force: true })
            cy.get('.editor_modal_action > :nth-child(1)').click({ force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        })
    })
    it('Order Arrange module Delete Option', function() {
        cy.fixture('global').then(data => {
            cy.get('.icomoon-search-2').click({ force: true })
            cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('Arrange', { force: true })
            cy.get('.icomoon-arrow-left-4').click()
            cy.get('[data-keywords="reorder"]').click({ force: true })
            cy.visit(data.url + '/editor/?action=new&content_subtype=6&content_type=q&content_icon=1&react_content=1')
            cy.get(':nth-child(1) > .col-md-12 > .remove-item').click({ force: true })
            cy.get('.bg-primary').click({ force: true })
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
        })
    })
    it('Order Arrange Your Answer', function() {
        cy.fixture('global').then(data => {
            cy.get('.icomoon-search-2').click({ force: true })
            cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('Arrange', { force: true })
            cy.get('.icomoon-arrow-left-4').click()
            cy.get('[data-keywords="reorder"]').click({ force: true })
            cy.visit(data.url + '/editor/?action=new&content_subtype=6&content_type=q&content_icon=1&react_content=1')
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            cy.get('#remedToggle [type="checkbox"]').check({ force: true })
            cy.get('#show_ans_group .your-ans').click({ force: true })
        })
    })
    it('Order Arrange module open', function() {
        cy.fixture('global').then(data => {
            cy.get('.icomoon-search-2').click({ force: true })
            cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('Arrange', { force: true })
            cy.get('.icomoon-arrow-left-4').click()
            cy.get('[data-keywords="reorder"]').click({ force: true })
            cy.visit(data.url + '/editor/?action=new&content_subtype=6&content_type=q&content_icon=1&react_content=1')
        })
    })
})