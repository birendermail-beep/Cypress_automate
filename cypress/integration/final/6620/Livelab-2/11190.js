/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11190
    @story_name: Load Machine
    @path: cypress\integration\final\LiveLab
    @test_case_name: Load Machine
    @description: It will login and load machine in vmadmin area.
    @test_steps:

    ^First, check the checkbox for those machines which you want to load.
    - 1) Check the checkbox for any three machines.
    - 2) Click on the actions button beside the export button. 
    - 3) Their dropdown options will be shown.
    - 4) Click on Load Machines.
    - 5) A different new window will be opened for each individual machine.


    @test_data:
    - load machine for multiple checkboxes

    @result: Load machine in vmadmin area.
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('Live Lab Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
    })
    it('Loading multiple machines at a time', () => {
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        cy.get('[data-cy="search_txt_btn"]').click()
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="action_btn"]').click()
        cy.get('[data-cy="load_machine"]').click()
    })
})