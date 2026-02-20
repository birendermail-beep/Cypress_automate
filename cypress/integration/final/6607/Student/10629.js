/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10629
@story_name: Access Glossary
@path: final/6607/Student
@test_case_name: Access Glossary.js
@description: A glossary will open, of all the topics
@test_steps:

^Check Glossary Button
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Glossary button

^Check book Mark option in glossary area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Glossary button
-Click on bookmark option

^Filter Glossary list according to bookmark, confidence, and notes
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Glossary button
-Type your string in search bar
-Click on three dot in the left of alphabet filter
-Select bookmark to filter glossary

^Check Search bar in glossary option
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Glossary button
-Type your string in search bar


^List View and grid View
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Glossary button
-click on list view or grid view repeat 
-check both are exist

@test_data: n/a
@result: A glossary page will open
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    //ebook-toc-8 ebook-toc-9 ebook-toc-10 ebook-toc-11 ebook-toc-12
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
            cy.get('[data-cy="chapters"]').click()
        })
    })
    it('check Glossary Button', function() {
        cy.contains('Glossary').click({ force: true })
        cy.get('#adv_search').click({ force: true }).type('Aero')
    })
    it('Check book Mark option in glossary area', function() {
        cy.contains('Glossary').click({ force: true })
        cy.get('#review_filter > .drop-btn').click()
        cy.get('.icomoon-bookmark').click()
    })
    it('Filter Glossary list according to bookmark, confidence, and notes', function() {
        cy.contains('Glossary').click({ force: true })
        cy.get('#review_filter > .drop-btn').click({ force: true })
        cy.get('.icomoon-bookmark').click({force: true})
        cy.wait(1000)
        cy.get('.icomoon-star').click({force: true})
        cy.wait(1000)
        cy.get('.icomoon-file-8').click({force: true})
    })
    it('list view and grid view', function() {
        cy.contains('Glossary').click({ force: true })
        cy.get('[aria-label="List view"]').click()
        cy.get('[data-original-title="Grid view"]').should('exist')
        cy.get('[aria-label="List view"]').click()
        cy.get('[data-original-title="List view"]').should('exist')
    })
})