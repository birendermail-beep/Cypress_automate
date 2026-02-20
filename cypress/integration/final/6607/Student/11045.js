/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11045
@story_name: Access Exam Objective
@path: final/6607/Student
@test_case_name: Access Exam Objective.js
@description: Access Exam Objective
@test_steps:

^pe-exam-objective-modal
-Got to my library
-search course  Technical Support Engineer - uCertify 
-click on manage 
- click on open button
-open any lession 
- click on triple dot 
-click on exam-objectives

^pe-exam-objective
- go to  my library 
-search course  Oracle Certified Associate Java SE 8 
-click on manage 
-open desk copy 
-take assessment test
- click on end test and click to confirm and go to result page 
- click item tabs any element

^Chapters and Lessons
-Click on Chapter and Lessons on Dashboard 
-Click on the Exam Objective 
-Change views under exam objective

^open ciw websecurity association-v2.0
-open person website http://ucertify.com/
-login my account (surabhi.saxena@ucertify.com) and goto my library and search ciw websecurity association-v2.0
-open this course and click on post-assessmrnt and attempt in remove mode 
-and goto 3rd question then this exbobjective should be shown


@test_data: n/a
@result: exam objective should be shown in next line with 30 px indent
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Student Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    //Pankaj:ucauto
    it('pe-exam-objective', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=02hhS&class_code=03yFk");
        })
        cy.get('[intro-id="pre_asssement"]').click();
        cy.get('#test_form').then(($text) => {
            if ($text.text().includes('Last test was not completed. Do you want to continue?')) {
                cy.get('#terminate_test_pre').click()
                // cy.get('.terminate_current_test').click()
                //Pankaj:ucauto 
                cy.get('[data-cy="terminate_current_test"]').eq(0).click({force:true})
            }
        })
        cy.get('#test_mode').click();
        cy.get('#show_result').click().then(() => {
            //Pankaj:ucauto 
            cy.wait(9000);
            cy.get('#btn-confirmed').click();
        })
        cy.contains('What will the following code print whe').click({ force: true })
    })
    it('pe-exam-objective-modal', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/?func=get_course_list&show=courses')
                cy.get('#search_course').clear({ force: true }).type('OCA: Java SE 8 Programmer I (1Z0-808)', { force: true })
                cy.get('[class_code="05uGp"] > [data-cy=manage]').click({ force: true })
                cy.get('[data-cy=view_course]').click();
                cy.get('[data-cy=chapters]').click();
                cy.get(':nth-child(3) > .chapter_heading > [data-cy=toc_chapters]').contains('Operators and Statements').click();
                cy.contains('Exam Objective').should('be.visible');
            })
        })
        //exam objective
    it('open ciw websecurity association-v2.0', function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="mylibrary"]').click({ force: true })
            cy.get('#search_course').clear({ force: true }).type('ciw', { force: true })
            cy.visit(data.url + '/?func=load_course&course=1D0-671')
        })
        cy.get('[intro-id="post_assesment"] > .menu-item').click({ force: true })
    })

    it('Change views under exam objective', function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="mylibrary"]').click({ force: true })
            cy.get('#search_course').clear({ force: true }).type('ciw', { force: true })
            cy.visit(data.url + '/?func=load_course&course=1D0-671')
        })
        cy.get('[data-cy=chapters]').click({ force: true })
        cy.get('#exam_obje_li > .nav-link').click()
        cy.get('#chapter_tab > .row > .col-md-1 > .nav > .btn').click()
        cy.get('#chapter_tab > .row > .col-md-1 > .nav > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#chapter_tab > .row > .col-md-1 > .nav > .dropdown-menu > .chapter_li > .dropdown-item').click({force: true})
    })
})