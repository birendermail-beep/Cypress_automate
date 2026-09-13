import { Navbar, LoginPage, login_username, login_password } from '../../page-objects/pages/index'

// Reviewed navigation only. Do not add record actions or form submissions here.
describe('Admin and Sales report access (read-only)', () => {
    beforeEach(() => {
        cy.visit('/')
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })

    it('opens the Sales opportunity report and displays its filters', () => {
        cy.visit('/admin/inside_sales/instructor_portal.php?func=opportunity')
        cy.location('pathname').should('include', '/admin/inside_sales/instructor_portal.php')
        cy.location('search').should('include', 'func=opportunity')
        cy.get('#groupby', { timeout: 30000 }).should('exist')
        cy.get('#search_opportunity_button').should('exist')
    })

    it('opens the Admin inside-sales leaderboard and its summary', () => {
        cy.visit('/admin/inside_sales/instructor_portal.php')
        cy.get('[data-cy="kpi_report"]', { timeout: 30000 })
            .filter(':visible').first().click()
        cy.get('[data-cy="leader_board"]', { timeout: 30000 })
            .filter(':visible').first().should('have.attr', 'href').then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="summary_tab"]', { timeout: 30000 })
            .should('be.visible').click()
        cy.get('[data-cy="revenue_ticker"]', { timeout: 30000 }).should('exist')
    })
})
