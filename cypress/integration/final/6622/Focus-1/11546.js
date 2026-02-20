/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 9828
@story_id: 11546
@story_name: Performance Review
@path: final/Focus
@test_case_name: Performance Review
@description: N/A
@test_steps:

^focus_performance_calculator
-Go to ucertify.com
-Login with given details
-Go to URL https://www.ucertify.com/focus/index.php
-Click on performance tab
-Select review period
-Click on get button
-Enter your passphrase
-Click on Authenticate button

@test_data: n/a
@result: performance calculator will open
*/
import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('author_Area', function() {

    it('focus_performance_calculator', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/focus/index.php')
        })
        cy.wait(3000)
        cy.get(':nth-child(4) > .nav-link > [rel="tooltip"] > .d-lg-inline-block').click({ force: true })
        cy.wait(2000)

        cy.get('.review_year.list-inline-item > .w-100 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('2020{enter}');
        cy.wait(2000);
        cy.get('#review_period').select('1 (23Dec19-19Jan20)', { force: true })
        cy.wait(2000)
        cy.get('#show_review').click({ force: true })
        cy.wait(2000)
        cy.get('#reviewer_password').clear({ force: true }).type('allroutesarebusy', { force: true })
        cy.wait(2000)
        cy.get('#authenticate_me').click()
        cy.wait(5000)
    })

})