/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10630
@story_name: Access Videos
@path: final/6607/Student
@test_case_name: Access Videos.js
@description: By Clicking on Videos Button, we can see all the videos available in ebook
@test_steps:

^Check "Videos button"
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Videos tab"
-write in search option 

^Check List/Grid View option in videos section
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Videos"
-Click on View Orientation Icon

^Check Search option in video section
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Videos"
-Type into the search box, to search videos

^Filter video list according to bookmark, confidence, and notes
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on video button
-Click on three dot in the left of alphabet filter
-Select bookmark,confidence, and notes

^Filter video list according to All, watch, not watch
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on video button
-Select All, watch, not watch

@test_data: n/a
@result: By Clicking on Videos Button, we can see all the videos available in ebook
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                StudentPage.visitLOAplusCompleteCourse(data)
            })
        })
        //ebook-toc-23 ebook-toc-24 ebook-toc-25 ebook-toc-27 ebook-toc-28
    it('Check "Videos button', function() {
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.contains('Videos').click({ force: true })
        cy.get('#adv_search').type('address');
    })

    it('Check List/Grid View option in videos section', function() {
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.contains('Videos').click({ force: true })
        cy.get('[aria-label="List view"]').click()
        cy.get('[data-original-title="Grid view"]').should('exist')
        cy.get('[aria-label="List view"]').click()
        cy.get('[data-original-title="List view"]').should('exist')
    })

    it('Filter video list according to bookmark, confidence, and notes', function() {
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.contains('Videos').click({ force: true })
        cy.get('#review_filter > .drop-btn').click()
        cy.get('.icomoon-bookmark').click()
        cy.wait(1000)
        cy.get('.icomoon-star').click()
        cy.wait(1000)
        cy.get('.icomoon-file-8').click()
    })

    it('Filter video list according to All, watch, not watch', function() {
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.contains('Videos').click({ force: true })
        cy.get('[data-filter-value=".unwatched"]').click()
        cy.wait(2000)
        cy.get('[data-filter-value=".watched"]').click()
        cy.wait(2000)
        cy.get('#filters-action > [data-filter-value=".items"]').click()
    })
})