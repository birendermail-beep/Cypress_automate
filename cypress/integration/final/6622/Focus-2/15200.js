/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id: 15200
@story_name: paysheet
@path: final/Dump_Test_Automation
@Test_Case_Name: paysheet.js
@description: Go to the focus and open the paysheet
@test_steps: 
^Test case of paysheet
-visit the focus area.
- Click on the More tab.
- Select the Paysheet option.
- Show the parse pase dialogbox.
- Type the email id and type the parse phase key.
- After that click on the "Authenticate" button.
@test_data: 
-Email = testbot@ucertify.com
-Parse Phase = allroutesarebusy
@result: Successfully open the paysheet
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('Paysheet Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus');
            cy.get('[data-cy=more_tab] > .nav-link').click({force:true});
            cy.get('.show > :nth-child(1) > .dropdown-item').click({force:true});
            cy.get('#get_pay_details').click({force:true});
            cy.visit(data.url+'/focus/paysheet.php?month=08&year=2020');
            cy.get('#reviewer_pass_phase').type('allroutesarebusy',{force:true});
            cy.get('#authenticate_me').click({force:true});
        }) 
    })
})