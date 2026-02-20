/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: 
@story_id: 15207
@story_name: pe-menubar-cart_menu
@path: final/Dump_Test_Automation
@Test_Case_Name: pe-menubar-cart_menu.js
@description: 
@test_steps: 
^Show the icon shopping cart area
-Click on this link: https://www.jigyaasa.info/
- successfully show the icon cart area.

@test_data: N/A
@result: cart icon should be show
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Cart area', function() {

    it('Displaying the quantity of item', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        cy.get('.icomoon-cart-new-1').trigger('focus', { force: true })
        cy.contains('Your cart is empty').click({ force: true })
    })
})