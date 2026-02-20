/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id:
@story_name: Orderbook Design Area
@path: final/7761/orderbook
@test_case_name: Orderbook Design Area
@description:
@test_steps: 

^Design area
-login to page
-open dashboard of educator area
-click on design tab and click on design btn
-click on settings icon of pre assessment
-click on lti only
-click on ok
-click on save btn
-click on student view
-check "To enable this, please login from your LMS by clicking on the specific link for this test." visible
-click on manage as instructor
-repeat after 2nd step

@test_data: n/a
@result: show the dashboard of student area and check lms restricted 
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage } from '../../../../page-objects/pages/index'
describe("orderbook page testing", function() {
    it("Lti area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.showTechManage()
            InstructorPage.visitCourseSupport()
            OrderbookPage.ltiCheck(data.url)
            //cy.contains(' To enable this, please login from your LMS by clicking on the specific link for this test.').should('be.visible')
            cy.get('[intro-id="manage_as_instructor"]').click({ force: true })
            OrderbookPage.ltiCheck(data.url)
        })
    });
})