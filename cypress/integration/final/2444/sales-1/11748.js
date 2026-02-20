/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: NA
@story_id: 11748
@story_name: Enroll student
@path: final\2444\
@test_case_name: Enroll student
@description: Enroll the student
@test_steps:
^Enroll the student
-visit the website
-login the site
-click on my library
-click on admin
-click Enroll
-select enroll the student and click next

@test_data:N/A
@result: Enroll the student
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index'
describe('Sales Area', () => {
    it('Enroll the student', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitMyLibrary();
        cy.get('[data-cy=admin_tab]').click({force:true})
        cy.get('[data-cy=enroll_link]').click()
        cy.get('#org_id').select('uCertify', { force: true })
        cy.get('#admin_student_type').click()
        cy.get('#admin_next_btn').click()
        cy.get('#instructor_list').select('Pete Gupta (pete@ucertify.com)', { force: true })
        cy.get('#instructor_course_list').select('70-412-complete-V1 - MCSA/MCSE-Configuring Advanced Windows Server 2012 R2 (Course&Lab) [028YJ]', { force: true })
        cy.get('#section_list').select('Base', { force: true })
        cy.get('#admin_next_btn').click()
        cy.get('#next_btn').click()
        cy.contains('Students will enroll automatically, you do not need to manually enroll the students').should('exist')
    })
})