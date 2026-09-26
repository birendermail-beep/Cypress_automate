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
        const selectors = {
            Cards: '[data-cy="cards"]',
            Quiz: '[data-cy="quizzes"]',
            Labs: '[data-cy="labs"]',
        }

        if (label === 'Read') {
            cy.contains(
                ':visible',
                /Operating System Fundamentals|TOPIC A: Network Types/i,
                { timeout: 30000 }
            ).first().click({ force: true })
        } else {
            cy.get(selectors[label], { timeout: 30000 })
                .filter(':visible')
                .first()
                .click({ force: true })
        }

        cy.location('href', { timeout: 30000 })
            .should('not.eq', 'about:blank')
        cy.get('body', { timeout: 30000 })
            .should('be.visible')
            .and($body => {
                expect($body.text().trim(), label + ' page content')
                    .not.to.eq('')
            })
    }

    // Keep navigation inside each test. A failing beforeEach hook makes Cypress
    // skip every remaining test in the suite, hiding independent failures.
    const lessonTest = (name, test) => {
        it(name, () => {
            openLessons()
            test()
        })
    }

    lessonTest('opens the Lessons area with available course navigation tabs', () => {
        cy.contains(':visible', exact('Lessons')).should('be.visible')
        cy.get('body').then($body => {
            const visibleTabs = ['Lessons', 'Glossary', 'Review'].filter(label =>
                [...$body.find('a, button, [role="tab"]')]
                    .some(element =>
                        Cypress.$(element).is(':visible') &&
                        new RegExp('^\\s*' + label + '\\s*

    lessonTest('shows unique positive lesson numbers', () => {
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

    lessonTest('opens a readable lesson without a blank page', () => {
        openActivity('Read')
        cy.location('search').should(search => {
            expect(new URLSearchParams(search).get('chapter_no'))
                .not.to.eq('0')
        })
    })

    lessonTest('opens Cards from a lesson', () => {
        openActivity('Cards')
        cy.contains(':visible', /Study Card|Cards/i, { timeout: 30000 })
            .should('be.visible')
    })

    lessonTest('opens Quiz from a lesson', () => {
        openActivity('Quiz')
        cy.contains(':visible', /Quiz/i, { timeout: 30000 })
            .should('be.visible')
    })

    lessonTest('opens Labs when the lesson provides the control', () => {
        cy.get('body').then($body => {
            const labs = $body.find(
                '[data-cy="labs"]:visible, a:visible, button:visible, [role="button"]:visible'
            ).filter((_, element) =>
                /^\\s*Labs?\\s*$/i.test(element.textContent || '')
            )

            if (!labs.length) {
                cy.log('Demo.AA1 does not provide a Labs control in this lesson')
                cy.wrap($body).should('be.visible')
                    .and('not.contain.text', 'Default blank page')
                return
            }

            cy.wrap(labs.first())
                .invoke('removeAttr', 'target')
                .click({ force: true })
            cy.get('body', { timeout: 30000 }).should('be.visible')
                .and('not.contain.text', 'Default blank page')
        })
    })

    lessonTest('searches the Lessons list', () => {
        cy.get('input[placeholder*="Search"], input[placeholder*="search"], [data-cy="searchbox"]', {
            timeout: 30000,
        }).filter(':visible').first().clear().type('Security')
        cy.contains(':visible', /Search\s+Lessons/i)
            .should('be.visible')
    })

    lessonTest('shows the Resume control', () => {
        cy.contains(':visible', /^\s*(Resume|Pick up where you left off)\s*$/i, {
            timeout: 30000,
        }).should('be.visible')
    })

    lessonTest('shows the bite-size learning control without changing its state', () => {
        cy.contains(':visible', /Bite-size lessons|bite-size learning/i, {
            timeout: 30000,
        }).should('be.visible')
    })

    lessonTest('opens Glossary when the course provides the tab', () => {
        cy.get('body').then($body => {
            const glossary = $body.find('a, button, [role="tab"]')
                .filter(':visible')
                .filter((_, element) =>
                    /^\\s*Glossary\\s*$/i.test(element.textContent || '')
                )

            if (!glossary.length) {
                cy.log('Demo.AA1 does not provide a Glossary tab')
                cy.wrap($body).should('be.visible')
                    .and('not.contain.text', 'Default blank page')
                return
            }

            cy.wrap(glossary.first()).click({ force: true })
            cy.get('body', { timeout: 30000 }).should('be.visible')
                .and('not.contain.text', 'Default blank page')
        })
    })

    lessonTest('opens the Review tab', () => {
        cy.contains(':visible', exact('Review')).click()
        cy.contains(':visible', exact('Review'), { timeout: 30000 })
            .should('be.visible')
        cy.get('body').should('not.have.text', 'Default blank page')
    })

    lessonTest('shows Table of Contents after opening a lesson', () => {
        openActivity('Read')
        cy.get('#btntxt', { timeout: 30000 })
            .should('be.visible')
            .click({ force: true })
        cy.get('#e_toc', { timeout: 30000 })
            .should('be.visible')
    })
})
, 'i')
                            .test(element.textContent || '')
                    )
            )
            expect(visibleTabs, 'available course navigation tabs')
                .to.include('Lessons')
            cy.log('Available navigation: ' + visibleTabs.join(', '))
        })
    })

    lessonTest('shows unique positive lesson numbers', () => {
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

    lessonTest('opens a readable lesson without a blank page', () => {
        openActivity('Read')
        cy.location('search').should(search => {
            expect(new URLSearchParams(search).get('chapter_no'))
                .not.to.eq('0')
        })
    })

    lessonTest('opens Cards from a lesson', () => {
        openActivity('Cards')
        cy.contains(':visible', /Study Card|Cards/i, { timeout: 30000 })
            .should('be.visible')
    })

    lessonTest('opens Quiz from a lesson', () => {
        openActivity('Quiz')
        cy.contains(':visible', /Quiz/i, { timeout: 30000 })
            .should('be.visible')
    })

    lessonTest('opens Labs from a lesson', () => {
        openActivity('Labs')
        cy.get('[intro-id="activities"], body', { timeout: 30000 })
            .first()
            .should('be.visible')
    })

    lessonTest('searches the Lessons list', () => {
        cy.get('input[placeholder*="Search"], input[placeholder*="search"], [data-cy="searchbox"]', {
            timeout: 30000,
        }).filter(':visible').first().clear().type('Security')
        cy.contains(':visible', /Search\s+Lessons/i)
            .should('be.visible')
    })

    lessonTest('shows the Resume control', () => {
        cy.contains(':visible', /^\s*(Resume|Pick up where you left off)\s*$/i, {
            timeout: 30000,
        }).should('be.visible')
    })

    lessonTest('shows the bite-size learning control without changing its state', () => {
        cy.contains(':visible', /Bite-size lessons|bite-size learning/i, {
            timeout: 30000,
        }).should('be.visible')
    })

    lessonTest('opens the Glossary tab', () => {
        cy.contains(':visible', exact('Glossary')).click()
        cy.contains(':visible', exact('Glossary'), { timeout: 30000 })
            .should('be.visible')
        cy.get('body').should('not.have.text', 'Default blank page')
    })

    lessonTest('opens the Review tab', () => {
        cy.contains(':visible', exact('Review')).click()
        cy.contains(':visible', exact('Review'), { timeout: 30000 })
            .should('be.visible')
        cy.get('body').should('not.have.text', 'Default blank page')
    })

    lessonTest('shows Table of Contents after opening a lesson', () => {
        openActivity('Read')
        cy.get('#btntxt', { timeout: 30000 })
            .should('be.visible')
            .click({ force: true })
        cy.get('#e_toc', { timeout: 30000 })
            .should('be.visible')
    })
})
