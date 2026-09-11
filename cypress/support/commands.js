Cypress.Commands.add('requireAttrOfTag', (tag, args) => {
    cy.get(tag).then(() => {
        cy.wrap(args).each((argsvalue) => {
            cy.get(tag).should('have.attr', argsvalue)
        })
    })
})

Cypress.Commands.add('isPaginationRequire', () => {
    cy.get('#bug_prj_table > tbody > tr').its('length').should('be.lt', 51)
})

Cypress.Commands.add('checkAscSort', (tbodySelector, colSelector) => {
    cy.get(tbodySelector).within(() => {
        let firstStr
        cy.get(`tr:nth-child(1) > td:nth-child(${colSelector})`).invoke('text').then((text) => {
            firstStr = text.trim()
        })
        cy.get('tr').each((arg, indexT) => {
            cy.get(`tr:nth-child(${indexT + 1}) > td:nth-child(${colSelector})`).invoke('text').then((text) => {
                expect(text.trim()).to.be.at.least(firstStr)
                firstStr = text.trim()
            })
        })
    })
})

Cypress.Commands.add('questionNavigation', () => {
    const itemInfoSelector = 'div[intro-id="item_info"]'
    const parseCounter = (text) => {
        const normalized = text.replace(/\s+/g, ' ').trim()
        const match = normalized.match(/(\d+)\s*of\s*(\d+)/i)

        if (!match) {
            throw new Error(`Unable to parse question counter: ${normalized}`)
        }

        return {
            current: Number(match[1]),
            total: Number(match[2]),
        }
    }

    cy.get(itemInfoSelector).should('exist').invoke('text').then((initialInfo) => {
        const initialCounter = parseCounter(initialInfo)

        if (initialCounter.current === 1) {
            cy.get('#previous').should('be.disabled')
        }

        cy.get('#next').should('be.enabled').click({ force: true })
        cy.get(itemInfoSelector).should(($itemInfo) => {
            const nextCounter = parseCounter($itemInfo.text())
            expect(nextCounter.current).to.eq(initialCounter.current + 1)
            expect(nextCounter.total).to.eq(initialCounter.total)
        })

        cy.get('#previous').should('be.enabled').click({ force: true })
        cy.get(itemInfoSelector).should(($itemInfo) => {
            const previousCounter = parseCounter($itemInfo.text())
            expect(previousCounter.current).to.eq(initialCounter.current)
            expect(previousCounter.total).to.eq(initialCounter.total)
        })
    })
})

Cypress.Commands.add('cardNavigation', () => {
    cy.get('div[intro-id="item_info"]').then(($text) => {
        if ($text.text().trim().charAt($text.text().trim().indexOf(' ') - 1) == 1) {
            cy.get('#previous').should('be.disabled')
        } else {
            cy.get('#previous').should('be.enabled')
        }
    })

    cy.get('div.flipbox:contains("Front: click to flip")').then(() => {
        cy.get('#correct').should('be.disabled')
        cy.get('#incorrect').should('be.disabled')
    })

    cy.get('div.flipbox:contains("Front: click to flip")').eq(0).click().then(() => {
        cy.get('div.flipbox').contains('Back: click to flip')
        cy.get('#correct').should('be.enabled')
        cy.get('#incorrect').should('be.enabled')
    })

    cy.get('#correct').click({ force: true }).then(() => {
        cy.get('#next').click({ force: true })
        cy.wait(4500)
    })

    cy.get('div.flipbox:contains("Front: click to flip")').then(() => {
        cy.get('#correct').should('be.disabled')
        cy.get('#incorrect').should('be.disabled')
    })

    cy.get('div.flipbox:contains("Front: click to flip")').eq(0).click().then(() => {
        cy.get('div.flipbox').contains('Back: click to flip')
        cy.get('#correct').should('be.enabled')
        cy.get('#incorrect').should('be.enabled')
    })

    cy.get('#incorrect').click({ force: true }).then(() => {
        cy.get('#previous').click({ force: true })
        cy.wait(4500)
    })

    cy.get('div[intro-id="item_info"]').then(($text) => {
        if ($text.text().trim().charAt($text.text().trim().indexOf(' ') - 1) == 1) {
            cy.get('#previous').should('be.disabled')
        } else {
            cy.get('#previous').should('be.enabled')
        }
    })
})

Cypress.Commands.add('openDashboard', () => {
    const courseCrn = Cypress.env('STUDENT_COURSE_CRN') || 'LO-Aplus-complete'
    const searchText = Cypress.env('STUDENT_COURSE_SEARCH') || 'lo-a'

    cy.get('[data-cy="mylibrary"]').should('be.visible').click({ force: true })
    cy.get('[data-cy="searchbox"]').should('be.visible').clear().type(searchText)
    cy.get(`[crn="${courseCrn}"]`).should('exist').contains('Manage').click({ force: true })

    cy.fixture('global').then((data) => {
        const classCode = Cypress.env('STUDENT_CLASS_CODE') || data.class_code[6]
        cy.visit(`/?func=load_course&course=${courseCrn}&class_code=${classCode}`)
    })
})
