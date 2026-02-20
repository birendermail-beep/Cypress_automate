/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10904
@story_name: Track Labs
@path: final/Remove/6615
@test_case_name: Track Labs
@test_steps:

^Labs tab/Student view
-Click on Labs tab     
-Select Student view 

^Labs tab/Table view
-Click on Labs tab;     
-Select Table view;

^Check the Review option in Labs tab
-Click on Labs score;      
-Click on Review item;

^Check the Self grading option in Labs tab
-Click on Labs score;      
-Self grade the lab item;

^Check the Reset option in Labs tab   
-Click on Labs score;      
-Reset the lab item;

@test_data: n/a
@result: Message shows up "You do not have permission to open this page."
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
    })
    it('Track tab, Labs Student view', function() {
        cy.get('[intro-id="track"] > a').click()
        cy.get('#edu_tab_block > .dropdown').click()
        cy.get('.show > :nth-child(2) > .dropdown-item').click()
    })

    it('Track tab, Labs table view', function() {
            cy.get('[intro-id="track"] > a').click()
            cy.get('#edu_tab_block > .dropdown').click()
            cy.get('.show > :nth-child(1) > .dropdown-item').click()
        })
        // Review option in labs tab
    it('Review option in labs tab', function() {
            cy.get('[data-cy=track]').click()
            cy.get('[data-cy=labs_track_cy]').click()
            cy.get('[data-cy=table_labs_track_cy]').click()
            cy.get('[data-original-title="Grade Manually"]').eq(0).click()
            cy.get('.review_the_item').click()
        })
        // Self Grading option in labs tab correct 
    it('Self Grading option in labs tab correct', function() {
            cy.get('[data-cy=track]').click()
            cy.get('[data-cy=labs_track_cy]').click()
            cy.get('[data-cy=table_labs_track_cy]').click()
            cy.get('[data-original-title="Grade Manually"]').eq(0).click()
            cy.get('#correct_grade').click({force:true})
        })
        // Self Grading option in labs tab incorrect
    it('Self Grading option in labs tab with incorrect', function() {
            cy.get('[data-cy=track]').click()
            cy.get('[data-cy=labs_track_cy]').click()
            cy.get('[data-cy=table_labs_track_cy]').click()
            cy.get('[data-original-title="Grade Manually"]').eq(0).click()
            cy.get('#incorrect_grade').click({force:true})
        })
        // Reset option in labs tab
    it('Reset option in labs tab', function() {
        cy.get('[intro-id="track"] > .nav-link').click()
        cy.get('[data-cy=labs_track_cy]').click()
        cy.get('[data-cy=table_labs_track_cy]').click()
        cy.get('.header_05Vc3 > [item_seq="1"]').click()
        cy.get('#correct_grade').click()
        cy.get('.header_05Vc3 > [item_seq="1"]').click()
        cy.get('#incorrect_grade').click()
    })
});