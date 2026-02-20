/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10701
@story_id: 14929
@story_name: Inside_sales_leaderboard_page_enrolled_tickler
@path: final\7761\Inside_sales_leaderboard_page_enrolled_tickler.js
@test_case_name: Inside_sales_leaderboard_page_enrolled_tickler.js
@description:
@test_steps:

^test case Inside sales area
- Visit the Inside sales page
- Click on KPI report dropdown tab
- Click on Account Manager Leaderboard option
- Inside sales report will be shown.
- Click on Summary tab
- Click on Enrolled tickler list numbers
- It will show the page contained all the record

@result:
- Enrolled tickler list page will be shown
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Enrolled tickler list page data', function() {
    it('Enrolled tickler list page data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            AdminArea.salesLeaderboard();
            cy.get('[data-cy=summary_tab]').click()
            cy.get(':nth-child(2) > :nth-child(7) > [data-cy=enroll_instructor]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?list_view=1&search_text=04Ape,04nOf&custom_search=')
        })
    })
});