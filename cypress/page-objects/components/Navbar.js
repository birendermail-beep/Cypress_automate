export default class Navbar {
    //this function is used to click on login icon
    static clickOnLogin() {
        cy.get('[data-cy="login_signup_cy"]').click({ force: true })
    }
    //this function is used to click on cart icon
    static clickonViewCart() {
        cy.get('[data-cy="cart_menu_cy"]').trigger('mouseover', { force: true })
        cy.get('[data-cy="view_cart_cy"]').click({ force: true })
    }
    //this function is used to click on browse Title
    static clickonBrowseTitle() {
        cy.get('[data-cy=brows_titles-cy]').click({ force: true })
    }

    static clickContinueOnWelcomePage() {
        cy.get('[data-cy=previous_page]').click({ force: true })
        //cy.scrollTo("100%", "100%")
    }
}