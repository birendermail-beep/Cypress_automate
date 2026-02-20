/*
    @author: Ankit Kumar
    @master_project_id: 2444
    @phase_id: NA
    @story_id: 11587
    @story_name: Instructor Portal Advance Search
    @path: final\Admin\
    @test_case_name: Instructor Portal Advance Search
    @description: It will login and test account managers dashboard.
    @test_steps: 
    
    ^Show missed contacts alongwith next contact date
    - 1) Goto Website
    - 2) Click on my list and select advance search
    - 3) select primary contact and next contact date then search"
    
    ^Account Managers Dashboard
    - 1) Visit the Website
    - 2) Dashboard for particuar personwill open up with contacts & orgs details
    
    ^Account Managers Dashboard
    - 1) Visit the website
    - 2) Dashboard for particuar personwill open up with contacts & orgs details
    - 3) Select any other person, that person's details will open up"
    
    ^Account Managers Dashboard
    - 1) Visit the website.
    - 2) Dashboard for particuar personwill open up with contacts & orgs details
    - 3) Select any other person, that person's details will open up
    - 4) Click on My Orgs Tab
    - 5) All the orgs will be listed 
    - 6) Click on any org 
    - 7) Details for that Org will Open Up
    
    ^Account Managers Dashboard
    - 1) Visit the website.
    - 2) Dashboard for particuar personwill open up with contacts & orgs details
    - 3) Select any other person, that person's details will open up
    - 4) Click on My Contacts Tab
    - 5) All contacts according to Stages will be listed
    - 6) Click on S3 contacts
    - 7) List of S3 contacts will Open Up
    
    ^all orgs contact not showing
    - 1) Visit the website.
    - 2) click on my orgs
    - 3) click on broward college
    - 4) Click on all contacts
    - 5) You will see list of all contacts of broward no matter they logged in or not

    @test_data:
    - primary contact: Shivangani Shukla next contact date : 20-Aug-2019
    - None
    - Select akbar kamal from dropdown Select akbar kamal from dropdown
    - Click on Broward College Select akbar kamal from dropdown
    - Click on S3 Contacts"
    - N/a

    @result: It will test account managers dashboard.
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
    })
    it('Account Managers Dashboard', () => {
        AdminArea.salesAccountManager()
        cy.get('[data-cy="account_manager_select"]').select('0488j', { force: true })
        cy.get('[data-cy="org_main_drop"]').click()
        cy.get('[data-cy="org_list_option"]').eq(0).click()
        cy.wait(6000)
        cy.get('[data-cy=sale_list]').should('be.visible')
        cy.get('[data-cy="contact_info_option"]').click()
        cy.get('[data-cy="stage_nbr"]').eq(0).click()
        cy.wait(6000)
        const a = Math.floor(Math.random() * 5);
        cy.get('[data-cy="stage_number_table"]').eq(a).should('have.text', 'S0')
    })

    it('Account Managers Dashboard Open Particular College', () => {
        AdminArea.salesAccountManager()
        cy.get('[data-cy="account_manager_select"]').select('03pFG', { force: true })
        cy.get('[data-cy="org_main_drop"]').click()
        cy.get('[data-org-code="02l6W"]').eq(0).click()
        cy.wait(6000)
        cy.get('[data-cy=sale_list]').should('be.visible')
    })

    it('Advance Search Check', () => {
        cy.get('[data-cy="list_drop"]').click()
        cy.get('[data-cy="advance_search"]').click()
        cy.wait(5000)
        cy.get('[data-cy="primary_contact_detail"]').select('04hbA', { force: true })
        cy.get('[data-cy="date_sdt_adv_srch"]').type('14-Aug-19')
        cy.get('[data-cy="submit_btn_tab"]').click()
        cy.wait(6000)
        cy.get('[data-cy=sale_list]').should('be.visible')
    })
})