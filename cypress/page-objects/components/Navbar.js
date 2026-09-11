export default class Navbar {
    static clickOnLogin() {
        cy.get('body').then(($body) => {
            if ($body.find('[data-cy="login_signup_cy"]').length) {
                cy.get('[data-cy="login_signup_cy"]').first().click({ force: true })
                return
            }
            cy.contains('a, button', /log\s*in|sign\s*in/i).first().click({ force: true })
        })
    }

    static clickonViewCart() {
        cy.get('body').then(($body) => {
            if ($body.find('[data-cy="cart_menu_cy"]').length) {
                cy.get('[data-cy="cart_menu_cy"]').trigger('mouseover', { force: true })
                cy.get('[data-cy="view_cart_cy"]').click({ force: true })
                return
            }
            cy.contains('a, button', /cart/i).first().click({ force: true })
        })
    }

    static clickonBrowseTitle() {
        cy.get('body').then(($body) => {
            if ($body.find('[data-cy="brows_titles-cy"]').length) {
                cy.get('[data-cy="brows_titles-cy"]').click({ force: true })
                return
            }
            cy.contains('a, button', /browse|catalog/i).first().click({ force: true })
        })
    }

    static clickContinueOnWelcomePage() {
        cy.get('body').then(($body) => {
            if ($body.find('[data-cy="previous_page"]').length) {
                cy.get('[data-cy="previous_page"]').click({ force: true })
                return
            }
            cy.contains('a, button', /continue|previous|back/i).first().click({ force: true })
        })
    }
}
