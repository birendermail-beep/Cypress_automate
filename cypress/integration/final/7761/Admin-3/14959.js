/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10612
@story_id: 14959
@story_name: Load_multi_seat_voucher_details
@path: final/7761
@test_case_name: Load_multi_seat_voucher_details.js
@description:
@test_steps:

^test case Voucher area
- Visit the voucher page
- Click on search button
- Click on action gear
- Click on multi seat option
- Multi seat detail modal box open

@result:
- Multi seat detail modal box open
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Multi seat voucher details', function() {
    it('Multi seat voucher details', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/admin_voucher.php')
        })

        cy.get('#search_text').type('LNWK-AAZU-LAM7-RWYM')
        cy.get('#submit').click()
        cy.get('#grid_view > tr > :nth-child(10) > .dropdown > .btn').click({force: true})
        cy.get(':nth-child(10) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click({force: true})
    })
});
