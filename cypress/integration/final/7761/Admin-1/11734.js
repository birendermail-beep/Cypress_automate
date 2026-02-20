/*
@author: Anirudh Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11734
@story_name: Sorting Course List
@path: final/Admin
@test_case_name: Sorting Course List.js
@description: 
@test_steps: 
^Manage- Courses- Sorting
-Click on Manage
-Select courses
-check sorting on course list

^Manage- Courses-Status- Sorting
-Click on Manage
-Select courses
-check sorting on Status

^Manage- Courses-License type- Sorting
-Click on Manage
-Select courses
-check sorting on License type

^Manage- Courses-vendor- Sorting
-Click on Manage
-Select courses
-check sorting on vendor


@test_data: n/a
@result: Sorting Course List will open.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Roster Testing', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.visitEducatorManage()
        AdminArea.administratorIns()
    })
    it("Sort Based on Course List", function () {
        cy.get('[data-cy="course_name_div"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="course_name"]').eq(0).click();
                cy.get('[data-cy="course_name"]').eq(0).click();
                cy.get('[data-cy="course_name_div"]').eq(0).invoke('text')
                    .then(text => {
                        const second = text;
                        expect(first).to.not.equal(second)
                    });
            });
    });
    it("Sort Based on Vendor", function () {
        cy.get('[data-cy="vendor_name"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="vendor_td"]').eq(0).click();
                cy.get('[data-cy="vendor_td"]').eq(0).click();
                cy.get('[data-cy="vendor_name"]').eq(0).invoke('text')
                    .then(text => {
                        const second = text;
                        expect(first).to.equal(second)
                    });
            });
    });
})