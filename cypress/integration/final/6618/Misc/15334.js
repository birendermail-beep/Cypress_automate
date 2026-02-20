/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15334
@story_name: download course info
@path: final/Misc
@test_case_name: download course info
@description: N/A   
@Test Steps: 
^download_course_info
-visit the website
-login to website
-visit the utils area
-click on Download Course Info
-select course
-select extend
-click on button

@test_data: n/a
@result: download course info will display
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("course information area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
        })
        cy.get(".chapter-link").contains("Download Course Info").click();
        cy.get("#course_code").select("77-725-77-726 : Microsoft Office Word 2016 Expert (77-725 & 77-726)", { force: true });
        cy.get("#report_type").select("Extended", { force: true });
        cy.get(':nth-child(3) > .btn').click();
    });
});