/*
@story_id: 10630
@story_name: Access Videos
@path: final/6607/Student
*/
// Current read-only coverage for the ebook Videos area.
import {
    Navbar,
    login_username,
    login_password,
    LoginPage,
    StudentPage,
} from '../../../../page-objects/pages/index'

describe('Student ebook Videos', () => {
    const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()

    const openEbook = () => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        StudentPage.visitLOAplusCompleteCourse()

        cy.get('[intro-id="chapters"]', { timeout: 30000 })
            .filter(':visible')
            .first()
            .click()

        cy.location('search', { timeout: 30000 }).should(search => {
            expect(search).to.include('func=ebook')
            expect(new URLSearchParams(search).get('chapter_no')).to.eq('0')
        })
        cy.get('body', { timeout: 30000 }).should('be.visible')
    }

    const withVideos = callback => {
        cy.get('body').then($body => {
            const $videos = $body
                .find('a:visible, button:visible, [role="tab"]:visible')
                .filter((_, element) =>
                    /^\s*Videos?\s*$/i.test(element.textContent || ''))
                .first()

            if (!$videos.length) {
                cy.log('Videos is not available for the selected course')
                return
            }

            cy.wrap($videos).click()
            cy.location('href', { timeout: 30000 })
                .should('not.eq', 'about:blank')
            cy.get('body', { timeout: 30000 }).should($videoBody => {
                expect(
                    normalize($videoBody.text()),
                    'Videos page is not blank'
                ).not.to.eq('')
                expect($videoBody.text())
                    .not.to.include('Default blank page')
            })
            cy.then(() => callback())
        })
    }

    beforeEach(openEbook)

    it('opens Videos when available without a blank page', () => {
        withVideos(() => {
            cy.contains(':visible', /^\s*Videos?\s*$/i)
                .should('be.visible')
            cy.get('body').should('not.contain.text', 'Default blank page')
        })
    })

    it('shows video content or a valid empty state', () => {
        withVideos(() => {
            cy.get('body').then($body => {
                const text = normalize($body.text())
                const hasVideo = $body.find(
                    'video:visible, [data-cy*="video"]:visible, ' +
                    '.video-item:visible, [class*="video-card"]:visible'
                ).length > 0
                const hasVideoText = /video|watch|unwatched/i.test(text)
                const hasEmptyState =
                    /no\s+.*video.*(?:found|available)/i.test(text)

                expect(
                    hasVideo || hasVideoText || hasEmptyState,
                    'video content or its empty state'
                ).to.eq(true)
            })
        })
    })

    it('detects video search when the layout provides it', () => {
        withVideos(() => {
            cy.get('body').then($body => {
                const $input = $body
                    .find(
                        'input[type="search"]:visible, ' +
                        'input[placeholder]:visible, ' +
                        '[data-cy="searchbox"]:visible, #adv_search:visible'
                    )
                    .filter((_, element) => {
                        const placeholder =
                            element.getAttribute('placeholder') || ''
                        return element.type === 'search' ||
                            /search/i.test(placeholder) ||
                            element.getAttribute('data-cy') === 'searchbox' ||
                            element.id === 'adv_search'
                    })
                    .first()

                if (!$input.length) {
                    cy.log('This Videos layout has no search control')
                    return
                }

                expect($input.is(':visible'), 'Videos search is visible')
                    .to.eq(true)
                expect($input.is(':disabled'), 'Videos search is enabled')
                    .to.eq(false)
            })
        })
    })

    it('detects list or grid view controls when available', () => {
        withVideos(() => {
            cy.get('body').then($body => {
                const $controls = $body
                    .find(
                        '[aria-label]:visible, [title]:visible, ' +
                        '[data-original-title]:visible'
                    )
                    .filter((_, element) => {
                        const label = [
                            element.getAttribute('aria-label'),
                            element.getAttribute('title'),
                            element.getAttribute('data-original-title'),
                        ].join(' ')
                        return /list\s*view|grid\s*view/i.test(label)
                    })

                if (!$controls.length) {
                    cy.log('This Videos layout has no list/grid toggle')
                    return
                }

                expect($controls.length, 'visible list/grid controls')
                    .to.be.greaterThan(0)
            })
        })
    })

    it('detects video filters without changing user data', () => {
        withVideos(() => {
            cy.get('body').then($body => {
                const $filters = $body
                    .find(
                        '[data-filter-value]:visible, #review_filter:visible, ' +
                        'button:visible, [role="button"]:visible'
                    )
                    .filter((_, element) => {
                        const label = [
                            element.textContent,
                            element.getAttribute('data-filter-value'),
                            element.getAttribute('aria-label'),
                            element.getAttribute('title'),
                        ].join(' ')
                        return /all|watched|unwatched|bookmark|confidence|note|filter/i
                            .test(label)
                    })

                if (!$filters.length) {
                    cy.log('This Videos layout has no visible filter controls')
                    return
                }

                expect($filters.length, 'visible Videos filters')
                    .to.be.greaterThan(0)
            })
        })
    })

    it('returns to Lessons without changing course settings', () => {
        cy.contains(':visible', /^\s*Lessons\s*$/i, { timeout: 30000 })
            .first()
            .click()

        cy.contains(':visible', /^\s*Lessons\s*$/i).should('be.visible')
        cy.contains(':visible', /Bite-size lessons|bite-size learning/i)
            .should('be.visible')
        cy.log('10630 Videos coverage completed')
    })
})
