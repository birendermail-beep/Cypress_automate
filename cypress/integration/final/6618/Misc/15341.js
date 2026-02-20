/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15341
@story_name: testimonial list
@path: final/Misc
@test_case_name: testimonial list
@description: N/A   
@test_steps: 
^pe-testimonial-list
-visit the website
-login to website
-visit the utils area
-click on Testimonial

@test_data: n/a
@result: testimonial list will display
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("Testimonial in utils area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
            cy.get(".chapter-link").contains("Testimonial").click();
            cy.visit(data.url + "/utils/testimonial.php?id=50");
        })
    });
});