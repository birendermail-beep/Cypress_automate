/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15328
@story_name: canteen process payment
@path: final/Misc
@test_case_name: canteen process payment
@description: N/A   
@test_steps: 
^canteen_process_payment
-visit the website
-login to website
-visit the utils area
-click on monthly payment
-select user
-click on search

@test_data: n/a
@result: canteen process payment
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("process payment in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/canteen_application/admin.php");
        })
        cy.get('[href="./admin.php?func=monthly_payment"]').click();
        cy.get("#member_guid").select('Automation Testing', { force: true });
        cy.get('#search_member_pending_payment').click();
    });
});