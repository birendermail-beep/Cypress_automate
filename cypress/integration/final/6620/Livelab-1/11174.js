/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11174
    @story_name: VM Admin Login
    @path: final/6620
    @test_case_name: VM Admin Login
    @description: It will login and check the dashboard is avaiable.
    @test_steps: 

    ^Enter a valid username & password
    - 1. Enter valid username.
    - 2. Enter valid password
    - 3. Click on the login button

    @test_data:
    - N/A

    @result: Vmadmin Dashboard will open.
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
    it('Dashboard of Vmadmin Area', () => {
        cy.get('[data-cy="device_tab"]').should('be.visible')
    })
})