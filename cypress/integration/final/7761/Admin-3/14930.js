/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10701
@story_id: 14930
@story_name: Inside_sales_leaderboard_page_instructor_with_section
@path: final/7761
@test_case_name: Inside_sales_leaderboard_page_instructor_with_section.js
@description:
@test_steps:

^test case Inside sales area
- Visit the Inside sales page
- Click on KPI report dropdown tab
- Click on Account Manager Leaderboard option
- Inside sales report will be shown.
- Click on Enrollment tab
- Click on Instructor with Section list numbers
- It will show the page contained all the record

@result:
- Instructor with Section list page will be shown
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Instructor with Section list page data', function() {
    it('Instructor with Section list page data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            AdminArea.salesLeaderboard();
            cy.get('[data-cy=enroll_tab]').click()
            cy.get(':nth-child(2) > [data-cy=ins_with_td] > .text-dark').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=04Ape,04nOf&custom_search=')
        })
    })
});