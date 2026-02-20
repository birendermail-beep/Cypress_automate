/*
    @author: Ankit Kumar
    @master_project_id: 2444
    @phase_id: NA
    @story_id: 11588
    @story_name: user_license
    @path: cypress\integration\final\Admin\user_license.js
    @test_case_name: user_license.js
    @description: It will login and test user license area.
    @test_steps: 
    
    ^Split view show
    - 1) Visit the website.
    - 2) click on edit mode
    - 3) The split view will open up
    
    ^User License permission save with org config
    - 1) Visit the website.
    - 2) Go to edit mode from action > edit
    - 3) Click on More option
    - 4) Click on user config
    - 5) User Config Modal will open
    - 6) Go To permission Option, You will see checkboxes for user permission
    - 7) Check Educator
    - 8) Click on save
    - 9) Reload Page & verify changes on reopening config

    @test_data:
    - N/A
    - check educator option

    @result: It will test test user license area.
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Sales Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbookOtherTab()
        AdminArea.visitInsideSales()
        AdminArea.salesInsPortal()
    })
    it('User License permission save with org config', () => {
        cy.get('[data-cy="more_drop"]').click()
        cy.get('[data-cy="user_config_opt"]').click()
        cy.wait(2000)
        cy.get('[data-cy="checbox_config"]').eq(4).click({force: true})
        cy.get('[data-cy="save_config_btn"]').click()
        cy.reload()
        cy.wait(2000)
        cy.get('[data-cy="more_drop"]').click()
        cy.get('[data-cy="user_config_opt"]').click()
        cy.wait(2000)
        cy.get('[data-cy="checbox_config"]').eq(4).click({force: true})
        cy.wait(2000)
        cy.get('[data-cy="checbox_config"]').eq(4).click({force: true})
        cy.get('[data-cy="save_config_btn"]').click()
    })

    it('Split View Checking', () => {
        cy.get('[data-cy="view_first"]').should('be.visible')
        cy.get('[data-cy="view_second"]').should('be.visible')
    })
})