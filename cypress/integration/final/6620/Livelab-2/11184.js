/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11184
    @story_name: Add Device
    @path: cypress\integration\final\LiveLab
    @test_case_name: Add Device
    @description: It will login and check the adding device functionality in Vmadmin.
    @test_steps:

    ^Do leave all fields empty and click the submit button
    - 1) Click on actions button and click on add new device option
    - 2) left the all field empty and click on submit button
    
    ^Fill the device name and left blank all fields
    - 1) Click on actions button and click on add new device option
    - 2) Fill the device name field and left the all fields blank
    - 3) Click on submit button
    
    ^Fill all the required fields
    - 1) Click on actions button and click on add new device option
    - 2) Fill device name, provider, device image, ins type, username, password, port, server, config, animation

    @test_data:
    - All fields should be blank
    - device name = bs16_testing1
    - device name = bs16_testing1, provider = clsCloudLabs, device image = bs16_testing1, username = Administrator, password = uC@123456, server =s2.ucertify.com, animation = Microsoft Window Server 2016 (64 bit), vcenter= s0

    @result: Added device in Vmadmin.
 */
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        LiveLabArea.vmAddDevice()
        cy.wait(10000);
    })
    it('Left the all field empty and click on submit button', () => {
        cy.get('[data-cy="submit_device_btn"]').click()
        cy.get('[data-cy="help_device_msg"]').should('be.visible')
    })

    it('Fill the device name field and left the all fields blank', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="device_name_txt"]').clear().type(data.livelab[5])
        })
        cy.get('[data-cy="submit_device_btn"]').click()
        cy.get('[data-cy="vcenter_server"]').should('be.visible')
    })

    it('Fill device name, provider, device image, ins type, username, password, port, server, config, animation.', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="device_name_txt"]').clear().type(data.livelab[5])
            cy.get('[data-cy="provider_select"]').select(data.livelab[6], { force: true })
            cy.get('[data-cy="device_img"]').clear().type(data.livelab[5])
            cy.get('[data-cy="user_name"]').clear().type(data.livelab[7])
            cy.get('[data-cy="pass_word"]').clear().type(data.livelab[8])
            cy.get('[data-cy="animation_select"]').select(data.livelab[6], { force: true })
            cy.get('[data-cy="vcenter_serv"]').select(data.livelab[9], { force: true })
        })
        cy.get('[data-cy="submit_device_btn"]').should('be.visible')
    })
})