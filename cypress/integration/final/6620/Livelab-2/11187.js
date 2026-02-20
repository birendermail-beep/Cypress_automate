/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11187
    @story_name: Edit Device
    @path: cypress\integration\final\LiveLab
    @test_case_name: Edit Device
    @description: It will login and check the edit device functionality in Vmadmin.
    @test_steps:

    ^Click on edit options from actions columns against each row.
    - 1) Go to settings icon in actions columns of listing page. 
    - 2) Click on edit options
    - 3) Page will redirec to new page with already filled data
    - 4) Update the some fields values for example remove device name
    - 5) Click on submit button
    
    ^Click on edit options from actions columns against each row.
    - 1) Go to settings icon in actions columns of listing page. 
    - 2) Click on edit options
    - 3) Page will redirec to new page with already filled data
    - 4) Update the some fields values for example remove device name
    - 5) Click on submit button

    @test_data:
    - 1) device name = """" (empty) 2) Leave all fields as it is.
    - 1) device image = bs16_test 2) provider = clsvCloudLabs 3) Show Ip = 1 4) Assigned course = select another any courses  5) Click on submit button

    @result: Edit device in Vmadmin.
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
        LiveLabArea.vmEditDevice()
    })
    it('Remove device name', () => {
        cy.get('[data-cy=device_name_txt]').should('be.visible')
    })
    it('Alter some fields', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="device_name_txt"]').clear().type(data.livelab[5])
        })
        cy.get('[data-cy="submit_device_btn"]').should('be.visible')
    })
})