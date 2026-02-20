/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id: NA
@story_id: 14432
@story_name: Author Thumbnail
@path: final\Create\
@test_case_name: Author Thumbnail
@description: Checking the functionality of Author thumbnail button.
@test_steps: 

^To test the "Manage" button functionality
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Manage button that is appeared project thumbnail.

^To test the "Open" button functionality
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Open button that is appeared the project thumbnail.

^To test the "Author" button functionality
-Click on My Library after logging in your account
-Click on My Projects tab given in tab bar.
-Click on the Author button that is appeared the project thumbnail.

@test_data:
- NA
@result: Checking the functionality of Author thumbnail button.
 */
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
    })
    it('Click on Manage', () => {
        cy.wait(3000);
        cy.get('[class_name="tag"] > .float-right').click({force:true})
        cy.wait(3000);
        cy.get('[data-cy="managemodal"]').should('be.visible')
    })
    it('Click on Open Course', () => {
        cy.get('[data-cy="open_course"]').contains('Open').eq(0).click({ force: true })
    })
})