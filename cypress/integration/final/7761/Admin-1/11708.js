/*
@author: Ankit Kumar
@master_project_id: 7761
@phase_id: 
@story_id: 11708
@story_name: Sorting List
@path: final/7761
@test_case_name: Sorting List.js
@description: 
@test_steps: 
^Sorting 1
1) Select Student Name
2) Sort by Ascending order

^Sorting 2 
1) Select Student Name
2) Sort by Decending order

^Sorting 3
1) Select course name
2) Sort by Ascending order"

^Sorting 4
1) Select course name
2) Sort by Decending order"

^Sorting 5
1) Select Instructor
2) Sort by Ascending order"

^Sorting 6
1) Select Instructor
2) Sort by Decending order"

^Sorting 7
1) Select Readiness
2) Sort by Ascending Order"

^Sorting 8
1) Select Readiness
2) Sort by Decending Order"

^Sorting 9
1) Select Start Date
2) Sort by Ascending order"

^Sorting 10
1) Select Start Date
2) Sort by Decending order"

^Sorting 11
1) Select Start Date
2) Sort by Ascending order"

^Sorting 12
1) Select Start Date
2) Sort by Decending order"

^Sorting 13
1) Select Estimated Time required
2) Sort by Ascending order"

^Sorting 14
1) Select Estimated Time required
2) Sort by Decending order"

^Sorting 15
1) Select last login
2)Sort by Ascending order"

^Sorting 16
1) Select last login
2)Sort by Decending order"

@test_data: n/a
@result: Sorting LIst will be open
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index'
describe('Admin Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        CreateArea.openLibrary()
        AdminArea.visitAdmin()
        AdminArea.setOrg()
        AdminArea.visitEducatorRoster()
        cy.wait(6000)
    })

    it("Sorting", function () {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=roster_email]').clear().type(data.auditor_email[2]);
        })
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy=roster_table]').should('be.visible')
        cy.get('[data-cy="stu_sort"]').eq(0).click()
    });

    it("Sorting On Student Name", function () {
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="stu_name_span"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="stu_sort"]').eq(0).click()
                cy.get('[data-cy="stu_name_span"]').eq(0).invoke('text')
                    .then(text => {
                        const second = text;
                        expect(first).to.not.equal(second)
                    });
            });
    });

    it("Sorting On Course Name", function () {
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="course_name"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="stu_sort"]').eq(0).click()
                cy.get('[data-cy="course_name"]').eq(0).invoke('text')
                    .then(text => {
                        const second = text;
                        expect(first).to.not.equal(second)
                    });
            });
    });

    it("Sorting On Instructor", function () {
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="ins_name"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="ins_head"]').eq(0).click();
                cy.get('[data-cy="ins_name"]').eq(0).invoke('text')
                    .then(text => {
                        const second = text;
                        expect(first).to.not.equal(second)
                    });
            });
    });

    it("Sorting On Readiness", function () {
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="percent_planner"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="readiness_head"]').eq(0).click();
                cy.get('[data-cy="percent_planner"]').eq(0).invoke('text')
                    .then(text => {
                        const second = text;
                        if (first == second) {
                            expect(first).to.equal(second)
                        } else {
                            expect(first).to.not.equal(second)
                        }
                    });
            });
    });

    it("Sorting On Start Time", function () {
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="start_time"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="strt_header"]').eq(0).click();
                cy.get('[data-cy="start_time"]').eq(0).invoke('text')
                    .then(text => {
                        const second = text;
                        expect(first).to.not.equal(second)
                    });
            });
    });

    it("Sorting On Estimated Time Required", function () {
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="time_req"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="strt_header"]').eq(0).click();
                cy.get('[data-cy="time_req"]').eq(0).invoke('text')
                    .then(text => {
                        const second = text;
                        expect(first).to.not.equal(second)
                    });
            });
    });

    it("Sorting On Last Login", function () {
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="last_login_time"]').eq(0).invoke('text')
            .then(text => {
                const first = text;
                cy.get('[data-cy="strt_header"]').eq(0).click();
                cy.get('[data-cy="last_login_time"]').eq(0).click()
            });
    });

})