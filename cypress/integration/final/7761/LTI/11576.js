/*
@author:Anirudha Pratap
@master_project_id: 7761
@phase_id : 6618
@story_id: 11576
@story_name: LTI logs 
@path: final/7761/LTI
@test_case_name: LTI logs.js
@description : show lti logs, raw data for lti and advance search modal box
@test_steps:
^Load LTI log report
-Use below URL to load the report 
-URL: https://www.ucertify.com/utils/lti_report.php?func=lti_report

^Apply advance search
-Click the Adavnce Search button and advance search modal box will open
-Select status 'Enrollment Failed'
-Click the serach button

^Apply advance search
-Click the Adavnce Search button and advance search modal box will open
-Select status 'Enrollment Failed'
-Select start and end data
-Click the serach button

^Apply advance search
-Click the Adavnce Search button and advance search modal box will open
-Select status 'Class creation failed'
-Click the serach button

^Apply advance search
-Click the Adavnce Search button and advance search modal box will open
-Select status 'Class creation failed'
-Select start and end data
-Click the serach button

^test show LTI error log in server error log
- show raw data for lti log 
- advance search modal box in lti error log

^test case of raw data for lti log 
- Login In ucertify portal
- Go to my library
- select a course having videos
- open this course
- Go tho this link https://www.jigyaasa.info/util
- start video array link
- click on generate video playlist button
- generate video playlist will be shown 

@test_data: n/a
@result: LTI Log report will be opened and logs will show in table.
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("grade sync area", function() {
    beforeEach("this is login", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    });
    it("Apply advance search", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/utils/lti_report.php?func=lti_report");
        })
        InstructorPage.advSearch()
        cy.get('[data-cy="lti_status_cy"]').select("Enrollment failed", { force: true });
        cy.get('[data-cy="lti_adv_search_cy"]').click({ force: true });
    });
    it("Apply advance search with date", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/utils/lti_report.php?func=lti_report");
        })
        InstructorPage.advSearch()
        cy.get('[data-cy="lti_status_cy"]').select("Enrollment failed", { force: true });
        cy.get('[data-cy="start_date_cy"]').click({ force: true });
        cy.get(".table-condensed > tbody > :nth-child(3) > :nth-child(4)").click()
        cy.get('[data-cy="end_date_cy"]').click({ force: true });
        cy.get('.table-condensed > tbody > :nth-child(3) > :nth-child(6)').click()
        cy.get('[data-cy="lti_adv_search_cy"]').click({ force: true });
    });
    it("Apply advance search with Class creation failed", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/utils/lti_report.php?func=lti_report");
        })
        InstructorPage.advSearch()
        cy.get('[data-cy="lti_status_cy"]').select("Class creation failed", { force: true });
        cy.get('[data-cy="lti_adv_search_cy"]').click({ force: true });
    });
    it("Apply advance search with Class creation failed with date", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/utils/lti_report.php?func=lti_report");
        })
        InstructorPage.advSearch()
        cy.get('[data-cy="lti_status_cy"]').select("Class creation failed", { force: true });
        cy.get('[data-cy="start_date_cy"]').click({ force: true });
        cy.get(".table-condensed > tbody > :nth-child(3) > :nth-child(4)").click()
        cy.get('[data-cy="end_date_cy"]').click({ force: true });
        cy.get(".table-condensed > tbody > :nth-child(3) > :nth-child(6)").click()
        cy.get('[data-cy="lti_adv_search_cy"]').click({ force: true });
    });
    it('Generate video playlist', function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=mylibrary]').click();
            cy.get('[data-cy=searchbox]').type("ucertify testkit", { force: true });
            cy.visit(data.url + "/?func=load_course&course=items&class_code=05Up2");
            cy.visit(data.url + "/utils");
            cy.get('[data-cy="utils_list"]').eq(29).click();
            cy.get('[data-cy=generate_video_playlist]').click();
        })
    })
})