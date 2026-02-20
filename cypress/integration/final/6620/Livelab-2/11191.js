/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11191
    @story_name: Powered On/Off
    @path: cypress\integration\final\LiveLab
    @test_case_name: Powered On/Off
    @description: It will login and test machine functionality.
    @test_steps: 
    ^First check the checkbox for those machines which you want to power on & 2) Make sure you have selected the powered off the machine only
    - 1) Check the checkbox for any three machines
    - 2) Click on the actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Power State -> On

    ^First check the checkbox for those machines which you want to backup & 2) Make sure you have selected the backup machine
    - 1) Check the checkbox for any two machines
    - 2) Click on the actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Backup

    @test_data:
    - the machine selected = VM-Akanksha
    - device = KMS_Server, nd13, m840

    @result: Testing of machine functionality.
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
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        cy.get('[data-cy="search_txt_btn"]').click()
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="action_btn"]').click()
    })
    it('Powered on the multiple machines', () => {
        cy.get('[data-cy="power_state"]').click()
        cy.get('[data-cy="machine_on"]').click()
        cy.get('[data-cy="confirmation_modal_on"]').should('be.visible')
    })
    it('Powered off the multiple machines', () => {
        cy.get('[data-cy="power_state"]').click()
        cy.get('[data-cy="machine_off"]').click()
        cy.get('[data-cy="confirmation_modal_on"]').should('be.visible')
    })
    it('Backup of the machine', () => {
        cy.get('[data-cy=backup_btn] > .dropdown-toggle').click()
        cy.wait(3000)
        cy.get('[data-cy=backup_btn]').click({ force: true });
        cy.get('[data-cy=backup_btn]').click({ force: true });
        cy.get('[data-cy=backup_btn] > .dropdown-menu > :nth-child(1) > .dropdown-item').click({ force: true });
    })
    it('To enable the maintainence mode', () => {
        cy.get('[data-cy="maintainence_mode"]').click()
        cy.get('[data-cy="machine_enable"]').click()
        cy.get('[data-cy="confirmation_modal_on"]').should('be.visible')
    })
    it('To disable the maintainence mode', () => {
        cy.get('[data-cy="maintainence_mode"]').click()
        cy.get('[data-cy="machine_disable"]').click()
        cy.get('[data-cy="confirmation_modal_on"]').should('be.visible')
    })
})