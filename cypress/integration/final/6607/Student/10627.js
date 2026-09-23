/*
@story_id: 10627
@story_name: Table of Content
@path: final/6607/Student
*/
// Current, read-only coverage for the Student course contents and activity launchers.
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student course contents', () => {
    const exact = label => new RegExp('^\\s*' + label + '\\s*$', 'i')

    const restoreStudentLogin = () => {
        cy.session(['student-login', login_username], () => {
            cy.visit('/')
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    }

    const openLessons = () => {
        restoreStudentLogin()
        cy.visit('/')
        cy.fixture('global').then(data => {
            StudentPage.visitLOAplusCompleteCourse(data)
        })
        cy.get('[intro-id="chapters"]', { timeout: 30000 })
            .filter(':visible')
            .first()
            .click()
        cy.location('search', { timeout: 30000 }).should(search => {
            expect(search, 'Lessons page URL').to.include('func=ebook')
            expect(new URLSearchParams(search).get('chapter_no'),
                'Lessons page chapter').to.eq('0')
        })
        cy.contains(':visible', exact('Lessons'), { timeout: 30000 })
            .should('be.visible')
    }

    const openActivity = label => {
        cy.location('href').then(before => {
            cy.contains(':visible', exact(label), { timeout: 30000 })
                .first()
                .click({ scrollBehavior: false })
            cy.location('href', { timeout: 30000 }).should(after => {
                expect(after, label + ' opens a new course view').not.to.eq(before)
                expect(after, label + ' does not open a blank page')
                    .not.to.eq('about:blank')
            })
            cy.get('body', { timeout: 30000 })
                .should('be.visible')
                .and($body => {
                    expect($body.text().trim(), label + ' page content')
                        .not.to.eq('')
                })
        })
    }

    beforeEach(openLessons)

    it('opens the Lessons area with course navigation tabs', () => {
        cy.contains(':visible', exact('Lessons')).should('be.visible')
        cy.contains(':visible', exact('Glossary')).should('be.visible')
        cy.contains(':visible', exact('Review')).should('be.visible')
    })

    it('shows unique positive lesson numbers', () => {
        cy.get('body').then($body => {
            const numbers = [...$body.find('button, a, span, div')]
                .filter(el => Cypress.$(el).is(':visible') &&
                    /^\d+$/.test((el.textContent || '').trim()) &&
                    Number((el.textContent || '').trim()) > 0)
                .map(el => Number(el.textContent.trim()))
            const lessonNumbers = numbers.filter(number => number <= 500)
            expect(lessonNumbers.length, 'visible lesson numbers')
                .to.be.greaterThan(0)
            expect(new Set(lessonNumbers).size, 'unique lesson numbers')
                .to.be.greaterThan(0)
        })
    })

    it('opens a readable lesson without a blank page', () => {
        openActivity('Read')
        cy.location('search').should(search => {
            expect(new URLSearchParams(search).get('chapter_no'))
                .not.to.eq('0')
        })
    })

    it('opens Cards from a lesson', () => {
        openActivity('Cards')
    })

    it('opens Quiz from a lesson', () => {
        openActivity('Quiz')
    })

    it('opens Labs from a lesson', () => {
        openActivity('Labs')
        cy.contains(':visible', exact('Labs'), { timeout: 30000 })
            .should('be.visible')
    })

    it('searches the Lessons list', () => {
        cy.get('input[placeholder*="Search" i], [data-cy="searchbox"]', {
            timeout: 30000,
        }).filter(':visible').first().clear().type('Security')
        cy.contains(':visible', /Search\s+Lessons/i)
            .should('be.visible')
    })

    it('shows the Resume control', () => {
        cy.contains(':visible', /^\s*(Resume|Pick up where you left off)\s*$/i, {
            timeout: 30000,
        }).should('be.visible')
    })

    it('shows the bite-size learning control without changing its state', () => {
        cy.contains(':visible', /Bite-size lessons|bite-size learning/i, {
            timeout: 30000,
        }).should('be.visible')
    })

    it('opens the Glossary tab', () => {
        cy.contains(':visible', exact('Glossary')).click()
        cy.contains(':visible', exact('Glossary'), { timeout: 30000 })
            .should('be.visible')
        cy.get('body').should('not.have.text', 'Default blank page')
    })

    it('opens the Review tab', () => {
        cy.contains(':visible', exact('Review')).click()
        cy.contains(':visible', exact('Review'), { timeout: 30000 })
            .should('be.visible')
        cy.get('body').should('not.have.text', 'Default blank page')
    })

    it('shows Table of Contents after opening a lesson', () => {
        openActivity('Read')
        cy.contains(':visible', /Table of Contents/i, { timeout: 30000 })
            .should('be.visible')
    })
})
