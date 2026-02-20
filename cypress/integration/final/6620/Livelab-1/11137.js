/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11137
    @story_name: Datastore List
    @path: final/LiveLab
    @test_case_name: Datastore List
    @description: It will login and check the datastores table coming in catalogue.
    @test_steps: 
    
    ^To load the datastore list
    - 1) Click on catalogue tab. It will show the dropdown options
    - 2) Click on datastores
    
    ^Open the modal and click the search button
    - 1) Click on the search button. It will show the advanced search dropdown option. Click on it.
    - 2) It will show the all datastore list
    
    ^Search the datastore for host selected
    - 1) Click on the search button. It will show the advanced search dropdown option. Click on it.
    - 2) Select the host
    - 3) Click on the search button of the modal
    
    ^Export the datastore list as Xls
    - 1) Click on the first checkbox present in the header of the table at the starting of the table
    - 2) Go to the export button.
    - 3) Click on it. It will show the two options: Export as XLS, Export As CSV.
    - 4) Click on export as XLS.

    ^Export the datastore list as CSV
    - 1) Click on the first checkbox present in the header of the table at the starting of the table
    - 2) Go to the export button.
    - 3) Click on it. It will show the two options: Export as XLS, Export As CSV.
    - 4) Click on export as CSV. 

    @test_data:
    -tab = datastores
    -advanced search
    -host = s6.ucetify.com
    -export type= xls
    -export type = csv

    @result: It will test whole datastores area in catalogue tab.
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
        LiveLabArea.vmDatastore()
        cy.wait(10000)
    })
    it('To load the datastore list', () => {
        cy.wait(5000);
        cy.get('[data-cy="srch_btn"]').click()
        cy.wait(5000);
        cy.get('[data-cy="datastore_tbl"]').should('be.visible')
    })

    it('To load the datastore list', () => {
        cy.fixture('global').then(data => {
            cy.wait(5000);
            cy.get('[data-cy="host_select"]').select("host-36", { force: true })
            cy.wait(5000);
            cy.get('[data-cy="srch_btn"]').click()
            cy.wait(5000);
            cy.get('[data-cy="host_name"]').should('contain', 'host-36')
            cy.wait(5000);
            cy.get('[data-cy="datastore_tbl"]').should('be.visible')
        })
    })
    it('Export the datastore list as xls', () => {
        cy.wait(5000);
        cy.get('[data-cy="srch_btn"]').click()
        cy.wait(5000);
        cy.get('[data-cy="check_box"]').eq(0).click({ force: true })
        cy.wait(5000);
        cy.get('[data-cy=export_btn]').click()
        cy.wait(5000);
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Export the datastore list as csv', () => {
        cy.get('[data-cy="srch_btn"]').click()
        cy.get('[data-cy="check_box"]').eq(0).click({ force: true })
        cy.get('[data-cy=export_btn]').click()
        cy.get('[data-cy="csv_export"]').click()
    })
})