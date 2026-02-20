/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10660
@story_id: 
@story_name: Publish Content
@path: final/Create
@test_case_name: Publish Content.js
@description: 
@test_steps: 
^Publish the content.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> TODO List > To Be Published".
-Then click on"Table > Actions > Publish" link.
-Note: Only owner can publish the contents.

@test_data: n/a
@result: Content published successfully.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('create Area', function() {
    it('Publish', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/project/?author_course=1&func=load_course&course=tech-support-2020')
            cy.get('.settingup').click()
            cy.get(':nth-child(5) > .btn').click()
            cy.get('#todo_advance_search').click()
            cy.get('#custom_search').click()
        })
    })
})