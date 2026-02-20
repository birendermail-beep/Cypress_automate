/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 11063
@story_name: Vendors Page
@path: final/Website
@test_case_name: Vendors Page
@description:
@test_steps: 
^test case of home page Footer 
- Visit to website.
- Login to ucertify.com.
- Click the home Page icon.
- scroll down and click on vendors

^Load vendor page
-Scroll down on same page to footer bar
-Click the Vendor option

^Load adobe vendor 
-On the vendor page, click the Adobe tile

^Load vendor course
-Click on Adobe indesign-2017 course

^Load vendor certification
-Go back by using this URL
-Click the certidication tab
-You will scroll down to certification section
-Click the Adobe Certified Expert on InDesign

@test_data: n/a
@result: home page footer open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('homepage footer testing', function () {
    it('Opening the vendors', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        Navbar.clickContinueOnWelcomePage();
        cy.get("ul.list-unstyled > li").contains("Vendors").click({ force: true });
    })
})