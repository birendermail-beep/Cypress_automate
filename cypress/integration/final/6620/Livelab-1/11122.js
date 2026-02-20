/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10531
@story_id: 11122
@story_name: Add/Edit Device
@path: final/LiveLab
@test_case_name: Add/Edit Device.js
@decription: Edit Device details in db for machine not in db but in vcenter
@test_steps:
^Add/ Edit Device
-Search the device which is not in db. 
-Go to action option of the device 
-Click edit. It will redirect to new edit page

@test_data: 
device = bs162

@result: Device details added/updated messsage will be shown
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
    })
    it('Remove device name', () => {
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[10])
        })
        cy.get('[data-cy="action_machine"]').eq(0).click({ force: true })
        cy.get('[data-cy="machine_edit"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy=submit_device_btn]').should('be.visible')
    })
    it('Alter some fields', () => {
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[10])
        })
        cy.get('[data-cy="action_machine"]').eq(0).click({ force: true })
        cy.get('[data-cy="machine_edit"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.fixture('global').then(data => {
            cy.get('[data-cy="device_name_txt"]').clear().type(data.livelab[5])
        })
        cy.get('[data-cy="submit_device_btn"]').should('be.visible')
    })
})