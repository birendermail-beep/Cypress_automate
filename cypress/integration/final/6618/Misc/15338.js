/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15338
@story_name: manage catalogue
@path: final/Misc
@test_case_name: manage catalogue
@description: N/A   
@test_steps: 
^manage_catalogue
-visit the website
-login to website
-visit the utils area url + "/utils/canteen_application/admin.php")
-click on show

@test_data: n/a
@result: manage_catalogue display
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("manage items in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/canteen_application/admin.php");
        })
        cy.get('[href="./admin.php?func=show_item"]').click();
    });
});