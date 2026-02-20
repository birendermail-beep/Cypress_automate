import BasePage from "../BasePage";
import StudentPage from '../pages/StudentPage'
export default class OrderbookPage extends BasePage {
    static gradeSync() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[9])
            cy.get('#pseudonym_session_unique_id').clear({ force: true }).type(data.author_email[3], { force: true })
        })
        cy.get('#pseudonym_session_password').clear({ force: true }).type('ucertify', { force: true })
        cy.get('.ic-Form-control > .Button').contains('Log In').click({ force: true })
        cy.get(':nth-child(2) > .fOyUs_fKyb').click({ force: true })
        cy.wait(4000)
        cy.get('.bDzpk_busO > :nth-child(2) > .fOyUs_bGBk').click({ force: true })
    }
    static ltiCheck(url) {
        cy.get('[data-cy=educator_design]').click({ force: true })
        cy.get('#settting_t_-4').click({ force: true })
        cy.get('.col-6.float-left > .btn').click({ force: true })
        cy.get('#modal_to_settings').click({ force: true })
        cy.get('.btn-group > #save_assessment').click({ force: true })
        cy.get('[data-cy="errormsg"]').contains('Saved Successfully.').should('exist');
        cy.wait(10000);
        StudentPage.visitCourse(url)
    }
    static manageOrderBook() {
        cy.get(':nth-child(2) > [data-cy=start_button] > .btn').click({ force: true });
        cy.get('[data-cy=report_dropdown]').click({ force: true });
        cy.get(':nth-child(4) > [data-cy=main_drop]').click({ force: true });
        cy.get('[data-cy=order_btn]').eq(0).click({ force: true });
    }
}