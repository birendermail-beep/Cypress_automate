/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10628
@story_name: Access Annotation
@path: final/6607/Student
@test_case_name: Access Annotation.js
@description: All the annotations will show in a list, of that particular user
@test_steps:
^Open Annotation option in TOC area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Annotation button

^Check all the annotations by particular user
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Annotation button
-Click on Annotated By button, and select your user

^collapse and Expand 
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Annotation button
-click on collapse or expand repeat it
-check content collapse or not

^Search box correct and incorrect search
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Annotation button
-write correct and incorrect content for fot testing

^Annotation tab 
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Annotation button
-click Annotation tab

^pickup where you left 
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on Annotation button
-click on pickup where you left off tab

^bit size lessions
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-check bit-size lessions repeat


@test_data: n/a
@result: Open Annotation option in TOC area
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
        //ebook-toc-5 ebook-toc-6 ebook-toc-7
    it('Open Annotation option in TOC area', function() {
        cy.get('[data-cy="chapters"]').click()
        cy.contains('Annotation').click({ force: true })
        cy.wait(3000)
        cy.get('#bm_an').should('be.visible')
        cy.wait(2000)
    })

    it('Check all the annotations by particular user', function() {
        cy.get('[data-cy="chapters"]').click()
        cy.contains('Annotation').click({ force: true })
        cy.wait(2000)
        cy.get('[data-cy=annotation_button]').click()
        cy.wait(2000)
        cy.get('[data-cy=show]').click()
        cy.get('#e_toc').should('be.visible')
    })

    it('collapse and expend', function() {
        cy.get('[data-cy="chapters"]').click()
        cy.contains('Annotation').click({ force: true })
        cy.wait(3000)
        cy.get('#collapse-init').click()
        cy.wait(3000)
        cy.scrollTo('20%', '20%')
        cy.get('#chapter_guid_02nHQ').should('be.visible')
        cy.get('#collapse-init').click()
        cy.wait(3000)
        cy.scrollTo('20%', '20%')
        cy.get('#chapter_guid_02nHQ').should('be.not.visible')
    })

    it('Search box correct and incorrect search', function() {
        cy.get('[data-cy="chapters"]').click()
        cy.contains('Annotation').click({ force: true })
        cy.wait(3000)
        cy.get('#toc_search').type('Fundamentals')
        cy.get('#lessonsearch').click()
        cy.wait(10000)
        cy.scrollTo('40%', '40%')
        cy.get('#searched_content').should('exist')
        cy.get('#toc_search').clear().type('sbcxbhcgdfghshjds')
        cy.get('#lessonsearch').click()
        cy.scrollTo('40%', '40%')
        cy.get('#searched_content').contains('Search text not found.').should('be.visible')
    })
    it('Annotation tab', function() {
        cy.get('[data-cy="chapters"]').click()
        cy.contains('Annotation').click({ force: true })
        cy.wait(3000)
        cy.get('#bm_an').should('be.visible')
        cy.get('[data-cy=annotation_tab] > .btn').click()
        cy.get('#bm_an').should('be.not.visible')
    })
    it('pickup where you left Off', function() {
        cy.get('[data-cy="chapters"]').click()
        cy.contains('Annotation').click({ force: true })
        cy.get('[data-cy=start_left]').click()
        cy.wait(7000);
        cy.get('#bc-front').should('be.visible')
    })
    it('bit size lessons', function() {
        cy.get('[data-cy="chapters"]').click()
        cy.contains('Annotation').click({ force: true })
        cy.get('[data-cy=bit_size]').click()
        cy.wait(3000)
        cy.get('[data-cy=bit_size]').click()
    })
})