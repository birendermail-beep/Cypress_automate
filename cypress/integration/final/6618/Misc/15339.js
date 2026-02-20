/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15339
@story_name: monthly payment process
@path: final/Misc
@test_case_name: monthly payment process
@description: N/A   
@test_steps: 
^monthly_payment_process
-visit the website
-login to website
-visit the utils area
-click on monthly payment

@test_data: n/a
@result: monthly payment process 
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("monthly_payment in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/canteen_application/admin.php");
        })
        cy.get('[href="./admin.php?func=monthly_payment"]').click();
    });
});