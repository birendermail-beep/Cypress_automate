/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11735
@story_name: Sorting Report
@path: final/7761
@test_case_name: Sorting Report.js
@description: 
@test_steps: 
^Manage- section- class name/section key- Sorting
-Click on Manage
-Select section
-check sorting on section name

^Manage- section- course name- Sorting
-Click on Manage
-Select section
-check sorting on Course name

^Manage- section- Instructor name- Sorting
-Click on Manage
-Select section
-check sorting on Instructor e-mail

^Manage- section- Created Date Sorting
-Click on Manage
-Select section
-check sorting on created date

^Manage- section- Starts OnSorting
-Click on Manage
-Select section
-check sorting on Starts On

^Manage- section- Ends On Sorting
-Click on Manage
-Select section
-check sorting on Ends On

^Manage- section- Enrollments Sorting
-Click on Manage
-Select section
-check sorting on Enrollments

@test_data: n/a
@result: Admin area sorting report will be shown.
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
        AdminArea.administratorSection()
    })
    
    it("Sort based on class name/ section key.", function() {
        
        cy.get('[data-cy="key_type"]').eq(0).invoke('text')
        .then(text => {
            const first = text;
            cy.get('[data-cy="class_name_key"]').eq(0).click();
            cy.get('[data-cy="class_name_key"]').eq(0).click();
            cy.get('[data-cy="key_type"]').eq(0).invoke('text')
            .then(text => {
            const second = text;
            expect(first).to.not.equal(second)
            });
        });
    });

    it("Sort based on course name.", function() {
        cy.get('[data-cy="course_name_tooltip"]').eq(0).invoke('text')
    });

    it("Sort based on Instructor.", function() {
        cy.get('[data-cy="ins_email_td"]').eq(0).invoke('text')
        .then(text => {
            const first = text;
            cy.get('[data-cy="ins_td"]').eq(0).click();
            cy.get('[data-cy="ins_td"]').eq(0).click();
            cy.get('[data-cy="ins_email_td"').eq(0).invoke('text')
            .then(text => {
            const second = text;
            if (second == text) {
                expect(first).to.equal(second)
            } else {
                expect(first).to.not.equal(second)
            }
            });
        });
    });

    it("Sort based on Created On.", function() {
        cy.get('[data-cy="created_on_data"]').eq(0).invoke('text')
        .then(text => {
            const first = text;
            cy.get('[data-cy="created_td"]').eq(0).click();
            cy.get('[data-cy="created_td"]').eq(0).click();
            cy.get('[data-cy="created_on_data"]').eq(0).invoke('text')
            .then(text => {
            const second = text;
            expect(first).to.not.equal(second)
            });
        });
    });
    it("Sort based on Starts On.", function() {
        cy.get('[data-cy="start_date_row"]').eq(0).invoke('text')
        .then(text => {
            const first = text;
            cy.get('[data-cy="starts_td"]').eq(0).click({force: true});
            cy.get('[data-cy="starts_td"]').eq(0).click({force: true});
            cy.get('[data-cy="start_date_row"]').eq(0).invoke('text')
            .then(text => {
            const second = text;
            expect(first).to.not.equal(second)
            });
        });
    });
    it("Sort based on Ends On.", function() {
        cy.get('[data-cy="end_on_row"]').eq(0).invoke('text')
        .then(text => {
            const first = text;
            cy.get('[data-cy="ends_td"]').eq(0).click();
            cy.get('[data-cy="ends_td"]').eq(0).click();
            cy.get('[data-cy="end_on_row"]').eq(0).invoke('text')
            .then(text => {
            const second = text;
            expect(first).to.not.equal(second)
            });
        });
    });
    
})