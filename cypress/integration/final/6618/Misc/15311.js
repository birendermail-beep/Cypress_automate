/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: 
@story_id: 15311
@story_name: user_wise_history
@path: final/Misc
@test_case_name: user_wise_history.js
@description:  
@Test Steps: 
^user wise history in utils area
-login in website
-visit jigyaasa.info/utils/canteen_application/admin.php
-Click on user history button

@test_data: n/a
@result: 
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
    });
});