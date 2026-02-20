/*
@author: Sundaram Tripathi
@master_project_id: 6607
@phase_id: 
@story_Id: 15444
@story_name: 3d avatar simulation item
@path: final/Dump_Test_Automation
@test_Case_Name: 3d_avatar_simulation_item.js
@description: Go to utils and open the 3d diognostic
@test_steps: 

^Test case of utils area
- Click on this link "https://www.jigyaasa.info"
- Successfully open the home page
- Go to the nav bar and mouseover the "Technology" option in nav bar
- After that click on the "Lab" option.
- Scroll down the page and go to the under Lab
- Click on the "3D Avatar Based Simulation"
- Successfully open the 3D Avatar Based Simulation page

@test_data: n/a
@result: Successfully open the 3d avatar simulation item page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Lab Page', function() {
    it('3d avatar simulation Lab', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/products/labs.html');
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(4) > .py-2 > a > img').click({ force: true });

    })
})