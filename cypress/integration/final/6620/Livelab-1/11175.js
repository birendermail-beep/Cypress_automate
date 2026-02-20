/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11175
    @story_name: Search Machine
    @path: cypress\integration\final\LiveLab
    @test_case_name: Search Machine
    @description: It will login and test machine search functionality.
    @test_steps: 
    ^Click on search button
    - 1) Click on search button
    - 2) Click on advanced search button
    - 3) Click on the search button
    
    ^Enter the valid machine name
    - 1) Enter the machine name
    - 2) Hit the enter button or click on search icon
    
    ^Enter the invalid machine name or blank
    - 1) Enter the machine name
    - 2) Hit the enter button or click search icon
    
    ^Enter the valid multiple machine name
    - 1) Enter the comma seperated machine
    - 2) Hit the enter button or click on search icon
    
    ^Enter the valid and invalid machine name
    - 1) Enter the comma seperated machine
    - 2) Hit the enter button or click on search icon
    
    ^Select the report type as Backup is older than boottime
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Backup is older than boottime
    - 4) Click on the search button
    
    ^Select the report type as Machine exist in system but not in database
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine exist in the system but not in the database
    - 4) Click on the search button
    
    ^Select the report type as Machine exist in database but not in system
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine exist in the database but not in the system
    - 4) Click on the search button
    
    ^Select the report type as the Machine is not freezon
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine is not frozon
    - 4) Click on the search button
    
    ^Select the report type as Machine is not optimized
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine is not optimized
    - 4) Click on the search button
    
    ^Select the report type as Machine without blueprint
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine is without a blueprint
    - 4) Click on the search button
    
    ^Select the report type as Machine exist in the system but not in the database, Select the Machine list type as Base machines
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine exist in the system but not in the database
    - 4) Select the Machine list type as Base Machines
    - 5) Click on the search button
    
    ^Select the report type as Machine exist in the database but not in the system, Select the Machine list type as Base machines
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine exist in the database but not in the system
    - 4) Select the Machine list type as Base Machines
    - 5) Click on the search button
    
    ^Select the report type as Machine not freeze, Select the Machine list type as Base machines
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine, not frozon
    - 4) Select the Machine list type as Base Machines
    - 5) Click on the search button
    
    ^Select the report type as Machine not Optimized, Select the Machine list type as Base machines
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine not optmized
    - 4) Select the Machine list type as Base Machines
    - 5) Click on the search button
    
    ^Select the report type as Machine without a blueprint, Select the Machine list type as Base machines
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select report type as Machine without a blueprint
    - 4) Select the Machine list type as Base Machines
    - 5) Click on the search button
    
    ^Select the Maintainence mode as enabled
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select  Maintainence mode as enabled
    - 5) Click on the search button
    
    ^Select the Maintainence mode as disabled
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select  Maintainence mode as disabled
    - 5) Click on the search button
    
    ^Select the CRN
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select  CRN
    - 5) Click on the search button
    
    ^Select the Course
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select  Course
    - 5) Click on the search button
    
    ^Select the Host
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select  Host
    - 5) Click on the search button
    
    ^Select the Os
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select Os
    - 5) Click on the search button
    
    ^Select the status as powered on
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select status as poweredon
    - 5) Click on the search button
    
    ^Select the status as powered off
    - 1) Click on search button
    - 2) Click on advanced search
    - 3) Select status poweredoff
    - 4) Click on the search button

    @test_data:
    - advanced search.
    - bs16.
    - bs16, "".
    - bs16, or71.
    - bs16,or71,nd134.
    - report type= backup is older than boottime.
    - report type=machine exist in system but not in database.
    - report type= machine exist in database but not in system.
    - report type= Machine is not frozen.
    - report type= machine is not optimized.
    - report type= machine without blueprint.
    - report type= machine exist in system but not in database,machine list type = base machines.
    - report type= machine exist in the database but not in system,machine list type = base machines.
    - report type= Machine not frozen,machine list type = base machines.
    - report type= Machine is not optimized,machine list type = base machines.
    - report type= Machine without blueprint,machine list type = base machines.
    - Maintenance Status = Enabled.
    - Maintenance Status = Disabled.
    - crn =102-400-complete
    - course = LPIC-1 Exam 1 - Linux Server Professional Certification V4.0  (Course & Labs) [101-400-complete],Windows Powershell [win-powershell-complete]
    - host = s1.ucertify.com,s2.ucertify.com,s3.ucertify.com
    - OS = CentOS 7 (64-bit), Microsoft Windows 10 (64-bit)
    - status = poweredon
    - status = poweredoff

    @result: Vmadmin machine search functionality.
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
    it('Open Advance Search and Click on Search', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Enter the valid machine name', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        cy.get('[data-cy="search_txt_btn"]').click()
        cy.wait(2000)
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Enter the invalid machine name or blank', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0] + "1")
        })
        cy.get('[data-cy="search_txt_btn"]').click()
        cy.wait(2000)
        cy.get('[data-cy="machine_list"]').should('not.be.visible')
    })
    it('Enter the valid multiple machine name', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0] + "," + data.livelab[1])
        })
        cy.get('[data-cy="search_txt_btn"]').click()
        cy.wait(2000)
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Enter the valid and invalid machine name', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0] + "1,1" + data.livelab[1])
        })
        cy.get('[data-cy="search_txt_btn"]').click()
        cy.wait(2000)
        cy.get('[data-cy="machine_list"]').should('not.be.visible')
    })
    it('Searching for backup is older than bootime', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="ref_report_type_select"]').select('1', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for machine exist in system but not in database', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="ref_report_type_select"]').select('2', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for machine exist in database but not in system.', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="ref_report_type_select"]').select('3', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for Machine is not freeze', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="ref_report_type_select"]').select('4', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for Machine is not optimized', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="ref_report_type_select"]').select('5', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for Machine without blueprint', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="ref_report_type_select"]').select('6', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for Maintaince mode enabled', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="maintainence_status_select"]').select('1', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for maintaince mode disabled', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="maintainence_status_select"]').select('0', { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for CRN', () => {
        LiveLabArea.advanceSearch()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="ref_crn_code_select"]').select(data.livelab[2], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for course', () => {
        LiveLabArea.advanceSearch()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="ref_course_code_select"]').select(data.livelab[2], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for host', () => {
        LiveLabArea.advanceSearch()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="ref_host_select"]').select(data.livelab[4], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for Os', () => {
        LiveLabArea.advanceSearch()
        cy.fixture('global').then(data => {
            cy.get('#ref_os').select(data.livelab[3], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it('Searching for powered on machine', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="ref_power_status_select"]').select("1", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
    it.only('Searching for powered off machine', () => {
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="ref_power_status_select"]').select("1", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="machine_list"]').should('be.visible')
    })
})