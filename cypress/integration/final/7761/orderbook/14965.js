import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url +"/admin/admin_user_course.php");
        })
    });
    it("filter data based on start date", function() {
        cy.get("#start_date").click();
            cy.contains("Submit").click({force:true});
    });
    it("filter data based on end date", function() {
        cy.get("#end_date").click()
        cy.get('.table-condensed > tbody > :nth-child(5) > :nth-child(7)').click()
            cy.contains("Submit").click({force:true});
    });
});