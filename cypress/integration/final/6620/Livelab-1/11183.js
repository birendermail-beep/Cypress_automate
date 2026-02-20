/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11183
    @story_name: VM Admin Advance Search Export
    @path: final\LiveLab\
    @test_case_name: VM Admin Advance Search Export
    @description: It will login and check the Export Features in Vmadmin.
    @test_steps:

    ^Click on the first checkbox and then click on the export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Click on first checkbox left top header of the table
    - 4) Click on export button
    - 5) Select Export as XLS
    
    ^Click on the first checkbox and then click on the export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Click on search button of the modal
    - 3) Click on first checkbox left top header of the table
    - 4) Click on export button
    - 5) Select Export as CSV
    
    ^Click on the first checkbox and then click on the export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the report type as Backup is older than bootimte
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Click on the first checkbox and then click on the export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the report type as Machine exist in system but not in database
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Click on the first checkbox and then click on the export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the report type as Machine exist in database but not in system
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Click on the first checkbox and then click on the export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the report type as Machine not frozon
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Click on the first checkbox and then click on the export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the report type as Machine is not optmized
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Click on the first checkbox and then click on the export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the report type as Machine without blueprint
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Make sure you have searched the machines for the maintainence mode disabled. Click on first checkbox and then click on export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the Maintainence mode as Enabled
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Make sure you have searched the machines for the paricular crn. Click on first checkbox and then click on export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the Maintainence mode as disabled
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Make sure you have searched the machines for the paricular course. Click on first checkbox and then click on export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the crn for example Pearson-PHP-MYSQL-complete
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Make sure you have searched the machines for the paricular host. Click on first checkbox and then click on export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the course for example A Practical Guide to Computer Forensics Investigations [comp-forensic]
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Make sure you have searched the machines for the paricular os. Click on first checkbox and then click on export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the host for example s1.ucertify.com
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Make sure you have searched the machines for the powered on. Click on first checkbox and then click on export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the os for example CentOS 7 (64-bit)
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Make sure you have searched the machines for the powered off. Click on first checkbox and then click on export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the status as powered on
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS
    
    ^Make sure you have searched the machines for the powered off. Click on first checkbox and then click on export button
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select the status as powered off
    - 4) Click on search button of the modal
    - 5) Click on first checkbox left top header of the table
    - 6) Click on export button
    - 7) Select Export as XlS


    @test_data:
    - 1) device name = """" (empty) 2) Leave all fields as it is.
    - 1) device image = bs16_test 2) provider = clsvCloudLabs 3) Show Ip = 1 4) Assigned course = select another any courses  5) Click on submit button

    @result: Export Features in Vmadmin.
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
    })
    it('Exporting for all machines as csv', () => {
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="csv_export"]').click()
    })
    it('Exporting for all machines as xls', () => {
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting backup is older than boottime', () => {
        cy.get('[data-cy="ref_report_type_select"]').select('1', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machine exist in system but not in database', () => {
        cy.get('[data-cy="ref_report_type_select"]').select('2', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machine exist in database but not in system', () => {
        cy.get('[data-cy="ref_report_type_select"]').select('3', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machine not freezed', () => {
        cy.get('[data-cy="ref_report_type_select"]').select('4', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machine not optimized', () => {
        cy.get('[data-cy="ref_report_type_select"]').select('5', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machine without blueprint', () => {
        cy.get('[data-cy="ref_report_type_select"]').select('6', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting maintainence enabled machines', () => {
        cy.get('[data-cy="maintainence_status_select"]').select('1', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]')
    })
    it('Exporting maintainence disabled machines', () => {
        cy.get('[data-cy="maintainence_status_select"]').select('0', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machines for crn selected', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="ref_crn_code_select"]').select(data.livelab[2], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machines for course selected', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="ref_course_code_select"]').select(data.livelab[2], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machines for host selected', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="ref_host_select"]').select('d1.ucertify.com', { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Exporting machines for os selected', () => {
        cy.fixture('global').then(data => {
            cy.get('#ref_os').select('1', { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it.only('Exporting powered on machines', () => {
        cy.get('[data-cy="ref_power_status_select"]').select("1", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it.only('Exporting powered off machines', () => {
        cy.get('[data-cy="ref_power_status_select"]').select("1", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
        cy.get('[data-cy="check_all_box"]').eq(0).click({ force: true })
        cy.get('[data-cy="export_btn"]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
})