/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: 
@Story_Id: 15066
@story_name: admin orderbook verify
@path: final/7761/orderbook
@Test_Case_Name: admin_orderbook_verify
@description: Open orderbook and edit after that open the orderbook edit
@test_steps: 
^Test case of admin orderbook verify
- Click on the "Manage Orderbook".
- Choose any one user and click on the setting icon button.
- Select the "Edit" option.
- Successfully open the edit orderbook page.
- Scroll tha page and click on the "Submit Orderbook" button.

@test_data: N/A
@result: Successfully open the addedd and updated orderbook page
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin area', function() {
    it('admin orderbook verify', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            AdminArea.visitAdminArea(data.url);
            cy.get(':nth-child(2) > [data-cy=start_button] > .btn').click({ force: true });
            cy.get('[data-cy=order_btn]').eq(0).click({ force: true });
            cy.get('[data-cy=edit_link]').eq(1).click({ force: true });
            cy.visit(data.url + '/admin/admin_orderbook_new.php?action=edit&transaction_guid=01HAQ');
            cy.get('[data-cy=submit_btn]').click({ force: true });
        })
    })
})