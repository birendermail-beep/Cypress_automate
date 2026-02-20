/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@Story_Id: 15088
@story_name: coding_lab_item
@path: final/Dump_Test_Automation
@Test_Case_Name: coding_lab_item.js
@description: Open the technology and go to the coding lab
@test_steps: 
^Test case of is eval on search
- visit on the admin area
- Go to the nav bar and mouseover the "Technology" option in nav bar.
- After that click on the "Lab" option.
- Scroll down the page and go to the under Lab.
- Click on the "CodingLab" option.
- Successfully open the coding lab page.

@test_data: N/A
@result:Successfully open the coding lab page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Lab Page', function() {

    it('coding lab page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url);
            cy.visit(data.url + '/products/labs.html');
        })
        cy.get('.bg-lighter-grey > .container > .row > :nth-child(2) > .py-2 > a > img').click({ force: true });

    })
})