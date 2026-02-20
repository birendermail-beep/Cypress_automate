/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id: 
@story_id: 15199
@story_name: paysheet_old
@path: final/Dump_Test_Automation
@Test_Case_Name: paysheet_old.js
@description: Go to focus area and open the old paysheet
@test_steps: 
^Test case of paysheet
-visit the focus area.
-Click on the "More" tab option.
-https://www.jigyaasa.info/focus/paysheet.php?old=1
-Type the email id and Passphrase code.
-Click on the "Authenticate" button.
-Successfully open the paysheet details.
@test_data: 
-Email = testbot@ucertify.com
-Parse Phase = allroutesarebusy
@result: Successfully open the old paysheet
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('Show the old paysheet', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus/paysheet.php?old=1');
            cy.get('#reviewer_pass_phase').type('allroutesarebusy',{force:true});
            cy.get('#authenticate_me').click({force:true});
        })
    })
})