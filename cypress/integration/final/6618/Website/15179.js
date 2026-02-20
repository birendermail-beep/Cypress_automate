/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@story_id: 15179
@story_name: live_lab_item
@path: final/Dump_Test_Automation
@Test_Case_Name: live_lab_item.js
@description: Go to about page and open the live lab page
@test_steps: 
^Test case of live lab page
-visit the hope page
- Go to navigation bar.
- Mouseover on the "Technology" option.
- Click on the "Lab" option.
- Scroll down the page and go to the Lab.
- Click on the "Live Lab" option
@test_data: n/a
@result: Successfully open the LiveLabs page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Lab Page', function() {

    it('Live Lab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/products/labs.html');
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(1) > .py-2 > a > img').click({ force: true })

    })
})