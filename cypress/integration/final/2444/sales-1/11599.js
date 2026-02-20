/*
@author: Anirudh Pratap
@master_project_id: 2444
@phase_id: 10701
@story_id: 11599
@story_name: Account Managers Leaderboard
@path: final/Admin
@test_case_name: Account Managers Leaderboard.js
@description: 
@test_steps: 
^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to enrollments tab
-click on sections created value
-it will open list of sections created in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Summary Tab
-click on Total Contacts row
-it will open list of Total Contacts in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Summary Tab
-click on revenue tickler row
-it will open list of Total Contacts in whuch atleast one checkbox is checked in revenue tickler in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Summary Tab
-click on reference tickler row
-it will open list of Total Contacts in whuch atleast one checkbox is checked in reference tickler in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Summary Tab
-click on communication tickler row
-it will open list of Total Contacts in whuch atleast one checkbox is checked in communication tickler in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Summary Tab
-click on product tickler row
-it will open list of Total Contacts in whuch atleast one checkbox is checked in product tickler in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Summary Tab
-click on Enrolled Instructors row
-it will open list of Total Contacts of Enrolled Instructors in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Enrollments Tab
-click on Enrolled Instructors row
-it will open list of Total Contacts of Enrolled Instructors in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Enrollments Tab
-click on Sections Created row
-it will open list of Total sections created in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Enrollments Tab
-click on Instructors With section row
-it will open list of TotalInstructors With section in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Enrollments Tab
-click on Instructors Without section row
-it will open list of Total Instructors Without section in a new window

^Account Managers Leaderboard
-https://www.jigyaasa.info/admin/inside_sales/account_managers_leaderboard.php
-Leaderboard will open up
-Go to Enrollments Tab
-click on Sections With Students row
-it will open list of Total Sections With Students in a new window

@test_data: None

@result: Email Details from Gmail, Comments will be shown in table.
*/
import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Sales Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbookOtherTab()
        AdminArea.visitInsideSalesReport()
    })
    it('Sales LeaderBoard', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="leader_table"]').should('be.visible')
    })

    it('Open lists of sections created in a new window', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="enroll_tab"]').click()
        cy.get('[data-cy="enroll_list_table"]').should('be.visible')
    })

    it('List of contacts should open in new tab', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="summary_tab"]').click()
        cy.get('[data-cy="total_contact"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    })

    it('List of Revenue should open in new tab', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="summary_tab"]').click()
        cy.get('[data-cy="revenue_table_sort"]').dblclick({ force: true })
        cy.get('[data-cy="revenue_ticker"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sale_list"]').should('be.visible')
    })

    it('Reference Tickler', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="summary_tab"]').click()
        cy.get('[data-cy="reference_table_sort"]').dblclick()
        cy.get('[data-cy="reference_ticker"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sale_list"]').should('be.visible')
    })

    it('Communication Tickler', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="summary_tab"]').click()
        cy.get('[data-cy="communication_table_sort"]').dblclick()
        cy.get('[data-cy="communication_ticker"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sale_list"]').should('be.visible')
    })

    it('Product Ticker', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="summary_tab"]').click()
        cy.get('[ data-cy="product_table_sort"]').dblclick()
        cy.get('[data-cy="product_ticker"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sale_list"]').should('be.visible')
    })

    it('Enrolled Instructors', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="summary_tab"]').click()
        cy.get('[data-cy="enroll_table_sort"]').dblclick()
        cy.get('[data-cy="enroll_instructor"]').eq(0).click()
    })

    it('Sections Created', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="enroll_tab"]').click()
        cy.get('[data-cy="section_created"]').dblclick()
        cy.get('[data-cy="section_create_td"]').eq(0).click()
    })

    it('Instructor with Section', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="enroll_tab"]').click()
        cy.get('[data-cy=enroll_list_table] > thead > tr > [data-cy=ins_with_label] > .mendatory_label').dblclick()
        cy.get('[data-cy="ins_with_td"]').eq(0).click()
    })

    it('Instructor without Section', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="enroll_tab"]').click()
        cy.wait(6000);
        cy.get('[data-cy=enroll_list_table] > thead > tr > [data-cy=ins_without_label] > .mendatory_label').dblclick()
        cy.get('[data-cy="ins_without_td"]').eq(0).click()
    })

    it('Section with Student', () => {
        AdminArea.salesLeaderboard()
        cy.get('[data-cy="enroll_tab"]').click()
        cy.get('[data-cy=enroll_list_table] > thead > tr > [data-cy=sec_with_stu_created] > .mendatory_label').dblclick()
        cy.get('[data-cy="section_stu_td"]').eq(0).click()
    })

    it('Checklist Report', () => {
        cy.get('[data-cy="kpi_report"]').click()
        cy.get('[data-cy="checklist_report"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="check_list_contact"]').eq(0).click()
    })
})