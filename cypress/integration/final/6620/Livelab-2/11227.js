/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11227
@story_name: Assessment Report
@path: final/LiveLab
@test_case_name: Assessment Report
@description: n/a
@test_steps:

^WGU Report
-Go to ucertify.com and login with testbot@ucertify.com
-Go to  URL:https://wgu.ucertify.com/custom/assessment_report.php

^wgu lti help
-Go to ucertify.com and login with testbot@ucertify.com
-Go to  URL:https://wgu.ucertify.com/educator/?func=ins_dashboard&u_course_code=03Hy5.05SOh
-click on design tab
-click on deeplinking
-click on lti help

@test_data: n/a
@result: assessment report will display available else no record found
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('live_lab area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[1])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('assessment_report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[1] + '/custom/assessment_report.php')
        })
    })
    it('Wgu Help', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[1] + '/educator/?func=ins_dashboard&u_course_code=03Hy5.05SOh')
            cy.get('[data-cy=educator_design]').click()
            cy.wait(10000)
            cy.get('.load_lti_help').click()
            cy.wait(2000)
            cy.contains('LTI Help').click()
        })
    })
})