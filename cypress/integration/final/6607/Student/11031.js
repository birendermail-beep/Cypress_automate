/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10478
@story_id: 11031
@story_name: Working with 3 dots in Test Area
@path: final/6607/Student
@test_case_name: Working with 3 dots in Test Area.js
@description: 
@test_steps:
^save notes in test area
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on pre assessment to start the test and question will be shwon
-three dot is coming in question and click on that 
-write the text in notes and it will be saved

^save bookmark in test area
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on pre assessment to start the test and question will be shwon
-three dot is coming in question and click on that 
-enable the the bookmark button

^save confidence in test area
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and search LO-Aplus-complete course 
-open any one course as student view then dashboard will be open 
-click on pre assessment to start the test and question will be shwon
-three dot is coming in question and click on that 
-enable the the rating button

@test_data: n/a
@result: https://screencast.com/t/TStJ0MR4
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('This will Test the eBook Area', function() {
    //write a noted in topic
    it('Working with 3 dots in Test Area', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('uCertify TestKit')
        cy.get('[crn="items"]').contains('Manage').click({ force: true })
        cy.get('.course_title').contains('uCertify TestKit').should('be.visible')
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=items&class_code=' + data.class_code[4])
        })
        cy.get('li[intro-id="pre_asssement"]').contains('Pre Assessment').click({ force: true }).then(() => {
            cy.get('[data-cy=test_form]').should('exist')
        })
        cy.get('#test_mode').click({ force: true })
        cy.get('[data-cy=tripple_dot]').click({ force: true })
        //pankaj:ucauto
        cy.wait(5000);
        cy.get('.popover-body > :nth-child(4) > .dot').click({ force: true })
        //pankaj:ucauto
        cy.wait(5000);
        cy.get('.popover-body > .mt-md > .dot').eq(0).click({ force: true })
        //pankaj:ucauto
        cy.wait(5000);
        cy.get('.popover-body > :nth-child(6) > #textarea_notes').clear().type('this is testing', { force: true })
        StudentPage.endTest();
        cy.get('#item-container-list-view').should('be.visible')
    })
})