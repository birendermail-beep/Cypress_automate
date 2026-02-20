/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 
@story_name: object_lab_item
@path: final/Dump_Test_Automation
@Test_Case_Name: object_lab_item.js
@description: Go to about page and open the live lab page
@test_steps: 
^Test case of live lab page
-visit the home area.
-Go to the nav bar and mouseover the "Technology" option in nav bar.
-After that click on the "Lab" option.
-Scroll down the page and go to the under Lab.
-Click on the "ObjectLab" option.
-Successfully open the objectLab page.

@test_data: n/a
@result: Successfully open the objectLab page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Lab Page', function() {

    it('Open object lab page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/products/labs.html');
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(5) > .py-2 > a > img').click({ force: true });
    })
})