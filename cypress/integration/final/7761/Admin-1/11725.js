/*
@author: Anirudh Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name: Sorting Administrator List
@path: final/Admin
@test_case_name: Sorting Administrator List.js
@description: 
@test_steps: 
^To check sorting option on Administator emails
-Click on Manage
-Select Administrator
-check sorting option on Administrator list 

^To check permission Organisation can be sorted 
-Click on Manage
-Select Administrator
-check sorting option on Permission Org 

^Administrator Last login sorting 
-Click on Manage
-Select Administrator
-check sorting option on Last Login

@test_data: n/a
@result: Admin should be able to sort other Admin e-mails, sort on basis of Permission Org or  sort last login of Admin
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Roster Testing', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorAS()
    })
    it("Sorting option on Administrator emails", function() {
        cy.get('[data-cy="tooltip_email"]').eq(0).invoke('text')
        .then(text => {
            const first = text;
            cy.get('[data-cy="sort_admin"]').eq(0).click();
            cy.get('[data-cy="sort_admin"]').eq(0).click();
            cy.get('[data-cy="tooltip_email"]').eq(0).invoke('text')
            .then(text => {
            const second = text;
            expect(first).to.not.equal(second)
            });
        });
    });
    it("Sorting option on Organzation Permission", function() {
        cy.get('[data-cy="permission_txt"]').eq(0).invoke('text')
        .then(text => {
            const first = text;
            cy.get('[data-cy="sort_permission"]').eq(0).click();
            cy.get('[data-cy="sort_permission"]').eq(0).click();
            cy.get('[data-cy="permission_txt"]').eq(0).invoke('text')
            .then(text => {
            const second = text;
            expect(first).to.not.equal(second)
            });
        });
    });

    it("Sorting option on Last Login", function() {
        cy.get('[data-cy="last_date"]').eq(0).invoke('text')
        .then(text => {
            const first = text;
            cy.get('[data-cy="sort_last"]').eq(0).click();
            cy.get('[data-cy="sort_last"]').eq(0).click();
            cy.get('[data-cy="last_date"]').eq(0).invoke('text')
            .then(text => {
            const second = text;
            expect(first).to.not.equal(second)
            });
        });
    });
})