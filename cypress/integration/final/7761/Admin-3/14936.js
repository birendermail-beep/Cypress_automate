/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10701
@story_id: 14936
@story_name: Inside_sales_leaderboard_page_section_list
@path: final/7761
@test_case_name: Inside_sales_leaderboard_page_section_list.js
@description:
@test_steps:

^test case Inside sales area
- Visit the Inside sales page
- Click on KPI report dropdown tab
- Click on Account Manager Leaderboard option
- Inside sales report will be shown.
- Click on Enrollment tab
- Click on Section list numbers
- It will show the page contained all the record

@result:
- Section list page will be shown
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Section list page data', function() {
    it('Section list page data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            AdminArea.salesLeaderboard();
            cy.get('[data-cy=enroll_tab]').click()
            cy.get(':nth-child(2) > [data-cy=section_create_td] > .text-dark').click()
            cy.visit(data.url + '/admin/inside_sales/account_managers_leaderboard.php?action=get_details&primary_contact=04hbA%20%20%20%20%20%20%20%20%20%20%20%20&start_date=01-Sep-20&end_date=30-Sep-20&search_type=section&sub_type=section_b2d')
        })
    })
});