/*
@author: Ankit Kumar
@master_project_id: 2444
@phase_id: 10490,10701
@story_id: 11597
@story_name: Account Managers Dashboard
@path: final/Admin
@test_case_name: Account Managers Dashboard.js
@description: 
@test_steps: 
^Account Managers Dashboard
-Visit https://www.jigyaasa.info/admin/account_managers_dashboard.php
-Dashboard for particuar personwill open up with contacts & orgs details

^Account Managers Dashboard
-Visit https://www.jigyaasa.info/admin/account_managers_dashboard.php
-Dashboard for particuar personwill open up with contacts & orgs details
-Select any other person, that person's details will open up

^Account Managers Dashboard
-Visit https://www.jigyaasa.info/admin/account_managers_dashboard.php
-Dashboard for particuar personwill open up with contacts & orgs details
-Select any other person, that person's details will open up
-Click on My Orgs Tab
-All the orgs will be listed 
-Click on any org 
-Details for that Org will Open Up

^Account Managers Dashboard
-Visit https://www.jigyaasa.info/admin/account_managers_dashboard.php
-Dashboard for particuar personwill open up with contacts & orgs details
-Select any other person, that person's details will open up
-Click on My Contacts Tab
-All contacts according to Stages will be listed
-Click on S3 contacts
-List of S3 contacts will Open Up

@test_data: None

@result: Email Details from Gmail, Comments will be shown in table.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Inside sales, Account Manager Dashboard for Person', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            cy.get('[data-cy="kpi_report"]').click()
            cy.visit(data.url + '/admin/inside_sales/account_managers_dashboard.php')
        })
    })
    it('Inside sales, Account Manager Dashboard for Person', function() {
        cy.get('[data-cy="account_manager_select"]').select('03pFG', { force: true })
    })

    it('Inside sales, Account Manager Dashboard', function() {
    })
    it('Inside sales, Account Manager Dashboard  for ORG', function() {
        cy.get('[data-cy="account_manager_select"]').select('03pFG', { force: true })
        cy.get('[data-cy="org_main_drop"]').click()
        cy.get('[data-org-code="02l6W"]').click()
    })
    it('Inside sales, Account Manager Dashboard for S3', function() {
        cy.get('[data-cy="account_manager_select"]').select('03pFG', { force: true })
        cy.get('[data-cy=contact_info_option]').click()
        cy.get('[ref="?primary_contact[]=03pFG&stage[]=3&team_search=&func=&advance_search=inside_sale&search_tab=Inside+Sale"]').click()
    })
});