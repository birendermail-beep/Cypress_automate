/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: 14861
@Test_Case_Name: smart_search.js
@description: Go to the inside sales and open the click smart search
@test_steps: 
^Test case of templates in focus area
- Visit the website
- Open the admin area
- visit on this link "/admin/inside_sales/smart_search.php"
- Successfully open the smart search page.
- Go to the text filed and enter the name of student then click on the "search" icon button.

@test_data: N/A
@result:
    - Successfully show the details
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {

    it('Smart Search in inside sales', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin');
            cy.get('[data-cy=other_tab]').click({ force: true });
            cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({ force: true });
            cy.visit(data.url + '/admin/inside_sales/smart_search.php');
            cy.get('[data-cy=text_smart_srch]').type("ajeet.chauhan@ucertify.com", { force: true });
            cy.get('[data-cy=srch_btn_smart]').click({ force: true });
        })
    })
})