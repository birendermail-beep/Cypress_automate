/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: NA
@story_id: 11703
@story_name: admin_search
@path: final/7761
@test_case_name: admin_search.js
@description: It will login and test admin search functionality.
@test_steps: 
^Search by name and e-mail
- 1) Click Search and then AdvanceSearch
- 2) Search by Entering Name and e-mail in search.
- 3) Click Search

^Search by Instructor's name
- 1) Click Search and then AdvanceSearch
- 2) Search by Entering Instructor's name.
- 3) Click Search

^Search by course name
- 1) Click Search and then AdvanceSearch
- 2) Search by course name.
- 3) Click Search

^Search by enrolled on
- 1) Click Search and then AdvanceSearch
- 2) Search by Enrolled on.
- 3) Click Search

^Search by the status of the course
- 1) Click Search and then AdvanceSearch
- 2) Search by Status.(Active, Archive, Disabled)
- 3) Click Search

@test_data:
- NA

@result: Admin search functionality.
 */
import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.setOrg()
        AdminArea.visitEducatorRoster()
        cy.wait(10000)
        })

        it("Search bar under Roster tab", function() {
            cy.fixture('global').then(data => {
                cy.get('[data-cy="roster_email"]').clear().type(data.auditor_email[2]);
            })
            cy.get('[data-cy="custom_btn"]').click()
            cy.get('[data-cy="roster_table"]').should('be.visible')
        });

        it("Search by Instructor's name", function() {
            cy.fixture('global').then(data => {
                cy.get('[data-cy="search_ins"]').clear().type(data.auditor_email[2]);
                cy.get('[data-cy="search_ins_find"]').click()
                cy.fixture('global').then(data => {
                cy.get('[data-cy="ins_list"]').select(data.auditor_email[2],{force:true})
                cy.wait(5000)
                cy.get('[data-cy="org_lst"]').select('04jW8',{force:true})
                cy.get('[data-cy="sec_lst"]').select('06i1y',{force:true})
                cy.get('[data-cy="status_lst"]').select('1',{force:true})
                })
            })
            cy.get('[data-cy="custom_btn"]').click()
            cy.get('[data-cy="notice"]').should('be.visible')
        });

        it("Search by course name", function() {
            cy.fixture('global').then(data => {
                cy.get('[data-cy="org_lst"]').select('04jW8',{force:true})
            })
            cy.get('[data-cy="custom_btn"]').click()
            cy.get('[data-cy="roster_table"]').should('be.visible')
        });

        it("Search by status", function() {
            cy.fixture('global').then(data => {
                cy.get('[data-cy="status_lst"]').select('1',{force:true})
            })
            cy.get('[data-cy="custom_btn"]').click()
            cy.get('[data-cy="roster_table"]').should('be.visible')
        });

        it("Search by enrolled", function() {
            cy.fixture('global').then(data => {
                cy.get('[data-cy="st_dt"]').type(data.content_lab.start)
            })
            cy.get('[data-cy="custom_btn"]').click()
            cy.get('[data-cy="roster_table"]').should('be.visible')
        });
    });