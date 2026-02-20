// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --

// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('requireAttrOfTag', (tag, args) => {
    cy.get(tag).then(() => {
        cy.wrap(args).each((argsvalue, index, array) => {
            cy.get(tag).should('have.attr', argsvalue)
        })
    })
})

Cypress.Commands.add('isPaginationRequire', function() {
    cy.get('#bug_prj_table > tbody > tr').its('length').should('be.lt', 51)
})

Cypress.Commands.add('checkAscSort', (tbodySelector, colSelector, ) => {
    cy.get(tbodySelector).within(($tbody) => {
        let firstStr;
        cy.get('tr:nth-child(1) > td:nth-child(' + colSelector + ')').invoke('text').then((text => {
            firstStr = text.trim()
        }))
        cy.get('tr').each((arg, indexT, arr) => {
            cy.get('tr:nth-child(' + (indexT + 1) + ') > td:nth-child(' + colSelector + ')').invoke('text').then((text => {
                expect(text.trim()).to.at.least(firstStr)
                firstStr = text.trim()
            }))
        })
    })
})

Cypress.Commands.add('questionNavigation', () => {
    cy.get('div[intro-id="item_info"]').then(($text) => {
        if ($text.text().trim().charAt($text.text().trim().indexOf(' ') - 1) == 1) {
            cy.get('#previous').should('be.disabled')
        } else {
            cy.get('#previous').should('be.enabled')
        }
    })
    cy.get('#next').click({ force: true }).then(() => {
        cy.wait(4500)
    })

    cy.get('#previous').click({ force: true }).then(() => {
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
    cy.get('[data-cy="mylibrary"]').click({ force: true })
    cy.get('[data-cy="searchbox"]').type('lo-a')
    cy.get('[crn="LO-Aplus-complete"]').contains('Manage').click({ force: true })
    cy.fixture('global').then(data => {
        cy.visit(data.url + '/?func=load_course&course=LO-Aplus-complete&class_code=' + data.class_code[6])
    })
})