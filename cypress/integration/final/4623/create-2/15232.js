/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15232
@story_name: content_advance_search
@path: final/Create
@test_case_name: content_advance_search
@description: Create area
@test_steps: 
^advance search page
-Login to ucertify.com as author.
-Open the following url:(https://www.ucertify.com/editor).
-Click on the All button.
-click on the Advance search option.

@test_data: N/A.
@result: opening the content advance search page
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('advance search page', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('test the help intro page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/editor/");
        })
        cy.get(".btn.btn-block.btn-light.dropdown-toggle").click().then(() => {
            cy.get("ul.dropdown-menu.dropdown-menu-right > li").contains("Advance Search").click();
        })
    })
    it('content_advance_search', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/index.php?author_course=1&func=load_course&course=5TXCUHIPAYJ7SYNM')
            //cy.get('#item_bank > .items > .snippet').click()
            CreateArea.itemBank();
            cy.get('[data-cy="lesson_obj"]').contains('Lession_1').click()
            cy.get('[data-cy=add_exist_btn]').click({ force: true })
            cy.wait(6000)
            cy.get('#existing_chapters').select('Lession_1', { force: true })
            cy.wait(6000)
            cy.get('#existing_objective').select('Sample Objective', { force: true })
            cy.wait(6000)
            cy.get('#add_existing_modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            cy.get('iframe')
            cy.wait(6000)
            cy.visit(data.url + '/editor/?search_type=&from_item_bank=1&from_domain=1&no_header=1&is_flashcard=0');
        })
        cy.get('.mr-2 > .btn').click({ force: true })
        cy.get("ul.dropdown-menu.dropdown-menu-right > li").contains("Advance Search").click({ force: true })
    })
})