/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11221
@story_name: VM Admin Dashboard
@path: final/LiveLab
@test_case_name: VM Admin Dashboard
@description: n/a
@test_steps:

^vma-tabs
-Go to ucertify.com
-Login into website
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/


@test_data: n/a
@result: activity report list will open
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-tabs', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
        })
    })
})