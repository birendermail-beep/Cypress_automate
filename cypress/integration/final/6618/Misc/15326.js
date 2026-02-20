/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15326
@story_name: canteen order history
@path: final/Misc
@test_case_name: canteen order history
@description: N/A   
@test_steps: 
^canteen_order_history
-visit the website
-login to website
-visit the utils admin area
-click on user history
-type the data 
-click on search

@test_data: n/a
@result: canteen order history
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("user wise history in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/canteen_application/admin.php");
        })
        cy.get('[href="./admin.php?func=user_history"]').click();
        cy.get('li.active').click();
        cy.get("#member_guids").select('Automation Testing', { force: true });
        cy.get('#for_date_sdt').click({ force: true });
        cy.get('tbody > :nth-child(4) > :nth-child(1)').click({ force: true });
        cy.get('#for_date_edt').click({ force: true });
        cy.get('tbody > :nth-child(4) > :nth-child(2)').click({ force: true });
        cy.get('#search_order_history').click({ force: true });
    });
});